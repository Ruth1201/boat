directX=1;//x轴的方向
	              sunX=0;//小太阳的坐标x
	          function boatMove(){
	  
	              sunX+=directX;
	              boat.style.left=sunX+"px";
	              if(sunX+boat.offsetWidth>=document.body.clientWidth||sunX<=0){
	                  directX=-directX;
	              }
	  			         
	  			        }
	  			
	  			        setInterval("boatMove()",20);