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
    if(top === 0){
      // $('html').addClass('no-scroll')
    }

  })

  // var tlHeight = document.getElementById('timeline').offsetHeight
  // var hashContainer = $('#hash-container')
  // for(var x = 0; x < tlHeight; x++){
  //   if(x%100 === 0 && x < document.documentElement.scrollHeight - (window.innerHeight*2)){
  //     console.log('appending');
  //     hashContainer.append('<hr class="hashhr"><div class="hash"></div>')
  //   }
  // }
}())

var tour = false

function begin_tour() {
  $('#fade_in_scroll, .hash, .hashhr').css({
    opacity: 0
  })
  // $('html, body').removeClass('no-scroll')

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  })
  setTimeout(() => {
    $('#tour_button').html("Take the tour again")

    if(tour) {
      $('#bottom_h1').html("My Website begins at the bottom...")
      $('#bottom_p').html("But you already know that so scroll up")
    }else{
      tour = true
    }

    $('#fade_in_scroll').delay(1500).animate({
      opacity: 1
    }, 1000)
    $('.hash, .hashhr').delay(1500).css({
      opacity: 1
    })
    console.log('fade in');
  }, 1000)

}
