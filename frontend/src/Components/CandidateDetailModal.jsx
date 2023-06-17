import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

const CandidateDetailModal = ({ open, onClose, cardData }) =>{

    if (!open) return null

    return(
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES} className='modal-style'>
                <div className='close-btn-style'>
                      <button onClick={onClose}>
                        <img src='.\src\assets\cancel_btn.png' />
                      </button>
                </div>

                <div className='modal-content-container'>
                      <img className="applicant-image-container" src={cardData.profileImageUrl}/>

                      <h2 className="applicant-name-holder">{cardData.name}</h2>

                      <p className="applicant-school-holder">{cardData.institution}</p>

                      <p className="modal-content-description-container">
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
                </div>

            </div>
        </>
    )
}

export default CandidateDetailModal