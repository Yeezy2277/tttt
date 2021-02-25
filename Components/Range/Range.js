var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var price1 = document.querySelector(".price1").textContent;
var price2 = document.querySelector(".price2").textContent;
var ram = document.querySelector(".ram").textContent;
var disk = document.querySelector(".disk").textContent;
var price3 = document.querySelector(".price3").textContent;

var Range1 = function Range1(props) {
    var _React$useState = React.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        editRange = _React$useState2[0],
        setEditRange = _React$useState2[1];

    var updateRange = function updateRange() {
        var input = document.querySelector(".range1 input");
        var value = document.querySelector(".price1");
        var inputValuePercent = void 0;
        switch (input.value) {
            case "1":
                inputValuePercent = "1";
                break;
            case "2":
                inputValuePercent = "100";
                break;
        }
        value.innerHTML = String(input.value * Number(price1));
        document.querySelector(".cpu").innerHTML = input.value;
        input.style.background = "-webkit-linear-gradient(left, #ee0023 0%, #ee0023 " + inputValuePercent + "%, #000 " + inputValuePercent + "%, #000 100%)";
        setEditRange(input.value);
        console.log(value);
    };
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "range", min: "1", max: "2", defaultValue: "1", name: "range", step: "1", onInput: updateRange, onChange: updateRange })
    );
};

var Range2 = function Range2(props) {
    var _React$useState3 = React.useState(0),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        editRange = _React$useState4[0],
        setEditRange = _React$useState4[1];

    var updateRange = function updateRange() {
        var input = document.querySelector(".range2 input");
        var valuePrice = document.querySelector(".price2");
        var valueRam = document.querySelector(".ram");
        var inputValuePercent = void 0;
        switch (input.value) {
            case "1":
                inputValuePercent = "5";
                break;
            case "2":
                inputValuePercent = "50";
                break;
            case "3":
                inputValuePercent = "100";
                break;

        }
        valuePrice.innerHTML = String(input.value * Number(price2));
        valueRam.innerHTML = String(input.value * Number(ram));
        input.style.background = "-webkit-linear-gradient(left, #ee0023 0%, #ee0023 " + inputValuePercent + "%, #000 " + inputValuePercent + "%, #000 100%)";
        setEditRange(input.value);
        console.log(editRange);
    };
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "range", min: "1", max: "3", defaultValue: "1", name: "range", step: "1", onInput: updateRange, onChange: updateRange })
    );
};

var Range3 = function Range3(props) {
    var _React$useState5 = React.useState(0),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        editRange = _React$useState6[0],
        setEditRange = _React$useState6[1];

    var updateRange = function updateRange() {
        var input = document.querySelector(".range3 input");
        var valuePrice = document.querySelector(".price3");
        var valueDisk = document.querySelector(".disk");
        var inputValuePercent = void 0;
        switch (input.value) {
            case "1":
                inputValuePercent = "5";
                break;
            case "2":
                inputValuePercent = "10";
                break;
            case "3":
                inputValuePercent = "15";
                break;
            case "4":
                inputValuePercent = "19";
                break;
            case "5":
                inputValuePercent = "24";
                break;
            case "6":
                inputValuePercent = "28";
                break;
            case "7":
                inputValuePercent = "33";
                break;
            case "8":
                inputValuePercent = "38";
                break;
            case "9":
                inputValuePercent = "40";
                break;
            case "10":
                inputValuePercent = "44";
                break;
            case "11":
                inputValuePercent = "48";
                break;
            case "12":
                inputValuePercent = "52";
                break;
            case "13":
                inputValuePercent = "60";
                break;
            case "14":
                inputValuePercent = "66";
                break;
            case "15":
                inputValuePercent = "70";
                break;
            case "16":
                inputValuePercent = "74";
                break;
            case "17":
                inputValuePercent = "78";
                break;
            case "18":
                inputValuePercent = "82";
                break;
            case "19":
                inputValuePercent = "86";
                break;
            case "20":
                inputValuePercent = "90";
                break;
            case "21":
                inputValuePercent = "100";
                break;
        }
        valuePrice.innerHTML = String(input.value * Number(price3));
        valueDisk.innerHTML = String(input.value * Number(disk));
        input.style.background = "-webkit-linear-gradient(left, #ee0023 0%, #ee0023 " + inputValuePercent + "%, #000 " + inputValuePercent + "%, #000 100%)";
        setEditRange(input.value);
        console.log(editRange);
    };
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "range", min: "1", max: "21", defaultValue: "1", name: "range", step: "1", onInput: updateRange, onChange: updateRange })
    );
};