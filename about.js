document.addEventListener("DOMContentLoaded", () => {
  randomImage();
});

// Randomize counselor on page load
function randomImage() {
  const iconRandom = document.getElementById("aboutImageContainer");
  iconRandom.innerHTML = botPic[Math.floor(Math.random() * botPic.length)];
}
