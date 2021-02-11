var Pricing = function Pricing() {
    return React.createElement(
        "div",
        null,
        React.createElement(Header, null),
        React.createElement(
            "div",
            { className: "mainWrapper" },
            React.createElement(
                "div",
                { className: "wrapper" },
                React.createElement(
                    "div",
                    { className: "bigText" },
                    React.createElement(
                        "h1",
                        null,
                        "Prising"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "config" },
                    React.createElement(
                        "h1",
                        { className: "configTitle" },
                        "Select the required server configuration"
                    ),
                    React.createElement(
                        "div",
                        { className: "configText" },
                        React.createElement(
                            "div",
                            { className: "configText__item" },
                            React.createElement(
                                "p",
                                null,
                                "CPU: 4"
                            ),
                            React.createElement("button", null)
                        ),
                        React.createElement(
                            "p",
                            null,
                            "150$/M"
                        )
                    ),
                    React.createElement(Range, null),
                    React.createElement(
                        "div",
                        { className: "configText" },
                        React.createElement(
                            "div",
                            { className: "configText__item" },
                            React.createElement(
                                "p",
                                null,
                                "RAM: 8192 mb"
                            ),
                            React.createElement("button", null)
                        ),
                        React.createElement(
                            "p",
                            null,
                            "3000$/M"
                        )
                    ),
                    React.createElement(Range, null),
                    React.createElement(
                        "div",
                        { className: "configText" },
                        React.createElement(
                            "div",
                            { className: "configText__item" },
                            React.createElement(
                                "p",
                                null,
                                "DISK: 110 Gb SSD"
                            ),
                            React.createElement("button", null)
                        ),
                        React.createElement(
                            "p",
                            null,
                            "330$/M"
                        )
                    ),
                    React.createElement(Range, null)
                ),
                React.createElement(
                    "div",
                    { className: "os" },
                    React.createElement(
                        "div",
                        { className: "osText" },
                        React.createElement(
                            "div",
                            { className: "osText__item" },
                            React.createElement(
                                "h1",
                                null,
                                "Pre-installed OS: "
                            ),
                            React.createElement(
                                "div",
                                { className: "osText_subtitle" },
                                React.createElement(
                                    "p",
                                    null,
                                    "CentOS 7 x64"
                                ),
                                React.createElement("button", null)
                            )
                        ),
                        React.createElement(
                            "h1",
                            { className: "rightText" },
                            "0$/M"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "osText" },
                        React.createElement(
                            "div",
                            { className: "osText__item" },
                            React.createElement(
                                "h1",
                                null,
                                "Backup: "
                            ),
                            React.createElement(
                                "div",
                                { className: "osText_subtitle" },
                                React.createElement(
                                    "p",
                                    null,
                                    "Standart"
                                ),
                                React.createElement("button", null)
                            )
                        ),
                        React.createElement(
                            "h1",
                            { className: "rightText" },
                            "0$/M"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "osText" },
                        React.createElement(
                            "div",
                            { className: "osText__item" },
                            React.createElement(
                                "h1",
                                null,
                                "Support:"
                            ),
                            React.createElement(
                                "div",
                                { className: "osText_subtitle" },
                                React.createElement(
                                    "p",
                                    null,
                                    "Basic SLA Standart"
                                ),
                                React.createElement("button", null)
                            )
                        ),
                        React.createElement(
                            "h1",
                            { className: "rightText" },
                            "0$/M"
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                null,
                React.createElement("hr", null)
            ),
            React.createElement(
                "div",
                { className: "order" },
                React.createElement(
                    "div",
                    { className: "orderText" },
                    React.createElement(
                        "div",
                        { className: "discount" },
                        React.createElement(
                            "p",
                            null,
                            "Discount 0% - 0$"
                        ),
                        React.createElement(
                            "h1",
                            null,
                            "350 ",
                            React.createElement(
                                "sup",
                                null,
                                "$/M"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "payment" },
                        React.createElement(
                            "p",
                            null,
                            "Payment period"
                        ),
                        React.createElement(
                            "h1",
                            null,
                            "1 ",
                            React.createElement(
                                "sup",
                                null,
                                "M"
                            )
                        )
                    )
                ),
                React.createElement(Button, { link: '/order', text: 'order' })
            )
        )
    );
};