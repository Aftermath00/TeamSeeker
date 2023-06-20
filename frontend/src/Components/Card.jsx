import { useState } from "react"
import CandidateDetailModal from "./CandidateDetailModal"

const Card = ({cardData}) =>{

    const [isOpen, setIsOpen] = useState(false)

    if(cardData == undefined) return("there's no applicant yet")


    return(
        <>

            <div className="card-container">

                <img className="applicant-image-container" src="https://100k-faces.glitch.me/random-image"/>

                <h2 className="applicant-name-holder">{cardData.fullName}, {cardData.year}</h2>

            <div className="user-detail-field-container">
                <p className="applicant-school-holder"><b>Major: </b> {cardData.major}</p>
                <p className="applicant-school-holder"><b>Expertise: </b> {cardData.expertise}</p>
                <p className="applicant-school-holder"><b>portofolio: </b> {cardData.portofolioLink}</p>
                <p className="applicant-school-holder"><b>LinkedIn: </b> {cardData.linkedlnLink}</p>

            </div>

                <p className="applicant-school-holder"><b>Description</b></p>
                <div className="description-container">
                    {cardData.description}
                </div>

                <div className="skill-field">
                {/* <p className="expertise-title">Skill:</p> */}

                {/* <ul className="skill-list">
                    <li className="skill-list-item">{cardData.skill[0]}</li>
                </ul> */}

                </div>
                <p className="location-holder">{cardData.email}</p>

                <a onClick={() => setIsOpen(true)} className="detail-link">Details</a>

                <CandidateDetailModal 
                cardData = {cardData} 
                open={isOpen} 
                onClose={() => setIsOpen(false)}/>
            </div>
            
        </>
    )

}

export default Card