$(function (){
  var createVideoJSON = {
    'videoName':'';
    'teacherID':'';
    'classID':'';
    'breakpoints':[];
  }
  var videojsPlayer = videojs('video');//get the video player by ID name

  var createBreakpoint = function(){
    if(!videojsPlayer.isPaused() && videojsPlayer.currentTime()>2){
      videojsPlayer.pause();
      $(
      $('#video').append
      
    }

  }
}
