(function () {
  Chart.defaults.global.defaultFontColor = 'white';
  var rendered = false;

  var ctx = document.getElementById("frontEnd").getContext('2d');
  var ctx2 = document.getElementById("backEnd").getContext('2d');

  var frontEnd = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Javascript', 'HTML', 'CSS', 'React/Redux', 'JQuery', 'Angular', 'Photoshop', 'Illustrator'],
      datasets: [{
        label: 'Skills',
        data: [13, 12, 9, 10, 10, 7, 11, 7],
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderColor: 'white',
        borderWidth: 2,
        pointRadius: 5,
        radius: 5,
        pointHoverRadius: 6.5,
        pointBackgroundColor: '#2B2B2B',
        pointBorderWidth: 2,
        pointBorderColor: 'white'
      }],
    },
    options: {
      legend: {
        display: false
      },
      scale: {
        ticks: {
          fontSize: 18,
          display: false,
          beginAtZero: true,
          max: 14,
        },
        pointLabels: {
          fontSize: 16,
          fontFamily: 'Arial'
        }
      },
      tooltips: {
        enabled: false
      }
    }
  });

  var backEnd = new Chart(ctx2, {
    type: 'radar',
    data: {
      labels: ['NodeJS', 'Express', 'SQL', 'PostgreSQL', 'MySQL'],
      datasets: [{
        label: 'Skills',
        data: [13, 11, 9, 11, 7],
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderColor: 'white',
        borderWidth: 2,
        pointRadius: 5,
        radius: 5,
        pointHoverRadius: 6.5,
        pointBackgroundColor: '#2B2B2B',
        pointBorderWidth: 2,
        pointBorderColor: 'white'
      }],
    },
    options: {
      legend: {
        display: false
      },
      scale: {
        ticks: {
          fontSize: 18,
          display: false,
          beginAtZero: true,
          max: 14,
        },
        pointLabels: {
          fontSize: 16,
          fontFamily: 'Arial'
        }
      },
      tooltips: {
        enabled: false
      }
    }
  });

  var chartDistance = $('#frontEnd').offset().top


  //fade in and out skills charts
  $(window).on('scroll', (event) => {
    if ($(window).scrollTop() > chartDistance - ($(window).scrollTop()/2) && rendered === false){
      rendered = true;
      console.log('lol');
      $('.canvas-container').animate({
        opacity: 1
      }, 500)
    }else if($(window).scrollTop() < chartDistance - ($(window).scrollTop()/2) - 200 && rendered === true){
      rendered = false;
      $('.canvas-container').animate({
        opacity: 0
      }, 500)
    }
  })
}())
