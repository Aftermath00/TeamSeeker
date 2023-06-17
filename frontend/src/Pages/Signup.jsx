import { useNavigate } from "react-router-dom"
import "../styles/login.css"

const Signup = () =>{
    const navigate = useNavigate()

    return (

        <>
        <div className="login-main-container">

        <img src="src\assets\team_seeker_logo.png"/>

        <h1>Sign Up</h1>
        <h2>Find the Best Teammate Here</h2>

        <label className="credential-field-label"> Username </label>
        <input type="text" id="username-field" className="credential-field"/>

        <label className="credential-field-label"> Password </label>
        <input type="password" className="credential-field"/>

        <button className="sign-btn" onClick={() => navigate('/role')}>Sign Up</button>
        <p>Already have Account? <a onClick={() => navigate('/')} className="link-label">Sign In</a></p>   
        
        </div>

        </>

    )
}

export default Signup