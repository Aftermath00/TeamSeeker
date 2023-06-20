import { useState } from "react"
import CandidateDetailModal from "./CandidateDetailModal"

const Card = ({cardData}) =>{

    const [isOpen, setIsOpen] = useState(false)


    return(
        <>

            <div className="card-container">
                <img className="applicant-image-container" src="https://100k-faces.glitch.me/random-image"/>

                <h2 className="applicant-name-holder">{cardData.fullName}</h2>

                <p className="applicant-school-holder">{cardData.major}</p>

                <p className="description-container">
                    {cardData.description}
                </p>

                <div className="skill-field">
                <p className="expertise-title">Expertise:</p>

                <ul className="skill-list">
                   {/*  <li className="skill-list-item">{cardData.skill[0]}</li> */}
                </ul>

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