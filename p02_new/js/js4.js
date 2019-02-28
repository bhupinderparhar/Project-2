var leftItem = document.getElementById('des1'),
    rightItem = document.getElementById('des2');

;(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function(){
  var distance = window.pageYOffset - 300;
var distance2 = -window.pageYOffset + 1000;

  leftItem.style.transform = "translate3d(" + distance + "px, 0 ,0)";
  rightItem.style.transform = "translate3d(" + distance2 + "px, 0 ,0)";
})


function checkOffset() {
    if($('#fliter').offset().top + $('#fliter').height() 
                                           >= $('#bottom-info').offset().top - 10)
        $('#fliter').css('position', 'absolute');
       // $('#fliter').css('bottom', '100px');
    if($(document).scrollTop() + window.innerHeight < $('#bottom-info').offset().top)
        $('#fliter').css('position', 'fixed');
        // $('#fliter-container').css('top', '45%'); 
         // restore when you scroll up
    }
   
$(document).scroll(function() {
    checkOffset();
});