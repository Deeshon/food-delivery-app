import {useEffect, useState} from 'react'

export default function Page3() {

    const [categoryList, setCategoryList] = useState([])
    const [itemList, setItemList] = useState([])


    useEffect(() => {
        displayCategories()
        displayItems()
    }, [])

    const displayCategories = async () => {
        await fetch("http://localhost:3001/api/categories", {
            method: 'GET'
        }).then(res => res.json())
          .then(data => setCategoryList(data))
    }

    const displayItems = async () => {
        await fetch("http://localhost:3001/api/items", {
            method: 'GET'
        }).then(res => res.json())
          .then(data => setItemList(data))
    }

    return(
        <div className="page3">
            <div className="title">
                Our Hot Dishes
                <hr></hr>
            </div>
            <div className="categories">
                <div className="category">
                    <div  className="category-icon-holder">
                    <div className="category-icon" style={{background: 'url(/menu-icon.png)', backgroundSize: 'cover'}}></div>
                    </div>
                    <div className="category-title">
                        Menu
                    </div>
                </div>
                <div className="category">
                    <div  className="category-icon-holder">
                    <div className="category-icon" style={{background: 'url(/chicken-icon.png)', backgroundSize: 'cover'}}></div>
                    </div>
                    <div className="category-title">
                        Chicken
                    </div>
                </div>
                <div className="category">
                    <div  className="category-icon-holder">
                    <div className="category-icon" style={{background: 'url(/fruits-icon.jpg)', backgroundSize: 'cover'}}></div>
                    </div>
                    <div className="category-title">
                        Fruits
                    </div>
                </div>
                <div className="category">
                    <div  className="category-icon-holder">
                    <div className="category-icon" style={{background: 'url(/softdrinks-icon.png)', backgroundSize: 'cover'}}></div>
                    </div>
                    <div className="category-title">
                        Soft Drinks
                    </div>
                </div>
                <div className="category">
                    <div  className="category-icon-holder">
                    <div className="category-icon" style={{background: 'url(/dessert-icon.png)', backgroundSize: 'cover'}}></div>
                    </div>
                    <div className="category-title">
                        Desserts
                    </div>
                </div>
                <div className="category">
                    <div  className="category-icon-holder">
                    <div className="category-icon" style={{background: 'url(/icecream-icon.png)', backgroundSize: 'cover'}}></div>
                    </div>
                    <div className="category-title">
                        Ice Cream
                    </div>
                </div>
                <div className="category">
                    <div  className="category-icon-holder">
                    <div className="category-icon" style={{background: 'url(/fish-icon.png)', backgroundSize: 'cover'}}></div>
                    </div>
                    <div className="category-title">
                        Curry
                    </div>
                </div>
                <div className="category">
                    <div  className="category-icon-holder">
                    <div className="category-icon" style={{background: 'url(/rice-icon.png)', backgroundSize: 'cover'}}></div>
                    </div>
                    <div className="category-title">
                        Rice
                    </div>
                </div>
                <div className="category">
                    <div  className="category-icon-holder">
                    <div className="category-icon" style={{background: 'url(/curry-icon.png)', backgroundSize: 'cover'}}></div>
                    </div>
                    <div className="category-title">
                        Curry
                    </div>
                </div>
            </div>
            <div className="item-container">
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