import { SyledTop, ProfilePicture } from "./stylesTop"
import img from "../../constants/img"
import { useContext } from "react"
import UserContext from "../../contextAPI/userContext"
export default function Header (){
  const {userData, setUserData} = useContext(UserContext)
  return (
    <SyledTop data-test="header">
      TrackIt
      <ProfilePicture src = {userData.image} alt="imagem de perfil Ichigo Kurosaki"/>
    </SyledTop>
  )
}