var BMapLib = (window.BMapLib = BMapLib || {})
var BMAPLIB_TAB_SEARCH = 0,
  BMAPLIB_TAB_TO_HERE = 1,
  BMAPLIB_TAB_FROM_HERE = 2
;(function() {
  var d,
    c = (d = c || { version: '1.5.0' })
  c.guid = '$BAIDU$'
  ;(function() {
    window[c.guid] = window[c.guid] || {}
    c.lang = c.lang || {}
    c.lang.isString = function(e) {
      return '[object String]' == Object.prototype.toString.call(e)
    }
    c.lang.Event = function(e, f) {
      this.type = e
      this.returnValue = true
      this.target = f || null
      this.currentTarget = null
    }
    c.object = c.object || {}
    c.extend = c.object.extend = function(g, e) {
      for (var f in e) {
        if (e.hasOwnProperty(f)) {
          g[f] = e[f]
        }
      }
      return g
    }
    c.event = c.event || {}
    c.event._listeners = c.event._listeners || []
    c.dom = c.dom || {}
    c.dom._g = function(e) {
      if (c.lang.isString(e)) {
        return document.getElementById(e)
      }
      return e
    }
    c._g = c.dom._g
    c.event.on = function(f, i, k) {
      i = i.replace(/^on/i, '')
      f = c.dom._g(f)
      var j = function(m) {
          k.call(f, m)
        },
        e = c.event._listeners,
        h = c.event._eventFilter,
        l,
        g = i
      i = i.toLowerCase()
      if (h && h[i]) {
        l = h[i](f, i, j)
        g = l.type
        j = l.listener
      }
      if (f.addEventListener) {
        f.addEventListener(g, j, false)
      } else {
        if (f.attachEvent) {
          f.attachEvent('on' + g, j)
        }
      }
      e[e.length] = [f, i, k, j, g]
      return f
    }
    c.on = c.event.on
    c.event.un = function(g, j, f) {
      g = c.dom._g(g)
      j = j.replace(/^on/i, '').toLowerCase()
      var m = c.event._listeners,
        h = m.length,
        i = !f,
        l,
        k,
        e
      while (h--) {
        l = m[h]
        if (l[1] === j && l[0] === g && (i || l[2] === f)) {
          k = l[4]
          e = l[3]
          if (g.removeEventListener) {
            g.removeEventListener(k, e, false)
          } else {
            if (g.detachEvent) {
              g.detachEvent('on' + k, e)
            }
          }
          m.splice(h, 1)
        }
      }
      return g
    }
    c.un = c.event.un
    c.dom.g = function(e) {
      if ('string' == typeof e || e instanceof String) {
        return document.getElementById(e)
      } else {
        if (e && e.nodeName && (e.nodeType == 1 || e.nodeType == 9)) {
          return e
        }
      }
      return null
    }
    c.g = c.G = c.dom.g
    c.string = c.string || {}
    c.browser = c.browser || {}
    c.browser.ie = c.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent)
      ? document.documentMode || +RegExp['\x241']
      : undefined
    c.dom._NAME_ATTRS = (function() {
      var e = {
        cellpadding: 'cellPadding',
        cellspacing: 'cellSpacing',
        colspan: 'colSpan',
        rowspan: 'rowSpan',
        valign: 'vAlign',
        usemap: 'useMap',
        frameborder: 'frameBorder'
      }
      if (c.browser.ie < 8) {
        e['for'] = 'htmlFor'
        e['class'] = 'className'
      } else {
        e.htmlFor = 'for'
        e.className = 'class'
      }
      return e
    })()
    c.dom.setAttr = function(f, e, g) {
      f = c.dom.g(f)
      if ('style' == e) {
        f.style.cssText = g
      } else {
        e = c.dom._NAME_ATTRS[e] || e
        f.setAttribute(e, g)
      }
      return f
    }
    c.setAttr = c.dom.setAttr
    c.dom.setAttrs = function(g, e) {
      g = c.dom.g(g)
      for (var f in e) {
        c.dom.setAttr(g, f, e[f])
      }
      return g
    }
    c.setAttrs = c.dom.setAttrs
    c.dom.create = function(g, e) {
      var h = document.createElement(g),
        f = e || {}
      return c.dom.setAttrs(h, f)
    }
    d.undope = true
  })()
  var a = (BMapLib.SearchInfoWindow = function(g, f, e) {
    this.guid = b++
    BMapLib.SearchInfoWindow.instance[this.guid] = this
    this._isOpen = false
    this._map = g
    this._opts = e = e || {}
    this._content = f || ''
    this._opts.width = e.width
    this._opts.height = e.height
    this._opts._title = e.title || ''
    this._opts.offset = e.offset || new BMap.Size(0, 0)
    this._opts.enableAutoPan = e.enableAutoPan === false ? false : true
    this._opts._panel = e.panel || null
    this._opts._searchTypes = e.searchTypes
  })
  a.prototype = new BMap.Overlay()
  a.prototype.initialize = function(f) {
    this._closeOtherSearchInfo()
    var e = this
    var h = this._createSearchTemplate()
    var g = f.getPanes().floatPane
    g.style.width = 'auto'
    g.appendChild(h)
    this._initSearchTemplate()
    this._getSearchInfoWindowSize()
    this._boxWidth = parseInt(this.container.offsetWidth, 10)
    this._boxHeight = parseInt(this.container.offsetHeight, 10)
    c.event.on(h, 'onmousedown', function(i) {
      e._stopBubble(i)
    })
    c.event.on(h, 'onmouseover', function(i) {
      e._stopBubble(i)
    })
    c.event.on(h, 'click', function(i) {
      e._stopBubble(i)
    })
    c.event.on(h, 'dblclick', function(i) {
      e._stopBubble(i)
    })
    return h
  }
  a.prototype.draw = function() {
    this._isOpen && this._adjustPosition(this._point)
  }
  a.prototype.open = function(e) {
    this._map.closeInfoWindow()
    var f = this,
      g
    if (!this._isOpen) {
      this._map.addOverlay(this)
      this._isOpen = true
      setTimeout(function() {
        f._dispatchEvent(f, 'open', { point: f._point })
      }, 10)
    }
    if (e instanceof BMap.Point) {
      g = e
      this._removeMarkerEvt()
      this._marker = null
    } else {
      if (e instanceof BMap.Marker) {
        if (this._marker) {
          this._removeMarkerEvt()
        }
        g = e.getPosition()
        this._marker = e
        !this._markerDragend &&
          this._marker.addEventListener(
            'dragend',
            (this._markerDragend = function(h) {
              f._point = h.point
              f._adjustPosition(f._point)
              f._panBox()
              f.show()
            })
          )
        !this._markerDragging &&
          this._marker.addEventListener(
            'dragging',
            (this._markerDragging = function() {
              f.hide()
              f._point = f._marker.getPosition()
              f._adjustPosition(f._point)
            })
          )
      }
    }
    this.show()
    this._point = g
    this._panBox()
    this._adjustPosition(this._point)
  }
  a.prototype.close = function() {
    if (this._isOpen) {
      this._map.removeOverlay(this)
      this._disposeAutoComplete()
      this._isOpen = false
      this._dispatchEvent(this, 'close', { point: this._point })
    }
  }
  a.prototype.enableAutoPan = function() {
    this._opts.enableAutoPan = true
  }
  a.prototype.disableAutoPan = function() {
    this._opts.enableAutoPan = false
  }
  ;(a.prototype.setContent = function(e) {
    this._setContent(e)
    this._getSearchInfoWindowSize()
    this._adjustPosition(this._point)
  }),
    (a.prototype.setTitle = function(e) {
      this.dom.title.innerHTML = e
      this._opts._title = e
    })
  ;(a.prototype.getContent = function() {
    return this.dom.content.innerHTML
  }),
    (a.prototype.getTitle = function() {
      return this.dom.title.innerHTML
    })
  a.prototype.setPosition = function(e) {
    this._point = e
    this._adjustPosition(e)
    this._panBox()
    this._removeMarkerEvt()
  }
  a.prototype.getPosition = function() {
    return this._point
  }
  ;(a.prototype.getOffset = function() {
    return this._opts.offset
  }),
    c.object.extend(a.prototype, {
      _closeOtherSearchInfo: function() {
        var f = BMapLib.SearchInfoWindow.instance,
          e = f.length
        while (e--) {
          if (f[e]._isOpen) {
            f[e].close()
          }
        }
      },
      _setContent: function(f) {
        if (!this.dom || !this.dom.content) {
          return
        }
        if (typeof f.nodeType === 'undefined') {
          this.dom.content.innerHTML = f
        } else {
          this.dom.content.appendChild(f)
        }
        var e = this
        e._adjustContainerWidth()
        this._content = f
      },
      _adjustPosition: function(g) {
        var e = this._getPointPosition(g)
        var f = this._marker && this._marker.getIcon()
        if (this._marker) {
          this.container.style.bottom =
            -(e.y - this._opts.offset.height - f.anchor.height + f.infoWindowAnchor.height) -
            this._marker.getOffset().height +
            2 +
            30 +
            'px'
          this.container.style.left =
            e.x -
            f.anchor.width +
            this._marker.getOffset().width +
            f.infoWindowAnchor.width -
            this._boxWidth / 2 +
            28 +
            'px'
        } else {
          this.container.style.bottom = -(e.y - this._opts.offset.height) + 30 + 'px'
          this.container.style.left = e.x - this._boxWidth / 2 + 25 + 'px'
        }
      },
      _getPointPosition: function(e) {
        this._pointPosition = this._map.pointToOverlayPixel(e)
        return this._pointPosition
      },
      _getSearchInfoWindowSize: function() {
        this._boxWidth = parseInt(this.container.offsetWidth, 10)
        this._boxHeight = parseInt(this.container.offsetHeight, 10)
      },
      _stopBubble: function(f) {
        if (f && f.stopPropagation) {
          f.stopPropagation()
        } else {
          window.event.cancelBubble = true
        }
      },
      _panBox: function() {
        if (!this._opts.enableAutoPan) {
          return
        }
        var j = parseInt(this._map.getContainer().offsetHeight, 10),
          o = parseInt(this._map.getContainer().offsetWidth, 10),
          k = this._boxHeight,
          e = this._boxWidth
        if (k >= j || e >= o) {
          return
        }
        if (!this._map.getBounds().containsPoint(this._point)) {
          this._map.setCenter(this._point)
        }
        var f = this._map.pointToPixel(this._point),
          p,
          m,
          i = e / 2 - 28 - f.x + 10,
          n = e / 2 + 28 + f.x - o + 10
        if (this._marker) {
          var l = this._marker.getIcon()
        }
        var g = this._marker
          ? l.anchor.height + this._marker.getOffset().height - l.infoWindowAnchor.height
          : 0
        p = k - f.y + this._opts.offset.height + g + 31 + 10
        panX = i > 0 ? i : n > 0 ? -n : 0
        m = p > 0 ? p : 0
        this._map.panBy(panX, m)
      },
      _removeMarkerEvt: function() {
        this._markerDragend && this._marker.removeEventListener('dragend', this._markerDragend)
        this._markerDragging && this._marker.removeEventListener('dragging', this._markerDragging)
        this._markerDragend = this._markerDragging = null
      },
      _dispatchEvent: function(e, f, h) {
        f.indexOf('on') != 0 && (f = 'on' + f)
        var g = new c.lang.Event(f)
        if (!!h) {
          for (var i in h) {
            g[i] = h[i]
          }
        }
        e.dispatchEvent(g)
      },
      _initSearchTemplate: function() {
        this._initDom()
        this._initPanelTemplate()
        this.setTitle(this._opts._title)
        if (this._opts.height) {
          this.dom.content.style.height = parseInt(this._opts.height, 10) + 'px'
        }
        this._setContent(this._content)
        this._initService()
        this._bind()
        if (this._opts._searchTypes) {
          this._setSearchTypes()
        }
        this._mendIE6()
      },
      _createSearchTemplate: function() {
        if (!this._div) {
          var f = c.dom.create('div', {
            class: 'BMapLib_SearchInfoWindow',
            id: 'BMapLib_SearchInfoWindow' + this.guid
          })
          var e = [
            '<div class="BMapLib_bubble_top">',
            '<div class="BMapLib_bubble_title" id="BMapLib_bubble_title' + this.guid + '"></div>',
            '<div class="BMapLib_bubble_close" id="BMapLib_bubble_close' + this.guid + '">',
            '<span>关闭</span>',
            '</div>',
            '</div>',
            '<div class="BMapLib_bubble_center">',
            '<div class="BMapLib_bubble_content" id="BMapLib_bubble_content' + this.guid + '">',
            '</div>',
            '<div class="BMapLib_nav" id="BMapLib_nav' + this.guid + '">',
            '<ul class="BMapLib_nav_tab" id="BMapLib_nav_tab' + this.guid + '">',
            '<li class="BMapLib_first BMapLib_current" id="BMapLib_tab_search' +
              this.guid +
              '" style="display:block;">',
            '<span class="BMapLib_icon BMapLib_icon_nbs"></span>在附近找',
            '</li>',
            '<li class="" id="BMapLib_tab_tohere' + this.guid + '" style="display:block;">',
            '<span class="BMapLib_icon BMapLib_icon_tohere"></span>到这里去',
            '</li>',
            '<li class="" id="BMapLib_tab_fromhere' + this.guid + '" style="display:block;">',
            '<span class="BMapLib_icon BMapLib_icon_fromhere"></span>从这里出发',
            '</li>',
            '</ul>',
            '<ul class="BMapLib_nav_tab_content">',
            '<li id="BMapLib_searchBox' + this.guid + '">',
            '<table width="100%" align="center" border=0 cellpadding=0 cellspacing=0>',
            '<tr><td style="padding-left:8px;"><input id="BMapLib_search_text' +
              this.guid +
              '" class="BMapLib_search_text" type="text" maxlength="100" autocomplete="off"></td><td width="55" style="padding-left:7px;"><input id="BMapLib_search_nb_btn' +
              this.guid +
              '" type="submit" value="搜索" class="iw_bt"></td></tr>',
            '</table>',
            '</li>',
            '<li id="BMapLib_transBox' + this.guid + '" style="display:none">',
            '<table width="100%" align="center" border=0 cellpadding=0 cellspacing=0>',
            '<tr><td width="30" style="padding-left:8px;"><div id="BMapLib_stationText' +
              this.guid +
              '">起点</div></td><td><input id="BMapLib_trans_text' +
              this.guid +
              '" class="BMapLib_trans_text" type="text" maxlength="100" autocomplete="off"></td><td width="106" style="padding-left:7px;"><input id="BMapLib_search_bus_btn' +
              this.guid +
              '" type="button" value="公交" class="iw_bt" style="margin-right:5px;"><input id="BMapLib_search_drive_btn' +
              this.guid +
              '" type="button" class="iw_bt" value="驾车"></td></tr>',
            '</table>',
            '</li>',
            '</ul>',
            '</div>',
            '</div>',
            '<div class="BMapLib_bubble_bottom"></div>',
            '<img src="http://api.map.baidu.com/library/SearchInfoWindow/1.4/src/iw_tail.png" width="58" height="31" alt="" class="BMapLib_trans" id="BMapLib_trans' +
              this.guid +
              '" style="left:144px;"/>'
          ]
          f.innerHTML = e.join('')
          this._div = f
        }
        return this._div
      },
      _initPanelTemplate: function() {
        var f = c.g(this._opts._panel)
        if (!this.dom.panel && f) {
          f.innerHTML = ''
          this.dom.panel = f
          var e = c.dom.create('div')
          e.style.cssText =
            'display:none;background:#FD9;height:30px;line-height:30px;text-align:center;font-size:12px;color:#994C00;'
          f.appendChild(e)
          this.dom.panel.address = e
          var g = c.dom.create('div')
          f.appendChild(g)
          this.dom.panel.localSearch = g
        }
      },
      _initDom: function() {
        if (!this.dom) {
          this.dom = {
            container: c.g('BMapLib_SearchInfoWindow' + this.guid),
            content: c.g('BMapLib_bubble_content' + this.guid),
            title: c.g('BMapLib_bubble_title' + this.guid),
            closeBtn: c.g('BMapLib_bubble_close' + this.guid),
            transIco: c.g('BMapLib_trans' + this.guid),
            navBox: c.g('BMapLib_nav' + this.guid),
            navTab: c.g('BMapLib_nav_tab' + this.guid),
            seartTab: c.g('BMapLib_tab_search' + this.guid),
            tohereTab: c.g('BMapLib_tab_tohere' + this.guid),
            fromhereTab: c.g('BMapLib_tab_fromhere' + this.guid),
            searchBox: c.g('BMapLib_searchBox' + this.guid),
            transBox: c.g('BMapLib_transBox' + this.guid),
            stationText: c.g('BMapLib_stationText' + this.guid),
            nbBtn: c.g('BMapLib_search_nb_btn' + this.guid),
            busBtn: c.g('BMapLib_search_bus_btn' + this.guid),
            driveBtn: c.g('BMapLib_search_drive_btn' + this.guid),
            searchText: c.g('BMapLib_search_text' + this.guid),
            transText: c.g('BMapLib_trans_text' + this.guid)
          }
          this.container = this.dom.container
        }
      },
      _adjustContainerWidth: function() {
        var f = 250,
          e = 0
        if (this._opts.width) {
          f = parseInt(this._opts.width, 10)
          f += 10
        } else {
          f = parseInt(this.dom.content.offsetWidth, 10)
        }
        if (f < 250) {
          f = 250
        }
        this._width = f
        this.container.style.width = this._width + 'px'
        this._adjustTransPosition()
      },
      _adjustTransPosition: function() {
        this.dom.transIco.style.left = this.container.offsetWidth / 2 - 2 - 29 + 'px'
        this.dom.transIco.style.top = this.container.offsetHeight - 2 + 'px'
      },
      _initService: function() {
        var g = this._map
        var f = this
        var e = {}
        e.map = g
        if (this.dom.panel) {
          e.panel = this.dom.panel.localSearch
        }
        if (!this.localSearch) {
          this.localSearch = new BMap.LocalSearch(g, {
            renderOptions: e,
            onSearchComplete: function(h) {
              f._clearAddress()
              f._drawCircleBound()
            }
          })
        }
        if (!this.transitRoute) {
          this.transitRoute = new BMap.TransitRoute(g, {
            renderOptions: e,
            onSearchComplete: function(h) {
              f._transitRouteComplete(f.transitRoute, h)
            }
          })
        }
        if (!this.drivingRoute) {
          this.drivingRoute = new BMap.DrivingRoute(g, {
            renderOptions: e,
            onSearchComplete: function(h) {
              f._transitRouteComplete(f.drivingRoute, h)
            }
          })
        }
      },
      _bind: function() {
        var e = this
        c.on(this.dom.closeBtn, 'click', function(f) {
          e.close()
        })
        c.on(this.dom.seartTab, 'click', function(f) {
          e._showTabContent(BMAPLIB_TAB_SEARCH)
        })
        c.on(this.dom.tohereTab, 'click', function(f) {
          e._showTabContent(BMAPLIB_TAB_TO_HERE)
        })
        c.on(this.dom.fromhereTab, 'click', function(f) {
          e._showTabContent(BMAPLIB_TAB_FROM_HERE)
        })
        c.on(this.dom.nbBtn, 'click', function(f) {
          e._localSearchAction()
        })
        c.on(this.dom.busBtn, 'click', function(f) {
          e._transitRouteAction(e.transitRoute)
        })
        c.on(this.dom.driveBtn, 'click', function(f) {
          e._transitRouteAction(e.drivingRoute)
        })
        this._autoCompleteIni()
      },
      _showTabContent: function(h) {
        this._hideAutoComplete()
        var g = this.dom.navTab.getElementsByTagName('li'),
          e = g.length
        for (var f = 0, e = g.length; f < e; f++) {
          g[f].className = ''
        }
        switch (h) {
          case BMAPLIB_TAB_SEARCH:
            this.dom.seartTab.className = 'BMapLib_current'
            this.dom.searchBox.style.display = 'block'
            this.dom.transBox.style.display = 'none'
            break
          case BMAPLIB_TAB_TO_HERE:
            this.dom.tohereTab.className = 'BMapLib_current'
            this.dom.searchBox.style.display = 'none'
            this.dom.transBox.style.display = 'block'
            this.dom.stationText.innerHTML = '起点'
            this._pointType = 'endPoint'
            break
          case BMAPLIB_TAB_FROM_HERE:
            this.dom.fromhereTab.className = 'BMapLib_current'
            this.dom.searchBox.style.display = 'none'
            this.dom.transBox.style.display = 'block'
            this.dom.stationText.innerHTML = '终点'
            this._pointType = 'startPoint'
            break
        }
        this._firstTab.className += ' BMapLib_first'
      },
      _autoCompleteIni: function() {
        this.searchAC = new BMap.Autocomplete({ input: this.dom.searchText, location: this._map })
        this.transAC = new BMap.Autocomplete({ input: this.dom.transText, location: this._map })
      },
      _hideAutoComplete: function() {
        this.searchAC.hide()
        this.transAC.hide()
      },
      _disposeAutoComplete: function() {
        this.searchAC.dispose()
        this.transAC.dispose()
      },
      _localSearchAction: function() {
        var f = (this._kw = this.dom.searchText.value)
        if (f == '') {
          this.dom.searchText.focus()
        } else {
          this._reset()
          this.close()
          var e = (this._radius = 1000)
          this.localSearch.searchNearby(f, this._point, e)
        }
      },
      _drawCircleBound: function() {
        this._closeCircleBound()
        var f = (this._searchCircle = new BMap.Circle(this._point, this._radius, {
          strokeWeight: 3,
          strokeOpacity: 0.4,
          strokeColor: '#e00',
          filColor: '#00e',
          fillOpacity: 0.4
        }))
        var e = (this._searchLabel = new BMap.Label(
          '<div onmousedown ="BMapLib.SearchInfoWindow.instance[' +
            this.guid +
            ']._stopBubble()"><input type="text" value="' +
            this._radius +
            '" style="width:30px;" id="BMapLib_search_radius' +
            this.guid +
            '"/>m <a href="javascript:void(0)" title="修改" onclick="BMapLib.SearchInfoWindow.instance[' +
            this.guid +
            ']._changeSearchRadius()" style="text-decoration:none;color:blue;">修改</a><img src="http://api.map.baidu.com/images/iw_close1d3.gif" alt="关闭" title="关闭" style="cursor:pointer;padding:0 5px;" onclick="BMapLib.SearchInfoWindow.instance[' +
            this.guid +
            ']._closeCircleBound()"/></div>',
          { position: this._point }
        ))
        this._map.addOverlay(f)
        this._map.addOverlay(e)
        this._hasCircle = true
      },
      _changeSearchRadius: function() {
        var e = parseInt(c.g('BMapLib_search_radius' + this.guid).value, 10)
        if (e > 0 && e != this._radius) {
          this._radius = e
          this.localSearch.searchNearby(this._kw, this._point, e)
          this._closeCircleBound()
        }
      },
      _closeCircleBound: function(e) {
        if (this._searchCircle) {
          this._map.removeOverlay(this._searchCircle)
        }
        if (this._searchLabel) {
          this._map.removeOverlay(this._searchLabel)
        }
        this._hasCircle = false
      },
      _transitRouteAction: function(e) {
        var f = this.dom.transText.value
        if (f == '') {
          this.dom.transText.focus()
        } else {
          this._reset()
          this.close()
          var g = this._getTransPoi(f)
          e.search(g.start, g.end)
        }
      },
      _transitRouteComplete: function(e, h) {
        this._clearAddress()
        var f = e.getStatus()
        if (f == BMAP_STATUS_UNKNOWN_ROUTE) {
          var g = h.getStartStatus(),
            i = h.getEndStatus(),
            j = ''
          j = '找不到相关的线路'
          if (g == BMAP_ROUTE_STATUS_EMPTY && i == BMAP_ROUTE_STATUS_EMPTY) {
            j = '找不到相关的起点和终点'
          } else {
            if (g == BMAP_ROUTE_STATUS_EMPTY) {
              j = '找不到相关的起点'
            }
            if (i == BMAP_ROUTE_STATUS_EMPTY) {
              j = '找不到相关的终点'
            }
          }
          if (
            (this._pointType == 'startPoint' && i == BMAP_ROUTE_STATUS_ADDRESS) ||
            (this._pointType == 'endPoint' && g == BMAP_ROUTE_STATUS_ADDRESS)
          ) {
            this._searchAddress(e)
          } else {
            this.dom.panel.address.style.display = 'block'
            this.dom.panel.address.innerHTML = j
          }
        }
      },
      _searchAddress: function(e) {
        var i = this
        var f = this.dom.panel
        if (!this.lsAddress) {
          var g = { map: this._map }
          if (f) {
            g.panel = this.dom.panel.localSearch
          }
          this.lsAddress = new BMap.LocalSearch(map, { renderOptions: g })
        }
        var h = i._pointType == 'startPoint' ? '终点' : '起点'
        if (f) {
          this.dom.panel.address.style.display = 'block'
          this.dom.panel.address.innerHTML = '请选择准确的' + h
        }
        this.lsAddress.setInfoHtmlSetCallback(function(l, k) {
          var j = document.createElement('div')
          j.style.cssText =
            'position:relative;left:50%;margin:5px 0 0 -30px;width:60px;height:27px;line-height:27px;border:1px solid #E0C3A6;text-align:center;color:#B35900;cursor:pointer;background-color:#FFEECC;border-radius:2px; background-image: -webkit-gradient(linear, left top, left bottom, from(#FFFDF8), to(#FFEECC))'
          j.innerHTML = '设为' + h
          k.appendChild(j)
          c.on(j, 'click', function() {
            i._clearAddress()
            var m = l.marker.getPosition()
            if (h == '起点') {
              e.search(m, i._point)
            } else {
              e.search(i._point, m)
            }
          })
        })
        this._reset()
        this.lsAddress.search(this.dom.transText.value)
      },
      _getTransPoi: function(f) {
        var g, e
        if (this._pointType == 'startPoint') {
          g = this._point
          e = f
        } else {
          g = f
          e = this._point
        }
        return { start: g, end: e }
      },
      _setSearchTypes: function() {
        var l = this._unique(this._opts._searchTypes),
          f = this.dom.navTab,
          k = [this.dom.seartTab, this.dom.tohereTab, this.dom.fromhereTab],
          j = 0,
          e = 0,
          h = 0,
          m
        this.tabLength = l.length
        tabWidth = Math.floor((this._width - this.tabLength + 1) / this.tabLength)
        if (l.length == 0) {
          this.dom.navBox.style.display = 'none'
        } else {
          for (j = 0, e = k.length; j < e; j++) {
            k[j].className = ''
            k[j].style.display = 'none'
          }
          for (j = 0; j < this.tabLength; j++) {
            m = k[l[j]]
            if (j == 0) {
              m.className = 'BMapLib_first BMapLib_current'
              this._firstTab = m
              h = l[j]
            }
            if (j == this.tabLength - 1) {
              var g = this._width - (this.tabLength - 1) * (tabWidth + 1)
              if (c.browser.ie == 6) {
                m.style.width = g - 3 + 'px'
              } else {
                m.style.width = g + 'px'
              }
            } else {
              m.style.width = tabWidth + 'px'
            }
            m.style.display = 'block'
          }
          if (l[1] != undefined) {
            f.appendChild(k[l[1]])
          }
          if (l[2] != undefined) {
            f.appendChild(k[l[2]])
          }
          this._showTabContent(h)
        }
        this._adjustTransPosition()
      },
      _unique: function(g) {
        var f = g.length,
          e = g.slice(0),
          j,
          h
        while (--f >= 0) {
          h = e[f]
          if (h < 0 || h > 2) {
            e.splice(f, 1)
            continue
          }
          j = f
          while (j--) {
            if (h == e[j]) {
              e.splice(f, 1)
              break
            }
          }
        }
        return e
      },
      _reset: function() {
        this.localSearch.clearResults()
        this.transitRoute.clearResults()
        this.drivingRoute.clearResults()
        this._closeCircleBound()
        this._hideAutoComplete()
      },
      _clearAddress: function() {
        if (this.lsAddress) {
          this.lsAddress.clearResults()
        }
        if (this.dom.panel) {
          this.dom.panel.address.style.display = 'none'
        }
      },
      _mendIE6: function(g) {
        if (!c.browser.ie || c.browser.ie > 6) {
          return
        }
        var f = this.container.getElementsByTagName('IMG')
        for (var e = 0; e < f.length; e++) {
          if (f[e].src.indexOf('.png') < 0) {
            continue
          }
          f[e].style.cssText +=
            ';FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=' +
            f[e].src +
            ',sizingMethod=crop)'
          f[e].src = 'http://api.map.baidu.com/images/blank.gif'
        }
      }
    })
  var b = 0
  BMapLib.SearchInfoWindow.instance = []
})()
