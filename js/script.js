document.getElementById("myButton").disabled = true;


document.getElementById('pauseIcon').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });