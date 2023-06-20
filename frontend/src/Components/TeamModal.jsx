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


const TeamModal = ({open, onClose, userDetail}) =>{


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

                    <h2>Team Profile</h2>

                      {/* <img className="applicant-image-container" src={cardData.profileImageUrl}/> */}

                      <h2 className="applicant-name-holder">{userDetail.teamName}</h2>

                      <p className="applicant-school-holder">{userDetail.projectTitle}</p>

                      <p className="modal-content-description-container">
                          {userDetail.description}
                      </p>

                      <div className="skill-field">
                      <p className="expertise-title">Looking for these skills:</p>

                      <ul className="skill-list">
                      
                          <li className="skill-list-item">{userDetail.skillReq[0]}</li>

                      </ul>

                      </div>

                      <p className="location-holder">{userDetail.email}</p>
                      
                </div>

            </div>
        </>
    )
}


export default TeamModal