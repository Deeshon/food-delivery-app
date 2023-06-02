import { useState, useEffect } from "react"

export default function Stock() {

    const [category, setCategory] = useState('')
    const [itemName, setItemName] = useState('')
    const [itemDescription, setItemDescription] = useState('')
    const [itemPrice, setItemPrice] = useState('')
    const [itemCover, setItemCover] = useState('')
    const [itemCategory, setItemCategory] = useState('')


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

    const createCategory  = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:3001/api/categories", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: category
            })
        })

        if (response.ok) {
            alert("Category created successfully")
        } else {
            alert("Category creation failed")
        }
    }

    const createItem = async (e) => {
        e.preventDefault()

        const data = new FormData()
        data.set('title', itemName)
        data.set('subTitle', itemDescription)
        data.set('price', itemPrice)
        data.set('cover', itemCover[0])
        data.set('category', itemCategory)

        const response = await fetch("http://localhost:3001/api/items", {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        })

        if (response.ok) {
            alert("Item created successfully")
        } else {
            alert("Item creation failed")
        }
    }

    return(
        <div className="stock" style={{marginTop: '100px'}}>
            <div className='stock-form' style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className='item-form'>
                    <h3>Create Item</h3>
                    <hr></hr>
                    <form>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Item name</label>
                            <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="Item Name"
                            onChange={(e) => {setItemName(e.target.value)} }
                            value={itemName}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Item description</label>
                            <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput2"
                            placeholder="Item Description"
                            onChange={(e) => {setItemDescription(e.target.value)} }
                            value={itemDescription}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Item Price</label>
                            <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput2"
                            placeholder="Item Price"
                            onChange={(e) => {setItemPrice(e.target.value)} }
                            value={itemPrice}
                            />
                        </div>
                        <div className="form-group" >
                            <label htmlFor="formGroupExampleInput2">Item Cover</label>
                            <input
                            style={{border: '0'}}
                            type="file"
                            className="form-control"
                            id="formGroupExampleInput2"
                            onChange={(e) => {setItemCover(e.target.files)} }
                            />
                        </div>
                        <div className="form-row align-items-center">
                            <div className="col-auto my-1">
                            <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                                Category
                            </label>
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={(e) => {setItemCategory(e.target.value)}}>
                                <option selected="">Choose...</option>
                                {
                                    categoryList.map((category) => {
                                        return <option value={category._id}>{category.title}</option>
                                    })
                                    }
                            </select>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={createItem}>Create Item</button>
                    </form>
                </div>


                <div className='category-form'>
                    <h3>Create Category</h3>
                    <hr></hr>
                    <form>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Category name</label>
                            <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="Category Name"
                            onChange={(e) => {setCategory(e.target.value)}}
                            value={category}
                            />
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={createCategory}>Create Category</button>
                    </form>
                </div>
            </div>
            <div className='stock-table'>
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Product id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Regular Price</th>
                            <th scope="col">Stock Quantity</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            itemList.map((item) => {
                                return(
                                    <tr>
                                        <th scope="row">{item._id}</th>
                                        <td>{item.title}</td>
                                        <td>$ {item.price}</td>
                                        <td>12</td>
                                        <td>📝</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div style={{height: '50px'}}></div>   
        </div>
    )
}