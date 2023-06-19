import { useState } from "react"
import "../styles/main-page.css"
import Card from "./Card"
import userData from "../../dummyData/userData"
import axios from "axios"

const ContentContainer = ({matchList,setMatchList,userNameData}) =>{

    const applicantNotFound = {
        "name": "No Applicant Available",
        "profileImageUrl": "",
        "institution": "",
        "description": "",
        "expertise": ["", ""],
        "location": ""
    }


    const [count,setCount] = useState(0)


    const [cardData, setCardData] = useState(
        userData[0]
    )
    const match = async() => {
        
        if(count != userData.length-1){

            const matchUserData = {
                "userNameTeam":userNameData,
                "userNameApplicants":userData.username
            }

            const response = await axios.post('http://localhost:3000/api/matched',matchUserData)

            if(response.data.message == 'Matching Successful!'){

                setCardData(userData[count+1]);

                userData[count].id = crypto.randomUUID()
    
                setMatchList(currentList =>{
                    return [
                        ...currentList,
                        userData[count]
                    ]
                })

                setCount(count+1);

                console.log('adding match success')

            }

        }

        if(count == userData.length){
            
            setCardData(applicantNotFound)
        }

    };

    const notMatch = () =>{
        if(count < userData.length-1){
            setCardData(userData[count+1]);
            setCount(count+1);
        }

        
    }

    return(
        <>
        <div className="content-container">
        
        <div className="inner-content-container">

            <div className="title-container">
                Choose your Next Teammate
            </div>

            <Card cardData = {cardData}/>

            <div className = "option-container">
            
                <button onClick={notMatch}  className="no-btn">
                    <img src = "src\assets\no_icon.png"/>
                </button>

                <button onClick={match} className="yes-btn">
                    <img src = "src\assets\yes_icon.png"/>
                </button>

            </div>

        </div>

        
        </div>

        </>
    )
}

export default ContentContainer