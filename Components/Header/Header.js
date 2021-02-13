var Header = function Header() {
    return React.createElement(
        "div",
        { className: "wrapperHead" },
        React.createElement(
            "div",
            { className: "leftBlock" },
            React.createElement(
                "h1",
                null,
                "LOGO"
            ),
            React.createElement(
                "a",
                { href: "/en" },
                " ",
                React.createElement(
                    "u",
                    null,
                    "ENG"
                )
            ),
            React.createElement(
                "a",
                { href: "/heb" },
                "HEB"
            )
        ),
        React.createElement(
            "div",
            { className: "rightBlock" },
            React.createElement(
                "div",
                { className: "rightLinks" },
                React.createElement(
                    "a",
                    { href: "/home" },
                    "Home"
                ),
                React.createElement(
                    "a",
                    { href: "about" },
                    " ",
                    React.createElement(
                        "u",
                        null,
                        "About"
                    )
                ),
                React.createElement(
                    "a",
                    { href: "service.html" },
                    "Services"
                )
            ),
            React.createElement(
                "div",
                { className: "rightLinks" },
                React.createElement(
                    "a",
                    { href: "pricing.html" },
                    "Pricing"
                ),
                React.createElement(
                    "a",
                    { href: "blog.html" },
                    "Blog"
                ),
                React.createElement(
                    "a",
                    { href: "faq.html" },
                    "FAQ"
                ),
                React.createElement(
                    "a",
                    { href: "contact.html" },
                    "Contact Us"
                )
            ),
            React.createElement(
                "div",
                null,
                React.createElement(Button, { link: "https://cp.zehost.com", text: "Control panel" })
            ),
            React.createElement(
                "div",
                { className: "burger" },
                React.createElement(
                    "button",
                    null,
                    React.createElement("div", null),
                    React.createElement("div", null),
                    React.createElement("div", null)
                )
            )
        )
    );
};