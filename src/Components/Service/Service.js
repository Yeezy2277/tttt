const Service = () => {
    return <div>
        <Header/>
        <div className="wrapper">
                <img src="https://i.imgur.com/xTfKpg8.png" className="main-img" alt=""/>
            <div className="description">
                <h1>Cloud infrastructure</h1>
                <img src="https://i.imgur.com/xTfKpg8.png" className="adaptive-img" alt=""/>
                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                    born and
                    I will give you a complete account of the system, and expound the actual teachings of the great
                    explorer
                    of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
                    itself,
                    because it is pleasure, but because those who do not know how to pursue pleasure rationally
                    encounter consequences
                    that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain
                    of itself,
                    because it is pain, but because occasionally circumstances occur in which toil and pain can procure
                    him some great
                    pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except
                    to obtain some
                    advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure
                    that has no annoying
                    consequences, or one who avoids a pain that produces no resultant pleasure?<br/><br/>
                    But I must explain to you how all this mistaken idea of denouncing pleasure </p>
                <div className="btn">
                    <Button link={"/contacts"} text={"Contact US"}/>
                    <Button link={"https://cp.zehost.com/"} text={"Registration"}/>
                </div>
            </div>
        </div>
    </div>
}
