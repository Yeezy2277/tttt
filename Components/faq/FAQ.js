var faqMini1 = document.querySelector(".faq-1 .faq-mini");
var faqMini2 = document.querySelector(".faq-2 .faq-mini");
var faqMini3 = document.querySelector(".faq-3 .faq-mini");
var faqMini4 = document.querySelector(".faq-4 .faq-mini");
var faqMini5 = document.querySelector(".faq-5 .faq-mini");

var faqLarge1 = document.querySelector(".faq-1 .faq-description");
var faqLarge2 = document.querySelector(".faq-2 .faq-description");
var faqLarge3 = document.querySelector(".faq-3 .faq-description");
var faqLarge4 = document.querySelector(".faq-4 .faq-description");
var faqLarge5 = document.querySelector(".faq-5 .faq-description");

var btnMini1 = document.querySelector(".faq-1 .faq-mini button");
var btnMini2 = document.querySelector(".faq-2 .faq-mini button");
var btnMini3 = document.querySelector(".faq-3 .faq-mini button");
var btnMini4 = document.querySelector(".faq-4 .faq-mini button");
var btnMini5 = document.querySelector(".faq-5 .faq-mini button");

var btnLarge1 = document.querySelector(".faq-1 .faq-description button");
var btnLarge2 = document.querySelector(".faq-2 .faq-description button");
var btnLarge3 = document.querySelector(".faq-3 .faq-description button");
var btnLarge4 = document.querySelector(".faq-4 .faq-description button");
var btnLarge5 = document.querySelector(".faq-5 .faq-description button");

function mini() {
    faqLarge1.style.display = "none";
    faqMini1.style.display = "flex";
}

function large() {
    faqLarge1.style.display = "flex";
    faqMini1.style.display = "none";
}
btnMini1.addEventListener("click", large);
btnLarge1.addEventListener("click", mini);
btnMini2.addEventListener("click", function () {
    faqLarge2.style.display = "flex";
    faqMini2.style.display = "none";
});

btnLarge2.addEventListener("click", function () {
    faqLarge2.style.display = "none";
    faqMini2.style.display = "flex";
});

btnMini3.addEventListener("click", function () {
    faqLarge3.style.display = "flex";
    faqMini3.style.display = "none";
});

btnLarge3.addEventListener("click", function () {
    faqLarge3.style.display = "none";
    faqMini3.style.display = "flex";
});

btnMini4.addEventListener("click", function () {
    faqLarge4.style.display = "flex";
    faqMini4.style.display = "none";
});

btnLarge4.addEventListener("click", function () {
    faqLarge4.style.display = "none";
    faqMini4.style.display = "flex";
});

btnMini5.addEventListener("click", function () {
    faqLarge5.style.display = "flex";
    faqMini5.style.display = "none";
});

btnLarge5.addEventListener("click", function () {
    faqLarge5.style.display = "none";
    faqMini5.style.display = "flex";
});