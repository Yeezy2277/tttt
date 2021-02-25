let price1 = document.querySelector(".price1").textContent;
let price2 = document.querySelector(".price2").textContent;
let cpu = document.querySelector(".cpu").textContent;
let ram = document.querySelector(".ram").textContent;
let disk = document.querySelector(".disk").textContent;
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
    return <div className="step">
        <h1>Размер шага</h1>
        <p>CPU</p>
        <input type="text" onChange={updateCpu}/>
        <p>RAM</p>
        <input type="text" onChange={updateRam}/>
        <p>DISK</p>
        <input type="text" onChange={updateDisk}/>
        <button onClick={updateStep}>Add</button>
    </div>
}

const Range1 = (props) => {
    const [editRange, setEditRange] = React.useState(0);
    const updateRange = () => {
        let input = document.querySelector(".range1 input");
        let value = document.querySelector(".price1");
        let inputValuePercent;
        switch (input.value) {
            case "1":
                inputValuePercent = "1";
                break;
            case "2":
                inputValuePercent = "100";
                break;
        }
        value.innerHTML = String(input.value * Number(price1));
        document.querySelector(".cpu").innerHTML = Number(cpu) + Number(localStorage.getItem("cpu"));
        input.style.background = `-webkit-linear-gradient(left, #ee0023 0%, #ee0023 ${inputValuePercent}%, #000 ${inputValuePercent}%, #000 100%)`
        setEditRange(input.value);
        console.log(value);
    }
    return <div>
        <input type="range" min="1" max="2" defaultValue="1" name="range" step="1" onInput={updateRange} onChange={updateRange}/>
    </div>
}

const Range2 = (props) => {
    const [editRange, setEditRange] = React.useState(0);
    const updateRange = () => {
        let input = document.querySelector(".range2 input");
        let valuePrice = document.querySelector(".price2");
        let valueRam = document.querySelector(".ram");
        let inputValuePercent;
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
        input.style.background = `-webkit-linear-gradient(left, #ee0023 0%, #ee0023 ${inputValuePercent}%, #000 ${inputValuePercent}%, #000 100%)`
        setEditRange(input.value);
        console.log(editRange)
    }
    return <div>
        <input type="range" min="1" max="3" defaultValue="1" name="range" step="1" onInput={updateRange} onChange={updateRange}/>
    </div>
}

const Range3 = (props) => {
    const [editRange, setEditRange] = React.useState(0);
    const updateRange = () => {
        let input = document.querySelector(".range3 input");
        let valuePrice = document.querySelector(".price3");
        let valueDisk = document.querySelector(".disk");
        let inputValuePercent;
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
        input.style.background = `-webkit-linear-gradient(left, #ee0023 0%, #ee0023 ${inputValuePercent}%, #000 ${inputValuePercent}%, #000 100%)`
        setEditRange(input.value);
        console.log(editRange)
    }
    return <div>
        <input type="range" min="1" max="21" defaultValue="1" name="range" step="1" onInput={updateRange} onChange={updateRange}/>
    </div>
}