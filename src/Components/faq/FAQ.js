const FAQ = () => {
    return <div className="faq">
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
        <div className="topic-block">
            <FAQItem/>
            <FAQItem/>
            <FAQItem/>
            <FAQItem/>
            <FAQItem/>
            <FAQItem/>
            <hr/>
        </div>
    <div className="faq-form-wrapper">
        <form className="faq-form">
            <h1>Ask your question</h1>
            <input type="text" placeholder="Email"/>
            <textarea placeholder="Question"/>
            <div className="faq-form-button">
                <Button link={"/order"} text="order"/>
            </div>
        </form>
    </div>
    </div>
}