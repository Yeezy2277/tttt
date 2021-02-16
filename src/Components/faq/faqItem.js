const FAQItem = () => {
    const [isPlus, setIsPlus] = React.useState(false);
    return <div>
        <hr/>
        {isPlus ? <div className="faq-description">
            <div className="description-text">
                <h1>{data.eng.faq.faqItem.title}</h1>
            </div>
            <div className="description-block">
                <button onClick={() => setIsPlus(false)}>
                    <div className="minus"/>
                </button>
                <hr className="hr-desc"/>
                <p>{data.eng.faq.faqItem.text1}</p>
                <p>{data.eng.faq.faqItem.text2}</p>
                <p>{data.eng.faq.faqItem.text3}</p>
                <p>{data.eng.faq.faqItem.text4}</p>
                <p>{data.eng.faq.faqItem.text5}</p>
                <p>{data.eng.faq.faqItem.text6}</p>
            </div>
        </div> : <div className="faq-mini">
            <div className="description-text">
                <h1>{data.eng.faq.faqItem.description}</h1>
            </div>
            <button onClick={() => setIsPlus(true)}>
                <div className="plus-1"/>
                <div className="plus-2"/>
            </button>
        </div>}
    </div>
}
