import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signin() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const userSignin = async () => {
        const response = await fetch("http://localhost:3001/api/user/signin", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username,password}),
            credentials: 'include'
        })

        if (response.ok) {
            window.location.href = "http://localhost:3000"
        } else {
            alert("Sign in failed")
        }
    }

    return(
        <div className="signin" style={{marginTop: '100px', display: 'flex'}}>
            <div className='signin-image' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div>
                    <img src="/signin-image.png" width={'500px'} sty></img>
                </div>
            </div>
            <div className="signin-container">
                <div style={{marginTop: '150px'}}>
                    <input type='text' placeholder="USERNAME" onChange={(e) => setUsername(e.target.value)} value={username}></input>
                    <br></br>
                    <input type='password' placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                    <br></br>
                    <button className="signin-btn"  onClick={userSignin}>Sign in</button>
                    <p>Dont have and account?</p>
                    <Link to={"/signup"}>
                        <button className="signup-btn">Sign up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}