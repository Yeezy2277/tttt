var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var price1 = document.querySelector(".price1").textContent;
var price2 = document.querySelector(".price2").textContent;
var ram = document.querySelector(".ram").textContent;
var cpu = Number(document.querySelector(".cpu").textContent);
var cpuValue = Number(localStorage.getItem("cpu"));
var ramValue = Number(localStorage.getItem("disk"));
var diskValue = Number(localStorage.getItem("disk"));
var disk = document.querySelector(".disk").textContent;
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
        document.querySelector(".cpu").innerHTML = String(evt.target.value);
        var input = document.querySelector(".range1 input");
        var value = document.querySelector(".price1");
        var cpuField = document.querySelector(".cpu");
        var inputValuePercent = void 0;
        value.innerHTML = String(evt.target.value * Number(price1));
        cpuField.textContent = input.value;
        cpuField.innerHTML = cpu;
        switch (evt.target.value) {
            case "1":
                inputValuePercent = "1";
                break;
            case "2":
                inputValuePercent = "35";
                break;
            case "3":
                inputValuePercent = "55";
                break;
            case "4":
                inputValuePercent = "67";
                break;
            case "5":
                inputValuePercent = "88";
                break;
        }
        evt.target.background = "-webkit-linear-gradient(left, #ee0023 0%, #ee0023 " + inputValuePercent + "%, #000 " + inputValuePercent + "%, #000 100%)";
    };
    var updateRam = function updateRam(evt) {
        setRam(evt.target.value);
        document.querySelector(".ram").innerHTML = String(evt.target.value);
        var input = document.querySelector(".range2 input");
        var value = document.querySelector(".price2");
        var ramField = document.querySelector(".ram");
        var inputValuePercent = void 0;
        value.innerHTML = String(evt.target.value * Number(price2));
        ramField.textContent = input.value;
        ramField.innerHTML = ram;
        switch (evt.target.value) {
            case "1":
                inputValuePercent = "1";
                break;
            case "2":
                inputValuePercent = "35";
                break;
            case "3":
                inputValuePercent = "55";
                break;
            case "4":
                inputValuePercent = "67";
                break;
            case "5":
                inputValuePercent = "88";
                break;
        }
        evt.target.background = "-webkit-linear-gradient(left, #ee0023 0%, #ee0023 " + inputValuePercent + "%, #000 " + inputValuePercent + "%, #000 100%)";
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
        { className: "step" },
        React.createElement(
            "h1",
            null,
            "\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0430\u0433\u0430"
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
        var inputValuePercent = void 0;
        switch (input.value) {
            case "1":
                inputValuePercent = "1";
                break;
            case "2":
                inputValuePercent = "20";
                break;
            case "3":
                inputValuePercent = "100";
                break;
            case "4":
                inputValuePercent = "100";
                break;
            case "5":
                inputValuePercent = "100";
                break;
            case "6":
                inputValuePercent = "77";
                break;
            case "7":
                inputValuePercent = "88";
                break;
            case "8":
                inputValuePercent = "100";
                break;
        }
        value.innerHTML = String(input.value * Number(price1));
        cpu = Number(input.value);
        cpuField.innerHTML = cpu;
        // нужно чтоб прибавлялось в зависимости от шага
        // нужно чтоб по идее зависело от шага, или я хз для чего про них в тз написаны
        input.style.background = "-webkit-linear-gradient(left, #ee0023 0%, #ee0023 " + inputValuePercent + "%, #000 " + inputValuePercent + "%, #000 100%)";
        // setEditRange(cpuField);
    };
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "range", min: "1", max: "8", defaultValue: "1", name: "range", step: "1", onInput: updateRange, onChange: updateRange })
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
        valueRam.innerHTML = String(Number(ram) + Number(localStorage.getItem("ram")));
        input.style.background = "-webkit-linear-gradient(left, #ee0023 0%, #ee0023 " + inputValuePercent + "%, #000 " + inputValuePercent + "%, #000 100%)";
        setEditRange(input.value);
    };
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "range", min: "1", max: "3", defaultValue: "1", name: "range", step: "1", onInput: updateRange, onChange: updateRange })
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
        valueDisk.innerHTML = String(Number(input.value) + Number(localStorage.getItem("disk")));
        input.style.background = "-webkit-linear-gradient(left, #ee0023 0%, #ee0023 " + inputValuePercent + "%, #000 " + inputValuePercent + "%, #000 100%)";
        setEditRange(input.value);
    };
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "range", min: "1", max: "21", defaultValue: "1", name: "range", step: "1", onInput: updateRange, onChange: updateRange })
    );
};