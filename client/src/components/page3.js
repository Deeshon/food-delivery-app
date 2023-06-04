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

    const filterByCategory = async (category) => {
        await fetch("http://localhost:3001/api/category/items", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({category})
        }).then(res => res.json())
          .then(data => setItemList(data))
    }

    const addItemToCart = async (item) => {
        await fetch("http://localhost:3001/api/cart/item", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({item})
        })
    }

    return(
        <div className="page3">
            <div className="title">
                Our Hot Dishes
                <hr></hr>
            </div>
            <div className="categories">
                <div className="category" onClick={displayItems}>
                    <div  className="category-icon-holder">
                    <div className="category-icon" style={{background: 'url(/menu-icon.png)', backgroundSize: 'cover'}}></div>
                    </div>
                    <div className="category-title">
                        Menu
                    </div>
                </div>
                {
                    categoryList.map((category) => {
                        return (
                            <div className="category" id={category._id} onClick={() => {
                                filterByCategory(category._id)
                                const categories = document.querySelectorAll(".category")
                                categories.forEach((cat) => {
                                    if (cat.id === category._id ) {
                                        cat.style.backgroundColor = '#DC2626'
                                        cat.style.color = 'white'
                                    } else {
                                        cat.style.backgroundColor = ''
                                        cat.style.color = ''
                                    }

                                })
                            }}>
                                <div  className="category-icon-holder">
                                    <img src={`http://localhost:3001/${category.cover}`} width={'30px'}></img>
                                </div>
                                <div className="category-title">
                                    {category.title}
                                </div>
                            </div>
                        )
                    })
                }
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
                                    <div className="item-cart-btn" onClick={() => {
                                        addItemToCart(item._id)
                                        alert(`${item.title} added to cart`)
                                    }}>
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