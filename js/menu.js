(function(){
  console.log('Menu Initialized');

  var $menu = $('#menu')
  var $openIcon = $('#open-menu')
  var $menuLabel = $('.menu-label')
  let $window = $(window)
  var belowFold = false;

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
      left: value
    }, 500)
  })

  $(window).on('scroll', (event) => {
    let wHeight = $window.height()
    let top = $window.scrollTop()

    if(top > wHeight/2 && belowFold === false) {
      belowFold = true
      $menu.animate({
        left: -300
      }, 200)
    }else if(top < wHeight/2 && belowFold === true){
      belowFold = false
      $menu.animate({
        left: -250
      }, 200)
    }

  })


}())
