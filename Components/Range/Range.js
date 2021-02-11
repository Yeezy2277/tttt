var Range = function Range(props) {
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "range", min: "0", max: "100", name: "range", step: "1" })
    );
};