import { useState } from "react"
import CandidateDetailModal from "./CandidateDetailModal"

const Card = ({cardData}) =>{

    const [isOpen, setIsOpen] = useState(false)

    return(
        <>

            <div className="card-container">
                <img className="applicant-image-container" src={cardData.profileImageUrl}/>

                <h2 className="applicant-name-holder">{cardData.name}</h2>

                <p className="applicant-school-holder">{cardData.institution}</p>

                <p className="description-container">
                    {cardData.description}
                </p>

                <div className="skill-field">
                <p className="expertise-title">Expertise:</p>

                <ul className="skill-list">
                    <li className="skill-list-item">{cardData.expertise[0]}</li>
                    <li className="skill-list-item">{cardData.expertise[1]}</li>
                
                </ul>

                </div>
                <p className="location-holder">{cardData.location}</p>

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