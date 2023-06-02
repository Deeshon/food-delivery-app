import { useState, useEffect } from "react"

export default function Page2() {

    const [itemList, setItemList] = useState([])

    useEffect(() => {
        displayItems()
    }, [])

    const displayItems = async () => {
        await fetch("http://localhost:3001/api/items", {
            method: 'GET'
        }).then(res => res.json())
          .then(data => setItemList(data))
    }

    return(
        <div className="page2">
            <div className='page2-header'>
                <div className="title">
                    Our Fresh & Healthy Fruits
                    <hr></hr>
                </div>
                <div className='next-btns'>
                    <div id="slideBack" className='next-btn'>⮜</div>
                    <div id="slide" className='next-btn'>⮞</div>
                </div>
            </div>
            <div id="container" className="page2-item-container">
            {
                    itemList.map((item) => {
                        return(
                            <div className="item">
                                <div className="ITEM-IMG">
                                    <img src={`http://localhost:3001/${item.cover}`} width={'200px'} sty></img>
                                </div>
                                <div className="ITEM-CONTENT">
                                    <div className="item-cart-btn">
                                        <img src="/cart.png"></img>
                                    </div>
                                    <div>
                                        <div className="item-title">
                                            {item.title}
                                        </div>
                                        <div className='item-sub-title'>
                                            {item.subTitle}
                                        </div>
                                        <div className="item-price">
                                            <span style={{color: 'red'}}>$</span> {item.price}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}