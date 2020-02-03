  /* Open Menu */
  console.log("loading page");

  function toggleMenu(){
    console.log("test1");
    // prevent default anchor click 
    e.preventDefault();
    var menuicon = document.getElementById("hamburger-icon");
    var overlay = document.getElementById("overlay");
    overlay.toggleClass("overlay-open");
    menuicon.toggleClass("hamburger-open");
} 