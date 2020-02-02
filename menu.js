(function($){
  
    var btn = $( 'button' );
    var menu = $( 'nav' );
    
    btn.click(function(){
      $( this ).toggleClass( 'on' );
      menu.toggleClass( 'on' );
    });
    
  })(jQuery);