var BMapGLLib = (window.BMapGLLib = BMapGLLib || {})
;(function() {
  var T
  var baidu = (T = baidu || { version: '1.5.0' })
  baidu.guid = '$BAIDU$'
  ;(function() {
    window[baidu.guid] = window[baidu.guid] || {}
    baidu.dom = baidu.dom || {}
    baidu.dom.g = function(id) {
      if ('string' == typeof id || id instanceof String) {
        return document.getElementById(id)
      } else {
        if (id && id.nodeName && (id.nodeType == 1 || id.nodeType == 9)) {
          return id
        }
      }
      return null
    }
    baidu.g = baidu.G = baidu.dom.g
    baidu.lang = baidu.lang || {}
    baidu.lang.isString = function(source) {
      return '[object String]' == Object.prototype.toString.call(source)
    }
    baidu.isString = baidu.lang.isString
    baidu.dom._g = function(id) {
      if (baidu.lang.isString(id)) {
        return document.getElementById(id)
      }
      return id
    }
    baidu._g = baidu.dom._g
    baidu.dom.getDocument = function(element) {
      element = baidu.dom.g(element)
      return element.nodeType == 9 ? element : element.ownerDocument || element.document
    }
    baidu.browser = baidu.browser || {}
    baidu.browser.ie = baidu.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent)
      ? document.documentMode || +RegExp['\x241']
      : undefined
    baidu.dom.getComputedStyle = function(element, key) {
      element = baidu.dom._g(element)
      var doc = baidu.dom.getDocument(element),
        styles
      if (doc.defaultView && doc.defaultView.getComputedStyle) {
        styles = doc.defaultView.getComputedStyle(element, null)
        if (styles) {
          return styles[key] || styles.getPropertyValue(key)
        }
      }
      return ''
    }
    baidu.dom._styleFixer = baidu.dom._styleFixer || {}
    baidu.dom._styleFilter = baidu.dom._styleFilter || []
    baidu.dom._styleFilter.filter = function(key, value, method) {
      var filters = baidu.dom._styleFilter
      var filter
      for (var i = 0; (filter = filters[i]); i++) {
        if ((filter = filter[method])) {
          value = filter(key, value)
        }
      }
      return value
    }
    baidu.string = baidu.string || {}
    baidu.string.toCamelCase = function(source) {
      if (source.indexOf('-') < 0 && source.indexOf('_') < 0) {
        return source
      }
      return source.replace(/[-_][^-_]/g, function(match) {
        return match.charAt(1).toUpperCase()
      })
    }
    baidu.dom.getStyle = function(element, key) {
      var dom = baidu.dom
      element = dom.g(element)
      key = baidu.string.toCamelCase(key)
      var value =
        element.style[key] ||
        (element.currentStyle ? element.currentStyle[key] : '') ||
        dom.getComputedStyle(element, key)
      if (!value) {
        var fixer = dom._styleFixer[key]
        if (fixer) {
          value = fixer.get ? fixer.get(element) : baidu.dom.getStyle(element, fixer)
        }
      }
      if ((fixer = dom._styleFilter)) {
        value = fixer.filter(key, value, 'get')
      }
      return value
    }
    baidu.getStyle = baidu.dom.getStyle
    baidu.dom._NAME_ATTRS = (function() {
      var result = {
        cellpadding: 'cellPadding',
        cellspacing: 'cellSpacing',
        colspan: 'colSpan',
        rowspan: 'rowSpan',
        valign: 'vAlign',
        usemap: 'useMap',
        frameborder: 'frameBorder'
      }
      if (baidu.browser.ie < 8) {
        result['for'] = 'htmlFor'
        result['class'] = 'className'
      } else {
        result['htmlFor'] = 'for'
        result['className'] = 'class'
      }
      return result
    })()
    baidu.dom.setAttr = function(element, key, value) {
      element = baidu.dom.g(element)
      if ('style' == key) {
        element.style.cssText = value
      } else {
        key = baidu.dom._NAME_ATTRS[key] || key
        element.setAttribute(key, value)
      }
      return element
    }
    baidu.setAttr = baidu.dom.setAttr
    baidu.dom.setAttrs = function(element, attributes) {
      element = baidu.dom.g(element)
      for (var key in attributes) {
        baidu.dom.setAttr(element, key, attributes[key])
      }
      return element
    }
    baidu.setAttrs = baidu.dom.setAttrs
    baidu.dom.create = function(tagName, opt_attributes) {
      var el = document.createElement(tagName),
        attributes = opt_attributes || {}
      return baidu.dom.setAttrs(el, attributes)
    }
    baidu.object = baidu.object || {}
    baidu.extend = baidu.object.extend = function(target, source) {
      for (var p in source) {
        if (source.hasOwnProperty(p)) {
          target[p] = source[p]
        }
      }
      return target
    }
  })()
  WORLD_SIZE_MC_HALF = 20037726.372307256
  WORLD_SIZE_MC = WORLD_SIZE_MC_HALF * 2
  var LuShu = (BMapGLLib.LuShu = function(map, path, opts) {
    if (!path || path.length < 1) {
      return
    }
    this._map = map
    if (opts['geodesic']) {
      this._path = getGeodesicPath(path)
    } else {
      this._path = path
    }
    this.i = 0
    this._setTimeoutQuene = []
    this._opts = { icon: null, speed: 400, defaultContent: '' }
    if (!opts['landmarkPois']) {
      opts['landmarkPois'] = []
    }
    this._setOptions(opts)
    this._rotation = 0
    if (!(this._opts.icon instanceof BMapGL.Icon)) {
      this._opts.icon = defaultIcon
    }
  })
  LuShu.prototype._setOptions = function(opts) {
    if (!opts) {
      return
    }
    for (var p in opts) {
      if (opts.hasOwnProperty(p)) {
        this._opts[p] = opts[p]
      }
    }
  }
  LuShu.prototype.start = function() {
    var me = this,
      len = me._path.length
    if (me.i && me.i < len - 1) {
      if (!me._fromPause) {
        return
      } else {
        if (!me._fromStop) {
          me._moveNext(++me.i)
        }
      }
    } else {
      me._addMarker()
      me._timeoutFlag = setTimeout(function() {
        me._addInfoWin()
        if (me._opts.defaultContent == '') {
          me.hideInfoWindow()
        }
        me._moveNext(me.i)
      }, 400)
    }
    this._fromPause = false
    this._fromStop = false
  }
  LuShu.prototype.stop = function() {
    this.i = 0
    this._fromStop = true
    clearInterval(this._intervalFlag)
    this._clearTimeout()
    for (var i = 0, t = this._opts.landmarkPois, len = t.length; i < len; i++) {
      t[i].bShow = false
    }
  }
  LuShu.prototype.pause = function() {
    clearInterval(this._intervalFlag)
    this._fromPause = true
    this._clearTimeout()
  }
  LuShu.prototype.hideInfoWindow = function() {
    this._overlay._div.style.visibility = 'hidden'
  }
  LuShu.prototype.showInfoWindow = function() {
    this._overlay._div.style.visibility = 'visible'
  }
  baidu.object.extend(LuShu.prototype, {
    _addMarker: function(callback) {
      if (this._marker) {
        this.stop()
        this._map.removeOverlay(this._marker)
        clearTimeout(this._timeoutFlag)
      }
      this._overlay && this._map.removeOverlay(this._overlay)
      var marker = new BMapGL.Marker(this._path[0])
      this._opts.icon && marker.setIcon(this._opts.icon)
      this._map.addOverlay(marker)
      marker.setAnimation(BMAP_ANIMATION_DROP)
      this._marker = marker
    },
    _addInfoWin: function() {
      var me = this
      var overlay = new CustomOverlay(me._marker.getPosition(), me._opts.defaultContent)
      overlay.setRelatedClass(this)
      this._overlay = overlay
      this._map.addOverlay(overlay)
    },
    _getMercator: function(poi) {
      return this._map
        .getMapType()
        .getProjection()
        .lngLatToPoint(poi)
    },
    _getDistance: function(pxA, pxB) {
      return Math.sqrt(Math.pow(pxA.x - pxB.x, 2) + Math.pow(pxA.y - pxB.y, 2))
    },
    _move: function(initPos, targetPos, effect) {
      var me = this,
        currentCount = 0,
        timer = 10,
        step = this._opts.speed / (1000 / timer),
        init_pos = BMapGL.Projection.convertLL2MC(initPos),
        target_pos = BMapGL.Projection.convertLL2MC(targetPos)
      init_pos = new BMapGL.Pixel(init_pos.lng, init_pos.lat)
      target_pos = new BMapGL.Pixel(target_pos.lng, target_pos.lat)
      var mcDis = me._getDistance(init_pos, target_pos)
      var direction = null
      if (mcDis > 30037726) {
        if (target_pos.x < init_pos.x) {
          target_pos.x += WORLD_SIZE_MC
          direction = 'right'
        } else {
          target_pos.x -= WORLD_SIZE_MC
          direction = 'left'
        }
      }
      var count = Math.round(me._getDistance(init_pos, target_pos) / step)
      if (count < 1) {
        me._moveNext(++me.i)
        return
      }
      me._intervalFlag = setInterval(function() {
        if (currentCount >= count) {
          clearInterval(me._intervalFlag)
          if (me.i > me._path.length) {
            return
          }
          me._moveNext(++me.i)
        } else {
          currentCount++
          var x = effect(init_pos.x, target_pos.x, currentCount, count),
            y = effect(init_pos.y, target_pos.y, currentCount, count),
            pos = BMapGL.Projection.convertMC2LL(new BMapGL.Point(x, y))
          if (pos.lng > 180) {
            pos.lng = pos.lng - 360
          }
          if (pos.lng < -180) {
            pos.lng = pos.lng + 360
          }
          if (currentCount == 1) {
            var proPos = null
            if (me.i - 1 >= 0) {
              proPos = me._path[me.i - 1]
            }
            if (me._opts.enableRotation == true) {
              me.setRotation(proPos, initPos, targetPos, direction)
            }
            if (me._opts.autoView) {
              if (!me._map.getBounds().containsPoint(pos)) {
                me._map.setCenter(pos)
              }
            }
          }
          if (me._opts.autoCenter) {
            me._map.setCenter(pos, { noAnimation: true })
          }
          me._marker.setPosition(pos)
          me._setInfoWin(pos)
        }
      }, timer)
    },
    setRotation: function(prePos, curPos, targetPos, direction) {
      var me = this
      var deg = 0
      curPos = me._map.pointToPixel(curPos)
      targetPos = me._map.pointToPixel(targetPos)
      if (targetPos.x != curPos.x) {
        var tan = (targetPos.y - curPos.y) / (targetPos.x - curPos.x),
          atan = Math.atan(tan)
        deg = (atan * 360) / (2 * Math.PI)
        if ((!direction && targetPos.x < curPos.x) || direction === 'left') {
          deg = -deg + 90 + 90
        } else {
          deg = -deg
        }
        me._marker.setRotation(-deg)
      } else {
        var disy = targetPos.y - curPos.y
        var bias = 0
        if (disy > 0) {
          bias = -1
        } else {
          bias = 1
        }
        me._marker.setRotation(-bias * 90)
      }
      return
    },
    linePixellength: function(from, to) {
      return Math.sqrt(
        Math.abs(from.x - to.x) * Math.abs(from.x - to.x) +
          Math.abs(from.y - to.y) * Math.abs(from.y - to.y)
      )
    },
    pointToPoint: function(from, to) {
      return (
        Math.abs(from.x - to.x) * Math.abs(from.x - to.x) +
        Math.abs(from.y - to.y) * Math.abs(from.y - to.y)
      )
    },
    _moveNext: function(index) {
      var me = this
      if (index < this._path.length - 1) {
        me._move(me._path[index], me._path[index + 1], me._tween.linear)
      }
    },
    _setInfoWin: function(pos) {
      var me = this
      if (!me._overlay) {
        return
      }
      me._overlay.setPosition(pos, me._marker.getIcon().size)
      var index = me._troughPointIndex(pos)
      if (index != -1) {
        clearInterval(me._intervalFlag)
        me._overlay.setHtml(me._opts.landmarkPois[index].html)
        me._overlay.setPosition(pos, me._marker.getIcon().size)
        me._pauseForView(index)
      } else {
        me._overlay.setHtml(me._opts.defaultContent)
      }
    },
    _pauseForView: function(index) {
      var me = this
      var t = setTimeout(function() {
        me._moveNext(++me.i)
      }, me._opts.landmarkPois[index].pauseTime * 1000)
      me._setTimeoutQuene.push(t)
    },
    _clearTimeout: function() {
      for (var i in this._setTimeoutQuene) {
        clearTimeout(this._setTimeoutQuene[i])
      }
      this._setTimeoutQuene.length = 0
    },
    _tween: {
      linear: function(initPos, targetPos, currentCount, count) {
        var b = initPos
        var c = targetPos - initPos
        var t = currentCount
        var d = count
        return (c * t) / d + b
      }
    },
    _troughPointIndex: function(markerPoi) {
      var t = this._opts.landmarkPois
      var distance
      for (var i = 0, len = t.length; i < len; i++) {
        if (!t[i].bShow) {
          distance = this._map.getDistance(new BMapGL.Point(t[i].lng, t[i].lat), markerPoi)
          if (distance < 10) {
            t[i].bShow = true
            return i
          }
        }
      }
      return -1
    }
  })
  function getGeodesicPath(points) {
    var gPath = []
    for (var i = 0; i < points.length - 1; i++) {
      var great = calcGreatCirclePath(points[i], points[i + 1])
      gPath = gPath.concat(great)
    }
    gPath = gPath.concat(points[points.length - 1])
    return gPath
  }
  function calcGreatCirclePath(latLng1, latLng2) {
    if (latLng1.equals(latLng2)) {
      return [latLng1]
    }
    var distance = BMapGL.Projection.getDistance(
      toRadian(latLng1.lng),
      toRadian(latLng1.lat),
      toRadian(latLng2.lng),
      toRadian(latLng2.lat)
    )
    var distance = BMapGL.Projection.getDistanceByLL(latLng1, latLng2)
    if (distance < 250000) {
      return [latLng1]
    }
    var result = []
    var count = Math.round(distance / 150000)
    var angularDistance = calcAngularDistance(latLng1, latLng2)
    result.push(latLng1)
    for (var i = 0; i < count; i++) {
      var eachLatLng = calcMiddlePoint(latLng1, latLng2, i / count, angularDistance)
      result.push(eachLatLng)
    }
    result.push(latLng2)
    return result
  }
  function calcMiddlePoint(latLng1, latLng2, f, delta) {
    var lat1 = latLng1.lat
    var lat2 = latLng2.lat
    var lon1 = latLng1.lng
    var lon2 = latLng2.lng
    var phi1 = toRadian(lat1)
    var phi2 = toRadian(lat2)
    var lambda1 = toRadian(lon1)
    var lambda2 = toRadian(lon2)
    var a = Math.sin((1 - f) * delta) / Math.sin(delta)
    var b = Math.sin(f * delta) / Math.sin(delta)
    var x = a * Math.cos(phi1) * Math.cos(lambda1) + b * Math.cos(phi2) * Math.cos(lambda2)
    var y = a * Math.cos(phi1) * Math.sin(lambda1) + b * Math.cos(phi2) * Math.sin(lambda2)
    var z = a * Math.sin(phi1) + b * Math.sin(phi2)
    var phi = Math.atan2(z, Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)))
    var lambda = Math.atan2(y, x)
    return new BMapGL.Point(toAngle(lambda), toAngle(phi))
  }
  function toRadian(angle) {
    return (angle * Math.PI) / 180
  }
  function toAngle(radian) {
    return (radian / Math.PI) * 180
  }
  function calcAngularDistance(latLng1, latLng2) {
    var lat1 = toRadian(latLng1.lat)
    var lat2 = toRadian(latLng2.lat)
    var lng1 = toRadian(latLng1.lng)
    var lng2 = toRadian(latLng2.lng)
    return Math.acos(
      Math.sin(lat1) * Math.sin(lat2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.cos(Math.abs(lng2 - lng1))
    )
  }
  function CustomOverlay(point, html) {
    this._point = point
    this._html = html
  }
  CustomOverlay.prototype = new BMapGL.Overlay()
  CustomOverlay.prototype.initialize = function(map) {
    var div = (this._div = baidu.dom.create('div', {
      style:
        'border:solid 1px #ccc;width:auto;min-width:50px;text-align:center;position:absolute;background:#fff;color:#000;font-size:12px;border-radius: 10px;padding:5px;white-space: nowrap;'
    }))
    div.innerHTML = this._html
    map.getPanes().floatPane.appendChild(div)
    this._map = map
  }
  CustomOverlay.prototype.draw = function() {
    this.setPosition(this.lushuMain._marker.getPosition(), this.lushuMain._marker.getIcon().size)
  }
  baidu.object.extend(CustomOverlay.prototype, {
    setPosition: function(poi, markerSize) {
      var px = this._map.pointToOverlayPixel(poi)
      var styleW = baidu.dom.getStyle(this._div, 'width')
      var styleH = baidu.dom.getStyle(this._div, 'height')
      var overlayW = parseInt(this._div.clientWidth || styleW, 10)
      var overlayH = parseInt(this._div.clientHeight || styleH, 10)
      this._div.style.left = px.x - overlayW / 2 + 'px'
      this._div.style.bottom = -(px.y - markerSize.height) + 'px'
    },
    setHtml: function(html) {
      this._div.innerHTML = html
    },
    setRelatedClass: function(lushuMain) {
      this.lushuMain = lushuMain
    }
  })
})()
