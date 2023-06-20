import { useLocation, useNavigate } from "react-router-dom"
import "../styles/choose-role.css"
import { useState } from "react"
import team_seeker_logo from "../assets/team_seeker_logo.png";
import individual_icon from "../assets/individual_icon.png";
import team_icon from "../assets/team_icon.png";
const SignupRoleChoosePage = () =>{

    const navigate = useNavigate()

    const location = useLocation()

    const userNameData = location.state?.data
    
    console.log("username:",userNameData)

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
            navigate('/individual',{
                state:{
                    data: userNameData
                }
            })
        }

        else if(isTeamClicked){
            navigate('/team',{
                state:{
                    data: userNameData
                }
            })
        }

        else{
            alert('Please Pick One')
        }
         


      }

    return(
        <>
        <img className="small-logo" src={team_seeker_logo}/>

        <div className="choose-role-container">

            <h1>Pick Your Role</h1>

            <div className="options-container">
                <div onClick={handleRoleButtonClick}
                className = {isIndividualClicked ? "applicant-container option-box option-box-clicked" : "applicant-container option-box"}>
                    <img src={individual_icon}/>
                    <label>Individual</label>
                </div>

                <div onClick={handleRoleButtonClick} 
                className = {isTeamClicked ? "applicant-container option-box option-box-clicked" : "applicant-container option-box"}>
                    <img src={team_icon}/>
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