  /* Open Menu */
  var menuicon = document.getElementById("hamburger-icon");
  var overlay = document.getElementById("overlay");

  var toggleMenu = function(){
    console.log("test1");
    // prevent default anchor click 
    e.preventDefault();
    overlay.toggleClass("overlay-open");
    menuicon.toggleClass("hamburger-open");
}

menuicon.addEventListener(toggleMenu, "click");  