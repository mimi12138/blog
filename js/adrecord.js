$(function(){
		  $("#writerecord").click(function(){
			$(".record").toggle();
			});
		});
		document.getElementById("submit").onclick=function(){
		var title=document.getElementById("title").value;
		var logn=document.getElementById("logn").value;
		var records=document.getElementById("records").value;
		if(title=='')
		{
			document.getElementById("alert-title").innerHTML="标题不能为空!";
			document.getElementById("alert-title").style.color='red';
			return false;
		}
		else
		{
		  document.getElementById("alert-title").innerHTML="";	
		}
		if(logn=='')
		{
			document.getElementById("alert-logn").innerHTML="标签不能为空!";
			document.getElementById("alert-logn").style.color='red';
			return false;
		}
		else
		{
		  document.getElementById("alert-logn").innerHTML="";
		}
		if(records=='')
		{
			document.getElementById("alert-records").innerHTML="内容不能为空!";
			document.getElementById("alert-records").style.color='red';
			return false;
		}
		else
		{
		  document.getElementById("alert-records").innerHTML="";
		  document.getElementById("record").style.display='none';
		  var request=new XMLHttpRequest();
		 request.open("GET",""，true);
		 request.onreadystatechange=function(){
		 if(request.readyState===4){
		 if(request.status>=200&&request.status<300||request.status==304){
			
			request.responseText;
		 }
		 }
		 }
		request.send(null);
		}
		}