import { TodayContainer, CurrentDay, Message, CurrentHabitsList, CurrentDateContainer } from "./todaystyles";
import weekdays from "../../constants/weekdaysName";
import CurrentHabitCard from "../../components/CurrentHabitCard/CurrentHabitCard";
import { useEffect, useContext } from "react";
import UserContext from "../../contextAPI/userContext";
import BASE_URL from "../../constants/BASE_URL";
export default function TodayPage(){
  const {userData, setUserData} = useContext(UserContext)
  const dayjs = require("dayjs");
  console.log(userData)
  function currentDay(){
    return `${weekdays[dayjs().format("dddd")]}, ${dayjs().format("DD")}/${dayjs().format("MM")}`
  }
  return (
    <TodayContainer>
      <CurrentDateContainer>
        <CurrentDay>
          {currentDay()}
        </CurrentDay>
        <Message>
          Nenhum hábito concluido ainda
        </Message>
      </CurrentDateContainer>

      <CurrentHabitsList>
        <CurrentHabitCard/>
        <CurrentHabitCard/>
        <CurrentHabitCard/>
      </CurrentHabitsList>
    </TodayContainer>
  )
}