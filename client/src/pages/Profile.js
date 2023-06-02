import { useState, useContext } from "react"
import { UserContext } from "../UserContext"
import { Link } from "react-router-dom"

export default function Profile() {

    const [cover, setCover] = useState("defaultprofile.jpg")
    const {userInfo} = useContext(UserContext)

    return(
        <div className="profile" style={{marginTop: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className='profile-container'>
                <div><input type="text" defaultValue={userInfo.username}></input></div>
                <div><input type="text" placeholder='Phone'></input></div>
                {userInfo && (
                    <div>
                        <Link to='/stock'>
                            <button>Check stock</button>
                        </Link>
                    </div>
                )}
                <div><input type="file"></input></div>
                <div className='profile-image' style={{background: `url(/${cover})`, backgroundSize: 'cover'}}></div>
            </div>
        </div>
    )
}