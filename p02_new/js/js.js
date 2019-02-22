function myFunction(x) {
  x.classList.toggle("change");

}
function myFunction1(){
 var element = document.getElementById("gnav");
 element.classList.toggle("js_open");

}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-container").style.top = "0";
  } else {
    document.getElementById("nav-container").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}



// $(window).scroll(function() {
//   var $height = $(window).scrollTop();
//   var height = $height + "%";

//   // if($height > 50) {
//     // $('#des1').css("transform", "translate3d(10%, 0, 0)");
// $('#des1').css({"left": $height + "px"});
//   // }

//   console.log("height");
//   //  else {
//   //   $('#header').removeClass('active');
//   // }
// });










function myFunction10(){
 var element = document.getElementById("featured");
 element.classList.toggle("js");
 console.log("fhaish");


}




function over(){     

 var brand1 = document.getElementById("brand1");
 var cursor = document.getElementById("cursor");
 // $("#brand1").attr('src', 'img/cv.jpg');
 if (cursor.style.display = "none"){ cursor.style.display = "inline-block";}
 else{
       // document.getElementById("brand1").src = "img/cv.jpg";
     }




                // obj.style.background = "pink";

              }

              function out(){
               var cav = document.getElementById("cav");
               var cursor = document.getElementById("cursor");
               if (cursor.style.display = "inline-block"){ cursor.style.display = "none";}





             }


             $(document).bind('mousemove', function(e){
              $('#cursor').css({
                left: e.pageX + 5,
                top: e.pageY - 200
              });
            });



             $("#cav").hover(function(){
               $("#brand_1").attr("src","img/cv.jpg");
             },function(){
              $("#brand_1").attr("src","img/cv.jpg");
            });




             $("#con").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/clot.jpg");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/clot.jpg");

            });

             $("#hm").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/hm.jpg");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/hm.jpg");

            });
             $("#tnf").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/tnf.jpeg");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/tnf.jpeg");

            });

             $("#ud").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/undercover.jpg");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/tnf.jpeg");

            });
             $("#wp").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/wtaps.jpeg");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/tnf.jpeg");

            });
              $("#vv").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/visvim.jpeg");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/tnf.jpeg");

            });


              $("#card1").hover(function(){
              
               // $("#product1").attr("src","img/human.jpg");
                $("#card1 .product-card-image").css("opacity","0");
                $("#card1 .product-card-image2").css("opacity","1");
                 $("#card1 .product-card-brand").css("opacity","0");
                 $("#card1 .product-card-name").css("opacity","0");
                 $("#card1 .product-price").css("opacity","1");
                
               // $("#brd2").html("$605.00 CAD");
               //  $("#sep2").html(" ");
             },function(){
              
              // $("#product1").attr("src","img/jacket.jpg");
               $("#card1 .product-card-image").css("opacity","1");
               $("#card1 .product-card-image2").css("opacity","0");
              // $("#brd2").html("CAV EMPT");
              //   $("#sep2").html("Design World Zip Jacket Black");
              $("#card1 .product-card-brand").css("opacity","1");
                 $("#card1 .product-card-name").css("opacity","1");
                 $("#card1 .product-price").css("opacity","0");

              

            });
               
             $("#card2").hover(function(){
              
               // $("#product1").attr("src","img/human.jpg");
                $("#card2 .product-card-image").css("opacity","0");
                $("#card2 .product-card-image2").css("opacity","1");
                 $("#card2 .product-card-brand").css("opacity","0");
                 $("#card2 .product-card-name").css("opacity","0");
                 $("#card2 .product-price").css("opacity","1");
                
               // $("#brd2").html("$605.00 CAD");
               //  $("#sep2").html(" ");
             },function(){
              
              // $("#product1").attr("src","img/jacket.jpg");
               $(".product-card-image").css("opacity","1");
               $(".product-card-image2").css("opacity","0");
              // $("#brd2").html("CAV EMPT");
              //   $("#sep2").html("Design World Zip Jacket Black");
              $(".product-card-brand").css("opacity","1");
                 $(".product-card-name").css("opacity","1");
                 $(".product-price").css("opacity","0");

              

            });



                 $("#card3").hover(function(){
              
               // $("#product1").attr("src","img/human.jpg");
                $("#card3 .product-card-image").css("opacity","0");
                $("#card3 .product-card-image2").css("opacity","1");
                 $("#card3 .product-card-brand").css("opacity","0");
                 $("#card3 .product-card-name").css("opacity","0");
                 $("#card3 .product-price").css("opacity","1");
                
               // $("#brd2").html("$605.00 CAD");
               //  $("#sep2").html(" ");
             },function(){
              
              // $("#product1").attr("src","img/jacket.jpg");
               $(".product-card-image").css("opacity","1");
               $(".product-card-image2").css("opacity","0");
              // $("#brd2").html("CAV EMPT");
              //   $("#sep2").html("Design World Zip Jacket Black");
              $(".product-card-brand").css("opacity","1");
                 $(".product-card-name").css("opacity","1");
                 $(".product-price").css("opacity","0");

              

            });


                 $("#card4").hover(function(){
              
               // $("#product1").attr("src","img/human.jpg");
                $("#card4 .product-card-image").css("opacity","0");
                $("#card4 .product-card-image2").css("opacity","1");
                 $("#card4 .product-card-brand").css("opacity","0");
                 $("#card4 .product-card-name").css("opacity","0");
                 $("#card4 .product-price").css("opacity","1");
                
               // $("#brd2").html("$605.00 CAD");
               //  $("#sep2").html(" ");
             },function(){
              
              // $("#product1").attr("src","img/jacket.jpg");
               $(".product-card-image").css("opacity","1");
               $(".product-card-image2").css("opacity","0");
              // $("#brd2").html("CAV EMPT");
              //   $("#sep2").html("Design World Zip Jacket Black");
              $(".product-card-brand").css("opacity","1");
                 $(".product-card-name").css("opacity","1");
                 $(".product-price").css("opacity","0");

              

            });


                 $("#card5").hover(function(){
              
               // $("#product1").attr("src","img/human.jpg");
                $("#card5 .product-card-image").css("opacity","0");
                $("#card5 .product-card-image2").css("opacity","1");
                 $("#card5 .product-card-brand").css("opacity","0");
                 $("#card5 .product-card-name").css("opacity","0");
                 $("#card5 .product-price").css("opacity","1");
                
               // $("#brd2").html("$605.00 CAD");
               //  $("#sep2").html(" ");
             },function(){
              
              // $("#product1").attr("src","img/jacket.jpg");
               $(".product-card-image").css("opacity","1");
               $(".product-card-image2").css("opacity","0");
              // $("#brd2").html("CAV EMPT");
              //   $("#sep2").html("Design World Zip Jacket Black");
              $(".product-card-brand").css("opacity","1");
                 $(".product-card-name").css("opacity","1");
                 $(".product-price").css("opacity","0");

              

            });


                 $("#card6").hover(function(){
              
               // $("#product1").attr("src","img/human.jpg");
                $("#card6 .product-card-image").css("opacity","0");
                $("#card6 .product-card-image2").css("opacity","1");
                 $("#card6 .product-card-brand").css("opacity","0");
                 $("#card6 .product-card-name").css("opacity","0");
                 $("#card6 .product-price").css("opacity","1");
                
               // $("#brd2").html("$605.00 CAD");
               //  $("#sep2").html(" ");
             },function(){
              
              // $("#product1").attr("src","img/jacket.jpg");
               $(".product-card-image").css("opacity","1");
               $(".product-card-image2").css("opacity","0");
              // $("#brd2").html("CAV EMPT");
              //   $("#sep2").html("Design World Zip Jacket Black");
              $(".product-card-brand").css("opacity","1");
                 $(".product-card-name").css("opacity","1");
                 $(".product-price").css("opacity","0");

              

            });

                 $("#card7").hover(function(){
              
               // $("#product1").attr("src","img/human.jpg");
                $("#card7 .product-card-image").css("opacity","0");
                $("#card7 .product-card-image2").css("opacity","1");
                 $("#card7 .product-card-brand").css("opacity","0");
                 $("#card7 .product-card-name").css("opacity","0");
                 $("#card7 .product-price").css("opacity","1");
                
               // $("#brd2").html("$605.00 CAD");
               //  $("#sep2").html(" ");
             },function(){
              
              // $("#product1").attr("src","img/jacket.jpg");
               $(".product-card-image").css("opacity","1");
               $(".product-card-image2").css("opacity","0");
              // $("#brd2").html("CAV EMPT");
              //   $("#sep2").html("Design World Zip Jacket Black");
              $(".product-card-brand").css("opacity","1");
                 $(".product-card-name").css("opacity","1");
                 $(".product-price").css("opacity","0");

              

            });


                 $("#card8").hover(function(){
              
               // $("#product1").attr("src","img/human.jpg");
                $("#card8 .product-card-image").css("opacity","0");
                $("#card8 .product-card-image2").css("opacity","1");
                 $("#card8 .product-card-brand").css("opacity","0");
                 $("#card8 .product-card-name").css("opacity","0");
                 $("#card8 .product-price").css("opacity","1");
                
               // $("#brd2").html("$605.00 CAD");
               //  $("#sep2").html(" ");
             },function(){
              
              // $("#product1").attr("src","img/jacket.jpg");
               $(".product-card-image").css("opacity","1");
               $(".product-card-image2").css("opacity","0");
              // $("#brd2").html("CAV EMPT");
              //   $("#sep2").html("Design World Zip Jacket Black");
              $(".product-card-brand").css("opacity","1");
                 $(".product-card-name").css("opacity","1");
                 $(".product-price").css("opacity","0");

              

            });





              $("#basket-preview1").hover(
                function(){
                  $("#basket-preview1").css({ fill: "#000" });
                },
                function(){
                $("#basket-preview1").css({ fill: "#A09F9F" });
            });
              
