$('button').on('mouseover', function() {
    $(this).animate({
      'top': Math.random() * window.innerHeight + "px",
      'left': Math.random() * window.innerWidth + "px"
    }, "medium");
  })