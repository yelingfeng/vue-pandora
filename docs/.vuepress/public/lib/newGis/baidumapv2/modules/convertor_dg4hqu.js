/* 百度地图API V2 模块
 * 此模块必须配套使用baidumap_offline_v2_20160822.js对
 * 获取模块的方法：
 * http://api0.map.bdimg.com/getmodules?v=2.0&mod=模块1,模块2
 * 模块名称就是文件名
 * www.xiaoguo123.com 整理
 */
_jsload2 &&
  _jsload2(
    'convertor',
    'x.extend(ic.prototype,{SP:function(){for(var a=0,b=this.Oa.length;a<b;a++){var c=this.Oa[a];this[c.method].apply(this,c.arguments)}delete this.Oa},translate:function(a,b,c,d){b=b||1;c=c||5;if(10<a.length)d&&d({status:25});else{var e=z.Hc+"geoconv/v1/?coords=";x.Fb(a,function(a){e+=a.lng+","+a.lat+";"});e=e.replace(/;$/gi,"");e=e+"&from="+b+"&to="+c+"&ak="+pa;Qb(e,function(a){if(0===a.status){var b=[];x.Fb(a.result,function(a){b.push(new z.Point(a.x,a.y))});delete a.result;a.points=b}d&&d(a)})}}}); '
  )
