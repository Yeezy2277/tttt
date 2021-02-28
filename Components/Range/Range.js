var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var price1 = document.querySelector(".price1").textContent;
var price2 = document.querySelector(".price2").textContent;
var ram = Number(document.querySelector(".ram").textContent);
var cpu = Number(document.querySelector(".cpu").textContent);
var cpuValue = Number(localStorage.getItem("cpu"));
var ramValue = Number(localStorage.getItem("ram"));
var diskValue = Number(localStorage.getItem("disk"));
var disk = Number(document.querySelector(".disk").textContent);
var price3 = document.querySelector(".price3").textContent;
var Step = function Step() {
    var _React$useState = React.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        cpu = _React$useState2[0],
        setCpu = _React$useState2[1];

    var _React$useState3 = React.useState(0),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        ram = _React$useState4[0],
        setRam = _React$useState4[1];

    var _React$useState5 = React.useState(0),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        disk = _React$useState6[0],
        setDisk = _React$useState6[1];

    var updateCpu = function updateCpu(evt) {
        setCpu(evt.target.value);
    };
    var updateRam = function updateRam(evt) {
        setRam(evt.target.value);
    };
    var updateDisk = function updateDisk(evt) {
        setDisk(evt.target.value);
    };
    var updateStep = function updateStep() {
        localStorage.setItem("cpu", cpu);
        localStorage.setItem("ram", ram);
        localStorage.setItem("disk", disk);
    };
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "step" },
            React.createElement(
                "h1",
                null,
                "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0448\u0430\u0433\u0430"
            ),
            React.createElement(
                "p",
                null,
                "CPU"
            ),
            React.createElement("input", { type: "text", onChange: updateCpu }),
            React.createElement(
                "p",
                null,
                "RAM"
            ),
            React.createElement("input", { type: "text", onChange: updateRam }),
            React.createElement(
                "p",
                null,
                "DISK"
            ),
            React.createElement("input", { type: "text", onChange: updateDisk }),
            React.createElement(
                "button",
                { onClick: updateStep },
                "Add"
            )
        )
    );
};
var Range1 = function Range1(props) {
    var _React$useState7 = React.useState(0),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        editRange = _React$useState8[0],
        setEditRange = _React$useState8[1];

    var updateRange = function updateRange() {
        var input = document.querySelector(".range1 input");
        var value = document.querySelector(".price1");
        var cpuField = document.querySelector(".cpu");
        var inputValuePercent = Number(input.value) * 100 / 40;
        value.innerHTML = String(input.value * Number(price1));
        cpu = Number(input.value);
        cpuField.innerHTML = cpu;
        input.style.background = "-webkit-linear-gradient(left, #ee0023 0%, #ee0023 " + inputValuePercent + "%, #000 " + inputValuePercent + "%, #000 100%)";
    };
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "range", min: cpu, max: "40", defaultValue: "1", name: "range", step: cpuValue, onInput: updateRange, onChange: updateRange })
    );
};

var Range2 = function Range2(props) {
    var _React$useState9 = React.useState(0),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        editRange = _React$useState10[0],
        setEditRange = _React$useState10[1];

    var updateRange = function updateRange() {
        var input = document.querySelector(".range2 input");
        var valuePrice = document.querySelector(".price2");
        var valueRam = document.querySelector(".ram");
        var inputValuePercent = Number(input.value) * 100 / 512;
        valuePrice.innerHTML = String(input.value * (Number(price2) / Number(ram)));
        valueRam.innerHTML = input.value;
        input.style.background = "-webkit-linear-gradient(left, #ee0023 0%, #ee0023 " + inputValuePercent + "%, #000 " + inputValuePercent + "%, #000 100%)";
        setEditRange(input.value);
    };
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "range", min: ram, max: "512", defaultValue: "1", name: "range", step: ramValue, onInput: updateRange, onChange: updateRange })
    );
};

var Range3 = function Range3(props) {
    var _React$useState11 = React.useState(0),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        editRange = _React$useState12[0],
        setEditRange = _React$useState12[1];

    var updateRange = function updateRange() {
        var input = document.querySelector(".range3 input");
        var valuePrice = document.querySelector(".price3");
        var valueDisk = document.querySelector(".disk");
        var inputValuePercent = Number(input.value) * 100 / 4096;
        valuePrice.innerHTML = String(input.value * (Number(price3) / Number(disk)));
        valueDisk.innerHTML = Number(input.value);
        input.style.background = "-webkit-linear-gradient(left, #ee0023 0%, #ee0023 " + inputValuePercent + "%, #000 " + inputValuePercent + "%, #000 100%)";
        setEditRange(input.value);
    };
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "range", min: disk, max: "4096", defaultValue: "1", name: "range", step: diskValue, onInput: updateRange, onChange: updateRange })
    );
};