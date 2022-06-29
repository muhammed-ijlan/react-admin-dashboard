import React, { useState } from 'react'
import './login.css'

export default function () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(e) {
        e.preventDefault();


    }

    return (
        <div className='login'>
            <form className="loginForm">
                <input placeholder='email' type="text" className="loginInput" onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='Password' type="password" className="loginInput" onChange={(e) => setPassword(e.target.value)} />
                <button className="loginButton" onClick={handleLogin}>Login</button>

            </form>

        </div>
    )
}
