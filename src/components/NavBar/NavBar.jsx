import { StyledNavBar, Today } from "./stylesNavBar"
import { Link } from "react-router-dom"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import UserContext from "../../contextAPI/userContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../constants/BASE_URL";
export default function NavBar() {
  const { userData, setUserData } = useContext(UserContext);
  const [completed, setCompleted] = useState([]);
  const [percentage, setPercentage] = useState(0)
  
  
  useEffect(()=> {
    setCompleted(userData.completedHabits)
    setPercentage(Math.floor((userData.completedHabits.length/ userData.todayHabitsList.length) * 100))
  }, [userData.completedHabits]);
  
  return (
    <StyledNavBar data-test="menu">
      <Link to="/habitos" data-test="habit-link">Habitos</Link>
      <Link to="/hoje" data-test="today-link">
        <Today>
          <CircularProgressbar
            value={Number.isNaN(percentage) ? 0 : percentage}
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
      <Link to="/historico" data-test="history-link">Histórico</Link>

    </StyledNavBar>
  )
}