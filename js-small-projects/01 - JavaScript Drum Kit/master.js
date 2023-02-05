// Catch Element
const keys = document.querySelectorAll(".key");
// Listen To Key Input
window.addEventListener("keydown", (e) => {
  // Prevent Any Short Cuts
  e.preventDefault();
  // Catch Audio To key
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (audio) {
    audio.currentTime = 0; // rewind to the startPoint
    audio.play();
    key.classList.add("playing");
  }
  // Add ShortCut To Change Background
  if (e.key.toLowerCase() === "s" && e.ctrlKey) {
    document.body.style.background =
      'url("assets/aron-visuals-LSFuPFE9vKE-unsplash.jpg") 30% 30% ';
    document.body.style.backgroundSize = "cover";
  }
});

// remove playing class

function removePlaying(e) {
  if (e.propertyName !== "transform") return; // skip it if it's not a transform
  this.classList.remove('playing')
}

// listen To end transition Duration
keys.forEach((key) => {
  key.addEventListener("transitionend", removePlaying);
});
