$(function(){
  $("#wirtenote").click(function(){
	$(".notes").toggle();
	});
	function checkboxNum(name,num){
		var checkboxs=document.getElementsByName(name);
		var a=0;
		for(var i=0;i<checkboxs.length;i++){
			if(checkboxs[i].checked){
				a=a+1;
			}
		}
		if(a==num){
			for(var i=0;i<checkboxs.length;i++){
				if(!checkboxs[i].checked){
					checkboxs[i].disabled='disabled';
				}
			}
		}
		else{
			for(var i=0;i<checkboxs.length;i++){
				checkboxs[i].removeAttribute('disabled');
			}
		}
	}
	$("#box").click(function(){
		checkboxNum('articleTypeName',3);
	});
	$("#submit").click(function(){
		var title=document.getElementById("title").value;
		if(title=='')
		{
			document.getElementById("alert-title").innerHTML="标题不能为空!";
			document.getElementById("alert-title").style.color='red';
			return false;
		}
		else
		{
		  document.getElementById("alert-title").innerHTML="";	
		  document.getElementById("submit").style.display='none';
		  var request=new XMLHttpRequest();
		 request.open("GET","",true);
		 request.onreadystatechange=function(){
		 if(request.readyState===4){
		 if(request.status>=200&&request.status<300||request.status==304){
			 var essaytitle=document.getElementById("essay-title");
			var essayauthor=document.getElementById("essay-author");
			var essaytime=document.getElementById("essay-time");
			var readcount=document.getElementById("read-count");
			document.getElementById("essay-label").innerHTML=document.getElementById("label").value;//标签
			var essaycontent=document.getElementById("essay-content");
			var notejson=JSON.parse(request.responseText);
			for(var i = 0; i < notejson.length; i++){
				document.getElementById("essay-title").innerHTML=notejson[i].blogArticleTitle;//标题
				document.getElementById("essay-author").innerHTML=notejson[i].adminNickName;//作者
				document.getElementById("essay-time").innerHTML=notejson[i].blogArticlePublishTime;//发布时间
				document.getElementById("read-count").innerHTML=notejson[i].blogArticleTitleReadCount;//阅读次数
				document.getElementById("essay-content").innerHTML=notejson[i].blogContent;//内容
			}
			return false;
		 }
		 }
		 }
		request.send(null);
		}
		});
	});
	