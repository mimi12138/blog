 var NewsTime = 1000;       //每条信息完整出现后停留时间
    var TextTime = 100;       //每条信息中的字出现的间隔时间 
    var newsi = 0;
    var txti = 0;
    var txttimer;     //调用setInterval的返回值，用于取消对函数的周期性执行
    var newstimer;
    var newstitle = new Array();       //以数组形式保存每个信息的标题
    var newshref = new Array();     //以数组形式保存信息标题的链接
    newstitle[0] = "Welcome to my blog";      //显示在网页上的文字内容和对应的链接
    newshref[0] = "";
    newstitle[1] = ">>click me in ~";
    newshref[1] = "";
    function shownew(){
        hwnewstr=newstitle[newsi];       //通过newsi传递，依次显示数组中的内容
        newslink=newshref[newsi];         //依次显示文字对应的链接
         
        if(txti>=hwnewstr.length){
            clearInterval(txttimer);   //一旦超过要显示的文字长度，清除对shownew()的周期性调用
            clearInterval(newstimer);  
            newsi++;     //显示数组中的下一个
            
            if(newsi>=newstitle.length){
                newsi = 0;   //当newsi大于信息标题的数量时，把newsi清零，重新从第一个显示
            }
            newstimer = setInterval("shownew()",NewsTime);     //间隔1000ms后重新调用shownew()
            txti = 0;    
            return;
        }
        clearInterval(txttimer);   
       document.getElementById("titles").href = newslink;   
        document.getElementById("titles").innerHTML = hwnewstr.substring(0,txti+1);//截取字符，从第一个字符到txti+1个字符
        txti++;   //文字一个个出现
        txttimer = setInterval("shownew()",TextTime);      
		      
    }
    shownew();
  document.getElementById("submit").onclick=function(){
  var username=document.getElementById("username");
  var psword=document.getElementById("password");
  if(username.value==""&&psword.value=="")
  {
     username.parentNode.className="input-group input-group-lg has-error has-feedback";
	 password.parentNode.className="input-group input-group-lg has-error has-feedback";
	 return false;
  }
  else if(username.value==""&&psword.value!="")
  {
	username.parentNode.className="input-group input-group-lg has-error has-feedback";
	 psword.parentNode.className="input-group input-group-lg";
	username.focus();
	 return false;
  }
  else if(psword.value==""&&username.value!="")
  {
	psword.parentNode.className="input-group input-group-lg has-error has-feedback";
	 username.parentNode.className="input-group input-group-lg";
	psword.focus();
	 return false;
  }
  else {
     username.parentNode.className="input-group input-group-lg";
	 psword.parentNode.className="input-group input-group-lg";
	 document.getElementById("result").innerHTML="ssdfjh";
	var request=new XMLHttpRequest();
	 request.open("GET","",true);
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
  $(function(){
  $(".wel-icon").click(function(){
    $("#logmodal").modal();
  });
  $('.music').click(function(){
	 var audio=document.getElementById("vedio");
	  if(audio.paused){
		  audio.play();
		  document.getElementById('musiclabel').className="music glyphicon glyphicon-volume-up";
	  }else{
		  audio.pause();
		  document.getElementById('musiclabel').className="music glyphicon glyphicon-volume-off";
	  }
  });
  });