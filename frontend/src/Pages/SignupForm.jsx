import { useState } from "react";
import "../styles/signup-form.css"
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = () =>{

    const navigate = useNavigate()

    const location = useLocation()

    const userNameData = location.state?.data

    const [isClickedMale, setIsClickedMale] = useState(false);
    const [isClickedFemale, setIsClickedFemale] = useState(false);

    const [fullName,setFullName] = useState("");
    const [major, setMajor] = useState("")
    const [year, setYear] = useState("")
    const [gender,setGender] = useState("")
    const [expertise,setExpertise] = useState("")
    const [skill,setSkill] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [portofolioLink,setPortofolioLink] = useState("")
    const [linkedInLink,setLinkedInLink] = useState("")
    const [description,setDescription] = useState("")


    const nameFormChange = (event) =>{
        setFullName(event.target.value)
    }
    
    const majorFormChange = (event) =>{
        setMajor(event.target.value)
    }

    const yearFormChange = (event) =>{
        setYear(event.target.value)
    }

    const genderFormChange = () =>{
        if(isClickedMale){
            setGender("male")
        }

        else if(isClickedFemale){
            setGender("female")
        }
    }

    const expertiseFormChange = (event) =>{
        setExpertise(event.target.value)
    }

    const skillFormChange = (event) =>{
        setSkill(event.target.value)
    }

    const phoneFormChange = (event) =>{
        setPhone(event.target.value)
    }

    const emailFormChange = (event) =>{
        setEmail(event.target.value)
    }

    const portofolioFormChange = (event) =>{
        setPortofolioLink(event.target.value)
    }

    const linkedInFormChange = (event) =>{
        setLinkedInLink(event.target.value)
    }

    const descriptionFormChange = (event) =>{
        setDescription(event.target.value)
    }

    const handleGenderButtonClick = () => {

      setIsClickedMale(true)
        setIsClickedFemale(false)

      if(isClickedMale){
        setIsClickedMale(false)
        setIsClickedFemale(true)
      }

      console.log('button clicked')
    };

    const createAccountButtonHandler =  async() =>{

        
        if(isClickedMale){
            setGender("male")
        }

        else if(isClickedFemale){
            setGender("female")
        }
        
       /*  const userData = {
            "userName":userNameData,
            "fullName":fullName,
            "major":major,
            "semester":"4",
            "expertise":expertise,
            "skill":[skill],
            "description":description,
            "year":year,
            "gender":gender,
            "phone":phone,
            "email":email,
            "portofolioLink":portofolioLink,
            "linkedInLink":linkedInLink,
        }; */

        const userData = {
            "userName":userNameData.username,
            "fullName":fullName,
            "major":major,
            "year":parseInt(year),
            "expertise":expertise,
            "skill":[skill],
            "description":description,
            "portofolioLink":portofolioLink,
            "linkedlnLink":linkedInLink,
            "phoneNum":phone,
            "email":email
        };

        const hasAllValues = Object.values(userData).every(value => {
            return value !== "" && value !== null && value !== undefined;
          });
          
          if (hasAllValues) {
            console.log("All properties have values");

            try {

                console.log(userData)

                const response = await axios.post('http://localhost:3000/api/registerapplicant',userData)

                console.log('response data:',response.data)

                navigate('/')

                
            } catch (error) {
                console.log('error:',error)
                alert('something went wrong')
            }


          } else {
            console.log("Some properties are missing values");
            alert('Please fill out all of the form')
          }
    }

    return (

            <div className="signup-form-main-container">

                <img className="small-logo" src="src\assets\team_seeker_logo.png"/>
                <h1>Create Account</h1>

                <div className="secondary-form-container">
                    <div className="long-form-container">

                        <label>Full Name</label>
                        <input value={fullName} onChange={nameFormChange} type="text"/>

                        <label>Major</label>
                        <input value={major} onChange={majorFormChange} type="text"/>

                        <label>Year</label>
                        <input value={year} onChange={yearFormChange} type="text"/>

                        <label>Gender</label>

                        <div className="gender-picker-container">
                        
                        <button  onClick={handleGenderButtonClick} 
                        className={isClickedMale ? 'gender-button-clicked' : 'gender-button-not-clicked'}>Male</button>

                        <button onClick={handleGenderButtonClick} 
                        className={isClickedFemale ? 'gender-button-clicked' : 'gender-button-not-clicked'}>Female</button>

                        </div>

                        <label>Expertise</label>
                        <input value={expertise} onChange={expertiseFormChange} type="text"/>
                        
                        <label>Skill</label>
                        <input value={skill} onChange={skillFormChange} type="text"/>
                        
                        <label>Phone (WhatsApp)</label>
                        <input value={phone} onChange={phoneFormChange} type="text"/>
                        
                        <label>Email</label>
                        <input value={email} onChange={emailFormChange} type="text"/>
                        

                        <label>Portofolio Link</label>
                        <input value={portofolioLink} onChange={portofolioFormChange} type="text"/>

                        <label>LinkedIn Link</label>
                        <input value={linkedInLink} onChange={linkedInFormChange} type="text"/>

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
                            <textarea value={description} onChange={descriptionFormChange} className="describe-form" type="text"/>
                        </div>

                    </div>
                </div>

                <div className="continue-button-container">
                    <button onClick={() => createAccountButtonHandler()}>Create Account</button>
                </div>

            </div>

        
    )
}

export default SignupForm