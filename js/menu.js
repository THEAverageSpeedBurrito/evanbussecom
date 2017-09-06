(function(){
  console.log('Menu Initialized');
  var $menu = $('#menu')

  $('#menu-tab').on('click', function(e){
    var value = 0
    if($menu.css('left') === '0px'){
      value = -250
    }
    $menu.animate({
      left: `${value}px`
    }, 500)
  })

}())
