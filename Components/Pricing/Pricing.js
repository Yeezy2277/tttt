var osArr = document.querySelectorAll(".osArr"),
    osPriceArr = document.querySelectorAll(".osPriceArr"),
    togglePrice = document.querySelector(".toggle-price").textContent,
    ddosPrice = document.querySelector(".ddos-price"),
    wafPrice = document.querySelector(".waf-price"),
    ddosCheckbox = document.querySelector("#ddos-checkbox"),
    wafCheckbox = document.querySelector("#waf-checkbox"),
    osSelect = document.querySelectorAll(".osSelect");
var osArray = Array.prototype.slice.call(osArr).map(function (item) {
    return item.textContent;
}).map(function (item) {
    return item.split("'").join("").split('[').join('').split(']').join('').split(",");
});
var osPriceArray = Array.prototype.slice.call(osPriceArr).map(function (item) {
    return item.textContent;
}).map(function (item) {
    return item.split("'").join("").split('[').join('').split(']').join('').split(",");
});
var togglePriceArray = togglePrice.split("'").join("").split('[').join('').split(']').join('').split(",");
console.log(osArray);
// const SelectOS = () => {
//     return osSelect.map(item => item.innerHTML = )
// }

var PriceOS = function PriceOS() {
    return osPriceArray.map(function (item) {
        return item.map(function (item) {
            return React.createElement(
                "option",
                { className: item },
                item
            );
        });
    });
};

osSelect.addEventListener("change", function () {
    var priceOS = document.querySelector(".priceOS").innerHTML = "<h1 class=\"rightText\"><span>" + osPriceArray[osSelect.options.selectedIndex] + "</span>$/M</h1>";
});
ddosCheckbox.addEventListener("click", function () {
    if (ddosCheckbox.checked) {
        ddosPrice.innerHTML = "<h1 class=\"rightText\"><span>" + togglePriceArray[0] + "</span>$/M</h1>";
    } else {
        ddosPrice.innerHTML = "";
    }
});

wafCheckbox.addEventListener("click", function () {
    if (wafCheckbox.checked) {
        wafPrice.innerHTML = "<h1 class=\"rightText\"><span>" + togglePriceArray[1] + "</span>$/M</h1>";
    } else {
        wafPrice.innerHTML = "";
    }
});