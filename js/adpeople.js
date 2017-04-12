$(function(){
  $("#writepeople").click(function(){
	$(".myform").toggle();
	$("#showpeople").toggle();
	});
	$(".submit").click(function(){
	$(".myform").hide();
	});
});
function check(obj)
{
	if(obj.value=='')
	{
		obj.nextSibling.innerHTML='不能为空哦';
		obj.nextSibling.style.color='red';
		obj.focus();
	}
	else 
	{
		obj.nextSibling.innerHTML='';
	}
}
$("#save").click(function(){
	var $birthday=$('#birthday').val();
	var $psword=$('#newpassword').val();
	if($birthday>showTime())//判断出生日期不能大于当前日期
	{
		$('#birthday+span').html('不能从未来出生！').css({'color':'red'});
		return false;
	}
	else{$('#birthday+span').empty();}
	if($psword.length<8||$psword.length>16)//判断密码长度
	{
		$('#newpassword+span').html('密码不符合要求哦').css({'color':'red'});
		return false;
	}
    else{
		$('#newpassword+span').empty();
		var request=new XMLHttpRequest();
		request.open("POST"," ");
		var data="name="+document.getElementById("name").value
				  +"sex="+document.getElementById("sex").value
				  +"password="+document.getElementById("password").value
				  +"birthday="+document.getElementById("birthday").value
				  +"inputEmail="+document.getElementById("inputEmail").value
				  +"weibo="+document.getElementById("weibo").value
				  +"sign="+document.getElementById("sign").value;
		request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		request.send(data);
		request.onreadystatechange=function(){
			
	}
	}
});
function checkTime(i){
if(i<10)
{
i="0"+i;
}
return i;
}
function showTime(){
var myDate=new Date();
var year=myDate.getFullYear();
var month=myDate.getMonth()+1;
var date=myDate.getDate();
month=checkTime(month);
date=checkTime(date);
var moment=year+"-"+month+"-"+date;
return moment;
}
