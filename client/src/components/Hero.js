export default function Hero() {
    return(
        <div className='hero' style={{marginTop: '100px'}}>
            <div className='left'>
                <div className="delivery">
                    Bike Delivery
                </div>
                <div className="hero-title">
                    The Fastest Food Delivery In <span style={{color: '#EA580C', fontSize: '75px'}}>Accra</span>
                </div>
                <div className="hero-content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ducimus nam delectus sed, vel
                        quaerat, libero nesciunt debitis, architecto
                        repudiandae accusamus aut exercitationem nisi
                        non doloribus! Temporibus officia architecto
                        reiciendis blanditiis.
                    </p>
                </div>
                <div className="order-btn">
                    Order Now
                </div>
            </div>
            <div className='right'>
                <div className='container'>
                    <div className="item-cont">
                        <div className="hero-item">
                            <div className="hero-item-img" style={{backgroundImage: 'url(/strawberries-removebg-preview.png)'}}></div>
                            <div className="hero-item-content">
                                <div className="item-title">
                                    Strawberries
                                </div>
                                <div className="item-sub-title">
                                    Fresh Strawberries
                                </div>
                                <div className="item-price">
                                    <span style={{color: '#DC2626'}}>$</span> 7.25
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-cont">
                        <div className="hero-item">
                        <div className="hero-item-img" style={{backgroundImage: 'url(/Chicken-Shish-Kebab-with-Lemon-Rice-Featured-2-removebg-preview.png)'}}></div>
                            <div className="hero-item-content">
                                <div className="item-title">
                                    Chicken
                                </div>
                                <div className="item-sub-title">
                                    Mixed Kebab
                                </div>
                                <div className="item-price">
                                    <span style={{color: '#DC2626'}}>$</span> 7.25
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-cont">
                        <div className="hero-item">
                        <div className="hero-item-img" style={{backgroundImage: 'url(/air-fryer-tilapia-2-removebg-preview.png)'}}></div>
                            <div className="hero-item-content">
                                <div className="item-title">
                                    Tilapia
                                </div>
                                <div className="item-sub-title">
                                    Roasted Tilapia
                                </div>
                                <div className="item-price">
                                    <span style={{color: '#DC2626'}}>$</span> 7.25
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-cont">
                        <div className="hero-item">
                        <div className="hero-item-img" style={{backgroundImage: 'url(/parve-vanilla-chocolate-430x430.png)'}}></div>
                            <div className="hero-item-content">
                                <div className="item-title">
                                    Ice Cream
                                </div>
                                <div className="item-sub-title">
                                    Chocolate & Vanilla
                                </div>
                                <div className="item-price">
                                    <span style={{color: '#DC2626'}}>$</span> 7.25
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}