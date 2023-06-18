import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupFormTeam = () =>{


    const navigate = useNavigate()

    const [teamName,setTeamName] = useState("")
    const [projectTitle,setProjectTitle] = useState("")
    const [objective,setObjective] = useState("")
    const [position,setPosition] = useState("")
    const [skill,setSkill] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [description,setDescription] = useState("")

    const teamNameFormChange = (event) =>{
        setTeamName(event.target.value)
    }

    const projectTitleFormChange = (event) =>{
        setProjectTitle(event.target.value)
    }

    const objectiveFormChange = (event) =>{
        setObjective(event.target.value)
    }

    const positionFormChange = (event) =>{
        setPosition(event.target.value)
    }
    
    const skillFormChange = (event) =>{
        setSkill(event.target.value)
    }
    
    const emailFormChange = (event) =>{
        setEmail(event.target.value)
    }
    
    const phoneFormChange = (event) =>{
        setPhone(event.target.value)
    }
    
    const descriptionFormChange = (event) =>{
        setDescription(event.target.value)
    }

    const createTeamButtonHandler = () =>{
        const userData = {
            "teamName":teamName,
            "projectTitle":projectTitle,
            "objective":objective,
            "position":position,
            "skill":skill,
            "phone":phone,
            "email":email,
            "description":description
        };

        const hasAllValues = Object.values(userData).every(value => {
            return value !== "" && value !== null && value !== undefined;
          });
          
          if (hasAllValues) {
            console.log("All properties have values");
            console.log(userData)
            navigate('/home')

          } else {
            console.log("Some properties are missing values");
            alert('Please fill out all of the form')
          }
    }


    return(

        <div className="signup-form-main-container">

                <img className="small-logo" src="src\assets\team_seeker_logo.png"/>
                <h1>Create Team</h1>

                <div className="secondary-form-container">
                    <div className="long-form-container">

                        <label>Team Name</label>
                        <input value={teamName} onChange={teamNameFormChange} type="text"/>

                        <label>Project Title</label>
                        <input value={projectTitle} onChange={projectTitleFormChange} type="text"/>

                        <label>Objective</label>
                        <input value={objective} onChange={objectiveFormChange} type="text"/>

                        <label>What Position Are You Looking for?</label>
                        <input value={position} onChange={positionFormChange} type="text"/>

                        <label>Skill Requirements</label>
                        <input value={skill} onChange={skillFormChange} type="text"/>

                        <label>Email</label>
                        <input value={email} onChange={emailFormChange} type="text"/>

                        <label>Phone (WhatsApp)</label>
                        <input value={phone} onChange={phoneFormChange} type="text"/>

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
                            <h3>Team Description</h3>
                            <textarea value={description} onChange={descriptionFormChange} className="describe-form" type="text"/>
                        </div>

                    </div>
                </div>

                <div className="continue-button-container">
                    <button onClick={() => createTeamButtonHandler()}>Create Team</button>
                </div>

            </div>

    )
}

export default SignupFormTeam