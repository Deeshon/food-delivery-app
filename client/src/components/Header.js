import { useContext, useEffect, useState } from "react";
import Model  from "react-modal";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Header() {

    const [visible, setVisible] = useState(false)
    const {userInfo, setUserInfo} = useContext(UserContext)

    useEffect(() => {
        fetch("http://localhost:3001/api/user/profile", {
            credentials: 'include'
        }).then(res => res.json()).then(data => setUserInfo(data.user))
    }, [])

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
                </div>
                {userInfo && (
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
                            <Link to={`http://localhost:3000/profile/${userInfo._id}`}>
                                <div className="section">
                                    <p>Profile</p>
                                </div>
                            </Link>
                            <div className="section">
                                <button className='profile-btn'>Log out</button>
                            </div>
                        </Model>
                    </div>
                )}
                {!userInfo && (
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