var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var FAQItem = function FAQItem() {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        isPlus = _React$useState2[0],
        setIsPlus = _React$useState2[1];

    return React.createElement(
        "div",
        null,
        React.createElement("hr", null),
        isPlus ? React.createElement(
            "div",
            { className: "faq-description" },
            React.createElement(
                "div",
                { className: "description-text" },
                React.createElement(
                    "h1",
                    null,
                    data.eng.faq.faqItem.title
                )
            ),
            React.createElement(
                "div",
                { className: "description-block" },
                React.createElement(
                    "button",
                    { onClick: function onClick() {
                            return setIsPlus(false);
                        } },
                    React.createElement("div", { className: "minus" })
                ),
                React.createElement("hr", { className: "hr-desc" }),
                React.createElement(
                    "p",
                    null,
                    data.eng.faq.faqItem.text1
                ),
                React.createElement(
                    "p",
                    null,
                    data.eng.faq.faqItem.text2
                ),
                React.createElement(
                    "p",
                    null,
                    data.eng.faq.faqItem.text3
                ),
                React.createElement(
                    "p",
                    null,
                    data.eng.faq.faqItem.text4
                ),
                React.createElement(
                    "p",
                    null,
                    data.eng.faq.faqItem.text5
                ),
                React.createElement(
                    "p",
                    null,
                    data.eng.faq.faqItem.text6
                )
            )
        ) : React.createElement(
            "div",
            { className: "faq-mini" },
            React.createElement(
                "div",
                { className: "description-text" },
                React.createElement(
                    "h1",
                    null,
                    data.eng.faq.faqItem.description
                )
            ),
            React.createElement(
                "button",
                { onClick: function onClick() {
                        return setIsPlus(true);
                    } },
                React.createElement("div", { className: "plus-1" }),
                React.createElement("div", { className: "plus-2" })
            )
        )
    );
};