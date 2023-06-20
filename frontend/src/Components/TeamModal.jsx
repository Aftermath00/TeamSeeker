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

                      <img className="applicant-image-container" src="https://100k-faces.glitch.me/random-image"/>

                      <h2 className="applicant-name-holder">{userDetail.teamName}</h2>

                      <p className="applicant-school-holder"><b>Project Name:</b> {userDetail.projectTitle}</p>
                      <p className="applicant-school-holder"><b>Objective:</b> {userDetail.objective}</p>
                      <p className="applicant-school-holder"><b>We're looking for: </b> {userDetail.position}</p>
                      <p className="applicant-school-holder"><b>Description:</b></p>
                      <div className="description-container">
                    {userDetail.description}
                    </div>

                      <div className="skill-field">
                      <p className="expertise-title">Looking for these skills:</p>

                      <ul className="skill-list">
                      
                          <li className="skill-list-item">{userDetail.skillReq[0]}</li>

                      </ul>

                      </div>

                      
                </div>

            </div>
        </>
    )
}


export default TeamModal