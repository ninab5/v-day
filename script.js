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

const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});