let faqMini1 = document.querySelector("#faq-1 .faq-mini");
let faqMini2 = document.querySelector("#faq-2 .faq-mini");
let faqMini3 = document.querySelector("#faq-3 .faq-mini");
let faqMini4 = document.querySelector("#faq-4 .faq-mini");
let faqMini5 = document.querySelector("#faq-5 .faq-mini");

let faqLarge1 = document.querySelector("#faq-1 .faq-description");
let faqLarge2 = document.querySelector("#faq-2 .faq-description");
let faqLarge3 = document.querySelector("#faq-3 .faq-description");
let faqLarge4 = document.querySelector("#faq-4 .faq-description");
let faqLarge5 = document.querySelector("#faq-5 .faq-description");

let btnMini1 = document.querySelector("#faq-1 .faq-mini button");
let btnMini2 = document.querySelector("#faq-2 .faq-mini button");
let btnMini3 = document.querySelector("#faq-3 .faq-mini button");
let btnMini4 = document.querySelector("#faq-4 .faq-mini button");
let btnMini5 = document.querySelector("#faq-5 .faq-mini button");

let btnLarge1 = document.querySelector("#faq-1 .faq-description button");
let btnLarge2 = document.querySelector("#faq-2 .faq-description button");
let btnLarge3 = document.querySelector("#faq-3 .faq-description button");
let btnLarge4 = document.querySelector("#faq-4 .faq-description button");
let btnLarge5 = document.querySelector("#faq-5 .faq-description button");

function mini() {
    faqLarge1.style.display = "none";
    faqMini1.style.display = "flex";
}

function large() {
    faqLarge1.style.display = "flex";
    faqMini1.style.display = "none";
}
btnMini1.addEventListener("click", large)
btnLarge1.addEventListener("click",mini);
btnMini2.addEventListener("click", () => {
    faqLarge2.style.display = "flex";
    faqMini2.style.display = "none";
} )

btnLarge2.addEventListener("click", () => {
    faqLarge2.style.display = "none";
    faqMini2.style.display = "flex";
} )

btnMini3.addEventListener("click", () => {
    faqLarge3.style.display = "flex";
    faqMini3.style.display = "none";
} )

btnLarge3.addEventListener("click", () => {
    faqLarge3.style.display = "none";
    faqMini3.style.display = "flex";
} )

btnMini4.addEventListener("click", () => {
    faqLarge4.style.display = "flex";
    faqMini4.style.display = "none";
} )

btnLarge4.addEventListener("click", () => {
    faqLarge4.style.display = "none";
    faqMini4.style.display = "flex";
} )

btnMini5.addEventListener("click", () => {
    faqLarge5.style.display = "flex";
    faqMini5.style.display = "none";
} )

btnLarge5.addEventListener("click", () => {
    faqLarge5.style.display = "none";
    faqMini5.style.display = "flex";
} )


