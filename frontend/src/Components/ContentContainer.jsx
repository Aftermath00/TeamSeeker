import { useEffect, useState } from "react"
import "../styles/main-page.css"
import Card from "./Card"
import userData from "../../dummyData/userData"
import axios from "axios"
import yes_icon from '../assets/yes_icon.png'
import no_icon from '../assets/no_icon.png'

const ContentContainer = ({matchList,setMatchList,userNameData}) =>{

    const applicantNotFound = {
        "name": "No Applicant Available",
        "profileImageUrl": "",
        "institution": "",
        "description": "",
        "expertise": ["", ""],
        "location": ""
    }

    const [listCandidate,setListCandidate] = useState([])

    const [count,setCount] = useState(0)


    const [cardData, setCardData] = useState({})


    const getListOfCandidates = async () =>{
        try {

            const response = await axios.get(`https://teamseeker-production-8e24.up.railway.app/api/home/${userNameData}`)
            console.log('skills applicant:',response.data.applicantBySkills)
            setListCandidate(response.data.applicantBySkills)
            setCardData(response.data.applicantBySkills[0])
            
        } catch (error) {
            console.log('error:',error)
        }

    }

    const match = async() => {
        
        if(count != listCandidate.length-1){

            const matchUserData = {

                "userNameTeam":userNameData,
                "userNameApplicants":listCandidate[count].userName
            }

            try {

                const response = await axios.post('https://teamseeker-production-8e24.up.railway.app/api/matched',matchUserData)

                if(response.data.message == 'Matching Successful!'){


                    setCardData(listCandidate[count+1]);
    
                    listCandidate[count].id = crypto.randomUUID()
        
                    setMatchList(currentList =>{
                        return [
                            ...currentList,
                            listCandidate[count]
                        ]
                    })
    
                    setCount(count+1);
    
                    console.log('adding match success')
    
                }
                
            } catch (error) {
                console.log('error:',error)
                return;
            }


        }

        if(count == listCandidate.length){
            
            setCardData(applicantNotFound)
        }

    };

    const notMatch = () =>{
        if(count < listCandidate.length-1){
            setCardData(listCandidate[count+1]);
            setCount(count+1);
        }
    }

    useEffect(() => {
      getListOfCandidates()
    }, [])
    

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
                    <img src = {no_icon}/>
                </button>

                <button onClick={match} className="yes-btn">
                    <img src = {yes_icon}/>
                </button>

            </div>

        </div>

        
        </div>

        </>
    )
}

export default ContentContainer