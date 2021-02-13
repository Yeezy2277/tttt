const Header = () => {
    return <div className="wrapperHead">
        <div className="leftBlock">
            <h1>LOGO</h1>
            <a href= '/en'> <u>ENG</u></a>
            <a href='/heb'>HEB</a>
        </div>
        <div className="rightBlock">
            <div className="rightLinks">
                <a href='/home'>Home</a>
                <a href='about'> <u>About</u></a>
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
                <button>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
        </div>
    </div>
}
