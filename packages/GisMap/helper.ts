const BMap: any = window.BMap
const BMapLib: any = window.BMapLib
const BMapGL: any = window.BMapGL
const BMapGLLib: any = window.BMapGLLib
const mapv: any = window.mapv

const areaConfig = {
  strokeColor: 'red',
  strokeWeight: 1,
  strokeOpacity: 0.8,
  fillColor: '#da416f',
  fillOpacity: 0.2
}
// win样式配置
const winConfig = {
  width: 250, // 信息窗口宽度
  height: 0, // 信息窗口高度
  enableMessage: true // 设置允许信息窗发送短息
}

// line 样式配置
const lineConfig = {
  strokeColor: '#da416f', // 边线颜色。
  fillColor: '#da416f', // 填充颜色。当参数为空时，圆形将没有填充效果。
  strokeWeight: 2, // 边线的宽度，以像素为单位。
  strokeOpacity: 0.8, // 边线透明度，取值范围0 - 1。
  fillOpacity: 0.8, // 填充的透明度，取值范围0 - 1。
  strokeStyle: 'solid' // 边线的样式，solid或dashed。
}

// 画图工具 样式配置
const drawOptions = {
  strokeColor: '#da416f', // 边线颜色。
  fillColor: '#da416f', // 填充颜色。当参数为空时，圆形将没有填充效果。
  strokeWeight: 1, // 边线的宽度，以像素为单位。
  strokeOpacity: 0.8, // 边线透明度，取值范围0 - 1。
  fillOpacity: 0.4, // 填充的透明度，取值范围0 - 1。
  strokeStyle: 'solid' // 边线的样式，solid或dashed。
}

/**
 * [创建地图]
 * @param  {Dom} map dom
 * @param {Object} config 地图配置
 * @return {[type]}     [description]
 */
export const creatMap = (map, mapType, config) => {
  if (mapType === 'gl') {
    return new BMapGL.Map(map, config)
  }
  return new BMap.Map(map, config)
}

/**
 * [createPoint 创建点 ]
 * @param  {[type]} lng [description]
 * @param  {[type]} lat [description]
 * @return {[type]}     [description]
 */
export const createPoint = (lng, lat, mapType) => {
  if (mapType === 'gl') {
    return new BMapGL.Point(Number(lng), Number(lat))
  }
  return new BMap.Point(Number(lng), Number(lat))
}

/**
 * //绘制箭头的函数
 * @param {[type]} polyline   [description]
 * @param {[type]} length     [description]
 * @param {[type]} angleValue [description]
 * @param {[type]} map        [description]
 */
export const addArrow = (polyline, length, angleValue, map, mapType) => {
  const linePoint = polyline.getPath() //线的坐标串
  const arrowCount = linePoint.length
  const arrowArr = [] // 箭头对象数组, 用于删除
  for (let i = 1; i < arrowCount; i++) {
    //在拐点处绘制箭头
    const pixelStart = map.pointToPixel(linePoint[i - 1])
    const pixelEnd = map.pointToPixel(linePoint[i])
    const angle = angleValue //箭头和主线的夹角
    const r = length // r/Math.sin(angle)代表箭头长度
    let delta = 0 //主线斜率，垂直时无斜率
    let param = 0 //代码简洁考虑
    let pixelTemX, pixelTemY //临时点坐标
    let pixelX, pixelX1, pixelY, pixelY1 //箭头两个点
    if (pixelEnd.x - pixelStart.x === 0) {
      //斜率不存在是时
      pixelTemX = pixelEnd.x
      if (pixelEnd.y > pixelStart.y) {
        pixelTemY = pixelEnd.y - r
      } else {
        pixelTemY = pixelEnd.y + r
      }
      //已知直角三角形两个点坐标及其中一个角，求另外一个点坐标算法
      pixelX = pixelTemX - r * Math.tan(angle)
      pixelX1 = pixelTemX + r * Math.tan(angle)
      pixelY = pixelY1 = pixelTemY
    } else {
      //斜率存在时
      delta = (pixelEnd.y - pixelStart.y) / (pixelEnd.x - pixelStart.x)
      param = Math.sqrt(delta * delta + 1)
      if (pixelEnd.x - pixelStart.x < 0) {
        //第二、三象限
        pixelTemX = pixelEnd.x + r / param
        pixelTemY = pixelEnd.y + (delta * r) / param
      } else {
        //第一、四象限
        pixelTemX = pixelEnd.x - r / param
        pixelTemY = pixelEnd.y - (delta * r) / param
      }
      //已知直角三角形两个点坐标及其中一个角，求另外一个点坐标算法
      pixelX = pixelTemX + (Math.tan(angle) * r * delta) / param
      pixelY = pixelTemY - (Math.tan(angle) * r) / param
      pixelX1 = pixelTemX - (Math.tan(angle) * r * delta) / param
      pixelY1 = pixelTemY + (Math.tan(angle) * r) / param
    }
    if (mapType === 'gl') {
      const pointArrow = map.pixelToPoint(new BMapGL.Pixel(pixelX, pixelY))
      const pointArrow1 = map.pixelToPoint(new BMapGL.Pixel(pixelX1, pixelY1))
      const Arrow = new BMapGL.Polyline([pointArrow, linePoint[i], pointArrow1], lineConfig)
      map.addOverlay(Arrow)
      arrowArr.push(Arrow)
    } else {
      const pointArrow = map.pixelToPoint(new BMap.Pixel(pixelX, pixelY))
      const pointArrow1 = map.pixelToPoint(new BMap.Pixel(pixelX1, pixelY1))
      const Arrow = new BMap.Polyline([pointArrow, linePoint[i], pointArrow1], lineConfig)
      map.addOverlay(Arrow)
      arrowArr.push(Arrow)
    }
  }
  return arrowArr
}

