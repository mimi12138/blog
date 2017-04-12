 var my = new Date();
     //***************************************************函数开始，这是用来显示日历的***********************
     function showc() {
      var k=1;
      var j=1;
      var today;
      var tomonth;
      var theday=1;//日期
      var max;
      var temp;
      var tempday;//这个月第一天的星期
      document.write ("<b>" + my.getFullYear() + "-" + (my.getMonth()+1) + "</b>");
      document.write ("<table width='273' height='158'>");
      document.write ("<tr>");
      document.write ("<td >Sun</td>");
      document.write ("<td >Mon</td>");
      document.write ("<td >Tue</td>");
      document.write ("<td >Wed</td>");
      document.write ("<td >Thu</td>");
      document.write ("<td >Fri</td>");
      document.write ("<td >Sat</td>");
      document.write ("</tr>");
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
       //document.write (max);
       }
      for(k=0;k<6;k++) {
       document.write ("<tr>");
       for(j=0;j<=6;j++) {
        document.write ("<td>");
        if(j>=(tempday)) {
         tempday=0;//设置为最小，相当于取消判断条件
         if(theday<=max) {
		  document.write ("<a title=" + my.getFullYear() + "-" + (my.getMonth()+1) + "-" +theday   + ">");
          if(theday==my.getDate()) 
           document.write ("<font color='red'>[" + theday + "]</font></a>");
           else if(j==0||j==6)
           document.write ( theday +"</a>");
          else
           document.write (theday + "</a>");
          theday++;
         }
        }
        document.write ("</td>");
       }
       document.write ("</tr>");
      }
      document.write ("</table>");
     }
     //************************************************函数结束
     showc();