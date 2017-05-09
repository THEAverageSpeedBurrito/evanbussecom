var scrolled = false;

var projectSkills = {
  mathsaw: ['html', 'javascript', 'css', 'react', 'node', 'postgres'],
  fridgeface: ['html', 'javascript', 'css', 'angular', 'node', 'postgres']
}

var allSkills = ['html', 'css', 'javascript', 'react', 'angular', 'photoshop', 'illustrator', 'node', 'postgres', 'sql'];

$(document).ready(function() {

  $('#fullpage').fullpage({
    anchors:['home', 'work', 'about'],
    sectionsColor : ['#FF686B', '#36383F', '#98C1D9'],
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

    }
  });

  $('#down_icon').delay(300).fadeIn(500);
});

//Script for skills/projects section
//illuminate skills on mouseover
$('#mathsaw, #fridgeface').on('mouseenter', function() {
  projectSkills[event.target.alt].forEach((id) => {
    document.getElementById(id).style.transform = 'translateX(15px)'
  })

  dimIrrelevantSkills(projectSkills[event.target.alt]);

  $('#mathsaw, #fridgeface').on('mouseleave', function() {
    projectSkills[event.target.alt].forEach((id) => {
      document.getElementById(id).style.transform = ''
    })

    //re-highlight all skills
    allSkills.forEach((skill) => {
      document.getElementById(skill).style.opacity = 1;
    })
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