/**
 *
 * [根据一组经纬度画多边形]
 * @param arr {Array{Object}}``
 * @return {[type]} [description]
 */
export const drawPolygon = (arr, mapType) => {
  if (arr && arr.length) {
    const points = arr.map(({ lng, lat }) => {
      return createPoint(lng, lat, mapType)
    })
    return new BMap.Polygon(points, areaConfig)
  }
}

/**
 * [画轨迹线]
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
export const drawPolyline = (arr, mapType) => {
  if (arr && arr.length) {
    const points = arr.map(({ lng, lat }) => {
      return createPoint(lng, lat, mapType)
    })
    // var sy = new BMap.Symbol(7, {
    //     scale: 0.4, //图标缩放大小
    //     strokeColor: '#fff', //设置矢量图标的线填充颜色
    //     strokeWeight: 1, //设置线宽
    //     strokeOpacity: 1
    // });
    // var icons = new BMap.IconSequence(sy, '10', '30');
    // lineConfig['icons'] = [icons];
    if (mapType === 'gl') {
      const polyline = new BMapGL.Polyline(points, lineConfig)
      return polyline
    }
    const polyline = new BMap.Polyline(points, lineConfig)
    return polyline
  }
}

/**
 * [画圆]
 * @param  {[type]} lng    [description]
 * @param  {[type]} lat    [description]
 * @param  {[type]} radius [description]
 * @return {[type]}        [description]
 */
export const drawCircle = ({ lng, lat, radius }, mapType) => {
  const circle = new BMap.Circle(createPoint(lng, lat, mapType), radius, areaConfig)
  return circle
}

/**
 * [创建标记marker对象]
 * @param  {String} lng              [description]
 * @param  {String} lat              [description]
 * @param  {String} [colorType='red' }]            [description]
 * @return {[type]}                  [description]
 */
export const createMarker = ({ lng, lat, colorType = 'red', text }, mapType) => {
  const path = `./lib/vender/gis/images/${colorType}Marker.png`

  const point = createPoint(lng, lat, mapType)
  const colorList = {
    blue: '#00a4ff',
    red: '#F65050',
    green: '#30b513'
  }
  if (mapType === 'gl') {
    const myIcon = new BMapGL.Icon(path, new BMapGL.Size(25, 25))
    const marker = new BMapGL.Marker(point, {
      icon: myIcon
    })

    if (text) {
      const label = new BMapGL.Label(text, {
        offset: new BMapGL.Size(0, -20)
      })
      label.setStyle({
        border: 'none',
        fontSize: '12px',
        color: '#fff',
        background: colorList[colorType] || '#00a4ff',
        padding: '2px 6px',
        borderRadius: '3px'
      })
      marker.setLabel(label)
    }
    return marker
  }
  const myIcon = new BMap.Icon(path, new BMap.Size(25, 25))
  const marker = new BMap.Marker(point, {
    icon: myIcon
  })
  if (text) {
    const label = new BMap.Label(text, {
      offset: new BMap.Size(0, -20)
    })
    label.setStyle({
      border: 'none',
      fontSize: '12px',
      color: '#fff',
      background: colorList[colorType] || '#00a4ff',
      padding: '2px 6px',
      borderRadius: '3px'
    })
    marker.setLabel(label)
  }
  return marker
}

