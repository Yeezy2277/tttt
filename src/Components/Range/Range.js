let price1 = document.querySelector(".price1").textContent;
let price2 = document.querySelector(".price2").textContent;
let ram = Number(document.querySelector(".ram").textContent);
let cpu = Number(document.querySelector(".cpu").textContent);
let cpuValue = Number(localStorage.getItem("cpu"));
let ramValue = Number(localStorage.getItem("ram"));
let diskValue = Number(localStorage.getItem("disk"));
let disk = Number(document.querySelector(".disk").textContent);
let price3 = document.querySelector(".price3").textContent;
const Step = () => {
    const [cpu, setCpu] = React.useState(0);
    const [ram, setRam] = React.useState(0);
    const [disk, setDisk] = React.useState(0);
    const updateCpu = (evt) => {
        setCpu(evt.target.value);
    }
    const updateRam = (evt) => {
        setRam(evt.target.value);
    }
    const updateDisk = (evt) => {
        setDisk(evt.target.value);
    }
    const updateStep = () => {
        localStorage.setItem("cpu", cpu);
        localStorage.setItem("ram", ram);
        localStorage.setItem("disk", disk);
    }
    return <div>
        <div className="step">
            <h1>Значения шага</h1>
            <p>CPU</p>
            <input type="text" onChange={updateCpu}/>
            <p>RAM</p>
            <input type="text" onChange={updateRam}/>
            <p>DISK</p>
            <input type="text" onChange={updateDisk}/>
            <button onClick={updateStep}>Add</button>
        </div>
    </div>
}
const Range1 = (props) => {
    const [editRange, setEditRange] = React.useState(0);
    const updateRange = () => {
        let input = document.querySelector(".range1 input");
        let value = document.querySelector(".price1");
        let cpuField = document.querySelector(".cpu");
        let inputValuePercent = (Number(input.value)*100)/40;
        value.innerHTML = String(input.value * Number(price1));
        cpu = Number(input.value);
        cpuField.innerHTML = cpu;
        input.style.background = `-webkit-linear-gradient(left, #ee0023 0%, #ee0023 ${inputValuePercent}%, #000 ${inputValuePercent}%, #000 100%)`
    }
    return <div>
        <input type="range" min={cpu} max="40" defaultValue="1" name="range" step={cpuValue} onInput={updateRange} onChange={updateRange}/>
    </div>
}

const Range2 = (props) => {
    const [editRange, setEditRange] = React.useState(0);
    const updateRange = () => {
        let input = document.querySelector(".range2 input");
        let valuePrice = document.querySelector(".price2");
        let valueRam = document.querySelector(".ram");
        let inputValuePercent = (Number(input.value)*100)/512;
        valuePrice.innerHTML = String(input.value * (Number(price2)/Number(ram)));
        valueRam.innerHTML = input.value;
        input.style.background = `-webkit-linear-gradient(left, #ee0023 0%, #ee0023 ${inputValuePercent}%, #000 ${inputValuePercent}%, #000 100%)`
        setEditRange(input.value);
    }
    return <div>
        <input type="range" min={ram} max="512" defaultValue="1" name="range" step={ramValue} onInput={updateRange} onChange={updateRange}/>
    </div>
}

const Range3 = (props) => {
    const [editRange, setEditRange] = React.useState(0);
    const updateRange = () => {
        let input = document.querySelector(".range3 input");
        let valuePrice = document.querySelector(".price3");
        let valueDisk = document.querySelector(".disk");
        let inputValuePercent = (Number(input.value)*100)/4096;
        valuePrice.innerHTML = String(input.value * (Number(price3)/Number(disk)));
        valueDisk.innerHTML = Number(input.value);
        input.style.background = `-webkit-linear-gradient(left, #ee0023 0%, #ee0023 ${inputValuePercent}%, #000 ${inputValuePercent}%, #000 100%)`
        setEditRange(input.value);
    }
    return <div>
        <input type="range" min={disk} max="4096" defaultValue="1" name="range" step={diskValue} onInput={updateRange} onChange={updateRange}/>
    </div>
}