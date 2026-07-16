const video = document.getElementById("recapVideo");
const playButton = document.getElementById("playRecap");

async function startVideo() {
  try {
    await video.play();
    playButton.classList.add("is-hidden");
  } catch (error) {
    playButton.classList.remove("is-hidden");
  }
}

playButton.addEventListener("click", startVideo);

video.addEventListener("play", () => {
  playButton.classList.add("is-hidden");
});

video.addEventListener("pause", () => {
  if (video.currentTime === 0 || video.ended) {
    playButton.classList.remove("is-hidden");
  }
});

video.addEventListener("ended", () => {
  playButton.innerHTML = "<span>↻</span> Play Again";
  playButton.classList.remove("is-hidden");
});

playButton.addEventListener("click", () => {
  if (video.ended) {
    video.currentTime = 0;
  }
});
