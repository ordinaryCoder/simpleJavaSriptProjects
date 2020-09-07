window.onload = function(){
function currentTime()
{
	var Today = new Date();
	 var hours = Today.getHours();
	 var minutes = Today.getMinutes();
	 var seconds = Today.getSeconds();
	hours = zeroAdjust(hours);
	minutes = zeroAdjust(minutes);
	seconds = zeroAdjust(seconds);	
	document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
	setTimeout(currentTime,500);
}
	  currentTime();	
	    function zeroAdjust(k){
	  if(k<10)
		return "0"+k;
	  else
		return k;
  }
	  
}
  
 function reply_click(clicked_id)
  {
    switch(clicked_id)
	{
	 case "orangecase": 
		var displayedcase= document.getElementById("displaycase")
		displayedcase.src="asset/orangecase.png";
		break;
		 
	case "bluecase":
		var displayedcase= document.getElementById("displaycase")
		displayedcase.src="asset/bluecase.png";	
		break;
			
	case "blackcase": 
		var displayedcase= document.getElementById("displaycase")
		displayedcase.src="asset/blackcase.png";
		break;
		
	case "pinkcase":
		var displayedcase= document.getElementById("displaycase")
		displayedcase.src="asset/pinkcase.png";	
		break;
	} 
  }
  
  function watchdisplay(clicked_id){
	  if(clicked_id=="time"){
		  document.getElementById("pulse").style.visibility = "hidden";
		  document.getElementById("heartbeat").style.visibility = "hidden";
		  document.getElementById("clock").style.visibility = "visible";
		  
	  }  	
	else if(clicked_id=="heartrate"){
		document.getElementById("clock").style.visibility = "hidden";
		document.getElementById("heartbeat").style.visibility = "visible";
		document.getElementById("pulse").style.visibility = "visible";
		document.getElementById("pulse").innerHTML = "78";
	} 
  }

  

	
  
  
  

