var FAQ = function FAQ() {
    return React.createElement(
        "div",
        { className: "faq" },
        React.createElement(Header, null),
        React.createElement(
            "div",
            { className: "block" },
            React.createElement(
                "h1",
                null,
                "FAQ"
            ),
            React.createElement("img", { src: "https://i.imgur.com/NW09Idm.png", alt: "" })
        ),
        React.createElement(
            "div",
            { className: "checkboxes" },
            React.createElement(
                "div",
                { className: "radio__item" },
                React.createElement("input", { type: "radio", name: "category", id: "category-1" }),
                React.createElement(
                    "label",
                    { htmlFor: "category-1" },
                    "View all"
                )
            ),
            React.createElement(
                "div",
                { className: "radio__item" },
                React.createElement("input", { type: "radio", name: "category", id: "category-2" }),
                React.createElement(
                    "label",
                    { htmlFor: "category-2" },
                    "Press"
                )
            ),
            React.createElement(
                "div",
                { className: "radio__item" },
                React.createElement("input", { type: "radio", name: "category", id: "category-3" }),
                React.createElement(
                    "label",
                    { htmlFor: "category-3" },
                    "Work"
                )
            ),
            React.createElement(
                "div",
                { className: "radio__item" },
                React.createElement("input", { type: "radio", name: "category", id: "category-4" }),
                React.createElement(
                    "label",
                    { htmlFor: "category-4" },
                    "Awards"
                )
            ),
            React.createElement(
                "div",
                { className: "radio__item" },
                React.createElement("input", { type: "radio", name: "category", id: "category-5" }),
                React.createElement(
                    "label",
                    { htmlFor: "category-4" },
                    "Events"
                )
            )
        ),
        React.createElement(
            "div",
            { className: "topic-block" },
            React.createElement(FAQItem, null),
            React.createElement(FAQItem, null),
            React.createElement(FAQItem, null),
            React.createElement(FAQItem, null),
            React.createElement(FAQItem, null),
            React.createElement(FAQItem, null),
            React.createElement("hr", null)
        ),
        React.createElement(
            "div",
            { className: "faq-form-wrapper" },
            React.createElement(
                "form",
                { className: "faq-form" },
                React.createElement(
                    "h1",
                    null,
                    "Ask your question"
                ),
                React.createElement("input", { type: "text", placeholder: "Email" }),
                React.createElement("textarea", { placeholder: "Question" }),
                React.createElement(
                    "div",
                    { className: "faq-form-button" },
                    React.createElement(Button, { link: "/order", text: "order" })
                )
            )
        )
    );
};