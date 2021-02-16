const Header = () => {
    const [burger, setBurger] = React.useState(false);
    return <div className="wrapperHead">
        <div className="leftBlock">
            <h1>LOGO</h1>
            <a href="#eng"> <u>ENG</u></a>
            <a href="heb">HEB</a>
        </div>
        <div className="rightBlock">
            <div className="rightLinks">
                <a href='index.html'>Home</a>
                <a href='about.html'> <u>About</u></a>
                <a href='service.html'>Services</a>
            </div>
            <div className="rightLinks">
                <a href='pricing.html'>Pricing</a>
                <a href='blog.html'>Blog</a>
                <a href='faq.html'>FAQ</a>
                <a href='contact.html'>Contact Us</a>
            </div>
            <div>
                <Button link={"https://cp.zehost.com"} text={"Control panel"}/>
            </div>
            <div className="burger">
                <button onClick={() => {
                if (burger) {
                    setBurger(false);
                }
                else {
                    setBurger(true);
                }
                }
                }>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                {burger ? <div id="menu">
                    <a href='index.html'>Home</a>
                    <a href='about.html'> <u>About</u></a>
                    <a href='service.html'>Services</a>
                    <a href='pricing.html'>Pricing</a>
                    <a href='blog.html'>Blog</a>
                    <a href='faq.html'>FAQ</a>
                    <a href='contact.html'>Contact Us</a>
                </div> : ""}
            </div>
        </div>
    </div>
}
