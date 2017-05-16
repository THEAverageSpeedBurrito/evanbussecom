var scrolled = false;

var projectData = {
  'math saw': {
    skills: ['html', 'javascript', 'css', 'react', 'node', 'postgres'],
    description: 'Math saw is a productivity application that ouputs schematics designed to facilitate the process of cutting project components out of larget stock material with an emphasis on efficiency and minimization of waste.',
    url: 'https://math-saw.herokuapp.com/'
  },
  'fridge face': {
    skills: ['html', 'javascript', 'css', 'angular', 'node', 'postgres'],
    description: 'Created primarily as a fridge managment app, Fridge Face is targeted towards co-working and office environments that have a community fridge. It facilitates storing and catagorizing food and provides detailed admin statistics for maintainance and upkeep.',
    url: 'https://caspeter-fridge-face.herokuapp.com/fridge.html',
  },
  'flickr finder': {
    skills: ['html', 'css', 'javascript', 'jquery'],
    description: 'This site ties together Flickr and Google Maps APIs to create an interactive map of images based on the location they were taken. Other functionality includes the ability to expand images and save images to custom collections.',
    url: 'http://eb-flickrfinder.surge.sh/',
  },
  'art-ops': {
    skills: ['html', 'css', 'javascript', 'react', 'postgres', 'node'],
    description: '',
    url: 'https://eb-artops.herokuapp.com/',
  }
}

var allSkills = ['html', 'css', 'javascript', 'react', 'angular', 'photoshop', 'illustrator', 'node', 'postgres', 'sql', 'jquery'];

$(document).ready(function() {

  $('#fullpage').fullpage({
    anchors:['home', 'work', 'about'],
    sectionsColor : ['#FF686B', '#114B5F', '#36383F'],
    loopBottom: true,
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);

      //make sectio title follow page
      if(index !== 1){
        if(index === 2){
          //show and hide intro-quote
          //Then load content
          $('#intro-quote').animate({
            opacity: 1,
          }, 500)
          .delay(1000)
          .animate({
            opacity: 0,
          }, 500)
        }
      }else {
        if(scrolled) {
          $('#title').text(anchorLink);
          $('#sectionTitle').show().animate({
            top: 10,
          }, 200)
          $('#sectionTitle').delay(500).fadeOut(1000);
        }
      }

      $('video').get(0).playbackRate = 0.7;
      $('video').get(0).play();
    }
  });

  $('#down_icon').delay(300).fadeIn(500);
});

//Script for skills/projects section
//illuminate skills on mouseover
$('#mathsaw, #fridgeface, #flickrfinder, #artops').on('mouseenter', function() {
  projectData[event.target.alt].skills.forEach((id) => {
    document.getElementById(id).style.transform = 'translateX(15px)'
  })

  dimIrrelevantSkills(projectData[event.target.alt].skills);

  $('#mathsaw, #fridgeface, #flickrfinder, #artops').on('mouseleave', function() {
    projectData[event.target.alt].skills.forEach((id) => {
      document.getElementById(id).style.transform = ''
    })
    //re-highlight all skills
    allSkills.forEach((skill) => {
      document.getElementById(skill).style.opacity = 1;
    })
    //disable secondary listener to prevent duplicates
    $('#mathsaw, #fridgeface, #flickrfinder, #artops').off('mouseleave')
  })
})

$('#mathsaw, #fridgeface, #flickrfinder, #artops').on('click', function () {
  $('#modal-title').text(event.target.alt)
  $('#modal-content').text(projectData[event.target.alt].description)
  $('#modal-link').attr('href', projectData[event.target.alt].url)

  $('#modal-container').fadeIn(250);

  $('#modal-container').on('click', function () {
    $('#modal-container').fadeOut(250);

    //close modal functionality
    $('#modal-container').off('click')
  })
})


function dimIrrelevantSkills (skills) {
  //find irrelevant skills
  var diff = allSkills.filter((skill) => {
    return !skills.includes(skill);
  })
  //dim irrelevant skills
  diff.forEach((skill) => {
    document.getElementById(skill).style.opacity = 0.5;
  });
}

//Paralax stuff
