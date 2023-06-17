import { useState } from "react"
import "../styles/main-page.css"
import Card from "./Card"
import userData from "../../dummyData/userData"
const ContentContainer = ({matchList,setMatchList}) =>{

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
    const match = () => {
        
        if(count != userData.length-1){

            setCardData(userData[count+1]);

            setMatchList(currentList =>{
                return [
                    ...currentList,
                    userData[count]
                ]
            })

            setCount(count+1);
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