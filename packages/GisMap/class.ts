import {
  creatMap,
  createPoint,
  createMarker,
  createDrawingManager,
  createInfoWindow,
  createHeatmapOverlay,
  drawCircle,
  drawPolygon,
  drawPolyline,
  drawPointCollection,
  addArrow,
  getPolygonArea,
  createLushu,
  createGLLushu,
  drawBaiduMapLayer,
  drawTrackAnimation
} from './helper'

// const $: any = window.$
/**
 * mapClass gis地图基础类
 * [options description]
 * @type {[type]}
 */
export default class BMapClass {
  private options
  private overlays = []
  private arrowLays = []
  private ploylineDatas = []
  private mapCenter
  private mapConfig
  private isDraw = false
  private map
  private mapType
  private currentOverlay
  private drawingManager
  private drawingMode
  private GPSHeatOverlay

  constructor(options: GisMap.IBMapConfig) {
    const { center, mapConfig, isDraw, type } = options
    this.options = options
    this.mapCenter = center
    this.mapType = type
    // 是否开启绘制模式
    this.isDraw = isDraw
    this.mapConfig = Object.assign(
      {},
      { minZoom: this.options.minZoom, maxZoom: this.options.maxZoom },
      mapConfig
    )
    this.create()
    this.initEvent()
  }

  create() {
    this.map = creatMap(this.options.el, this.mapType, this.mapConfig)
    const poi = createPoint(this.mapCenter[0], this.mapCenter[1], this.mapType)
    this.map.clearOverlays()
    this.map.centerAndZoom(poi, this.options.zoom)
    this.map.enableScrollWheelZoom()
    this.drawing()
    ;(document.getElementsByClassName('BMapLib_Drawing_panel') as any)[0].style.display = 'none'
  }

  initEvent() {
    // 层级变化，改变箭头
    this.map.addEventListener('zoomend', () => {
      this.arrowDraw()
    })
  }

  // 鼠标绘制管理类
  drawing() {
    this.currentOverlay = null
    this.drawingManager = createDrawingManager(this.map)
    this.drawingManager.addEventListener('overlaycomplete', this.overlayComplete.bind(this))
  }

  // 判断是否为绘制状态 如果“是”的话 阻止操作
  isDrawingState() {
    if (this.drawingManager) return this.drawingManager._isOpen
  }

  // 监听层级 - 箭头改变
  arrowDraw() {
    if (this.arrowLays && this.ploylineDatas) {
      this._clearPolylines()
      this._drawArrowByPolylines()
    }
  }

  // 内部clear 针对箭头处理的方法
  _clearPolylines() {
    this.arrowLays.forEach(item => {
      if (item && item.length) {
        item.forEach(items => {
          this.map.removeOverlay(items)
        })
      }
    })
    this.arrowLays = []
  }
  // 内部画箭头 传一个ployline对象
  _drawArrow(polyline) {
    let arrowLen = 10
    const zoom = this.map.getZoom()
    if (zoom >= 15) {
      arrowLen = 6
    }
    return addArrow(polyline, arrowLen, Math.PI / 7, this.map, this.mapType)
  }

  // 内部画线,根据polyline数组 画箭头的方法
  _drawArrowByPolylines() {
    // 创建箭头
    this.arrowLays = this.ploylineDatas.map(item => {
      return this._drawArrow(item)
    })
  }

  //  关闭编辑模式
  closeEditorMode() {
    if (this.drawingManager !== undefined) {
      this.drawingManager.close()
    }
    // 默认隐藏
    // $('.BMapLib_Drawing_panel').css({
    //   display: 'none'
    // })
    ;(document.getElementsByClassName('BMapLib_Drawing_panel') as any)[0].style.display = 'none'
    if (this.currentOverlay) this.currentOverlay.disableEditing()
  }

