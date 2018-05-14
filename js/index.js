// function emailpopout () {
//   var popup = document.getElementById('email')
//   popup.classList.toggle('show')
// }
// function mailingpopout () {
//   var popup = document.getElementById('mailing')
//   popup.classList.toggle('show')
// }

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
