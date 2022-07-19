var bdmapcfg = {
  imgext: '.jpg', // 瓦片图的后缀 ------ 根据需要修改，一般是 .png .jpg
  // tiles_dir: 'http://172.17.18.51:8081/map/normal/Layer' // 瓦片图的目录，为空默认在 baidumap_v2/tiles/ 目录
  // tiles_dir: 'http://10.120.2.106:9080/Map/Layer' // 湖南
  tiles_dir: 'http://10.109.3.3:9080/Map/Layer'
  //	'tiles_dir':'http://127.0.0.1:8081/normal/Layer'
  // http://172.17.20.225:8080/map/normal/Layer/
  // http://127.0.0.1:8081/dark/Layer
  // http://172.17.20.225:8080/map/dark
  // http://192.168.3.115:8081/transparent/Layer
  // http://127.0.0.1:8081/yinchuan_lan
  // http://172.17.20.225:8080/map/dark_no_road
  // http://127.0.0.1:8081/qianlan
  // http://172.17.18.14:8080/map/wathet/Layer/'
}

// ////////////////下面的保持不动///////////////////////////////////
var scripts = document.getElementsByTagName('script')

var JS__FILE__ = scripts[scripts.length - 1].getAttribute('src')

bdmapcfg.home = JS__FILE__.substr(0, JS__FILE__.lastIndexOf('/') + 1) // 地图API主目录, images,tiles都在此目录下
;(function() {
  window.BMap_loadScriptTime = new Date().getTime()
  // 加载地图API主文件
  document.write(
    '<script type="text/javascript" src="' +
      bdmapcfg.home +
      'baidumap_offline_v2_20160921_min.js"></script>'
  )
})()

function localPointToLanLat(x, y) {
  var tmpRecord = new Object()
  tmpRecord.x = x
  tmpRecord.y = y
  console.log(tmpRecord)
  // var projection = map.getMapType().getProjection();
  //			var pointTmp = projection.pointToLngLat(tmpRecord)
  var pointTmp = new BMap.MercatorProjection().pointToLngLat(tmpRecord)
  console.log('逆向经纬度：' + pointTmp.lng + ',' + pointTmp.lat)
  return pointTmp
}
