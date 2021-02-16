var Button = function Button(props) {
    return React.createElement(
        "div",
        { className: "btn" },
        React.createElement(
            "a",
            { href: props.link },
            props.text
        )
    );
};

ReactDOM.render(React.createElement(Button, null), document.getElementById('root'));