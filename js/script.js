/* Author: 

*/

$(function(){

  var w = $(window).width();
  window.log(w);

  $('p').smartType();
  $(window).resize(function(){
    w = $(window).width();
    window.log(w);
  })
  
});
















