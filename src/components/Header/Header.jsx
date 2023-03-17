import { SyledTop, ProfilePicture } from "./stylesTop"
import img from "../../constants/img"
import { useContext } from "react"
import UserContext from "../../contextAPI/userContext"
import { BiExit } from "react-icons/bi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Header (){
  const {userData, setUserData} = useContext(UserContext);
  const navigate  = useNavigate()
  function handleExit (){
    if(window.confirm("DESEJA SAIR?")){
      localStorage.clear();
      setUserData({token : "", isLogged : false, image : "" , habitsList : [], todayHabitsList : [], completedHabits: [], userHistoric : []})
      navigate("/")
    }
  }
  return (
    <SyledTop data-test="header">
      TrackIt
      <RightHeader>
      <ProfilePicture src = {userData.image} alt="imagem de perfil Ichigo Kurosaki"/>
      <BiExit 
        onClick={handleExit}
      
      />
      </RightHeader>

    </SyledTop>
  )
}

const RightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`