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
                    "Zoomtopia 2020: Zoom looks to super-charge videoconferencing"
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
                    "At its fourth annual Zoomtopia event last week, videoconferencing platform Zoom unveiled a host of new features aimed at improving the in-meeting experience for its more than 300 million daily active participants. ",
                    React.createElement("br", null),
                    " ",
                    React.createElement("br", null),
                    "With Europe bracing for a second wave and the U.S. still reporting hundreds of daily coronavirus deaths, the proliferation of virtual events and meetings remains a defining features of 2020. Not surprisingly, Zoom says it's adding 100,000 users per quarter and has seen a big jump in stock values this year. ",
                    React.createElement("br", null),
                    " ",
                    React.createElement("br", null),
                    "Here\u2019s a closer look at what Zoom announced at Zoomtopia 2020. ",
                    React.createElement("br", null),
                    " ",
                    React.createElement("br", null),
                    "[ Related: Review: 5 top videoconferencing services put to the test ] ",
                    React.createElement("br", null),
                    " ",
                    React.createElement("br", null),
                    "The company highlighted its introduction of Zapps \u2014 applications that can be used within Zoom to help improve productivity and create a more engaging experience. ",
                    React.createElement("br", null),
                    " ",
                    React.createElement("br", null),
                    "According to Zoom, Zapps eliminate the need for users to switch between multiple applications on their desktop, allowing them to quickly streamline permissions, grant document accessibility, and collaborate on screen. The first Zapps will be distributed by the end of year and open to developers shortly thereafter. Both free and paid Zoom users will have access to them."
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
                    "Zoomtopia 2020: Zoom looks to super-charge videoconferencing"
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