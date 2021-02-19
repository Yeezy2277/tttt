const Range1 = (props) => {
    const [editRange, setEditRange] = React.useState(0);
    const updateRange = () => {
        let input = document.querySelector(".range1 input");
        let inputValuePercent;
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
        document.querySelector(".price1").innerHTML = input.value * 150;
        document.querySelector(".cpu").innerHTML = input.value;
        input.style.background = `-webkit-linear-gradient(left, #ee0023 0%, #ee0023 ${inputValuePercent}%, #000 ${inputValuePercent}%, #000 100%)`
        setEditRange(input.value);
        console.log(editRange)
    }
    return <div>
        <input type="range" min="1" max="4" defaultValue="1" name="range" step="1" onInput={updateRange}/>
    </div>
}

const Range2 = (props) => {
    const [editRange, setEditRange] = React.useState(0);
    const updateRange = () => {
        let input = document.querySelector(".range2 input");
        let inputValuePercent;
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
        let price = document.querySelector(".price2").innerHTML = input.value * 375;
        let cpu = document.querySelector(".ram").innerHTML = input.value * 1024;
        input.style.background = `-webkit-linear-gradient(left, #ee0023 0%, #ee0023 ${inputValuePercent}%, #000 ${inputValuePercent}%, #000 100%)`
        setEditRange(input.value);
        console.log(editRange)
    }
    return <div>
        <input type="range" min="1" max="8" defaultValue="1" name="range" step="1" onInput={updateRange}/>
    </div>
}

const Range3 = (props) => {
    const [editRange, setEditRange] = React.useState(0);
    const updateRange = () => {
        let input = document.querySelector(".range3 input");
        let inputValuePercent;
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
        let price = document.querySelector(".price3").innerHTML = input.value * 875;
        let cpu = document.querySelector(".disk").innerHTML = input.value * 110;
        input.style.background = `-webkit-linear-gradient(left, #ee0023 0%, #ee0023 ${inputValuePercent}%, #000 ${inputValuePercent}%, #000 100%)`
        setEditRange(input.value);
        console.log(editRange)
    }
    return <div>
        <input type="range" min="1" max="4" defaultValue="0" name="range" step="1" onInput={updateRange}/>
    </div>
}