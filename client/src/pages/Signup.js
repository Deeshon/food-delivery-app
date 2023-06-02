import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Signin() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const createUser = async () => {
        await fetch("http://localhost:3001/api/user/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        } )
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
                    <button className="signup-btn" onClick={createUser}>Sign up</button>
                    <p>Already have an account?</p>
                    <Link to={"/signin"}>
                        <button className="signin-btn">Sign in</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}