'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "wrapper" },
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
                        { href: "/en", className: "underline" },
                        "ENG"
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
                            { href: "about", className: "underline" },
                            "About"
                        ),
                        React.createElement(
                            "a",
                            { href: "/services" },
                            "Services"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "rightLinks" },
                        React.createElement(
                            "a",
                            { href: "/pricing" },
                            "Pricing"
                        ),
                        React.createElement(
                            "a",
                            { href: "/blog" },
                            "Blog"
                        ),
                        React.createElement(
                            "a",
                            { href: "/faq" },
                            "FAQ"
                        ),
                        React.createElement(
                            "a",
                            { href: "/contact" },
                            "Contact Us"
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://cp.zehost.com" },
                            "Control panel"
                        )
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
        }
    }]);

    return Header;
}(React.Component);