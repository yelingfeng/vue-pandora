;(function(b, c, a) {
  c[b] = a()
})('h337', this, function() {
  var c = {
    defaultRadius: 40,
    defaultRenderer: 'canvas2d',
    defaultGradient: {
      0.45: 'rgb(0,0,255)',
      0.55: 'rgb(0,255,255)',
      0.65: 'rgb(0,255,0)',
      0.95: 'yellow',
      1: 'rgb(255,0,0)'
    },
    defaultMaxOpacity: 1,
    defaultMinOpacity: 0,
    defaultBlur: 0.85,
    defaultXField: 'x',
    defaultYField: 'y',
    defaultValueField: 'value',
    plugins: {}
  }
  var g = (function l() {
    var n = function n(o) {
      this._coordinator = {}
      this._data = []
      this._radi = []
      this._min = 0
      this._max = 1
      this._xField = o.xField || o.defaultXField
      this._yField = o.yField || o.defaultYField
      this._valueField = o.valueField || o.defaultValueField
      if (o.radius) {
        this._cfgRadius = o.radius
      }
    }
    var m = c.defaultRadius
    n.prototype = {
      _organiseData: function(o, q) {
        var u = o[this._xField]
        var s = o[this._yField]
        var z = this._radi
        var w = this._data
        var t = this._max
        var p = this._min
        var v = o[this._valueField] || 1
        var r = o.radius || this._cfgRadius || m
        if (!w[u]) {
          w[u] = []
          z[u] = []
        }
        if (!w[u][s]) {
          w[u][s] = v
          z[u][s] = r
        } else {
          w[u][s] += v
        }
        if (w[u][s] > t) {
          if (!q) {
            this._max = w[u][s]
          } else {
            this.setDataMax(w[u][s])
          }
          return false
        } else {
          return { x: u, y: s, value: v, radius: r, min: p, max: t }
        }
      },
      _unOrganizeData: function() {
        var r = []
        var q = this._data
        var p = this._radi
        for (var o in q) {
          for (var s in q[o]) {
            r.push({ x: o, y: s, radius: p[o][s], value: q[o][s] })
          }
        }
        return { min: this._min, max: this._max, data: r }
      },
      _onExtremaChange: function() {
        this._coordinator.emit('extremachange', { min: this._min, max: this._max })
      },
      addData: function() {
        if (arguments[0].length > 0) {
          var p = arguments[0]
          var o = p.length
          while (o--) {
            this.addData.call(this, p[o])
          }
        } else {
          var q = this._organiseData(arguments[0], true)
          if (q) {
            this._coordinator.emit('renderpartial', { min: this._min, max: this._max, data: [q] })
          }
        }
        return this
      },
      setData: function(q) {
        var p = q.data
        var r = p.length
        this._data = []
        this._radi = []
        for (var o = 0; o < r; o++) {
          this._organiseData(p[o], false)
        }
        this._max = q.max
        this._min = q.min || 0
        this._onExtremaChange()
        this._coordinator.emit('renderall', this._getInternalData())
        return this
      },
      removeData: function() {},
      setDataMax: function(o) {
        this._max = o
        this._onExtremaChange()
        this._coordinator.emit('renderall', this._getInternalData())
        return this
      },
      setDataMin: function(o) {
        this._min = o
        this._onExtremaChange()
        this._coordinator.emit('renderall', this._getInternalData())
        return this
      },
      setCoordinator: function(o) {
        this._coordinator = o
      },
      _getInternalData: function() {
        return { max: this._max, min: this._min, data: this._data, radi: this._radi }
      },
      getData: function() {
        return this._unOrganizeData()
      }
    }
    return n
  })()
  var h = (function j() {
    var p = function(q) {
      var s = q.gradient || q.defaultGradient
      var v = document.createElement('canvas')
      var u = v.getContext('2d')
      v.width = 256
      v.height = 1
      var t = u.createLinearGradient(0, 0, 256, 1)
      for (var r in s) {
        t.addColorStop(r, s[r])
      }
      u.fillStyle = t
      u.fillRect(0, 0, 256, 1)
      return u.getImageData(0, 0, 256, 1).data
    }
    var o = function(s, t) {
      var v = document.createElement('canvas')
      var r = v.getContext('2d')
      var q = s
      var w = s
      v.width = v.height = s * 2
      if (t == 1) {
        r.beginPath()
        r.arc(q, w, s, 0, 2 * Math.PI, false)
        r.fillStyle = 'rgba(0,0,0,1)'
        r.fill()
      } else {
        var u = r.createRadialGradient(q, w, s * t, q, w, s)
        u.addColorStop(0, 'rgba(0,0,0,1)')
        u.addColorStop(1, 'rgba(0,0,0,0)')
        r.fillStyle = u
        r.fillRect(0, 0, 2 * s, 2 * s)
      }
      return v
    }
    var n = function(u) {
      var B = []
      var t = u.min
      var x = u.max
      var C = u.radi
      var u = u.data
      var q = Object.keys(u)
      var r = q.length
      while (r--) {
        var s = q[r]
        var y = Object.keys(u[s])
        var A = y.length
        while (A--) {
          var w = y[A]
          var z = u[s][w]
          var v = C[s][w]
          B.push({ x: s, y: w, value: z, radius: v })
        }
      }
      return { min: t, max: x, data: B }
    }
    function m(t) {
      var q = t.element
      var u = (this.shadowCanvas = document.createElement('canvas'))
      var s = (this.canvas = t.canvas || document.createElement('canvas'))
      var r = (this._renderBoundaries = [10000, 10000, 0, 0])
      var v = getComputedStyle(t.element) || {}
      s.className = 'heatmap-canvas'
      this._width = s.width = u.width = +v.width.replace(/px/, '')
      this._height = s.height = u.height = +v.height.replace(/px/, '')
      this.shadowCtx = u.getContext('2d')
      this.ctx = s.getContext('2d')
      s.style.cssText = u.style.cssText = 'position:absolute;left:0;top:0;'
      q.style.position = 'relative'
      q.appendChild(s)
      this._palette = p(t)
      this._templates = {}
      this._setStyles(t)
    }
    m.prototype = {
      renderPartial: function(q) {
        this._drawAlpha(q)
        this._colorize()
      },
      renderAll: function(q) {
        this._clear()
        this._drawAlpha(n(q))
        this._colorize()
      },
      _updateGradient: function(q) {
        this._palette = p(q)
      },
      updateConfig: function(q) {
        if (q.gradient) {
          this._updateGradient(q)
        }
        this._setStyles(q)
      },
      setDimensions: function(r, q) {
        this._width = r
        this._height = q
        this.canvas.width = this.shadowCanvas.width = r
        this.canvas.height = this.shadowCanvas.height = q
      },
      _clear: function() {
        this.shadowCtx.clearRect(0, 0, this._width, this._height)
        this.ctx.clearRect(0, 0, this._width, this._height)
      },
      _setStyles: function(q) {
        this._blur = q.blur == 0 ? 0 : q.blur || q.defaultBlur
        if (q.backgroundColor) {
          this.canvas.style.backgroundColor = q.backgroundColor
        }
        this._opacity = (q.opacity || 0) * 255
        this._maxOpacity = (q.maxOpacity || q.defaultMaxOpacity) * 255
        this._minOpacity = (q.minOpacity || q.defaultMinOpacity) * 255
        this._useGradientOpacity = !!q.useGradientOpacity
      },
      _drawAlpha: function(v) {
        var u = (this._min = v.min)
        var B = (this._max = v.max)
        var v = v.data || []
        var s = v.length
        var t = 1 - this._blur
        while (s--) {
          var F = v[s]
          var D = F.x
          var A = F.y
          var z = F.radius
          var E = Math.min(F.value, B)
          var r = D - z
          var q = A - z
          var C = this.shadowCtx
          var w
          if (!this._templates[z]) {
            this._templates[z] = w = o(z, t)
          } else {
            w = this._templates[z]
          }
          C.globalAlpha = (E - u) / (B - u)
          C.drawImage(w, r, q)
          if (r < this._renderBoundaries[0]) {
            this._renderBoundaries[0] = r
          }
          if (q < this._renderBoundaries[1]) {
            this._renderBoundaries[1] = q
          }
          if (r + 2 * z > this._renderBoundaries[2]) {
            this._renderBoundaries[2] = r + 2 * z
          }
          if (q + 2 * z > this._renderBoundaries[3]) {
            this._renderBoundaries[3] = q + 2 * z
          }
        }
      },
      _colorize: function() {
        var w = this._renderBoundaries[0]
        var u = this._renderBoundaries[1]
        var B = this._renderBoundaries[2] - w
        var z = this._renderBoundaries[3] - u
        var G = this._width
        var A = this._height
        var r = this._opacity
        var I = this._maxOpacity
        var C = this._minOpacity
        var v = this._useGradientOpacity
        if (w < 0) {
          w = 0
        }
        if (u < 0) {
          u = 0
        }
        if (w + B > G) {
          B = G - w
        }
        if (u + z > A) {
          z = A - u
        }
        var J = this.shadowCtx.getImageData(w, u, B, z)
        var H = J.data
        var E = H.length
        var F = this._palette
        for (var D = 3; D < E; D += 4) {
          var s = H[D]
          var t = s * 4
          if (!t) {
            continue
          }
          var q
          if (r > 0) {
            q = r
          } else {
            if (s < I) {
              if (s < C) {
                q = C
              } else {
                q = s
              }
            } else {
              q = I
            }
          }
          H[D - 3] = F[t]
          H[D - 2] = F[t + 1]
          H[D - 1] = F[t + 2]
          H[D] = v ? F[t + 3] : q
        }
        J.data = H
        this.ctx.putImageData(J, w, u)
        this._renderBoundaries = [1000, 1000, 0, 0]
      },
      getValueAt: function(r) {
        var w
        var t = this.shadowCtx
        var s = t.getImageData(r.x, r.y, 1, 1)
        var v = s.data[3]
        var q = this._max
        var u = this._min
        w = (Math.abs(q - u) * (v / 255)) >> 0
        return w
      },
      getDataURL: function() {
        return this.canvas.toDataURL()
      }
    }
    return m
  })()
  var e = (function b() {
    var m = false
    if (c.defaultRenderer === 'canvas2d') {
      m = h
    }
    return m
  })()
  var i = {
    merge: function() {
      var m = {}
      var n = arguments.length
      for (var p = 0; p < n; p++) {
        var q = arguments[p]
        for (var o in q) {
          m[o] = q[o]
        }
      }
      return m
    }
  }
  var f = (function k() {
    var m = (function o() {
      function q() {
        this.cStore = {}
      }
      q.prototype = {
        on: function(s, u, r) {
          var t = this.cStore
          if (!t[s]) {
            t[s] = []
          }
          t[s].push(function(v) {
            return u.call(r, v)
          })
        },
        emit: function(u, t) {
          var w = this.cStore
          if (w[u]) {
            var r = w[u].length
            for (var s = 0; s < r; s++) {
              var v = w[u][s]
              v(t)
            }
          }
        }
      }
      return q
    })()
    var p = function(r) {
      var s = r._renderer
      var t = r._coordinator
      var q = r._store
      t.on('renderpartial', s.renderPartial, s)
      t.on('renderall', s.renderAll, s)
      t.on('extremachange', function(u) {
        r._config.onExtremaChange &&
          r._config.onExtremaChange({
            min: u.min,
            max: u.max,
            gradient: r._config.gradient || r._config.defaultGradient
          })
      })
      q.setCoordinator(t)
    }
    function n() {
      var q = (this._config = i.merge(c, arguments[0] || {}))
      this._coordinator = new m()
      if (q.plugin) {
        var s = q.plugin
        if (!c.plugins[s]) {
          throw new Error("Plugin '" + s + "' not found. Maybe it was not registered.")
        } else {
          var r = c.plugins[s]
          this._renderer = new r.renderer(q)
          this._store = new r.store(q)
        }
      } else {
        this._renderer = new e(q)
        this._store = new g(q)
      }
      p(this)
    }
    n.prototype = {
      addData: function() {
        this._store.addData.apply(this._store, arguments)
        return this
      },
      removeData: function() {
        this._store.removeData && this._store.removeData.apply(this._store, arguments)
        return this
      },
      setData: function() {
        this._store.setData.apply(this._store, arguments)
        return this
      },
      setDataMax: function() {
        this._store.setDataMax.apply(this._store, arguments)
        return this
      },
      setDataMin: function() {
        this._store.setDataMin.apply(this._store, arguments)
        return this
      },
      configure: function(q) {
        this._config = i.merge(this._config, q)
        this._renderer.updateConfig(this._config)
        this._coordinator.emit('renderall', this._store._getInternalData())
        return this
      },
      repaint: function() {
        this._coordinator.emit('renderall', this._store._getInternalData())
        return this
      },
      getData: function() {
        return this._store.getData()
      },
      getDataURL: function() {
        return this._renderer.getDataURL()
      },
      getValueAt: function(q) {
        if (this._store.getValueAt) {
          return this._store.getValueAt(q)
        } else {
          if (this._renderer.getValueAt) {
            return this._renderer.getValueAt(q)
          } else {
            return null
          }
        }
      }
    }
    return n
  })()
  var a = {
    create: function(m) {
      return new f(m)
    },
    register: function(n, m) {
      c.plugins[n] = m
    }
  }
  return a
})
var BMapLib = (window.BMapLib = BMapLib || {})
;(function() {
  var a = (BMapLib.HeatmapOverlay = function(c) {
    this.conf = c
    this.conf.visible = c.visible === undefined ? true : c.visible
    this.heatmap = null
    this.latlngs = []
    this.bounds = null
  })
  a.prototype = new BMap.Overlay()
  a.prototype.initialize = function(f) {
    this._map = f
    var c = document.createElement('div')
    c.style.position = 'absolute'
    c.style.top = 0
    c.style.left = 0
    c.style.border = 0
    c.style.width = this._map.getSize().width + 'px'
    c.style.height = this._map.getSize().height + 'px'
    this.conf.element = c
    if (!b()) {
      return c
    }
    f.getPanes().mapPane.appendChild(c)
    this.conf.valueField = this.conf.valueField || 'count'
    this.heatmap = h337.create(this.conf)
    var e = this
    f.addEventListener('resize', function(h) {
      var g = h.size
      c.style.width = g.width + 'px'
      c.style.height = g.height + 'px'
      e.heatmap._renderer.setDimensions(g.width, g.height)
      e.draw()
    })
    this._div = c
    return c
  }
  a.prototype.draw = function() {
    if (!b()) {
      return
    }
    var k = this._map.getBounds()
    if (k.equals(this.bounds)) {
      return
    }
    this.bounds = k
    var j = this._map.pointToOverlayPixel(k.getNorthEast()),
      p = this._map.pointToOverlayPixel(k.getSouthWest()),
      c = j.y,
      i = p.x,
      l = p.y - j.y,
      o = j.x - p.x
    this.conf.element.style.left = i + 'px'
    this.conf.element.style.top = c + 'px'
    this.conf.element.style.width = o + 'px'
    this.conf.element.style.height = l + 'px'
    if (this.latlngs.length > 0) {
      this.heatmap.removeData()
      var n = this.latlngs.length
      d = { max: this.heatmap._store.getData().max, data: [] }
      while (n--) {
        var f = this.latlngs[n].latlng
        if (!k.containsPoint(f)) {
          continue
        }
        var g = this._map.pointToOverlayPixel(f),
          i = this._map.pointToOverlayPixel(k.getSouthWest()).x,
          c = this._map.pointToOverlayPixel(k.getNorthEast()).y,
          e = new BMap.Pixel(g.x - i, g.y - c)
        var m = this.pixelTransform(e)
        d.data.push({ x: m.x, y: m.y, count: this.latlngs[n].c })
      }
      if (this.conf.radiusChangeByZoom) {
        this.heatmap._store._cfgRadius = this.conf.radiusChangeByZoom(this._map.getZoom())
      }
      this.heatmap.setData(d)
    }
  }
  a.prototype.pixelTransform = function(f) {
    var c = this.heatmap.width,
      e = this.heatmap.height
    while (f.x < 0) {
      f.x += c
    }
    while (f.x > c) {
      f.x -= c
    }
    while (f.y < 0) {
      f.y += e
    }
    while (f.y > e) {
      f.y -= e
    }
    f.x = f.x >> 0
    f.y = f.y >> 0
    return f
  }
  a.prototype.setDataSet = function(j) {
    this.data = j
    if (!b()) {
      return
    }
    var i = this._map.getBounds()
    var l = { max: j.max, data: [] }
    var m = j.data,
      k = m.length
    this.latlngs = []
    this.heatmap.removeData()
    if (this.conf.radiusChangeByZoom) {
      this.heatmap._store._cfgRadius = this.conf.radiusChangeByZoom(this._map.getZoom())
    }
    while (k--) {
      var f = new BMap.Point(m[k].lng, m[k].lat)
      this.latlngs.push({ latlng: f, c: m[k].count })
      if (!i.containsPoint(f)) {
        continue
      }
      var g = this._map.pointToOverlayPixel(f),
        h = this._map.pointToOverlayPixel(i.getSouthWest()).x,
        c = this._map.pointToOverlayPixel(i.getNorthEast()).y,
        e = new BMap.Pixel(g.x - h, g.y - c)
      var n = this.pixelTransform(e)
      l.data.push({ x: n.x, y: n.y, count: m[k].count })
    }
    this.heatmap.setData(l)
  }
  a.prototype.addDataPoint = function(e, g, f) {
    if (!b()) {
      return
    }
    if (this.data && this.data.data) {
      this.data.data.push({ lng: e, lat: g, count: f })
    }
    var h = new BMap.Point(e, g),
      c = this.pixelTransform(this._map.pointToOverlayPixel(h))
    this.heatmap.store.addDataPoint(c.x, c.y, f)
    this.latlngs.push({ latlng: h, c: f })
  }
  a.prototype.toggle = function() {
    if (!b()) {
      return
    }
    if (this.conf.visible === true) {
      this.conf.visible = false
    } else {
      this.conf.visible = true
    }
    if (this.conf.visible) {
      this.conf.element.style.display = 'block'
    } else {
      this.conf.element.style.display = 'none'
    }
  }
  a.prototype.setOptions = function(c) {
    if (!b()) {
      return
    }
    for (var e in c) {
      if (e == 'radius') {
        this.heatmap._store._cfgRadius = c[e]
      }
      if (e == 'opacity') {
        c[e] = c[e] / 100
      }
    }
    this.heatmap.configure(c)
    if (this.data) {
      this.setDataSet(this.data)
    }
  }
  function b() {
    var c = document.createElement('canvas')
    return !!(c.getContext && c.getContext('2d'))
  }
})()
