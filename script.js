let playBtn = document.getElementsByClassName("play");
let pauseBtn = document.getElementsByClassName("pause");

let text = document.querySelector("p");

const audio = new Audio("./asset/Power - Sidhu Moose Wala.mp3");


playBtn[0].addEventListener("click", (e) => {
audio.play();
console.log(playBtn[0]);
text.innerHTML = "Audio Playing🔊";
 });

pauseBtn[0].addEventListener("click", (e) => {
audio.pause();
text.innerHTML = "Audio Paused";
});
