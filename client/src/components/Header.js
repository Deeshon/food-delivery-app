import { useContext, useEffect, useState } from "react";
import Model  from "react-modal";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import Cart from "./Cart";

export default function Header() {

    const [visible, setVisible] = useState(false)
    const [visibleCart, setVisibleCart] = useState(false)

    const {userInfo, setUserInfo} = useContext(UserContext)

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        profile()
        displayCartItems()
        }, [cartItems])

    const userLogout = async () => {
        await fetch("http://localhost:3001/api/user/logout", {
            credentials: 'include',
            method: 'POST'
        })

        setUserInfo(null)
    }

    const profile = async () => {
        fetch("http://localhost:3001/api/user/profile", {
            credentials: 'include'
        }).then(res => res.json())
          .then(data => setUserInfo(data.user))
    }

    const displayCartItems = async () => {
        await fetch("http://localhost:3001/api/cart", {
            method: 'GET'
        }).then(res => res.json())
          .then(data => setCartItems(data))
    }

    try {
        var user = userInfo.username
        var isAdmin = userInfo.isAdmin
    } catch {
        var user = ''
        var isAdmin = false
    }

    return(
        <div className="header" style={{marginTop: '-100px', marginBottom: '40px', backgroundColor: 'white'}}>
            <nav>
                <div>
                    <h1>BENTLIZONE</h1>
                </div>
                <div className="nav-content">
                    <Link to={'/'}>
                        <p>home</p>
                    </Link>
                    <Link to={'/menu'}>
                        <p>menu</p>
                    </Link>
                    <Link to={'/services'}>
                        <p>services</p>
                    </Link>
                    <Link to={'/about'}>
                        <p>about us</p>
                    </Link>
                    <Link to={'/contact'}>
                        <p>contact</p>
                    </Link>
                    <div>
                        <div className="cart" style={{background: 'url(/cart2-removebg-preview.png)', backgroundSize: 'cover'}} onClick={() => setVisibleCart(true)}></div>
                        {cartItems.length > 0 && (
                            <div className="cart-item-count">
                                <div>{cartItems.length}</div>
                            </div>
                        )}
                    </div>
                    <Cart visibleCart={visibleCart} setVisibleCart={setVisibleCart} cartItems={cartItems} />
                </div>
                {user && (
                    <div>
                        <div style={{width: '60px', height: '60px', backgroundColor: 'gray', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent:'center', marginTop: '-20px'}}>
                            <div onClick={() => setVisible(true)} className='profile' style={{width: '55px', height: '55px',background: 'url(/defaultprofile.jpg)', backgroundSize: 'cover', borderRadius: '50%'}}></div>
                        </div>
                        <Model isOpen={visible} onRequestClose={() => {setVisible(false)}} style={{
                            overlay: {
                                background: "rgba(15, 23, 42, 0.3)"
                            },
                            content: {
                                width: '250px',
                                height: '150px',
                                marginTop: '40px',
                                marginLeft: '73%',
                                backgroundColor: 'white',
                                color: 'black',
                                border: '0',
                                textAlign: 'center'

                            }
                        }}>
                            <div className="section">
                                <p>{userInfo.username}</p>
                            </div>
                            {isAdmin && (
                                <Link to={`http://localhost:3000/profile/${userInfo._id}`}>
                                    <div className="section">
                                        <p>Profile</p>
                                    </div>
                                </Link>
                            )}
                            <div className="section">
                                <button className='profile-btn' onClick={userLogout}>Log out</button>
                            </div>
                        </Model>
                    </div>
                )}
                {!user && (
                    <div>
                        <Link to={'/signin'}>
                            <button className="login-btn">Log in</button>
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    )
}