import { SyledTop, ProfilePicture } from "./stylesTop"
import img from "../../constants/img"
export default function Top (){
  return (
    <SyledTop>
      TrackIt
      <ProfilePicture src = {"https://sm.ign.com/t/ign_br/screenshot/default/ichigo_9szq.h960.jpg"} alt="imagem de perfil Ichigo Kurosaki"/>
    </SyledTop>
  )
}