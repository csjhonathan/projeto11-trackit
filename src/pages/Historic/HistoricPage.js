import { useEffect , useContext, useState} from "react";
import { useNavigate } from "react-router-dom"
import { HistoricContainer, HistoricTitle, NoHistoricMessage} from "./historicStyles"
import UserContext from "../../contextAPI/userContext";
import HistoricCalendar from "../../components/HistoricCalendar/HistoricCalendar";
import BASE_URL from "../../constants/BASE_URL";
import axios from "axios";
export default function HistoricPage(){
  const navigate = useNavigate ();
  const {userData, setUserData} = useContext(UserContext);
  const [historicHabits, setHistoricHabits] = useState();
  const config = {
    headers: {
        "Authorization": `Bearer ${userData.token}`
    }
  };

  useEffect(() => {

    axios.get(`${BASE_URL}/history/daily`, config)
      .then(({data}) => {
        const historic =data
        setHistoricHabits(historic)
      })
      .catch(erro => {
        console.log("erro")
        setHistoricHabits(erro)
      })

    if(!userData.isLogged){
        navigate("/")
      }
  }, []);

  return (
    <HistoricContainer>
      <HistoricTitle>Histórico</HistoricTitle>
      <div data-test="calendar">
        <HistoricCalendar historicHabits = {historicHabits}/>
      </div> 
    </HistoricContainer>
  )
}