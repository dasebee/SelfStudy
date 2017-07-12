(function(global, $){
 'use strict'
  var $layer = $('#layer');
  var $layer_open = $('#layer-open');
  var $layer_close = $('#layer_close');
  var $layer_title = $('h1', $layer);
  var closePopup = function(){
      $layer.attr('aria-hidden','true');
      $layer_open.focus(); 
      $layer.hide();
  }
  var showPopup = function(){
      $layer.attr('aria-hidden','flase');
      $layer_title.focus(); 
      $layer.show();
  }
  $layer.hide();

  $layer.keyup(function(e){
    var key_code = e.keyCode || e.which;
    if(key_code === 27){ 
      closePopup();
    }
  });

  $layer_close.keydown(function(e){
    var key_code = e.keyCode || e.which;
    if(key_code === 9 && e.shiftKey){
      return ;
    }else if(key_code === 9){
      e.preventDefault();
      $layer_title.focus();
    }
  });

  $layer_title.keydown(function(e){
    var key_code = e.keyCode || e.which;
    if(key_code === 9 && e.shiftKey){
      e.preventDefault();
      $layer_close.focus();
    }
  })
  $layer_open.on('click',showPopup);
  $layer_close.on('click',closePopup);
})(window, window.jQuery);