var scrolled = false;

$(document).ready(function() {

  $('#fullpage').fullpage({
    anchors:['home', 'work', 'about'],
    sectionsColor : ['#FF686B', '#974A9F', '#98C1D9'],
    loopBottom: true,
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);

      //make sectio title follow page
      if(index !== 1){
        scrolled = true;

        $('#sectionTitle').show();
        $('#title').text(anchorLink);
        $('#sectionTitle').animate({
          top: $(window).height() * (index - 1) + 10
        },300)
      }else if(index === 1) {
        if(scrolled) {
          $('#title').text(anchorLink);
          $('#sectionTitle').animate({
            top: 10,
          }, 200)
          $('#sectionTitle').delay(500).fadeOut(1000);
        }
      }

    }
  });

  $('#down_icon').delay(300).fadeIn(300);
});
