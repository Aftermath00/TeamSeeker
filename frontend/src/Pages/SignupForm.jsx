import { useState } from "react";
import "../styles/signup-form.css"

const SignupForm = () =>{

    const [isClicked, setIsClicked] = useState(
        {
            "gender":"",
            "isClicked":false 
        }
    );

    const handleGenderButtonClick = (gender) => {
      setIsClicked({
        "gender":gender,
        "isClicked":true
      });
    };

    return (

            <div className="signup-form-main-container">
                <img className="small-logo" src="src/assets/team_seeker_logo.png"/>
                <h1>Create Account</h1>

                <div className="secondary-form-container">
                    <div className="long-form-container">

                        <label>Full Name</label>
                        <input type="text"/>

                        <label>Username</label>
                        <input type="text"/>

                        <label>Major</label>
                        <input type="text"/>

                        <label>Year</label>
                        <input type="text"/>

                        <label>Gender</label>

                        <div className="gender-picker-container">
                        
                        <button onClick={handleGenderButtonClick("male")}>Male</button>

                        <button >Female</button>

                        </div>

                    </div>
                    
                    <div>

                    <h3 className="picture-form-title">Profile Photo</h3>

                    <div className="picture-form">
                        <button type="file">
                            <img src="src\assets\add.png"/>
                        </button>

                    </div>

                    </div>
                </div>



            </div>

        
    )
}

export default SignupForm