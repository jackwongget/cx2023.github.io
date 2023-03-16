!function(){
function t(t){
return $++,t+"_"+$;
}
function e(t){
for(var e=[],n=t;n.$parent;){
for(var a=0,o=n.$parent.$children.length;o>a;a++)if(n===n.$parent.$children[a]){
e.unshift(a);
break;
}
n=n.$parent;
}
return e;
}
function n(t,e){
for(var n=0;n<e.length;++n)if(e[n]==t)return n;
}
function a(t){
var e={},o=[],r=t.$refs,i=t.$children;
for(var u in r)if(r.hasOwnProperty(u)){
var s=r[u];
if(Array.isArray(s)){
for(var c=[],d=0;d<s.length;++d)c.push(n(s[d],i));
e[u]=c;
}else e[u]=n(s,i);
}
for(var d=0;d<i.length;++d)o.push(a(i[d]));
return{
maps:e,
children:o
};
}
function o(){
function n(e){
return function(n,a,o){
if(o)return e(n,a);
n.ID=t("setTimeout"),n._startTime=+new I-y;
var r=function(){
var t={
type:"setTimeout",
ID:n.ID,
time:n._startTime,
vuedata:{}
};
t.time=D?I.now()-y:0,n(),t.vuedata=D?u(v):null,h.push(t);
},i=e(r,a);
return i;
};
}
function o(e){
return function(n,a,o){
if(o)return e(n,a);
n._ID=t("setInterval"),n._startTime=+new I-y;
var r=function(){
var t={
type:"setInterval",
ID:n._ID,
time:n._startTime,
vuedata:{}
};
t.time=D?I.now()-y:0,n&&n(),t.vuedata=D?u(v):null,h.push(t);
};
return e(r,a);
};
}
var c=seajs.use;
seajs.use=function(t){
window.rawCommonData=JSON.stringify(window.commonData),window.rawCgiData=JSON.stringify(window.cgiData),
c(t,function(e){
e instanceof Vue&&(f=t.match(/\.js$/)?t:t+".js",v=e,m=a(v),document.addEventListener("vuest",function(t){
T&&s.apply(null,t.detail.data);
}));
});
};
var d=window.setTimeout;
window.setTimeout=n(d);
window.setInterval;
window.setInterval=o(window.setInterval);
var p=window.XMLHttpRequest.prototype.open;
window.XMLHttpRequest.prototype.open=function(){
var e=this,n=[].slice.call(arguments),a=n[0],o=n[1];
return e.donotHock||(e.vueId=t("ajax")),e.vueurl=o,e.method=a,e.startTime=+new I,
setTimeout(function(){
var t=e.onreadystatechange||function(){};
e.onreadystatechange=function(){
var n={
type:"ajax",
ID:e.vueId||0,
request:{
url:e.vueurl,
method:e.method
},
response:{
status:void 0,
readyState:0,
response:"",
costTime:0
},
time:0,
vuedata:D?u(v):null
},a={},o=t.apply(e,arguments);
return e.donotHock||4!=e.readyState||(a.status=e.status,a.readyState=e.readyState,
a.response=e.response,a.costTime=+new I-(e.startTime||+new I),n.response=a,n.time=D?I.now()-y:0,
n.vuedata=D?u(v):null,h.push(n)),o;
};
},0,!0),p.apply(e,n);
},window.Date=function(){
var t=new(Function.prototype.bind.apply(I,[null].concat(Array.prototype.slice.call(arguments))));
return g.push(t.getTime()),t;
},Date.prototype.constructor=I.prototype.constructor,Date.now=I.now,Date.UTC=I.UTC,
Date.parse=I.parse;
var l=Vue.prototype.$on;
Vue.prototype.$on=function(n,a){
var o=this;
if(0==n.indexOf("EVT_")){
a._ID=t("vueon"),a._startTime=+new I-y;
var s=function(){
for(var t=[],n=0;n<arguments.length;++n){
var s=arguments[n];
t.push(s instanceof r?i(s):s);
}
var c={
type:"vueonEvt",
ID:a._ID,
vmPath:e(o),
args:t,
time:a._startTime,
vuedata:{}
};
c.time=D?I.now()-y:0,a&&a.apply(o,arguments),c.vuedata=D?u(v):null,h.push(c);
};
return l.call(this,n,s);
}
return l.call(this,n,a);
};
}
function r(t){
t.target&&(this.target={
id:t.target.id,
className:t.target.className,
dataset:t.target.dataset,
value:t.target.value,
offsetTop:t.target.offsetTop,
offsetLeft:t.target.offsetLeft,
composing:t.target.composing
}),this.which=t.which,this.keyCode=t.keyCode,this.__$isEvent=!0;
}
function i(t){
return t?new r(t):"";
}
function u(t){
var e={
data:JSON.parse(JSON.stringify(t.$data)),
children:[]
};
return t.$forceUpdate(),t.$children.forEach(function(t){
e.children.push(u(t));
}),e;
}
function s(t,n,a,o,r,s,c,d,p){
if(0==o.length&&a&&o.push(a),r.$root===v){
var f=e(r);
o=o.map(function(t){
return t===a?i(t):t;
}),h.push(n?{
type:"vueEvt",
method:n,
vmPath:f,
args:o,
time:D?I.now()-y:0,
vuedata:D?u(v):null
}:{
type:"formEvt",
evtdata:i(a),
code:c,
vmPath:f,
forargs:d,
forkeys:p,
time:D?I.now()-y:0,
vuedata:D?u(v):null
});
}
}
function c(){
D=!0,y=I.now(),h.forEach(function(t){
t.vuedata=null;
}),w={
date:y,
operator:l,
mainjs:f,
inputData:{
refs:m,
commonData:JSON.parse(window.rawCommonData),
cgiData:JSON.parse(window.rawCgiData),
vuedata:u(v),
ua:navigator.userAgent,
location:location.href,
locaStorage:[],
date:g,
random:[],
template:_
},
actions:h
};
}
function d(t){
D=!1,w.outputData=u(v),document.body.dataset.vuest=JSON.stringify(w),document.body.dataset.type="interrupt"===t?t:"click",
p("vuestOutput");
}
function p(t,e){
var n=new CustomEvent(t,{
detail:e||{}
});
window.dispatchEvent(n);
}
var f,v,m,l=document.cookie.match(/internal_name=([^;]*);/)?document.cookie.match(/internal_name=([^;]*);/)[1]:"",w={},h=[],g=[],y=0,D=window.commonData.canUseVuest||!1,T=window.commonData.canUseVuest||1,I=window.Date,$=0,_=document.getElementById("app").outerHTML;
r.prototype.preventDefault=function(){},r.prototype.stopPropagation=function(){},
window.onbeforeunload=function(){
D&&d("interrupt");
},window.addEventListener("vuestInit",function(){
D=!1,T=1,p("vuestReady");
}),window.addEventListener("vuestBegin",c),window.addEventListener("vuestEnd",d),
o();
}();