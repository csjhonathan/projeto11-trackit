import { StyledNavBar, Today } from "./stylesNavBar"
import { Link } from "react-router-dom"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
export default function NavBar(){
  return (
    <StyledNavBar data-test="menu"> 
      <Link to = "/habitos"  data-test="habit-link">Habitos</Link>
      <Link to = "/hoje" data-test="today-link">
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
      <Link to = "/historico" data-test="history-link">Histórico</Link>

    </StyledNavBar>
  )
}