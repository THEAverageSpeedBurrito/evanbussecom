(function(){
  console.log('Menu Initialized');
  var $menu = $('#menu')
  var $openIcon = $('#open-menu')

  $('#menu-tab').on('click', function(e){
    var value = 0
    if($menu.css('left') === '0px'){
      value = -250
      $openIcon.css('transform', 'rotate(0deg)')
    }else{
      $openIcon.css('transform', 'rotate(180deg)')
    }

    $menu.animate({
      left: `${value}px`
    }, 500)


  })

  var topbar = document.getElementById('topbar')

  console.log(topbar.offsetTop);

  // $(window).on('scroll', (e) => {
  //   console.log(window.scrollY);
  //   if(window.scrollY === topbar.offsetTop){
  //     console.log('BINGOOOOOO');
  //     $('.total-center').css('position', 'fixed')
  //   }
  // })

}())
