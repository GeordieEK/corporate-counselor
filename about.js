document.addEventListener("DOMContentLoaded", () => {
  randomImage();
});

// Randomize counselor on page load
function randomImage() {
  const iconRandom = document.getElementById("bigImage");
  iconRandom.setAttribute(
    "src",
    botPic[Math.floor(Math.random() * botPic.length)]
  );
}
