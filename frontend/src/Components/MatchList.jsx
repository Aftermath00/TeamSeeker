import { useState } from "react"
import DetailModal from "./DetailModal"
import axios from "axios"

const MatchList = ({matchList,userNameData,setMatchList}) =>{

    const [isOpenUserDetailModalOpen, setIsUserDetailModalOpen] = useState(false)
    const [currentData,setCurrentData] = useState({})

    const clickProfilePict = (data) =>{
        setCurrentData(data)
        setIsUserDetailModalOpen(true)

        console.log('click modal detail')

    }

    const removeUser = (usernameInput) => {
        setMatchList(matchList => matchList.filter(user => user.username !== usernameInput));
    };

    const unmatchHandler = async() =>{
        
        const deleteData = 
        {
            "usernameTeam":userNameData,
            "usernameApplicant":currentData.username
        }

        const response = await axios.delete('http://localhost:3000/api/delmatch',deleteData)

        if(response.data.message == "Match deleted successfully"){

            removeUser(currentData.username)

            setIsUserDetailModalOpen(false)

            console.log("just remove")
        }
    }


    return(
        <>
            <div className="match-list-container">

            {matchList.map(match =>{

                return(

                    <div key = {match.id} className="match-list-holder">

                    <img className="match-list-image-holder"
                    onClick={() => clickProfilePict(match)} 
                    src={match.profileImageUrl}/>
                    <p style={{ color: 'white' }}>{match.name}</p>

                    </div>
                    
                )
            })}

            <DetailModal
                matchList = {matchList}
                cardData = {currentData} 
                open={isOpenUserDetailModalOpen}
                unmatchHandler = {unmatchHandler} 
                onClose={() => setIsUserDetailModalOpen(false)}
            />

            </div>
        </>
    )
}

export default MatchList