const MatchList = ({matchList}) =>{
    return(
        <>
            <div className="match-list-container">

            {matchList.map(match =>{
                return(
                    
                    <div className="match-list-holder">

                    <img className="match-list-image-holder" src={match.profileImageUrl}/>
                    <p>{match.name}</p>

                    </div>


                )
            })}

            </div>
        </>
    )
}

export default MatchList