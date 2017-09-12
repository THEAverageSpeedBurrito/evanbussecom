(function(){
  console.log('Menu Initialized');
  var $menu = $('#menu')
  var $openIcon = $('#open-menu')
  var $menuLabel = $('.menu-label')

  $('#menu-tab').on('click', function(e){
    var value = 0
    if($menu.css('left') === '0px'){
      value = -250
      $openIcon.css('transform', 'rotate(0deg)')
      $menuLabel.fadeOut(500)
    }else{
      $openIcon.css('transform', 'rotate(180deg)')
      $menuLabel.fadeIn(500)
    }

    $menu.animate({
      left: `${value}px`
    }, 500)

  })


}())
