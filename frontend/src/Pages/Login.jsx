import { useNavigate } from "react-router-dom"
import "../styles/login.css"
import { useState } from "react"

export default function Login(){

    const navigate = useNavigate()

    const [userName,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const userNameFormChange = (event) =>{
        setUsername(event.target.value)
    }

    const passwordFormChange = (event) =>{
        setPassword(event.target.value)
    }

    const loginButtonFormHandler = () =>{

        const loginData = {
            "username":userName,
            "password":password
        }

        const hasAllValues = Object.values(loginData).every(value => {
            return value !== "" && value !== null && value !== undefined;
          });
          
          if (hasAllValues) {
            console.log("All properties have values");
            console.log(loginData)

            navigate('/home')

          } else {
            console.log("Some properties are missing values");
            alert('Please fill out all of the form')
          }

    }

    return (

        <>
        <div className="login-main-container">

        <img src="src\assets\team_seeker_logo.png"/>

        <h1>Welcome Back</h1>
        <h2>Have We Met Before?</h2>

        <label className="credential-field-label"> Username </label>
        <input value={userName} onChange={userNameFormChange}
        type="text" id="username-field" className="credential-field"/>

        <label className="credential-field-label"> Password </label>
        <input value={password} onChange={passwordFormChange} 
        type="password" className="credential-field"/>

        <button className="sign-btn" onClick={() => loginButtonFormHandler()}>Sign in</button>
        <p>Don't have an Account yet? <a onClick={() => navigate('/signup')} className="link-label">Sign Up</a></p>   
        
        </div>

        </>

    )
}