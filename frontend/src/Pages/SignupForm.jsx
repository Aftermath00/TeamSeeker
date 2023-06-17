import { useState } from "react";
import "../styles/signup-form.css"
import { useNavigate } from "react-router-dom";

const SignupForm = () =>{

    const navigate = useNavigate()

    const [isClickedMale, setIsClickedMale] = useState(false);
    const [isClickedFemale, setIsClickedFemale] = useState(false);

    const handleGenderButtonClick = () => {
      setIsClickedMale(true)
        setIsClickedFemale(false)

      if(isClickedMale){
        setIsClickedMale(false)
        setIsClickedFemale(true)
      }

      console.log('button clicked')
    };

    return (

            <div className="signup-form-main-container">

                <img className="small-logo" src="src\assets\team_seeker_logo.png"/>
                <h1>Create Account</h1>

                <div className="secondary-form-container">
                    <div className="long-form-container">

                        <label>Full Name</label>
                        <input type="text"/>

                        <label>Major</label>
                        <input type="text"/>

                        <label>Year</label>
                        <input type="text"/>

                        <label>Gender</label>

                        <div className="gender-picker-container">
                        
                        <button  onClick={handleGenderButtonClick} 
                        className={isClickedMale ? 'gender-button-clicked' : 'gender-button-not-clicked'}>Male</button>

                        <button onClick={handleGenderButtonClick} 
                        className={isClickedFemale ? 'gender-button-clicked' : 'gender-button-not-clicked'}>Female</button>

                        </div>

                        <label>Expertise</label>
                        <input type="text"/>

                        <label>Portofolio Link</label>
                        <input type="text"/>

                        <label>LinkedIn Link</label>
                        <input type="text"/>

                    </div>
                    
                    <div  className="secondary-container">

                        <div>

                            <h3 className="picture-form-title">Profile Photo</h3>

                            <div className="picture-form">
                                <button type="file">
                                    <img src="src\assets\add.png"/>
                                </button>
                            </div>
                        </div>
                        
                        <div className="describe-form-container">
                            <h3>Describe Yourself</h3>
                            <textarea className="describe-form" type="text"/>
                        </div>

                    </div>
                </div>

                <div className="continue-button-container">
                    <button onClick={() => navigate('/home')}>Continue</button>
                </div>

            </div>

        
    )
}

export default SignupForm