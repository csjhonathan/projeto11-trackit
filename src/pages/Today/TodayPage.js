import { TodayContainer, CurrentDay, Message, CurrentHabitsList, CurrentDateContainer } from "./todaystyles";
import weekdays from "../../constants/weekdaysName";
import CurrentHabitCard from "../../components/CurrentHabitCard/CurrentHabitCard";
import { useEffect } from "react";
export default function TodayPage({setLogged}){
  const dayjs = require("dayjs");
  useEffect(()=> {
    setLogged(true)
  },[])
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