/* 百度地图API V2 模块
 * 此模块必须配套使用baidumap_offline_v2_20160822.js对
 * 获取模块的方法：
 * http://api0.map.bdimg.com/getmodules?v=2.0&mod=模块1,模块2
 * 模块名称就是文件名
 * www.xiaoguo123.com 整理
 */
_jsload2 &&
  _jsload2(
    'groundoverlay',
    'x.extend(sc.prototype,{wb:function(){if(this.map){this.V||this.Hj();var a=this.map.fa();if(a<this.z.rs||a>this.z.qs)this.U();else{var b=this.z.gb.re(),c=this.z.gb.kf(),a=this.map.Re(b).x,d=this.map.Re(c).y,c=this.map.Re(c).x,b=this.map.Re(b).y;this.V.style.left=a+"px";this.V.style.top=d+"px";this.V.style.width=c-a+"px";this.V.style.height=b-d+"px";this.show()}}},draw:function(){this.wb()},Hj:function(){if(!this.V){this.V=document.createElement("div");var a=this.V.style;a.cssText="position: absolute; -moz-user-select: none; overflow: hidden;"; a.zIndex=jc.ym(this.z.gb.re().lat);this.z.opacity&&(a.opacity=this.z.opacity,a.filter="alpha(opacity="+100*parseInt(this.z.opacity,10)+")");this.Ng=document.createElement("img");this.Ng.style.width="100%";this.z.p_&&(this.Ng.style.height="100%");this.V.appendChild(this.Ng);var b=this;this.Ng.onload=function(){b.P0=b.Ng.naturalWidth||b.Ng.width;b.O0=b.Ng.naturalHeight||b.Ng.height};this.z.Em&&(this.Ng.src=this.z.Em);this.map.Qf().zE.appendChild(this.V);b=this;x.M(this.V,"click",function(a){b.dispatchEvent(new N("click"), a)});x.M(this.V,"dblclick",function(a){b.dispatchEvent(new N("dblclick"),a)})}},MZ:function(a){this.z.gb=a;this.map&&this.wb();this.V.style.zIndex=jc.ym(this.z.gb.re().lat)},Gd:function(){return this.z.gb},uF:function(a){this.z.opacity=a;this.V.style.opacity=a;this.V.style.filter="alpha(opacity="+100*parseInt(a,10)+")"},qX:function(){return this.z.opacity},SZ:function(a){this.z.Em=a;this.Ng&&(this.Ng.src=a)},eX:function(){return this.z.Em},Y3:function(a){this.z.rs=a},h2:function(){return this.z.rs}, X3:function(a){this.z.qs=a},g2:function(){return this.z.qs}});sc.prototype.setBounds=sc.prototype.MZ;sc.prototype.getBounds=sc.prototype.Gd;sc.prototype.setOpacity=sc.prototype.uF;sc.prototype.getOpacity=sc.prototype.qX;sc.prototype.setImageURL=sc.prototype.SZ;sc.prototype.getImageURL=sc.prototype.eX;sc.prototype.setDispalyOnMinLevel=sc.prototype.W3;sc.prototype.setDispalyOnMaxLevel=sc.prototype.V3; '
  )
