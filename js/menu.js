(function(){
  console.log('Menu Initialized');

  var $menu = $('#menu')
  var $openIcon = $('#open-menu')
  var $menuLabel = $('.menu-label')
  let $window = $(window)
  var belowFold = false;

  $(window).on('scroll', (event) => {
    let wHeight = $window.height()
    let top = $window.scrollTop()
    console.log(top);
    if(top === 0){
      $('html').addClass('no-scroll')
    }

  })

}())

function begin_tour() {
  $('#fade_in_scroll').css({
    opacity: 0
  })
  $('html, body').removeClass('no-scroll')

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  })
  setTimeout(() => {
    $('#fade_in_scroll').delay(1500).animate({
      opacity: 1
    }, 1000)
    console.log('fade in');
  }, 1000)

}
