  /* Open Menu */
  $( ".open-close-btn" ).on('click touchstart', function(e) {
      console.log("test1");
    // prevent default anchor click 
    e.preventDefault();
    $(".overlay").toggleClass("overlay-open");
    $("#hamburger-icon").toggleClass("hamburger-open");
});