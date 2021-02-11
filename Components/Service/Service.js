var Service = function Service() {
    return React.createElement(
        "div",
        null,
        React.createElement(Header, null),
        React.createElement(
            "div",
            { className: "wrapper" },
            React.createElement("img", { src: "https://i.imgur.com/xTfKpg8.png", className: "main-img", alt: "" }),
            React.createElement(
                "div",
                { className: "description" },
                React.createElement(
                    "h1",
                    null,
                    "Cloud infrastructure"
                ),
                React.createElement("img", { src: "https://i.imgur.com/xTfKpg8.png", className: "adaptive-img", alt: "" }),
                React.createElement(
                    "p",
                    null,
                    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "But I must explain to you how all this mistaken idea of denouncing pleasure "
                ),
                React.createElement(
                    "div",
                    { className: "btn" },
                    React.createElement(Button, { link: "/contacts", text: "Contact US" }),
                    React.createElement(Button, { link: "https://cp.zehost.com/", text: "Registration" })
                )
            )
        )
    );
};

ReactDOM.render(React.createElement(Service, null), document.getElementById('root'));