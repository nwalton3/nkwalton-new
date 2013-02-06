/* Author: 

*/

$(function(){
  
  // Window width (for responsive testing)
  var w = $(window).width();
  window.log(w);
  
  $(window).resize(function(){
    w = $(window).width();
    window.log(w);
  })

  
  // Convert markdown
  var converter = new Markdown.Converter();

  $('.md').each(function(){
    var text = $(this).html();
    var html = converter.makeHtml(text);
    $(this).html(html);
  });


  // Run smart type
  $('p').smartType();
  
});






