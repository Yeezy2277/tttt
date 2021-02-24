// VARS==================
let pricingBlock = document.querySelector(".pricing-circle"),
    colocationBlock = document.querySelector(".colocation-circle"),
    parthnersBlock = document.querySelector(".parthners-circle"),
    benefitsBlock = document.querySelector(".benefits-circle"),
    protectionBlock = document.querySelector(".protection-circle"),
    vdiBlock = document.querySelector(".vdi-circle"),
    vpsBlock = document.querySelector(".vps-circle"),
    infrastructureBlock = document.querySelector(".infrastructure-circle");

let pricingVideo = document.querySelector(".pricing-circle video"),
    colocationVideo = document.querySelector(".colocation-circle video"),
    parthnersVideo = document.querySelector(".parthners-circle video"),
    benefitsVideo = document.querySelector(".benefits-circle video"),
    protectionVideo = document.querySelector(".protection-circle video"),
    vdiVideo = document.querySelector(".vdi-circle video"),
    vpsVideo = document.querySelector(".vps-circle video"),
    infrastructureVideo = document.querySelector(".infrastructure-circle video");
//===================//


pricingVideo.currentTime = localStorage.getItem("pricing");
colocationVideo.currentTime = localStorage.getItem("colocation");
parthnersVideo.currentTime = localStorage.getItem("parthners");
benefitsVideo.currentTime = localStorage.getItem("benefits");
protectionVideo.currentTime = localStorage.getItem("protection");
vdiVideo.currentTime = localStorage.getItem("vdi");
vpsVideo.currentTime = localStorage.getItem("vps");
infrastructureVideo.currentTime = localStorage.getItem("infrastructure");

setInterval(() => {
    localStorage.setItem("pricing", pricingVideo.currentTime);
    localStorage.setItem("colocation", colocationVideo.currentTime);
    localStorage.setItem("parthners", parthnersVideo.currentTime);
    localStorage.setItem("benefits", benefitsVideo.currentTime);
    localStorage.setItem("protection", protectionVideo.currentTime);
    localStorage.setItem("vdi", vdiVideo.currentTime);
    localStorage.setItem("vps", vpsVideo.currentTime);
    localStorage.setItem("infrastructure", infrastructureVideo.currentTime);
},500)
