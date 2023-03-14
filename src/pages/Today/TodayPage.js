import { TodayContainer, CurrentDay, Message, CurrentHabitsList, CurrentDateContainer } from "./todaystyles";
import weekdays from "../../constants/weekdaysName";
import CurrentHabitCard from "../../components/CurrentHabitCard/CurrentHabitCard";
export default function TodayPage(){
  const dayjs = require("dayjs");
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