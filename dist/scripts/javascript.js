
//button to start the movie
$('#video-start').click(function(){
  $('#movie').get(0).play();
  $('#video-start').css("visibility", "hidden");
});