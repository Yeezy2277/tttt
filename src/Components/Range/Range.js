let price1 = document.querySelector(".price1").textContent;
let price2 = document.querySelector(".price2").textContent;

let cpu = document.querySelector(".cpu").textContent;
let ram = document.querySelector(".ram").textContent;
let disk = document.querySelector(".disk").textContent;

let cpuStep = Number(document.querySelector("#cpuStep").textContent);
let ramStep = Number(document.querySelector("#ramStep").textContent);
let diskStep = Number(document.querySelector("#diskStep").textContent);

let cpuField = document.querySelector(".cpu");
let ramField = document.querySelector(".ram");
let diskField = document.querySelector(".disk");

let price3 = document.querySelector(".price3").textContent;

let cpuArr = cpu.split('[').join('').split(')').join('').split(',');
let ramArr = ram.split('[').join('').split(')').join('').split(',');
let diskArr = disk.split('[').join('').split(')').join('').split(',');
cpuField.innerHTML = cpuArr[0];
ramField.innerHTML = ramArr[0];
diskField.innerHTML = diskArr[0];

const Range1 = (props) => {
	const [editRange, setEditRange] = React.useState(0);
	cpu.innerHTML = cpuArr[0];
    const updateRange = () => {
        let input = document.querySelector(".range1 input");
        let value = document.querySelector(".price1");
        let inputValuePercent = (Number(input.value)*100)/cpuArr[1];
        value.innerHTML = String(input.value * Number(price1));
        cpu = Number(input.value);
		cpuField.innerHTML = cpu;
        input.style.background = `-webkit-linear-gradient(left, #ee0023 0%, #ee0023 ${inputValuePercent}%, #000 ${inputValuePercent}%, #000 100%)`
    }
    return <div>
        <input type="range" min={cpuArr[0]} max={cpuArr[1]} defaultValue="1" name="range" step={cpuStep} onInput={updateRange} onChange={updateRange}/>
    </div>
}

const Range2 = (props) => {
    const [editRange, setEditRange] = React.useState(0);
    const updateRange = () => {
        let input = document.querySelector(".range2 input");
        let valuePrice = document.querySelector(".price2");
        let inputValuePercent = (Number(input.value)*100)/ramArr[1];
        valuePrice.innerHTML = String(input.value * (Number(price2)/Number(ramArr[0])));
        ramField.innerHTML = input.value;
        input.style.background = `-webkit-linear-gradient(left, #ee0023 0%, #ee0023 ${inputValuePercent}%, #000 ${inputValuePercent}%, #000 100%)`
        setEditRange(input.value);
    }
    return <div>
        <input type="range" min={ramArr[0]} max={ramArr[1]} defaultValue="1" name="range" step={ramStep} onInput={updateRange} onChange={updateRange}/>
    </div>
}

const Range3 = (props) => {
    const [editRange, setEditRange] = React.useState(0);
    const updateRange = () => {
        let input = document.querySelector(".range3 input");
        let valuePrice = document.querySelector(".price3");
        let inputValuePercent = (Number(input.value)*100)/diskArr[1];
        valuePrice.innerHTML = String(input.value * (Number(price3)/Number(diskArr[0])));
        diskField.innerHTML = input.value;
        input.style.background = `-webkit-linear-gradient(left, #ee0023 0%, #ee0023 ${inputValuePercent}%, #000 ${inputValuePercent}%, #000 100%)`
        setEditRange(input.value);
    }
    return <div>
        <input type="range" min={diskArr[0]} max={diskArr[1]} defaultValue="1" name="range" step={diskStep} onInput={updateRange} onChange={updateRange}/>
    </div>
}