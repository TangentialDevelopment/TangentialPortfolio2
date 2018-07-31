<<<<<<< HEAD
//toggle highlight
function clear(all) {
  $('.selector').removeClass('highlight')
  for (var i=0; i<all.length; i++) {
    $(all[i]).removeClass('highlight')
  }
}

function highlighter(highlight) {
  for (var i=0; i<highlight.length; i++) {
    $(highlight[i]).addClass('highlight')
  }
}

function makeClass(string) {
  var newClass = '.' + string
  return newClass
}

function init() {
  //highligher jQuery
  var traits = document.querySelectorAll('.selector')
  var skills = []
  var highlighted = []

  if (traits) {
    var active = ''

    for (var i=0; i<traits.length; i++) {
      var parts = $(traits[i]).attr('class').split(' ')
      var trait = makeClass(parts[1])
      skills.push(trait)
      $(trait).on('click', function () {
        clear(skills)
        var name = makeClass(this.className.split(' ')[1])
        active = name
        if (highlighted.includes(name)) {
          var index = highlighted.indexOf(name)
          highlighted.splice(index, 1)
          clear(skills)
        } else {
          // $(active).toggleClass('highlight')
          highlighted.push(active)
        }
        highlighter(highlighted)
      })
    }
  }

  //different backgroungs
  $('.textBlock:even').addClass('wood1')
  $('.textBlock:odd').addClass('wood2')
}

//horizontal mCustomScrollbar
// (function($){
//   $(window).on("load",function(){
//     $(".browse").mCustomScrollbar({
//       axis:"x",
//       theme:"dark-3",
//       advanced:{
//         autoExpandHorizontalScroll:true
//       },
//       callbacks:{
//         onCreate:function(){
//           $(this).find(".item").css("width",$(this).width());
//         },
//         onBeforeUpdate:function(){
//           $(this).find(".item").css("width",$(this).width());
//         }
//       }
//     });
//   });
// })(jQuery);
//
// (function($){
//     $(window).on("load",function(){
//         $(".browse").mCustomScrollbar();
//     });
// })(jQuery);

init()
=======
//toggle highlight
function clear(all) {
  $('.selector').removeClass('highlight')
  for (var i=0; i<all.length; i++) {
    $(all[i]).removeClass('highlight')
  }
}

function highlighter(highlight) {
  for (var i=0; i<highlight.length; i++) {
    $(highlight[i]).addClass('highlight')
  }
}

function makeClass(string) {
  var newClass = '.' + string
  return newClass
}

function init() {
  //highligher jQuery
  var traits = document.querySelectorAll('.selector')
  var skills = []
  var highlighted = []

  if (traits) {
    var active = ''

    for (var i=0; i<traits.length; i++) {
      var parts = $(traits[i]).attr('class').split(' ')
      var trait = makeClass(parts[1])
      skills.push(trait)
      $(trait).on('click', function () {
        clear(skills)
        var name = makeClass(this.className.split(' ')[1])
        active = name
        if (highlighted.includes(name)) {
          var index = highlighted.indexOf(name)
          highlighted.splice(index, 1)
          clear(skills)
        } else {
          // $(active).toggleClass('highlight')
          highlighted.push(active)
        }
        highlighter(highlighted)
      })
    }
  }

  //different backgroungs
  $('.textBlock:even').addClass('wood1')
  $('.textBlock:odd').addClass('wood2')
}

//horizontal mCustomScrollbar
// (function($){
//   $(window).on("load",function(){
//     $(".browse").mCustomScrollbar({
//       axis:"x",
//       theme:"dark-3",
//       advanced:{
//         autoExpandHorizontalScroll:true
//       },
//       callbacks:{
//         onCreate:function(){
//           $(this).find(".item").css("width",$(this).width());
//         },
//         onBeforeUpdate:function(){
//           $(this).find(".item").css("width",$(this).width());
//         }
//       }
//     });
//   });
// })(jQuery);
//
// (function($){
//     $(window).on("load",function(){
//         $(".browse").mCustomScrollbar();
//     });
// })(jQuery);

init()
>>>>>>> cc52d359f54076b62a81e1c62d56a59873ce4493
