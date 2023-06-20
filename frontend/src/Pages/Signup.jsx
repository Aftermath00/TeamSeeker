import { useNavigate } from "react-router-dom"
import "../styles/login.css"
import { useState } from "react"
import axios from "axios"

const Signup = () =>{

    const navigate = useNavigate()

    const [userName,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")

    const userNameFormChange = (event) =>{
        setUsername(event.target.value)
    }

    const passwordFormChange = (event) =>{
        setPassword(event.target.value)
    }

    const confirmPasswordFormChange = (event) =>{
        setConfirmPassword(event.target.value)
    }

    const signUpButtonHandler = async() =>{

        if(password == '' || password != confirmPassword){
            alert('password does not match')
            return
        }

        const authenticationData = {
            "userName": userName,
            "password": password
        }

        const hasAllValues = Object.values(authenticationData).every(value => {
            return value !== "" && value !== null && value !== undefined;
          });
          
          if (hasAllValues) {

            const usernameData = {
                "username":userName
            }

            try {
                
                const response = await axios.post('https://teamseeker-production-8e24.up.railway.app/api/createaccount',authenticationData)
                console.log('response data:',response.data)
                
                navigate('/role',{
                    state:{
                        data: usernameData
                    }
                })
                
            } catch (error) {
                console.log("error",error)
                alert('username already exist')
                setUsername('')
                setPassword('')
                setConfirmPassword('')
                return
            }
            

          } else {
            console.log("Some properties are missing values");
            alert('Please fill out all of the form')
          }

    }

    return (

        <>
        <div className="login-main-container">

        <img src="src\assets\team_seeker_logo.png"/>

        <h1>Sign Up</h1>
        <h2>Find the Best Teammate Here</h2>

        <label className="credential-field-label"> Username </label>
        <input value={userName} onChange={userNameFormChange} 
        type="text" id="username-field" className="credential-field"/>

        <label className="credential-field-label"> Password </label>
        <input value={password} onChange={passwordFormChange}
        type="password" className="credential-field"/>
        
        <label className="credential-field-label"> Confirm Password </label>
        <input value={confirmPassword} onChange={confirmPasswordFormChange}
        type="password" className="credential-field"/>

        <button className="sign-btn" onClick={() => signUpButtonHandler()}>Sign Up</button>
        <p>Already have Account? <a onClick={() => navigate('/')} className="link-label">Sign In</a></p>   
        
        </div>

        </>

    )
}

export default Signup