  //打开编辑模式
  openEditorMode() {
    // if (this.drawingManager !== undefined) {
    //   this.drawingManager.open()
    // }

    // 默认隐藏
    // $('.BMapLib_Drawing_panel').css({
    //   display: 'block'
    // })
    console.log(document.getElementsByClassName('BMapLib_Drawing_panel'))
    ;(document.getElementsByClassName('BMapLib_Drawing_panel') as any)[0].style.display = 'block'
    if (this.currentOverlay) this.currentOverlay.enableEditing()
  }

  overlayComplete(e) {
    if (this.overlays.length === 1) {
      alert('每次只能框选一个区域,请重新框选')
      //this.openEditorMode()
      this.map.removeOverlay(e.overlay)
      return
    } else {
      this.drawingMode = e.drawingMode
      this.overlays.push(e.overlay)
      // 设置当前可编辑
      this.currentOverlay = e.overlay
      // this.openEditorMode()
      const overlayData = this.getCurOverlayData()
      this.options.overlayComplete(overlayData)
    }
    this.drawingManager.close()
  }

  // 画区域
  drawOverlay(arr) {
    const centerData = arr[0]
    const { lng, lat } = centerData
    const centerPoint = createPoint(lng, lat, this.mapType)
    this.map.panTo(centerPoint)
    this.map.enableScrollWheelZoom()
    if (arr.length === 1) {
      this.currentOverlay = drawCircle(centerData, this.mapType)
      this.drawingMode = 'circle'
    } else {
      this.currentOverlay = drawPolygon(arr, this.mapType)
    }

    this.map.addOverlay(this.currentOverlay)
    this.overlays.push(this.currentOverlay)
    // this.currentOverlay.enableEditing()
  }

  /**
   * 判断是否为绘画状态
   * @returns
   */
  isDrawState() {
    return this.currentOverlay !== null && this.currentOverlay !== undefined
  }

  /**
   * [获取当前编辑图层的数据 description]
   * @return {[type]} [description]
   */
  getCurOverlayData() {
    if (!this.isDrawState()) return
    let dataObj = Object.create(null)
    // 圆
    if (this.drawingMode === 'circle') {
      const radius = this.currentOverlay.getRadius()
      const { lng, lat } = this.currentOverlay.getCenter()
      const area = (Math.PI * radius * radius) / 1000000
      dataObj = {
        radius,
        area,
        center: [lng, lat]
      }
    } else {
      // 非圆
      const path = this.currentOverlay.getPath()
      const latstr = path
        .map(it => {
          return `{lng :${it.lng}, lat:${it.lat} }`
        })
        .join(',')
      console.log('drawPathCode:', latstr)
      const area = getPolygonArea(path)
      dataObj = {
        path,
        area
      }
    }
    dataObj.mode = this.drawingMode
    return dataObj
  }

  /**
   * [clearAllOverlay 清理所有覆盖物]
   * @return {[type]} [description]
   */
  clearAllOverlay() {
    if (this.isDrawingState()) return

    if (this.overlays.length) {
      for (let i = 0; i < this.overlays.length; i++) {
        this.map.removeOverlay(this.overlays[i])
      }
      this.overlays.length = 0
      // this.closeEditorMode()
      this.currentOverlay = null
      // this.map.clearOverlays();
    }
    // 清除覆盖物时，清除保存轨迹的数据
    this.ploylineDatas = []
    this.map.clearOverlays()
  }

  // 创建标记
  createMarker(opt) {
    const marker = createMarker(opt, this.mapType)
    this.map.addOverlay(marker)
    // 绑定事件
    marker.addEventListener('click', e => {
      this.clickHandler(e, opt.dataObj)
      // marker.setAnimation(BMAP_ANIMATION_BOUNCE);
      // setTimeout(() => {
      //     marker.setAnimation(null);
      // }, 100)
    })
  }

  clickHandler(e, dataObj) {
    this.options.onClick(e, dataObj)
  }

  // 打开panel
  openInfoPanel(content, e) {
    const point = createPoint(e.point.lng, e.point.lat, this.mapType)
    const infoWindow = createInfoWindow(content)
    this.map.openInfoWindow(infoWindow, point) // 开启信息窗口
  }

  destory() {
    this.map = null
    this.GPSHeatOverlay = null
  }

