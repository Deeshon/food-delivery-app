import Model from "react-modal";
import {useContext, useState} from 'react'
import { UserContext } from "../UserContext";

export default function Cart({visibleCart, setVisibleCart, cartItems}) {

    const {userInfo} = useContext(UserContext)

    var total = 0
    cartItems.map((item) => {
        total += item.item.price
    })

    const clearCart = async () => {
        await fetch("http://localhost:3001/api/cart", {
            method: 'DELETE',
        })
    }

    const checkout = async () => {
        const data = {
            user: userInfo._id,
            cart: cartItems,
            total: total
        }
        await fetch("http://localhost:3001/api/create-checkout-session", {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({data})
        }).then(res => res.json()).then(data => {
            window.location.href = data.url
            clearCart()
        })
    }

    return(
        <Model onRequestClose={() => setVisibleCart(false)} isOpen={visibleCart} style={{
            overlay: {
                background: "rgba(15, 23, 42, 0.3)"
            },
            content: {
                width: '350px',
                marginTop: '36px',
                marginLeft: '74%',
                height: '680px',
                backgroundColor: "rgb(40 42 44)",
                overflowY: 'hidden'
            }
        }}>
            <div className="model-cart">
                <div className='cart-header'>
                    <div className="cart-back-btn" onClick={() => setVisibleCart(false)}>
                        ←
                    </div>
                    <div style={{display: 'flex'}}>
                        <div>
                            Cart
                        </div>
                        <div className="cart-icon" style={{background: 'url(/cart.png)', backgroundSize: 'cover'}}></div>
                    </div>
                    <div className="cart-clear" style={{display: 'flex'}} onClick={clearCart}>
                        <div>
                            Clear
                        </div>
                        <div className="clear-icon" style={{background: 'url(/refresh.jpg)', backgroundSize: 'cover'}}></div>
                    </div>
                </div>
                <hr></hr>
                {cartItems.length > 0 && (
                    <div className='cart-main-container'>
                        <div className="cart-item-container">
                        {
                            cartItems.map((item) => {
                                return(
                                    <div className="cart-item">
                                        <div className="cart-item-image">
                                            <img src={`http://localhost:3001/${item.item.cover}`} width={"75px"}></img>
                                        </div>
                                        <div className="cart-item-content">
                                            {item.item.title}
                                            <br></br>
                                            $ {item.item.price}
                                        </div>
                                        <div className="cart-item-remove" style={{background: 'url(/remove.png)', backgroundSize: 'cover'}}></div>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className="transaction-content">
                            <div className="sub-total">
                                <div>Sub Total</div>
                                <div> - </div>
                                <div>$ {total}</div>
                            </div>
                            <div className="delivery-total">
                                <div>Delivery</div>
                                <div> - </div>
                                <div>0.00</div>
                            </div>
                            <hr></hr>
                            <div className="total">
                                <div>Total</div>
                                <div> - </div>
                                <div>$ {total}</div>
                            </div>
                            <button className='checkout-btn' onClick={() => {
                                checkout()
                            }}>Checkout $ {total}</button>
                        </div>
                    </div>
                )}
                {!cartItems.length > 0 && (
                    <div className='cart-main-container'>
                        <div className="cart-container-image" style={{background: 'url(/cart-container.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
                        <h4 style={{color: 'white'}}>Cart is empty</h4>
                    </div>
                )}
            </div>
        </Model>
    )
}