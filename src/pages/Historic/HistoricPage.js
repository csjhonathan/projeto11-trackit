import { useEffect , useContext} from "react";
import { useNavigate } from "react-router-dom"
import { HistoricContainer, HistoricTitle, NoHistoricMessage } from "./historicStyles"
import UserContext from "../../contextAPI/userContext";

export default function HistoricPage(){
  const navigate = useNavigate ();
  const {userData, setUserData} = useContext(UserContext);
  useEffect(()=> {
    if(!userData.isLogged){
        navigate("/")
      }
  }, []);

  return (
    <HistoricContainer>
      <HistoricTitle>Histórico</HistoricTitle>
      <NoHistoricMessage>Em breve você poderá ver o histórico dos seus hábitos aqui!</NoHistoricMessage>
    </HistoricContainer>
  )
}