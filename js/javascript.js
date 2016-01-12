$(document).ready(function() {

  $("button#cat").click(function() {
  $("img#catimg").show();
  $("ul#ctext").prepend("<li>Cats will rule!</li>");
  $("li:eq(2)" ).remove();
  });

  $("button#cat").click(function() {
  $("img#dogimg").show();
  $("ul#dtext").prepend('<li>"Dogs are awesome!"</li>');
  $("li:eq(2)" ).remove();
  });




  // $(function).click(){
  //
  // }



});