  // 添加一组标记
  addMarkers(marks) {
    if (marks && marks.length) {
      marks.forEach(mark => {
        this.createMarker(mark)
      })
    }
  }

  /**
   * 根据点适配 地图层级
   * 只有一个点时，默认显示地图最大层级，设置为系统地图层级
   * @param  {Array} marks 一组坐标
   * @return {[type]}   [description]
   */
  markerZoomAdapter(marks) {
    const view = this.map.getViewport(marks)
    if (marks.length === 1) {
      this.map.centerAndZoom(view.center, this.options.zoom)
    } else {
      this.map.centerAndZoom(view.center, view.zoom)
    }
  }
  // 根据一组经纬度画多边形
  drawPolygon(arr) {
    this.currentOverlay = drawPolygon(arr, this.mapType)
    this.map.addOverlay(this.currentOverlay)
  }
  // 海量点
  drawPointCollection(arr, opt) {
    if (arr && arr.length) {
      arr.forEach(item => {
        const PointCollection = drawPointCollection(item, opt, this.mapType)
        this.map.addOverlay(PointCollection)
        PointCollection.addEventListener('click', e => {
          this.clickHandler(e, item.dataObj)
        })
      })
    }
  }
  // 画圆
  drawCircle(config) {
    this.currentOverlay = drawCircle(config, this.mapType)
    this.map.addOverlay(this.currentOverlay)
  }
  // 画轨迹线
  drawPolyline(arr) {
    const polyline = drawPolyline(arr, this.mapType)
    this.map.addOverlay(polyline)
    // 保存传入的箭头数据
    this.ploylineDatas.push(polyline)
    this.arrowLays.push(this._drawArrow(polyline))
  }

  // 渲染热地图
  drawHeatMap(obj) {
    const { data, heatMax } = obj
    this.markerZoomAdapter(data)
    this.GPSHeatOverlay = createHeatmapOverlay(this.map)
    this.map.addOverlay(this.GPSHeatOverlay)
    try {
      this.GPSHeatOverlay.setDataSet({
        data: data,
        max: heatMax ? heatMax * 0.8 : 100
      })
      this.GPSHeatOverlay.show()
    } catch (error) {
      console.warn('热力图组件未检测到符合标准的热力数据，请检查数据是否正常')
    }
  }

  // mapv
  drawBaiduMapLayer(arr, opt) {
    const mapvLayer = drawBaiduMapLayer(this.map, arr, opt)
    return mapvLayer
  }
  // 轨迹动画
  drawTrackAnimation(arr, opt) {
    const polyline = drawPolyline(arr, this.mapType)
    drawTrackAnimation(this.map, polyline, opt)
  }

  // 绘制轨迹
  drawTrajectory(arr) {
    let markerConfig: any = null
    for (let j = 0; j < arr.length; j++) {
      if (j === 0) {
        markerConfig = {
          lng: arr[j].lng,
          lat: arr[j].lat,
          colorType: 'start',
          dataObj: arr[j].dataObj
        }
      } else if (j === arr.length - 1) {
        // 终点
        markerConfig = {
          lng: arr[j].lng,
          lat: arr[j].lat,
          colorType: 'end',
          dataObj: arr[j].dataObj
        }
      } else {
        // 除起点和终点外的其他点
        markerConfig = {
          lng: arr[j].lng,
          lat: arr[j].lat,
          colorType: 'coffee',
          dataObj: arr[j].dataObj
        }
      }
      if (markerConfig) {
        this.createMarker(markerConfig)
      }
    }
    this.drawPolyline(arr)
  }
  // 路书
  drawLushu(arr) {
    const arrPoints = []
    arr.forEach(it => {
      const point = createPoint(it.lng, it.lat, this.mapType)
      arrPoints.push(point)
    })
    const lushu = createLushu(this.map, arrPoints)
    return lushu
  }
  // GL大地路书
  drawMapGLLushu(arr) {
    const polyline = drawPolyline(arr, this.mapType)
    const lushu = createGLLushu(this.map, polyline)
    return lushu
  }
}
