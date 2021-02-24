var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Header = function Header() {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        burger = _React$useState2[0],
        setBurger = _React$useState2[1];

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
                { href: "#eng" },
                " ",
                React.createElement(
                    "u",
                    null,
                    "ENG"
                )
            ),
            React.createElement(
                "a",
                { href: "heb" },
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
                    { href: "index.html" },
                    "Home"
                ),
                React.createElement(
                    "a",
                    { href: "about.html" },
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
                { className: "header-btn" },
                React.createElement(Button, { link: "https://cp.zehost.com", text: "Control panel" })
            ),
            React.createElement(
                "div",
                { className: "burger" },
                React.createElement(
                    "button",
                    { onClick: function onClick() {
                            if (burger) {
                                setBurger(false);
                            } else {
                                setBurger(true);
                            }
                        } },
                    React.createElement("div", null),
                    React.createElement("div", null),
                    React.createElement("div", null)
                ),
                burger ? React.createElement(
                    "div",
                    { id: "menu" },
                    React.createElement(
                        "a",
                        { href: "index.html" },
                        "Home"
                    ),
                    React.createElement(
                        "a",
                        { href: "about.html" },
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
                    ),
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
                ) : ""
            )
        )
    );
};