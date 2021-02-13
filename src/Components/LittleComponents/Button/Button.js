const Button = (props) => {
    return <div className="btn">
        <a href={props.link}>{props.text}</a>
    </div>
}

ReactDOM.render(React.createElement(Button, null), document.getElementById('root'));