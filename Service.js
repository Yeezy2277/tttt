let video = document.querySelector(".page video");
video.currentTime = localStorage.getItem("infrastructure");
video.addEventListener("mouseover", () => {
    video.play();
})
video.addEventListener("click", () => {
    video.pause();
})