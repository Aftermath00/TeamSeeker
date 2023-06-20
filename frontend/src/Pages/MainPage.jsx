import { useEffect, useState } from "react"
import ContentContainer from "../Components/ContentContainer"
import LeftSideBar from "../Components/LeftSideBar"
import "../styles/main-page.css"
import { useLocation } from "react-router-dom"
import axios from "axios"

const MainPage = () =>{

    const [matchList,setMatchList] = useState([])

    const location = useLocation()

    const userNameData = location.state?.data.username

    const removeDuplicate = () =>{
        const uniqueMatchList = matchList.filter((obj, index, self) => {
            return index === self.findIndex((o) => o.userName === obj.userName);
        });

        setMatchList(uniqueMatchList)
    }

    const addToMatchList = (newData) =>{

        newData.id = crypto.randomUUID()
        
        setMatchList(currentList =>{
            return [
                ...currentList,
                newData
            ]
        })


    }

    const getApplicantDetail = async(applicantUsername) =>{
        try {

            const response = await axios.get(`http://localhost:3000/api/detailapplicant/${applicantUsername}`)

            return response.data.dataDetailApplicant[0]
            
        } catch (error) {
            console.log('error:',error)
            return null
        }
    }


    const getMatchList = async () => {
        try {

          const requestBody = {
            "usernameTeam": userNameData,
          };
      
          const response = await axios.post('http://localhost:3000/api/matches', requestBody);
      
          const matchListResponse = response.data.userNameApplicants;

          matchListResponse.map(async item =>{

                const userDetail = await getApplicantDetail(item)

                addToMatchList(userDetail)
                    
          })

          removeDuplicate()


        } catch (error) {
          console.error('Error:', error);
        }
    };

    return(
        <>
        <div className="main-page-container">
        <LeftSideBar
            getMatchList = {getMatchList} 
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