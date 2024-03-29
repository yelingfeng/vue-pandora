var BMapLib = (window.BMapLib = BMapLib || {})
;(function() {
  var e = 0
  var j = 1
  var c = (BMapLib.RectangleZoom = function(n, m) {
    if (!n) {
      return
    }
    this._map = n
    this._opts = {
      zoomType: e,
      followText: '',
      strokeWeight: 2,
      strokeColor: '#111',
      style: 'solid',
      fillColor: '#ccc',
      opacity: 0.4,
      cursor: 'crosshair',
      autoClose: false
    }
    this._setOptions(m)
    this._opts.strokeWeight = this._opts.strokeWeight <= 0 ? 1 : this._opts.strokeWeight
    this._opts.opacity =
      this._opts.opacity < 0 ? 0 : this._opts.opacity > 1 ? 1 : this._opts.opacity
    if (this._opts.zoomType < e || this._opts.zoomType > j) {
      this._opts.zoomType = e
    }
    this._isOpen = false
    this._fDiv = null
    this._followTitle = null
  })
  c.prototype._setOptions = function(m) {
    if (!m) {
      return
    }
    for (var n in m) {
      if (typeof m[n] != 'undefined') {
        this._opts[n] = m[n]
      }
    }
  }
  c.prototype.setStrokeColor = function(m) {
    if (typeof m == 'string') {
      this._opts.strokeColor = m
      this._updateStyle()
    }
  }
  c.prototype.setLineStroke = function(m) {
    if (typeof m == 'number' && Math.round(m) > 0) {
      this._opts.strokeWeight = Math.round(m)
      this._updateStyle()
    }
  }
  c.prototype.setLineStyle = function(m) {
    if (m == 'solid' || m == 'dashed') {
      this._opts.style = m
      this._updateStyle()
    }
  }
  c.prototype.setOpacity = function(m) {
    if (typeof m == 'number' && m >= 0 && m <= 1) {
      this._opts.opacity = m
      this._updateStyle()
    }
  }
  c.prototype.setFillColor = function(m) {
    this._opts.fillColor = m
    this._updateStyle()
  }
  c.prototype.setCursor = function(m) {
    this._opts.cursor = m
    f.setCursor(this._opts.cursor)
  }
  c.prototype._updateStyle = function() {
    if (this._fDiv) {
      this._fDiv.style.border = [
        this._opts.strokeWeight,
        'px ',
        this._opts.style,
        ' ',
        this._opts.color
      ].join('')
      var m = this._fDiv.style,
        n = this._opts.opacity
      m.opacity = n
      m.MozOpacity = n
      m.KhtmlOpacity = n
      m.filter = 'alpha(opacity=' + n * 100 + ')'
    }
  }
  c.prototype.getCursor = function() {
    return this._opts.cursor
  }
  c.prototype._bind = function() {
    this.setCursor(this._opts.cursor)
    var n = this
    d(this._map.getContainer(), 'mousemove', function(q) {
      if (!n._isOpen) {
        return
      }
      if (!n._followTitle) {
        return
      }
      q = window.event || q
      var o = q.target || q.srcElement
      if (o != f.getDom(n._map)) {
        n._followTitle.hide()
        return
      }
      if (!n._mapMoving) {
        n._followTitle.show()
      }
      var p = f.getDrawPoint(q, true)
      n._followTitle.setPosition(p)
    })
    if (this._opts.followText) {
      var m = (this._followTitle = new BMap.Label(this._opts.followText, {
        offset: new BMap.Size(14, 16)
      }))
      this._followTitle.setStyles({ color: '#333', borderColor: '#ff0103' })
    }
  }
  c.prototype.open = function() {
    if (this._isOpen == true) {
      return true
    }
    if (!!BMapLib._toolInUse) {
      return
    }
    this._isOpen = true
    BMapLib._toolInUse = true
    if (!this.binded) {
      this._bind()
      this.binded = true
    }
    if (this._followTitle) {
      this._map.addOverlay(this._followTitle)
      this._followTitle.hide()
    }
    var o = this
    var p = this._map
    var q = 0
    if (/msie (\d+\.\d)/i.test(navigator.userAgent)) {
      q = document.documentMode || +RegExp['\x241']
    }
    var n = function(s) {
      s = window.event || s
      if ((s.button != 0 && !q) || (q && s.button != 1)) {
        return
      }
      if (!!q && f.getDom(p).setCapture) {
        f.getDom(p).setCapture()
      }
      if (!o._isOpen) {
        return
      }
      o._bind.isZooming = true
      d(document, 'mousemove', m)
      d(document, 'mouseup', r)
      o._bind.mx = s.layerX || s.offsetX || 0
      o._bind.my = s.layerY || s.offsetY || 0
      o._bind.ix = s.pageX || s.clientX || 0
      o._bind.iy = s.pageY || s.clientY || 0
      a(f.getDom(p), 'beforeBegin', o._generateHTML())
      o._fDiv = f.getDom(p).previousSibling
      o._fDiv.style.width = '0'
      o._fDiv.style.height = '0'
      o._fDiv.style.left = o._bind.mx + 'px'
      o._fDiv.style.top = o._bind.my + 'px'
      b(s)
      return h(s)
    }
    var m = function(z) {
      if (o._isOpen == true && o._bind.isZooming == true) {
        var z = window.event || z
        var u = z.pageX || z.clientX || 0
        var s = z.pageY || z.clientY || 0
        var w = (o._bind.dx = u - o._bind.ix)
        var t = (o._bind.dy = s - o._bind.iy)
        var v = Math.abs(w) - o._opts.strokeWeight
        var y = Math.abs(t) - o._opts.strokeWeight
        o._fDiv.style.width = (v < 0 ? 0 : v) + 'px'
        o._fDiv.style.height = (y < 0 ? 0 : y) + 'px'
        var x = [p.getSize().width, p.getSize().height]
        if (w >= 0) {
          o._fDiv.style.right = 'auto'
          o._fDiv.style.left = o._bind.mx + 'px'
          if (o._bind.mx + w >= x[0] - 2 * o._opts.strokeWeight) {
            o._fDiv.style.width = x[0] - o._bind.mx - 2 * o._opts.strokeWeight + 'px'
            o._followTitle && o._followTitle.hide()
          }
        } else {
          o._fDiv.style.left = 'auto'
          o._fDiv.style.right = x[0] - o._bind.mx + 'px'
          if (o._bind.mx + w <= 2 * o._opts.strokeWeight) {
            o._fDiv.style.width = o._bind.mx - 2 * o._opts.strokeWeight + 'px'
            o._followTitle && o._followTitle.hide()
          }
        }
        if (t >= 0) {
          o._fDiv.style.bottom = 'auto'
          o._fDiv.style.top = o._bind.my + 'px'
          if (o._bind.my + t >= x[1] - 2 * o._opts.strokeWeight) {
            o._fDiv.style.height = x[1] - o._bind.my - 2 * o._opts.strokeWeight + 'px'
            o._followTitle && o._followTitle.hide()
          }
        } else {
          o._fDiv.style.top = 'auto'
          o._fDiv.style.bottom = x[1] - o._bind.my + 'px'
          if (o._bind.my + t <= 2 * o._opts.strokeWeight) {
            o._fDiv.style.height = o._bind.my - 2 * o._opts.strokeWeight + 'px'
            o._followTitle && o._followTitle.hide()
          }
        }
        b(z)
        return h(z)
      }
    }
    var r = function(A) {
      if (o._isOpen == true) {
        i(document, 'mousemove', m)
        i(document, 'mouseup', r)
        if (!!q && f.getDom(p).releaseCapture) {
          f.getDom(p).releaseCapture()
        }
        var v = parseInt(o._fDiv.style.left) + parseInt(o._fDiv.style.width) / 2
        var u = parseInt(o._fDiv.style.top) + parseInt(o._fDiv.style.height) / 2
        var z = [p.getSize().width, p.getSize().height]
        if (isNaN(v)) {
          v = z[0] - parseInt(o._fDiv.style.right) - parseInt(o._fDiv.style.width) / 2
        }
        if (isNaN(u)) {
          u = z[1] - parseInt(o._fDiv.style.bottom) - parseInt(o._fDiv.style.height) / 2
        }
        var C = Math.min(z[0] / Math.abs(o._bind.dx), z[1] / Math.abs(o._bind.dy))
        C = Math.floor(C)
        var x = new BMap.Pixel(
          v - parseInt(o._fDiv.style.width) / 2,
          u - parseInt(o._fDiv.style.height) / 2
        )
        var w = new BMap.Pixel(
          v + parseInt(o._fDiv.style.width) / 2,
          u + parseInt(o._fDiv.style.height) / 2
        )
        var F = p.pixelToPoint(x)
        var E = p.pixelToPoint(w)
        var y = new BMap.Bounds(F, E)
        delete o._bind.dx
        delete o._bind.dy
        delete o._bind.ix
        delete o._bind.iy
        if (!isNaN(C)) {
          if (o._opts.zoomType == e) {
            targetZoomLv = Math.round(p.getZoom() + Math.log(C) / Math.log(2))
            if (targetZoomLv < p.getZoom()) {
              targetZoomLv = p.getZoom()
            }
          } else {
            targetZoomLv = Math.round(p.getZoom() + Math.log(1 / C) / Math.log(2))
            if (targetZoomLv > p.getZoom()) {
              targetZoomLv = p.getZoom()
            }
          }
        } else {
          targetZoomLv = p.getZoom() + (o._opts.zoomType == e ? 1 : -1)
        }
        var s = p.pixelToPoint({ x: v, y: u }, p.getZoom())
        p.centerAndZoom(s, targetZoomLv)
        var I = f.getDrawPoint(A)
        if (o._followTitle) {
          o._followTitle.setPosition(I)
          o._followTitle.show()
        }
        o._bind.isZooming = false
        o._fDiv.parentNode.removeChild(o._fDiv)
        o._fDiv = null
      }
      var t = y.getSouthWest(),
        B = y.getNorthEast(),
        G = new BMap.Point(B.lng, t.lat),
        H = new BMap.Point(t.lng, B.lat),
        D = new BMap.Polygon([t, H, B, G])
      D.setStrokeWeight(2)
      D.setStrokeOpacity(0.3)
      D.setStrokeColor('#111')
      D.setFillColor('')
      p.addOverlay(D)
      new g({
        duration: 240,
        fps: 20,
        delay: 500,
        render: function(K) {
          var J = 0.3 * (1 - K)
          D.setStrokeOpacity(J)
        },
        finish: function() {
          p.removeOverlay(D)
          D = null
        }
      })
      if (o._opts.autoClose) {
        setTimeout(function() {
          if (o._isOpen == true) {
            o.close()
          }
        }, 70)
      }
      b(A)
      return h(A)
    }
    f.show(this._map)
    this.setCursor(this._opts.cursor)
    if (!this._isBeginDrawBinded) {
      d(f.getDom(this._map), 'mousedown', n)
      this._isBeginDrawBinded = true
    }
    return true
  }
  c.prototype.close = function() {
    if (!this._isOpen) {
      return
    }
    this._isOpen = false
    BMapLib._toolInUse = false
    this._followTitle && this._followTitle.hide()
    f.hide()
  }
  c.prototype._generateHTML = function() {
    return [
      "<div style='position:absolute;z-index:300;border:",
      this._opts.strokeWeight,
      'px ',
      this._opts.style,
      ' ',
      this._opts.strokeColor,
      '; opacity:',
      this._opts.opacity,
      '; background: ',
      this._opts.fillColor,
      '; filter:alpha(opacity=',
      Math.round(this._opts.opacity * 100),
      "); width:0; height:0; font-size:0'></div>"
    ].join('')
  }
  function a(p, m, o) {
    var n, q
    if (p.insertAdjacentHTML) {
      p.insertAdjacentHTML(m, o)
    } else {
      n = p.ownerDocument.createRange()
      m = m.toUpperCase()
      if (m == 'AFTERBEGIN' || m == 'BEFOREEND') {
        n.selectNodeContents(p)
        n.collapse(m == 'AFTERBEGIN')
      } else {
        q = m == 'BEFOREBEGIN'
        n[q ? 'setStartBefore' : 'setEndAfter'](p)
        n.collapse(q)
      }
      n.insertNode(n.createContextualFragment(o))
    }
    return p
  }
  function k(n, m) {
    a(n, 'beforeEnd', m)
    return n.lastChild
  }
  function b(m) {
    var m = window.event || m
    m.stopPropagation ? m.stopPropagation() : (m.cancelBubble = true)
  }
  function h(m) {
    var m = window.event || m
    m.preventDefault ? m.preventDefault() : (m.returnValue = false)
    return false
  }
  function d(m, n, o) {
    if (!m) {
      return
    }
    n = n.replace(/^on/i, '').toLowerCase()
    if (m.addEventListener) {
      m.addEventListener(n, o, false)
    } else {
      if (m.attachEvent) {
        m.attachEvent('on' + n, o)
      }
    }
  }
  function i(m, n, o) {
    if (!m) {
      return
    }
    n = n.replace(/^on/i, '').toLowerCase()
    if (m.removeEventListener) {
      m.removeEventListener(n, o, false)
    } else {
      if (m.detachEvent) {
        m.detachEvent('on' + n, o)
      }
    }
  }
  var f = {
    _map: null,
    _html:
      "<div style='background:transparent url(http://api.map.baidu.com/images/blank.gif);position:absolute;left:0;top:0;width:100%;height:100%;z-index:1000' unselectable='on'></div>",
    _maskElement: null,
    _cursor: 'default',
    _inUse: false,
    show: function(m) {
      if (!this._map) {
        this._map = m
      }
      this._inUse = true
      if (!this._maskElement) {
        this._createMask(m)
      }
      this._maskElement.style.display = 'block'
    },
    _createMask: function(o) {
      this._map = o
      if (!this._map) {
        return
      }
      var n = (this._maskElement = k(this._map.getContainer(), this._html))
      var m = function(p) {
        b(p)
        return h(p)
      }
      d(n, 'mouseup', function(p) {
        if (p.button == 2) {
          m(p)
        }
      })
      d(n, 'contextmenu', m)
      n.style.display = 'none'
    },
    getDrawPoint: function(p, r) {
      p = window.event || p
      var m = p.layerX || p.offsetX || 0
      var q = p.layerY || p.offsetY || 0
      var o = p.target || p.srcElement
      if (o != f.getDom(this._map) && r == true) {
        while (o && o != this._map.getContainer()) {
          if (
            !(
              o.clientWidth == 0 &&
              o.clientHeight == 0 &&
              o.offsetParent &&
              o.offsetParent.nodeName.toLowerCase() == 'td'
            )
          ) {
            m += o.offsetLeft
            q += o.offsetTop
          }
          o = o.offsetParent
        }
      }
      if (o != f.getDom(this._map) && o != this._map.getContainer()) {
        return
      }
      if (typeof m === 'undefined' || typeof q === 'undefined') {
        return
      }
      if (isNaN(m) || isNaN(q)) {
        return
      }
      return this._map.pixelToPoint(new BMap.Pixel(m, q))
    },
    hide: function() {
      if (!this._map) {
        return
      }
      this._inUse = false
      if (this._maskElement) {
        this._maskElement.style.display = 'none'
      }
    },
    getDom: function(m) {
      if (!this._maskElement) {
        this._createMask(m)
      }
      return this._maskElement
    },
    setCursor: function(m) {
      this._cursor = m || 'default'
      if (this._maskElement) {
        this._maskElement.style.cursor = this._cursor
      }
    }
  }
  function g(p) {
    var m = { duration: 1000, fps: 30, delay: 0, transition: l.linear, onStop: function() {} }
    if (p) {
      for (var n in p) {
        m[n] = p[n]
      }
    }
    this._opts = m
    if (m.delay) {
      var o = this
      setTimeout(function() {
        o._beginTime = new Date().getTime()
        o._endTime = o._beginTime + o._opts.duration
        o._launch()
      }, m.delay)
    } else {
      this._beginTime = new Date().getTime()
      this._endTime = this._beginTime + this._opts.duration
      this._launch()
    }
  }
  g.prototype._launch = function() {
    var n = this
    var m = new Date().getTime()
    if (m >= n._endTime) {
      if (typeof n._opts.render == 'function') {
        n._opts.render(n._opts.transition(1))
      }
      if (typeof n._opts.finish == 'function') {
        n._opts.finish()
      }
      return
    }
    n.schedule = n._opts.transition((m - n._beginTime) / n._opts.duration)
    if (typeof n._opts.render == 'function') {
      n._opts.render(n.schedule)
    }
    if (!n.terminative) {
      n._timer = setTimeout(function() {
        n._launch()
      }, 1000 / n._opts.fps)
    }
  }
  var l = {
    linear: function(m) {
      return m
    },
    reverse: function(m) {
      return 1 - m
    },
    easeInQuad: function(m) {
      return m * m
    },
    easeInCubic: function(m) {
      return Math.pow(m, 3)
    },
    easeOutQuad: function(m) {
      return -(m * (m - 2))
    },
    easeOutCubic: function(m) {
      return Math.pow(m - 1, 3) + 1
    },
    easeInOutQuad: function(m) {
      if (m < 0.5) {
        return m * m * 2
      } else {
        return -2 * (m - 2) * m - 1
      }
      return
    },
    easeInOutCubic: function(m) {
      if (m < 0.5) {
        return Math.pow(m, 3) * 4
      } else {
        return Math.pow(m - 1, 3) * 4 + 1
      }
    },
    easeInOutSine: function(m) {
      return (1 - Math.cos(Math.PI * m)) / 2
    }
  }
})()
