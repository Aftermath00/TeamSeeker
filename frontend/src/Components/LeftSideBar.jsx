import "../styles/main-page.css"
import MatchList from "./MatchList"
const LeftSideBar = ({matchList,setMatchList}) =>{

    return(
        <>
        <div className="left-side-bar">
        
        <div className="current-user-profile-viewer">
            <img className="profile-image-holder" src="src\assets\EZPark.png"/>
            <div className="name-info-container">
                <p className="name-holder">EZPark</p>
                <p >Gemastik</p>
            </div>
        </div>

        <h2>Matches</h2>

        <MatchList matchList = {matchList}/>
        
        </div>
        </>
    )
}

export default LeftSideBar