import { useEffect, useState } from "react"
import ContentContainer from "../Components/ContentContainer"
import LeftSideBar from "../Components/LeftSideBar"
import "../styles/main-page.css"
import { useLocation } from "react-router-dom"

const MainPage = () =>{

    const [matchList,setMatchList] = useState([])

    const location = useLocation()

    const userNameData = location.state?.data.username

    return(
        <>
        <div className="main-page-container">
        <LeftSideBar 
            matchList = {matchList}
            setMatchList = {setMatchList}
            userNameData = {userNameData}
        />
        <ContentContainer 
        userNameData = {userNameData}
        matchList = {matchList}
        setMatchList = {setMatchList}    
        />
        </div>
        </>
    )
}

export default MainPage