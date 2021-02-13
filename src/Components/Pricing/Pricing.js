const Pricing = () => {
    return <div>
        <Header/>
        <div className="mainWrapper">
            <div className="wrapper">
                <div className="bigText">
                    <h1>Prising</h1>
                </div>
                <div className="config">
                    <h1 className="configTitle">Select the required server configuration</h1>
                    <div className="configText">
                        <div className="configText__item">
                            <p>CPU: 4</p>
                            <button/>
                        </div>
                        <p>150$/M</p>
                    </div>
                    <Range/>
                    <div className="configText">
                        <div className="configText__item">
                            <p>RAM: 8192 mb</p>
                            <button/>
                        </div>
                        <p>3000$/M</p>
                    </div>
                    <Range/>
                    <div className="configText">
                        <div className="configText__item">
                            <p>DISK: 110 Gb SSD</p>
                            <button/>
                        </div>
                        <p>330$/M</p>
                    </div>
                    <Range/>
                </div>
                <div className="os">
                    <div className="osText">
                        <div className="osText__item">
                            <h1>Pre-installed OS: </h1>
                            <div className="osText_subtitle">
                                <p>CentOS 7 x64</p>
                                <button/>
                            </div>
                        </div>
                        <h1 className="rightText">0$/M</h1>
                    </div>
                    <div className="osText">
                        <div className="osText__item">
                            <h1>Backup: </h1>
                            <div className="osText_subtitle">
                                <p>Standart</p>
                                <button/>
                            </div>
                        </div>
                        <h1 className="rightText">0$/M</h1>
                    </div>
                    <div className="osText">
                        <div className="osText__item">
                            <h1>Support:</h1>
                            <div className="osText_subtitle">
                                <p>Basic SLA Standart</p>
                                <button/>
                            </div>
                        </div>
                        <h1 className="rightText">0$/M</h1>
                    </div>
                </div>
            </div>
            <div>
                <hr/>
            </div>
            <div className="order">
                <div className="orderText">
                    <div className="discount">
                        <p>Discount 0% - 0$</p>
                        <h1>350 <sup>$/M</sup></h1>
                    </div>
                    <div className="payment">
                        <p>Payment period</p>
                        <h1>1 <sup>M</sup></h1>
                    </div>
                </div>
                <Button link={'/order'} text={'order'}/>
            </div>
        </div>
    </div>
}