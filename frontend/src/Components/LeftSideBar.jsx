import axios from "axios"
import "../styles/main-page.css"
import MatchList from "./MatchList"
import { useEffect, useState } from "react"
import TeamModal from "./TeamModal"

const LeftSideBar = ({matchList,setMatchList,userNameData}) =>{


    const [userDetail,setUserDetail] = useState({})

    const [isUserDetailModalOpen,setIsUserDetailModalOpen] = useState(false)

    const getUserDataFromAPI = async () =>{

        const response = await axios(`http://localhost:3000/api/detailteam/${userNameData}`)

        setUserDetail(response.data.dataTeamDetail[0])

        console.log('mantap jiwa 1',response.data.dataTeamDetail[0])

        console.log("mantap jiwa",userDetail)

    }

    

    useEffect(() => {

        getUserDataFromAPI()
        
    }, []);

    return(
        <>

        <div className="left-side-bar">

        
        {/* <TeamModal
            userDetail={userDetail}
            open={isUserDetailModalOpen}
            onClose={() => setIsUserDetailModalOpen(false)}/> */}
        
        <div className="current-user-profile-viewer">

            <img onClick={()=>setIsUserDetailModalOpen(true)} className="profile-image-holder" src="src\assets\EZPark.png"/>
            
            <div className="name-info-container">
                <p className="name-holder">{userDetail.teamName }</p>
                <p >{userDetail.objective}</p>
            </div>
        </div>

        <h2 style={{ color: 'white' }}>Matches</h2>

        <MatchList 
        setMatchList = {setMatchList}
        userNameData = {userNameData} 
        matchList = {matchList}/>


        
        </div>
        </>
    )
}

export default LeftSideBar