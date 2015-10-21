$(document).ready(function() {
	console.log("Script included!");

	//cooking direction 
 $(function() {
    $( "#selectable" ).selectable();
  });

 	//sidefacts
var firstAnimation = function(){
    $('.box2 .sidefacts').each(
       function(){ 
         $(this).delay(500).animate(
           {opacity:1,height:'180',width:'250'},2000);}
     	);
  };

});











