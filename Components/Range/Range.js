var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var price1 = document.querySelector(".price1").textContent;
var price2 = document.querySelector(".price2").textContent;
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
                inputValuePercent = "5";
                break;
            case "2":
                inputValuePercent = "37";
                break;
            case "3":
                inputValuePercent = "65";
                break;
            case "4":
                inputValuePercent = "100";
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
        React.createElement("input", { type: "range", min: "1", max: "4", defaultValue: "1", name: "range", step: "1", onInput: updateRange })
    );
};

var Range2 = function Range2(props) {
    var _React$useState3 = React.useState(0),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        editRange = _React$useState4[0],
        setEditRange = _React$useState4[1];

    var updateRange = function updateRange() {
        var input = document.querySelector(".range2 input");
        var value = document.querySelector(".price2");
        var inputValuePercent = void 0;
        switch (input.value) {
            case "1":
                inputValuePercent = "5";
                break;
            case "2":
                inputValuePercent = "15";
                break;
            case "3":
                inputValuePercent = "28";
                break;
            case "4":
                inputValuePercent = "42";
                break;
            case "5":
                inputValuePercent = "55";
                break;
            case "6":
                inputValuePercent = "68";
                break;
            case "7":
                inputValuePercent = "83";
                break;
            case "8":
                inputValuePercent = "100";
                break;

        }
        value.innerHTML = String(input.value * Number(price2));
        var cpu = document.querySelector(".ram").innerHTML = input.value * 1024;
        input.style.background = "-webkit-linear-gradient(left, #ee0023 0%, #ee0023 " + inputValuePercent + "%, #000 " + inputValuePercent + "%, #000 100%)";
        setEditRange(input.value);
        console.log(editRange);
    };
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "range", min: "1", max: "8", defaultValue: "1", name: "range", step: "1", onInput: updateRange })
    );
};

var Range3 = function Range3(props) {
    var _React$useState5 = React.useState(0),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        editRange = _React$useState6[0],
        setEditRange = _React$useState6[1];

    var updateRange = function updateRange() {
        var input = document.querySelector(".range3 input");
        var inputValuePercent = void 0;
        switch (input.value) {
            case "1":
                inputValuePercent = "5";
                break;
            case "2":
                inputValuePercent = "37";
                break;
            case "3":
                inputValuePercent = "65";
                break;
            case "4":
                inputValuePercent = "100";
        }
        var price = document.querySelector(".price3").innerHTML = input.value * 875;
        var cpu = document.querySelector(".disk").innerHTML = input.value * 110;
        input.style.background = "-webkit-linear-gradient(left, #ee0023 0%, #ee0023 " + inputValuePercent + "%, #000 " + inputValuePercent + "%, #000 100%)";
        setEditRange(input.value);
        console.log(editRange);
    };
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "range", min: "1", max: "4", defaultValue: "0", name: "range", step: "1", onInput: updateRange })
    );
};