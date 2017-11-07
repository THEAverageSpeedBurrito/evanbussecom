(function () {
  Chart.defaults.global.defaultFontColor = 'white';
  var rendered = false;

  // var ctx = document.getElementById("frontEnd").getContext('2d');
  // var ctx2 = document.getElementById("backEnd").getContext('2d');

  // var frontEnd = new Chart(ctx, {
  //   type: 'radar',
  //   data: {
  //     labels: ['Javascript', 'HTML', 'CSS', 'React/Redux', 'JQuery', 'Angular', 'Photoshop', 'Illustrator'],
  //     datasets: [{
  //       label: 'Skills',
  //       data: [13, 12, 9, 10, 10, 7, 11, 7],
  //       backgroundColor: 'rgba(255, 255, 255, 0.2)',
  //       borderColor: 'white',
  //       borderWidth: 2,
  //       pointRadius: 5,
  //       radius: 5,
  //       pointHoverRadius: 6.5,
  //       pointBackgroundColor: '#2B2B2B',
  //       pointBorderWidth: 2,
  //       pointBorderColor: 'white'
  //     }],
  //   },
  //   options: {
  //     legend: {
  //       display: false
  //     },
  //     scale: {
  //       ticks: {
  //         fontSize: 18,
  //         display: false,
  //         beginAtZero: true,
  //         max: 14,
  //       },
  //       pointLabels: {
  //         fontSize: 16,
  //         fontFamily: 'Arial'
  //       }
  //     },
  //     tooltips: {
  //       enabled: false
  //     }
  //   }
  // });
  //
  // var backEnd = new Chart(ctx2, {
  //   type: 'radar',
  //   data: {
  //     labels: ['NodeJS', 'Express', 'SQL', 'PostgreSQL', 'MySQL'],
  //     datasets: [{
  //       label: 'Skills',
  //       data: [13, 11, 9, 11, 7],
  //       backgroundColor: 'rgba(255, 255, 255, 0.2)',
  //       borderColor: 'white',
  //       borderWidth: 2,
  //       pointRadius: 5,
  //       radius: 5,
  //       pointHoverRadius: 6.5,
  //       pointBackgroundColor: '#2B2B2B',
  //       pointBorderWidth: 2,
  //       pointBorderColor: 'white'
  //     }],
  //   },
  //   options: {
  //     legend: {
  //       display: false
  //     },
  //     scale: {
  //       ticks: {
  //         fontSize: 18,
  //         display: false,
  //         beginAtZero: true,
  //         max: 14,
  //       },
  //       pointLabels: {
  //         fontSize: 16,
  //         fontFamily: 'Arial'
  //       }
  //     },
  //     tooltips: {
  //       enabled: false
  //     }
  //   }
  // });

  // var chartDistance = $('#frontEnd').offset().top


  //fade in and out skills charts
  // $(window).on('scroll', (event) => {
  //   if ($(window).scrollTop() > chartDistance - ($(window).scrollTop()/2) && rendered === false){
  //     rendered = true;
  //     $('.canvas-container').animate({
  //       opacity: 1
  //     }, 500)
  //   }else if($(window).scrollTop() < chartDistance - ($(window).scrollTop()/2) - 200 && rendered === true){
  //     rendered = false;
  //     $('.canvas-container').animate({
  //       opacity: 0
  //     }, 500)
  //   }
  // })

  $('#about-me').on('click', (event) => {
    event.preventDefault()
    console.log('Scrolling to skills section');
    animateScroll('about')
  })

  $('#my-work').on('click', (event) => {
    event.preventDefault()
    console.log('Scrolling to work section');
    animateScroll('work')
  })

  var home = document.getElementById('home')
  var about = document.getElementById('about')
  var work = document.getElementById('work')

  console.log(window.innerHeight);
  console.log($('#home').height());
  console.log($('#about').height());
  console.log($('#work').height());

  // $(window).on('scroll', () => {
  //   console.clear()
  //   console.log($(window).scrollTop());
  // })
}())

function animateScroll(section, distance = 1) {
  var element = document.getElementById(section)
  var offset = element.offsetTop
  var scrolled = $(window).scrollTop()

  console.log(offset, scrolled);

  setTimeout(() => {
    if(offset > scrolled) {
      if(scrolled + distance > offset) {
        distance = offset - scrolled
      }
      window.scrollTo(0, scrolled + distance)
      animateScroll(section, distance += .25)
    }
  }, 1)
}
