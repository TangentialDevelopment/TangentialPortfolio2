function init() {
  //highligher jQuery
  var traits = document.querySelectorAll('.selector')

  if (traits) {
    var active = ''

    for (var i=0; i<traits.length; i++) {
      var parts = $(traits[i]).attr('class').split(' ')
      var trait = '.' + parts[1]
      $(trait).on('click', function () {
        $(active).toggleClass('highlight')
        var name = '.' + this.className.split(' ')[1]
        active = name
        $(active).toggleClass('highlight')
      })
    }
  }

  //different backgroungs
  $('.textBlock:even').addClass('wood1')
  $('.textBlock:odd').addClass('wood2')
}

//horizontal mCustomScrollbar
(function($){
  $(window).on("load",function(){
    $(".browse").mCustomScrollbar({
      axis:"x",
      theme:"dark-3",
      advanced:{
        autoExpandHorizontalScroll:true
      },
      callbacks:{
        onCreate:function(){
          $(this).find(".item").css("width",$(this).width());
        },
        onBeforeUpdate:function(){
          $(this).find(".item").css("width",$(this).width());
        }
      }
    });
  });
})(jQuery);

(function($){
    $(window).on("load",function(){
        $(".browse").mCustomScrollbar();
    });
})(jQuery);

init()

//scroll to the top (needs to be fixed)
jQuery(document).ready(function() {
  var offset = 250
  var duration = 300
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration)
    } else {
      jQuery('.back-to-top').fadeOut(duration)
    }
  })
  jQuery('.back-to-top').click(function(event) {
    event.preventDefault()
    jQuery('html, body').animate({scrollTop: 0}, duration)
    return false
  })
})
