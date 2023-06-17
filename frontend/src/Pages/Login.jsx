import { useNavigate } from "react-router-dom"
import "../styles/login.css"

export default function Login(){

    const navigate = useNavigate()

    return (

        <>
        <div className="login-main-container">

        <img src="src\assets\team_seeker_logo.png"/>

        <h1>Welcome Back</h1>
        <h2>Have We Met Before?</h2>

        <label className="credential-field-label"> Username </label>
        <input type="text" id="username-field" className="credential-field"/>

        <label className="credential-field-label"> Password </label>
        <input type="password" className="credential-field"/>

        <button className="sign-btn" onClick={() => navigate('/home')}>Sign in</button>
        <p>Don't have an Account yet? <a onClick={() => navigate('/signup')} className="link-label">Sign Up</a></p>   
        
        </div>

        </>

    )
}