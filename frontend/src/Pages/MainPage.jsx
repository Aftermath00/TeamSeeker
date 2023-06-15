import { useState } from "react"
import ContentContainer from "../Components/ContentContainer"
import LeftSideBar from "../Components/LeftSideBar"
import "../styles/main-page.css"

const MainPage = () =>{

    const [matchList,setMatchList] = useState([])

    return(
        <>
        <div className="main-page-container">
        <LeftSideBar 
            matchList = {matchList}
            setMatchList = {setMatchList}
        />
        <ContentContainer 
        matchList = {matchList}
        setMatchList = {setMatchList}    
        />
        </div>
        </>
    )
}

export default MainPage