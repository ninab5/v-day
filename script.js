$(document).ready(function(){
    $(".container").mouseenter(function(){
      $(".card").stop().animate({
        top:"-130px"
      }, "slow");
    }).mouseleave(function(){
      $(".card").stop().animate({
        top: 5
      }, "slow");
    });
    });