/**
 * [画海量点]
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
export const drawPointCollection = (arr, opt, mapType) => {
  if (arr && arr.length) {
    const points = arr.map(({ lng, lat }) => {
      return createPoint(lng, lat, mapType)
    })
    const options = {
      size: opt.size,
      shape: opt.shape,
      color: opt.color
    }
    const pointCollection = new BMap.PointCollection(points, options)
    return pointCollection
  }
}
/**
 * [创建信息窗口对象]
 * @param  {String} content [description]
 * @return {[type]}         [description]
 */
export const createInfoWindow = content => {
  // 创建信息窗口对象
  const infoWindow = new BMap.InfoWindow(content, winConfig)
  return infoWindow
}
/**
 * [创建画图工具对象]
 * @return {[type]} [description]
 */
export const createDrawingManager = map => {
  return new BMapLib.DrawingManager(map, {
    isOpen: false, // 是否开启绘制模式
    enableDrawingTool: true, // 是否显示工具栏
    drawingToolOptions: {
      anchor: window.BMAP_ANCHOR_TOP_RIGHT, // 位置
      offset: new BMap.Size(5, 5), // 偏离值
      // 鼠标绘制工具
      drawingModes: [
        window.BMAP_DRAWING_POLYGON,
        window.BMAP_DRAWING_CIRCLE,
        window.BMAP_DRAWING_RECTANGLE
      ]
    },
    circleOptions: drawOptions, // 圆的样式
    polylineOptions: drawOptions, // 线的样式
    polygonOptions: drawOptions, // 多边形的样式
    rectangleOptions: drawOptions // 矩形的样式
  })
}
/**
 * 创建热力图层
 * @param  {[type]} heatRadius [description]
 * @return {[type]}            [description]
 */
export const createHeatmapOverlay = map => {
  let heatRadius = 30
  const zoom = map.getZoom()
  switch (zoom) {
    case 19:
      heatRadius = 40
      break
    case 18:
      heatRadius = 30
      break
    case 17:
      heatRadius = 23
      break
    case 16:
      heatRadius = 17
      break
    case 15:
      heatRadius = 12
      break
    default:
      heatRadius = 10
      break
  }
  const heatMapColorConfig = {
    0.3: 'rgb(0,42, 255)',
    0.5: 'rgb(123, 240, 123)',
    0.6: 'rgb(242, 248, 90)',
    0.8: 'rgb(247, 73, 66)'
  }
  const heatMapOlay = new BMapLib.HeatmapOverlay({
    radius: heatRadius,
    visible: true,
    gradient: heatMapColorConfig
  })
  return heatMapOlay
}

/**
 * 获取一段path的区域
 * @param  {[type]} path [description]
 * @return {[type]}      [description]
 */
export const getPolygonArea = path => {
  const ply = new BMap.Polygon(path)
  const area = BMapLib.GeoUtils.getPolygonArea(ply) / 1000000
  return area
}

// // 重写路书方法 添加动态绘制路线代码
// BMapLib.LuShu.prototype._move = function(initPos, targetPos, effect) {
//   const pointsArr = [initPos, targetPos] //点数组
//   const me = this
//   //当前的帧数
//   let currentCount = 0
//   //步长，米/秒
//   const timer = 100
//   const step = this._opts.speed / (1000 / timer)
//   //初始坐标
//   const init_pos = this._projection.lngLatToPoint(initPos)
//   //获取结束点的(x,y)坐标
//   const target_pos = this._projection.lngLatToPoint(targetPos)
//   //总的步长
//   const count = Math.round(me._getDistance(init_pos, target_pos) / step)

