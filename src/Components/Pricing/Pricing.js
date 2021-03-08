let osArr = document.querySelectorAll(".osArr"),
    osPriceArr = document.querySelectorAll(".osPriceArr"),
    togglePrice = document.querySelector(".toggle-price").textContent,
    ddosPrice = document.querySelector(".ddos-price"),
    wafPrice = document.querySelector(".waf-price"),
    ddosCheckbox = document.querySelector("#ddos-checkbox"),
    wafCheckbox = document.querySelector("#waf-checkbox"),

    osSelect = document.querySelectorAll(".osSelect")
let osArray = Array.prototype.slice.call(osArr).map(item => item.textContent).map(item => item.split("'").join("").split('[').join('').split(']').join('').split(","));
let osPriceArray = Array.prototype.slice.call(osPriceArr).map(item => item.textContent).map(item => item.split("'").join("").split('[').join('').split(']').join('').split(","));
let togglePriceArray = togglePrice.split("'").join("").split('[').join('').split(']').join('').split(",");
console.log(osArray);
// const SelectOS = () => {
//     return osSelect.map(item => item.innerHTML = )
// }

const PriceOS = () => {
    return osPriceArray.map(item => item.map(item => {
            return <option className={item}>{item}</option>
        }
    ))
}

osSelect.addEventListener("change", () => {
    let priceOS = document.querySelector(".priceOS").innerHTML =
        `<h1 class="rightText"><span>${osPriceArray[osSelect.options.selectedIndex]}</span>$/M</h1>`;
});
ddosCheckbox.addEventListener("click", () => {
    if (ddosCheckbox.checked) {
        ddosPrice.innerHTML = `<h1 class="rightText"><span>${togglePriceArray[0]}</span>$/M</h1>`
    } else {
        ddosPrice.innerHTML = "";
    }
})

wafCheckbox.addEventListener("click", () => {
    if (wafCheckbox.checked) {
        wafPrice.innerHTML = `<h1 class="rightText"><span>${togglePriceArray[1]}</span>$/M</h1>`
    } else {
        wafPrice.innerHTML = "";
    }
})

