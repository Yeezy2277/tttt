const FAQItem = () => {
    const [isPlus, setIsPlus] = React.useState(false);
    return <div>
        <hr/>
        {isPlus ? <div className="faq-description">
            <div className="description-text">
                <h1>Zoomtopia 2020: Zoom looks to super-charge videoconferencing</h1>
            </div>
            <div className="description-block">
                <button onClick={() => setIsPlus(false)}>
                    <div className="minus"/>
                </button>
                <hr className="hr-desc"/>
                <p>At its fourth annual Zoomtopia event last week, videoconferencing platform Zoom unveiled a host of new
                    features aimed at improving the in-meeting experience for its more than 300 million daily active participants. <br/> <br/>
                    With Europe bracing for a second wave and the U.S. still reporting hundreds of daily coronavirus deaths,
                    the proliferation of virtual events and meetings remains a defining features of 2020. Not surprisingly,
                    Zoom says it's adding 100,000 users per quarter and has seen a big jump in stock values this year. <br/> <br/>
                    Here’s a closer look at what Zoom announced at Zoomtopia 2020. <br/> <br/>
                    [ Related: Review: 5 top videoconferencing services put to the test ] <br/> <br/>
                    The company highlighted its introduction of Zapps — applications that can be used within Zoom to help
                    improve productivity and create a more engaging experience. <br/> <br/>
                    According to Zoom, Zapps eliminate the need for users to switch between multiple applications on their
                    desktop, allowing them to quickly streamline permissions, grant document accessibility, and collaborate on
                    screen. The first Zapps will be distributed by the end of year and open to developers shortly thereafter.
                    Both free and paid Zoom users will have access to them.</p>
            </div>
        </div> : <div className="faq-mini">
            <div className="description-text">
                <h1>Zoomtopia 2020: Zoom looks to super-charge videoconferencing</h1>
            </div>
            <button onClick={() => setIsPlus(true)}>
                <div className="plus-1"/>
                <div className="plus-2"/>
            </button>
        </div>}
    </div>
}