//   //显示折线
//   // 画线操作 （画轨迹）
//   this._map.addOverlay(
//     new BMap.Polyline(pointsArr, {
//       strokeColor: this._opts.color, // 设置颜色
//       strokeWeight: 5, // 宽度
//       strokeOpacity: 0.5 // 透明度
//     })
//   )

//   //如果小于1直接移动到下一点
//   if (count < 1) {
//     me._moveNext(++me.i)
//     return
//   }
//   me._intervalFlag = setInterval(function() {
//     //两点之间当前帧数大于总帧数的时候，则说明已经完成移动
//     if (currentCount >= count) {
//       clearInterval(me._intervalFlag)
//       //移动的点已经超过总的长度
//       if (me.i > me._path.length) {
//         return
//       }
//       //运行下一个点
//       me._moveNext(++me.i)
//     } else {
//       currentCount++
//       const x = effect(init_pos.x, target_pos.x, currentCount, count),
//         y = effect(init_pos.y, target_pos.y, currentCount, count),
//         pos = me._projection.pointToLngLat(new BMap.Pixel(x, y))
//       //设置marker
//       if (currentCount == 1) {
//         let proPos = null
//         if (me.i - 1 >= 0) {
//           proPos = me._path[me.i - 1]
//         }
//         if (me._opts.enableRotation == true) {
//           me.setRotation(proPos, initPos, targetPos)
//         }
//         if (me._opts.autoView) {
//           if (!me._map.getBounds().containsPoint(pos)) {
//             me._map.setCenter(pos)
//           }
//         }
//       }
//       //正在移动
//       me._marker.setPosition(pos)
//       //设置自定义overlay的位置
//       me._setInfoWin(pos)
//     }
//   }, timer)
// }

// mapv
export const drawBaiduMapLayer = (map, arr, opt) => {
  const data = []
  const viewsArr = []
  arr.forEach(it => {
    const cityCenter = mapv.utilCityCenter.getCenterByCityName(it.name)
    data.push({
      geometry: {
        type: 'Point',
        coordinates: [
          cityCenter.lng - 2 + Math.random() * 4,
          cityCenter.lat - 2 + Math.random() * 4
        ]
      },
      count: it.value,
      time: 100 * Math.random()
    })
    viewsArr.push({
      lng: cityCenter.lng - 2 + Math.random() * 4,
      lat: cityCenter.lat - 2 + Math.random() * 4
    })
  })
  const view = map.getViewport(viewsArr)
  map.centerAndZoom(view.center, view.zoom)
  const dataSet = new mapv.DataSet(data)
  const mapvLayer = new mapv.baiduMapLayer(map, dataSet, opt)
  return mapvLayer
}

// 轨迹动画
export const drawTrackAnimation = (map, pl, opt) => {
  setTimeout(() => {
    const trackAni = new BMapGLLib.TrackAnimation(map, pl, opt)
    trackAni.start()
  }, 1000)
}

// 路书
export const createLushu = (map, arrPoints) => {
  const CAR = `./lib/vender/gis/images/carMarker.png`
  const lushu = new BMapLib.LuShu(map, arrPoints, {
    defaultContent: '',
    // defaultContent: `号码${index + 1}`, // 路书展示内容
    autoView: true, // 是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
    // 图标设置
    icon: new BMap.Icon(CAR, new BMap.Size(52, 52)),
    speed: 500, // 速度
    enableRotation: true, // 是否设置marker随着道路的走向进行旋转
    landmarkPois: [
      // 停顿点   html 展示内容   pauseTime 停留时间 3s
      //{ lng: 101.8137711066657, lat: 36.61314270812945, html: '加油站', pauseTime: 3 }
    ]
    // 用来轨迹运动的时候传入不同的颜色值
    // color: colors[index % datas.mapData.length]
  })
  return lushu
}

// GL路书
export const createGLLushu = (map, polyline) => {
  const CAR = `./lib/vender/gis/images/carMarker.png`
  const lushu = new BMapGLLib.LuShu(map, polyline.getPath(), {
    autoCenter: true,
    icon: new BMapGL.Icon(CAR, new BMapGL.Size(48, 48), { anchor: new BMapGL.Size(24, 24) }),
    speed: 500,
    enableRotation: true
  })
  return lushu
}
