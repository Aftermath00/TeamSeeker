import { useNavigate } from "react-router-dom"
import "../styles/choose-role.css"
import { useState } from "react"

const SignupRoleChoosePage = () =>{

    const navigate = useNavigate()

    const [isTeamClicked,setIsTeamClicked] = useState(false)
    const [isIndividualClicked,setIsIndividualClicked] = useState(false)

    const handleRoleButtonClick = () => {
            setIsTeamClicked(true)
          setIsIndividualClicked(false)
  
        if(isTeamClicked){
          setIsTeamClicked(false)
          setIsIndividualClicked(true)
        }
  
        console.log('button clicked')
      };

      const handleContinueButtonClick = () =>{
        if(isIndividualClicked){
            navigate('/individual')
        }

        else if(isTeamClicked){
            navigate('/team')
        }

        else{
            alert('Please Pick One')
        }
         


      }

    return(
        <>
        <img className="small-logo" src="src/assets/team_seeker_logo.png"/>

        <div className="choose-role-container">

            <h1>Pick Your Role</h1>

            <div className="options-container">
                <div onClick={handleRoleButtonClick}
                className = {isIndividualClicked ? "applicant-container option-box option-box-clicked" : "applicant-container option-box"}>
                    <img src="src\assets\individual_icon.png"/>
                    <label>Individual</label>
                </div>

                <div onClick={handleRoleButtonClick} 
                className = {isTeamClicked ? "applicant-container option-box option-box-clicked" : "applicant-container option-box"}>
                    <img src="src\assets\team_icon.png"/>
                    <label>Team</label>
                </div>
            </div>

            <div className="continue-button-container">
                    <button onClick={() => handleContinueButtonClick()}>Continue</button>
            </div>

        </div>
        </>
    )
}

export default SignupRoleChoosePage