 // touch event 


  $("#card1").on("touchstart", touchStart);
          // $(".pr-account-tab").on("touchmove", touchMove);
          $("#card1").on("touchend", touchEnd);


   function touchStart(event) {
                $("#card1 .product-card-image").css("opacity","0");
                $("#card1 .product-card-image2").css("opacity","1");
                 $("#card1 .product-card-brand").css("opacity","0");
                 $("#card1 .product-card-name").css("opacity","0");
                 $("#card1 .product-price").css("opacity","1");
          }
          
           function touchEnd(event) {
               $("#card1 .product-card-image").css("opacity","1");
               $("#card1 .product-card-image2").css("opacity","0");
              $("#card1 .product-card-brand").css("opacity","1");
                 $("#card1 .product-card-name").css("opacity","1");
                 $("#card1 .product-price").css("opacity","0");

          }


            $("#card2").on("touchstart", touchStart2);
    
          $("#card2").on("touchend", touchEnd2);


   function touchStart2(event) {
                $("#card2 .product-card-image").css("opacity","0");
                $("#card2 .product-card-image2").css("opacity","1");
                 $("#card2 .product-card-brand").css("opacity","0");
                 $("#card2 .product-card-name").css("opacity","0");
                 $("#card2 .product-price").css("opacity","1");
          }
          
           function touchEnd2(event) {
                $(".product-card-image").css("opacity","1");
               $(".product-card-image2").css("opacity","0");
              $(".product-card-brand").css("opacity","1");
                 $(".product-card-name").css("opacity","1");
                 $(".product-price").css("opacity","0");
          }


           $("#card3").on("touchstart", touchStart3);
    
          $("#card3").on("touchend", touchEnd3);


   function touchStart3(event) {
               $("#card3 .product-card-image").css("opacity","0");
                $("#card3 .product-card-image2").css("opacity","1");
                 $("#card3 .product-card-brand").css("opacity","0");
                 $("#card3 .product-card-name").css("opacity","0");
                 $("#card3 .product-price").css("opacity","1");
          }
          
           function touchEnd3(event) {
               $(".product-card-image").css("opacity","1");
               $(".product-card-image2").css("opacity","0");
          
              $(".product-card-brand").css("opacity","1");
                 $(".product-card-name").css("opacity","1");
                 $(".product-price").css("opacity","0");
          }


           $("#card4").on("touchstart", touchStart4);
    
          $("#card4").on("touchend", touchEnd4);


   function touchStart4(event) {
               $("#card4 .product-card-image").css("opacity","0");
                $("#card4 .product-card-image2").css("opacity","1");
                 $("#card4 .product-card-brand").css("opacity","0");
                 $("#card4 .product-card-name").css("opacity","0");
                 $("#card4 .product-price").css("opacity","1");
          }
          
           function touchEnd4(event) {
               $(".product-card-image").css("opacity","1");
               $(".product-card-image2").css("opacity","0");
          
              $(".product-card-brand").css("opacity","1");
                 $(".product-card-name").css("opacity","1");
                 $(".product-price").css("opacity","0");
          }

  $("#card5").on("touchstart", touchStart5);
    
          $("#card5").on("touchend", touchEnd5);


   function touchStart5(event) {
               $("#card5 .product-card-image").css("opacity","0");
                $("#card5 .product-card-image2").css("opacity","1");
                 $("#card5 .product-card-brand").css("opacity","0");
                 $("#card5 .product-card-name").css("opacity","0");
                 $("#card5 .product-price").css("opacity","1");
          }
          
           function touchEnd5(event) {
               $(".product-card-image").css("opacity","1");
               $(".product-card-image2").css("opacity","0");
          
              $(".product-card-brand").css("opacity","1");
                 $(".product-card-name").css("opacity","1");
                 $(".product-price").css("opacity","0");
          }

$("#card6").on("touchstart", touchStart6);
    
          $("#card6").on("touchend", touchEnd6);


   function touchStart6(event) {
               $("#card6 .product-card-image").css("opacity","0");
                $("#card6 .product-card-image2").css("opacity","1");
                 $("#card6 .product-card-brand").css("opacity","0");
                 $("#card6 .product-card-name").css("opacity","0");
                 $("#card6 .product-price").css("opacity","1");
          }
          
           function touchEnd6(event) {
               $(".product-card-image").css("opacity","1");
               $(".product-card-image2").css("opacity","0");
          
              $(".product-card-brand").css("opacity","1");
                 $(".product-card-name").css("opacity","1");
                 $(".product-price").css("opacity","0");
          }
$("#card7").on("touchstart", touchStart7);
    
          $("#card7").on("touchend", touchEnd7);


   function touchStart7(event) {
               $("#card7 .product-card-image").css("opacity","0");
                $("#card7 .product-card-image2").css("opacity","1");
                 $("#card7 .product-card-brand").css("opacity","0");
                 $("#card7 .product-card-name").css("opacity","0");
                 $("#card7 .product-price").css("opacity","1");
          }
          
           function touchEnd7(event) {
               $(".product-card-image").css("opacity","1");
               $(".product-card-image2").css("opacity","0");
          
              $(".product-card-brand").css("opacity","1");
                 $(".product-card-name").css("opacity","1");
                 $(".product-price").css("opacity","0");
          }

          $("#card8").on("touchstart", touchStart8);
    
          $("#card8").on("touchend", touchEnd8);


   function touchStart8(event) {
               $("#card8 .product-card-image").css("opacity","0");
                $("#card8 .product-card-image2").css("opacity","1");
                 $("#card8 .product-card-brand").css("opacity","0");
                 $("#card8 .product-card-name").css("opacity","0");
                 $("#card8 .product-price").css("opacity","1");
          }
          
           function touchEnd8(event) {
               $(".product-card-image").css("opacity","1");
               $(".product-card-image2").css("opacity","0");
          
              $(".product-card-brand").css("opacity","1");
                 $(".product-card-name").css("opacity","1");
                 $(".product-price").css("opacity","0");
          }

          // open nav




          function myFunction(x) {
  x.classList.toggle("change");

}
function myFunction1(){
 var element = document.getElementById("gnav");
 element.classList.toggle("js_open");

}

