import { StyledNavBar, Today } from "./stylesNavBar"
import { Link } from "react-router-dom"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
export default function NavBar(){
  return (
    <StyledNavBar> 
      <Link to = "/habitos">Habitos</Link>
      <Link to = "/hoje">
        <Today>
        <CircularProgressbar
        value={36}
        text={"Hoje"}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#52B6FF",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent",
        })}
      />
        </Today>
      </Link>
      <Link to = "/historico">Histórico</Link>

    </StyledNavBar>
  )
}