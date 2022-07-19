/* 百度地图API V2 模块
 * 此模块必须配套使用baidumap_offline_v2_20160822.js对
 * 获取模块的方法：
 * http://api0.map.bdimg.com/getmodules?v=2.0&mod=模块1,模块2
 * 模块名称就是文件名
 * www.xiaoguo123.com 整理
 */
_jsload2 &&
  _jsload2(
    'drawbysvg',
    'function mg(a){this.C=a;this.wG="http://www.w3.org/2000/svg";this.uU={strokeweight:"stroke-width",strokecolor:"stroke",fillcolor:"fill",strokeopacity:"stroke-opacity",fillopacity:"fill-opacity",strokestyle:"stroke-dasharray"};this.cf=this.Nz();this.Lb="svg"}mg.prototype=new z.Xy;var ng=mg.prototype; ng.Nz=function(){var a=this.cf=K("svg",{},this.wG);a.setAttribute("version","1.1");a.setAttribute("type","system");a.style.position="absolute";this.vF();this.C.Qf().ot.appendChild(a);x.M(a,G()?"touchstart":"mousedown",Bb);return a}; ng.vF=function(){if(this.cf){var a=this.cf,b=this.C,c=b.K.Vw,d=b.width+2*c,e=b.height+2*c,f=-b.offsetX-c,b=-b.offsetY-c;this.setAttribute(a,"x",d+"px");this.setAttribute(a,"y",e+"px");this.setAttribute(a,"viewBox",f+" "+b+" "+d+" "+e);a=a.style;a.top=b+"px";a.left=f+"px";a.width=d+"px";a.height=e+"px"}};ng.z2=t("cf");ng.setAttribute=function(a,b,c,d){if(a)return"strokestyle"==b&&(c="solid"==c?0:2*d),a.setAttributeNS(p,this.Sq(b),c||"none"),a};ng.Sq=function(a){return this.uU[a]||a}; ng.wo=function(){var a=K("path",{},this.wG);this.setAttribute(a,"stroke-linejoin","round");this.setAttribute(a,"stroke-linecap","round");this.setAttribute(a,"fill-rule","evenodd");this.cf.appendChild(a);return a};ng.ge=function(a,b){var c=this.hA(b)||"M -9999,-9999";this.setAttribute(a,"d",c)};ng.hA=function(a){if(0==a.length)return"";var b=[];x.jc.Fb(a,function(a){if(!(2>a.length)){b.push("M "+a[0].x+" "+a[0].y+" L");for(var d=1,e=a.length;d<e;d++)b.push(a[d].x),b.push(a[d].y)}});return b.join(" ")}; z.AP=mg; '
  )
