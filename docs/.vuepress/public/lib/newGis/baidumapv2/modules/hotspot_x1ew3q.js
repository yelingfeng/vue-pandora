/* 百度地图API V2 模块
 * 此模块必须配套使用baidumap_offline_v2_20160822.js对
 * 获取模块的方法：
 * http://api0.map.bdimg.com/getmodules?v=2.0&mod=模块1,模块2
 * 模块名称就是文件名
 * www.xiaoguo123.com 整理
 */
_jsload2 &&
  _jsload2(
    'hotspot',
    'z.Se(function(a){function b(a){var b=this.R;b.Ne=[];if(this.Oh)for(var c in this.Oh)if(!(0==c.indexOf("vector_")&&!this.Ub()||0==c.indexOf("tile_")&&this.Ub())){var g=this.Oh[c],i;for(i in g){var k=g[i];if(!(k.Qh>this.fa()||k.Cf<this.fa())){var l=this.ac(k.ha());l.x<this.width&&l.y<this.height&&a.offsetX<l.x+k.wv[1]&&(a.offsetX>l.x-k.wv[3]&&a.offsetY>l.y-k.wv[0]&&a.offsetY<l.y+k.wv[2])&&b.Ne.push(k)}}}}function c(){a.R.GK&&0<a.R.Ne.length?(a.platform.style.cursor="pointer",a.R.GK=q):(a.R.Ne=[],a.platform.style.cursor= a.K.Wb)}a.R.Zt=new rc("",{ya:new L(15,-3),Rp:{border:"1px solid #aaa",background:"#fffec2",whiteSpace:"nowrap",font:"12px "+F.fontFamily,mozBoxShadow:"1px 2px 6px #666",webkitBoxShadow:"1px 2px 6px #666",boxShadow:"1px 2px 6px #666",padding:"2px 4px"}});a.addEventListener("mousemove",function(c){if(!(c.$a&&!(c.$a instanceof lc)||c.zb)){var e=this.R,f=e.Ne.slice(0);b.call(this,c);for(var g=e.Ne.slice(0),i=0;i<f.length;i++)for(var k=0;k<g.length;k++)f[i]===g[k]&&(f.splice(i,1),i--,g.splice(k,1),k--); if(0<f.length){var l=new N("onhotspotout");l.spots=f.slice(0);this.dispatchEvent(l)}if(0==e.Ne.length&&!e.Mx)this.platform.style.cursor!=this.K.Wb&&(this.platform.style.cursor=this.K.Wb),e.Qp&&(clearTimeout(e.Qp),e.Qp=p),e.DF=setTimeout(function(){e.Zt.U()},400);else if(0<g.length&&(this.platform.style.cursor="pointer",l=new N("onhotspotover"),l.spots=g.slice(0),this.dispatchEvent(l),e.Qp&&(clearTimeout(e.Qp),e.Qp=p),e.DF&&(clearTimeout(e.DF),e.DF=p),l.spots[0].WD()))e.Qp=setTimeout(function(){e.Zt.bd(l.spots[0].WD()); e.Zt.sa(c.point);e.Zt.show();a.Ia(e.Zt)},400)}});a.addEventListener("clickex",function(a){var c=this.R;a.overlay||(0==c.Ne.length&&b.call(this,a),0<c.Ne.length&&(a=new N("onhotspotclick"),a.spots=c.Ne.slice(0),a.spots.sort(function(a,b){return a.ha().lat-b.ha().lat}),this.dispatchEvent(a),c.Ne.length=0))});a.addEventListener("load",c);a.addEventListener("moveend",c);a.addEventListener("zoomend",c);a.addEventListener("dragend",function(){this.R.GK=o})}); '
  )
