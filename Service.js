let video = document.querySelector(".page video");
let block = document.querySelector(".page");
video.currentTime = localStorage.getItem("infrastructure");
video.pause();
block.addEventListener("mouseover", () => {
    video.play();
})
block.addEventListener("mouseout", () => {
    video.pause();
})