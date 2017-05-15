var scrolled = false;

var projectData = {
  'math saw': {
    skills: ['html', 'javascript', 'css', 'react', 'node', 'postgres'],
    description: ''
  },
  'fridge face': {
    skills: ['html', 'javascript', 'css', 'angular', 'node', 'postgres'],
    description: ''
  },
  'flickr finder': {
    skills: ['html', 'css', 'javascript', 'jquery'],
    description: ''
  },
  'art-ops': {
    skills: ['html', 'css', 'javascript', 'react', 'postgres', 'node'],
    description: ''
  }
}

var allSkills = ['html', 'css', 'javascript', 'react', 'angular', 'photoshop', 'illustrator', 'node', 'postgres', 'sql', 'jquery'];

$(document).ready(function() {

  $('#fullpage').fullpage({
    anchors:['home', 'work', 'about'],
    sectionsColor : ['#FF686B', '#36383F', '#114B5F'],
    loopBottom: true,
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);

      //make sectio title follow page
      if(index !== 1){
        scrolled = true;
        $('#title').show()
        $('#sectionTitle').show();
        $('#title').text(anchorLink);
        $('#sectionTitle').animate({
          top: $(window).height() * (index - 1) + 10
        },300).delay(500).fadeOut(1000)
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
