var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var price1 = document.querySelector(".price1").textContent;
var price2 = document.querySelector(".price2").textContent;

var cpu = document.querySelector(".cpu").textContent;
var ram = document.querySelector(".ram").textContent;
var disk = document.querySelector(".disk").textContent;

var cpuStep = Number(document.querySelector("#cpuStep").textContent);
var ramStep = Number(document.querySelector("#ramStep").textContent);
var diskStep = Number(document.querySelector("#diskStep").textContent);

var cpuField = document.querySelector(".cpu");
var ramField = document.querySelector(".ram");
var diskField = document.querySelector(".disk");

var price3 = document.querySelector(".price3").textContent;

var cpuArr = cpu.split('[').join('').split(')').join('').split(',');
var ramArr = ram.split('[').join('').split(')').join('').split(',');
var diskArr = disk.split('[').join('').split(')').join('').split(',');
cpuField.innerHTML = cpuArr[0];
ramField.innerHTML = ramArr[0];
diskField.innerHTML = diskArr[0];

var Range1 = function Range1(props) {
    var _React$useState = React.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        editRange = _React$useState2[0],
        setEditRange = _React$useState2[1];

    cpu.innerHTML = cpuArr[0];
    var updateRange = function updateRange() {
        var input = document.querySelector(".range1 input");
        var value = document.querySelector(".price1");
        var inputValuePercent = Number(input.value) * 100 / cpuArr[1];
        value.innerHTML = String(input.value * Number(price1));
        cpu = Number(input.value);
        cpuField.innerHTML = cpu;
        input.style.background = "-webkit-linear-gradient(left, #ee0023 0%, #ee0023 " + inputValuePercent + "%, #000 " + inputValuePercent + "%, #000 100%)";
    };
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "range", min: cpuArr[0], max: cpuArr[1], defaultValue: "1", name: "range", step: cpuStep, onInput: updateRange, onChange: updateRange })
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
        var inputValuePercent = Number(input.value) * 100 / ramArr[1];
        valuePrice.innerHTML = String(input.value * (Number(price2) / Number(ramArr[0])));
        ramField.innerHTML = input.value;
        input.style.background = "-webkit-linear-gradient(left, #ee0023 0%, #ee0023 " + inputValuePercent + "%, #000 " + inputValuePercent + "%, #000 100%)";
        setEditRange(input.value);
    };
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "range", min: ramArr[0], max: ramArr[1], defaultValue: "1", name: "range", step: ramStep, onInput: updateRange, onChange: updateRange })
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
        var inputValuePercent = Number(input.value) * 100 / diskArr[1];
        valuePrice.innerHTML = String(input.value * (Number(price3) / Number(diskArr[0])));
        diskField.innerHTML = input.value;
        input.style.background = "-webkit-linear-gradient(left, #ee0023 0%, #ee0023 " + inputValuePercent + "%, #000 " + inputValuePercent + "%, #000 100%)";
        setEditRange(input.value);
    };
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "range", min: diskArr[0], max: diskArr[1], defaultValue: "1", name: "range", step: diskStep, onInput: updateRange, onChange: updateRange })
    );
};