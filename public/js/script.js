$(document).ready(function() {

  $('#fullpage').fullpage({
    anchors:['home', 'work', 'about'],
    sectionsColor : ['#FF686B', '#ffe'],
    loopBottom: true,
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);
      console.log($(window).height());

      //make sectio title follow page
      if(index !== 1){
        $('#sectionTitle').show();
        $('#title').text(anchorLink);
        $('#sectionTitle').animate({
          top: $(window).height() * (index - 1) + 10
        },300)
      }

    }
  });

  $('#down_icon').delay(300).fadeIn(300);
});
