
//button to start the movie
$('#video-start').click(function(){
  $('#movie').get(0).play();
  $('#video-start').css("visibility", "hidden");
});

$( document ).ready(function() {
  $('#video').css("height", $('#video').width()*295.25/525.3);
});