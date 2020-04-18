$(document).ready(function(){
 
    
    $("button#button-one").click(function(){
    var one = $("div#one");  
       one.css({visibility: 'visible'}, 5000);
       one.animate({opacity: '1'}, "slow");
    one.animate({left: '100px'}, "slow");
    one.animate({fontSize: '3em'}, "slow");
  });
    
    $("button#button-two").click(function(){
         var one = $("div#one");  
    var two = $("div#two");  
         one.css({visibility: 'hidden'});
         one.css({position: 'absolute'});
       two.css({visibility: 'visible'}, 5000);
       two.animate({opacity: '1'}, "slow");
    two.animate({left: '100px'}, "slow");
    two.animate({fontSize: '3em'}, "slow");
  });






});
