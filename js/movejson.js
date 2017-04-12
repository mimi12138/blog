function getStyle(obj,attr)/*获取样式*/
{
if(obj.currentStyle){
return obj.currentStyle[attr];
}
else{
return getComputedStyle(obj,false)[attr];
}
}
//startMove(obj,{attr:iTarget1,attr2:iTarget2),fn)
/*兼容透明度和其它样式,因为float取完存在很多小数，所以用Math.round来四舍五入*/
function startMove(obj,json,fn){
clearInterval(obj.timer);
var flag;
obj.timer=setInterval(function()
{
	flag=true;
	for(var attr in json)
{
var icur=0;/*取当前的值*/
if(attr=="opacity")
{
   icur=Math.round(parseFloat(getStyle(obj,attr))*100);
}
else{
var icur=parseInt(getStyle(obj,attr));
}
var speed=(json[attr]-icur)/10;/*算速度*/
speed=speed>0?Math.ceil(speed):Math.floor(speed);
if(icur!=json[attr])/*检测停止*/
{
	flag=false;
}
if(attr=="opacity")
{
obj.style.filter='alpha(opacity:'+(icur+speed)+')';
obj.style.opacity=(icur+speed)/100;
}
else{
obj.style[attr]=icur+speed+"px";
}
}
if(flag)
{
	clearInterval(obj.timer);
	if(fn)
	{
		fn();
	}
}
},20)
}
