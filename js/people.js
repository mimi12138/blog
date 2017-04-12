$(function(){
	var my = new Date();
	showc();
});
  function showc() {
      var k=1;
      var j=1;
      var today;
      var tomonth;
      var theday=1;//日期
      var max;
      var temp;
      var tempday;//这个月第一天的星期
	  $('#title').html(my.getFullYear() + "-" + (my.getMonth()+1));
      temp=my.getDate();
      my.setDate(1);
      tempday=my.getDay();//返回第一天是星期几
      my.setDate(temp);
      today=my.getDay();//返回现在星期几
      switch ((my.getMonth()+1)) {
       case 1:
       case 3:
       case 5:
       case 7:
       case 8:
       case 10:
       case 12:
        max=31;
        break;
       case 4:
       case 6:
       case 9:
       case 11:
        max=30;
        break;
       default:
        max=29;//这里没有考虑闰月！！
       }
	   var $tr=$('#calender>tbody').find('tr');
	   var $td=$('#calender>tbody').find('tr>td');
       for(j=0;j<=$td.length;j++) {
         tempday=0;//设置为最小，相当于取消判断条件
         if(theday<=max) {
			if(theday==my.getDate()){
				var current=$td.get(j);
				current.style.color='red'
			}
			if(theday==my.getDate()) 
				$td.get(j).innerHTML=theday;
			else
				$td.get(j).innerHTML=theday;
          theday++;
         }
       }
      
     }