import React, { useContext, useState } from 'react'
import './login.css'
import { login } from '../../context/authContext/apiCalls'
import { AuthContext } from '../../context/authContext/AuthContext'


export default function () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { isFetching, dispatch } = useContext(AuthContext)

    function handleLogin(e) {
        e.preventDefault();
        login({ email, password }, dispatch)

    }

    return (
        <div className='login'>
            <form className="loginForm">
                <input placeholder='email' type="text" className="loginInput" onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='Password' type="password" className="loginInput" onChange={(e) => setPassword(e.target.value)} />
                <button className="loginButton" onClick={handleLogin} disabled={isFetching}>Login</button>

            </form>

        </div>
    )
}