// document.getElementById("page3").addEventListener("wheel", myFunction2);

$(document).ready(function() {
  $("label").on("click", function(e) {
    e.preventDefault();
    var $radio = $("#" + $(this).attr("for")),
      name = $radio.attr("name"),
      hasRadio = $radio.attr("type") == "radio";
    if (!hasRadio) return;
    if ($radio.data("is-checked") == true) {
      $radio.prop("checked", false).change();
      $radio.data("is-checked", false);
    } else {
      $radio.data("is-checked", true);
      $radio.prop("checked", true).change();
    }
    $('input[type="radio"][name="' + name + '"]')
      .not("#" + $(this).attr("for"))
      .data("is-checked", false);
  });
});


function myFunctionx1(){
 var element = document.getElementById("text_elements");
var element2 = document.getElementById("combined_elements");
var element3 = document.getElementById("citations");
var element4 = document.getElementById("idea2");
var element5 = document.getElementById("interactive_elements");
element.style.display="inline-block";
element5.style.display="none";
element2.style.display="none";
element3.style.display="none";
element4.style.display="none";
}

function myFunctionx2(){
 var element = document.getElementById("text_elements");
var element2 = document.getElementById("combined_elements");
var element3 = document.getElementById("citations");
var element4 = document.getElementById("idea2");
var element5 = document.getElementById("interactive_elements");
element5.style.display="inline-block";
element.style.display="none";
element2.style.display="none";
element3.style.display="none";
element4.style.display="none";
}
function myFunctionx3(){
 var element = document.getElementById("text_elements");
var element2 = document.getElementById("combined_elements");
var element3 = document.getElementById("citations");
var element4 = document.getElementById("idea2");
var element5 = document.getElementById("interactive_elements");
element2.style.display="inline-block";
element.style.display="none";
element5.style.display="none";
element3.style.display="none";
element4.style.display="none";
}
function myFunctionx4(){
 var element = document.getElementById("text_elements");
var element2 = document.getElementById("combined_elements");
var element3 = document.getElementById("citations");
var element4 = document.getElementById("idea2");
var element5 = document.getElementById("interactive_elements");
element4.style.display="inline-block";
element.style.display="none";
element5.style.display="none";
element3.style.display="none";
element2.style.display="none";
}



$("#first-look1").hover(function(){
              
               // $("#product1").attr("src","img/human.jpg");
                // $(".card-details").addClass("js_go");
               
              $(".first-look-book").css("opacity","1");
               $(".first-content img").css("transform","scale(1.2,1.2)");
               $(".first-content img").css("-webkit-filter","grayscale(100%)"); 
               $(".first-content img").css("filter","grayscale(100%)"); 

                
               // $("#brd2").html("$605.00 CAD");
               //  $("#sep2").html(" ");
             },function(){
              
              // $("#product1").attr("src","img/jacket.jpg");
            
$(".first-look-book").css("opacity","0");
   $(".first-content img").css("transform","scale(1,1)");     
    $(".first-content img").css("-webkit-filter","grayscale(0)"); 
               $(".first-content img").css("filter","grayscale(0)");          

            });
  