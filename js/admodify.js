$(function(){
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
		var title=document.getElementById("title");
		var write=document.getElementById("write");
		if(title.value=='')
		{
			document.getElementById("alert-title").innerHTML="标题不能为空!";
			document.getElementById("alert-title").style.color='red';
			title.focus();
			return false;
		}
		else if(write.value=='')
		{
			document.getElementById("alert-content").innerHTML="内容不能为空!";
			document.getElementById("alert-content").style.color='red';
			write.focus();
			return false;
		}
		else{
			document.getElementById("alert-title").innerHTML="";
			document.getElementById("alert-content").innerHTML="";
		}
		});
	});
	