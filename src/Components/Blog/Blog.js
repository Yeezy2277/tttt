const Blog = () => {
    return <div className="blog">
        <Header/>
        <div className="block">
            <h1>FAQ</h1>
            <img src="https://i.imgur.com/NW09Idm.png" alt=""/>
        </div>
        <div className="checkboxes">
            <div className="radio__item">
                <input type="radio" name="category" id="category-1"/>
                <label htmlFor="category-1">View all</label>
            </div>
            <div className="radio__item">
                <input type="radio" name="category" id="category-2"/>
                <label htmlFor="category-2">Press</label>
            </div>
            <div className="radio__item">
                <input type="radio" name="category" id="category-3"/>
                <label htmlFor="category-3">Work</label>
            </div>
            <div className="radio__item">
                <input type="radio" name="category" id="category-4"/>
                <label htmlFor="category-4">Awards</label>
            </div>
            <div className="radio__item">
                <input type="radio" name="category" id="category-5"/>
                <label htmlFor="category-4">Events</label>
            </div>
        </div>
        <div className="blog-block">
            <hr/>
            <div className="blog__item">
                <img src="https://i.imgur.com/2AfOa0E.png" alt=""/>
                <div className="blog-text">
                    <h1> <u>Zoomtopia 2020: Zoom looks to super-charge videoconferencing</u></h1>
                    <img src="https://i.imgur.com/Ddqiz5d.png" alt=""/>
                </div>
            </div>
            <hr/>
            <div className="blog__item">
                <img src="https://i.imgur.com/4RrRye1.png" alt=""/>
                <div className="blog-text">
                    <h1> <u>What's in the latest Edge update? Rollbacks and new browser telemetry policies</u></h1>
                    <img src="https://i.imgur.com/Ddqiz5d.png" alt=""/>
                </div>
            </div>
            <hr/>
            <div className="blog__item">
                <img src="https://i.imgur.com/TxPlEri.png" alt=""/>
                <div className="blog-text">
                    <h1> <u>Tech event calendar 2020: Upcoming shows, conferences and IT expos</u></h1>
                    <img src="https://i.imgur.com/Ddqiz5d.png" alt=""/>
                </div>
            </div>
            <hr/>
            <div className="blog__item">
                <img src="https://i.imgur.com/HlEksXC.png" alt=""/>
                <div className="blog-text">
                    <h1> <u>Despite challenges, Artificial Intelligence is our future</u></h1>
                    <img src="https://i.imgur.com/Ddqiz5d.png" alt=""/>
                </div>
            </div>
            <hr/>
            <div className="blog__item">
                <img src="https://i.imgur.com/dmtb5gt.png" alt=""/>
                <div className="blog-text">
                    <h1> <u>Signal intelligence shows strong iPhone 12 demand</u></h1>
                    <img src="https://i.imgur.com/Ddqiz5d.png" alt=""/>
                </div>
            </div>
            <hr/>
        </div>
    </div>
}