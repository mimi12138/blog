var count=1;
function exmusic()
{
	var audio=document.getElementById("vedio");
	count++;
	if(count<=10){
		audio.src="music/backgroundmusic"+count+".mp3";
	}
	else{
		count=1;
		audio.src="music/backgroundmusic"+count+".mp3";
	}	
}