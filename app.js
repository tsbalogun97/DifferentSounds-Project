// function for each key sounds to play onclick

const letters = document.querySelectorAll(".key");
console.log(letters);

let testAudio = document.querySelector("audio");
document.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.keyCode == 65) {
    let audio = document.querySelector("#clap");
    audio.play();
  } else if (e.keyCode == 83) {
    let audio = document.querySelector("#hihat");
    audio.play();
  } else if (e.keyCode == 68) {
    let audio = document.querySelector("#Kick");
    audio.play();
  } else if (e.keyCode == 68) {
    let audio = document.querySelector("#Kick");
    audio.play();
  } else if (e.keyCode == 68) {
    let audio = document.querySelector("#Kick");
    audio.play();
  } else if (e.keyCode == 70) {
    let audio = document.querySelector("#openhat");
    audio.play();
  } else if (e.keyCode == 71) {
    let audio = document.querySelector("#boom");
    audio.play();
  } else if (e.keyCode == 72) {
    let audio = document.querySelector("#ride");
    audio.play();
  } else if (e.keyCode == 74) {
    let audio = document.querySelector("#snare");
    audio.play();
  } else if (e.keyCode == 75) {
    let audio = document.querySelector("#tom");
    audio.play();
  } else if (e.keyCode == 76) {
    let audio = document.querySelector("#tink");
    audio.play();
  }
});

// testAudio.play()
