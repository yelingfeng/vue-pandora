/* 百度地图API V2 模块
 * 此模块必须配套使用baidumap_offline_v2_20160822.js对
 * 获取模块的方法：
 * http://api0.map.bdimg.com/getmodules?v=2.0&mod=模块1,模块2
 * 模块名称就是文件名
 * www.xiaoguo123.com 整理
 */
_jsload2 &&
  _jsload2(
    'coordtransutils',
    'x.extend(eb,{ZU:function(a,b,c){var d=R.xb(a),a=b.lc,d=hc.QD(b.Vb||"bj",d),d=new H(d.x,d.y),e=b.fa(),e=b.oa().Bc(e),b=b.yb(),b=new Q(Math.round((d.lng-a.lng)/e+b.width/2),Math.round((a.lat-d.lat)/e+b.height/2));c&&c(b)},YU:function(a,b,c){var d=b.fa(),d=b.oa().Bc(d),e=b.yb(),f=b.lc,b=b.Vb,a=new H(f.lng+d*(a.x-e.width/2),f.lat-d*(a.y-e.height/2)),a=hc.PD(b||"bj",a),a=new H(a.lng,a.lat),a=R.Eb(a);c&&c(a)}}); '
  )
