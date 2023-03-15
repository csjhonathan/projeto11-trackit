import { StyledHabitCard, HabitTitle, Weekday, Day, DeletButton, DeleteIcon } from "./styles";
import days from "../../constants/days";
import deleteImg from "../../assets/img/lixeira.png"
export default function HabitCard({text, ids}) {
  return (
    <StyledHabitCard>
      <HabitTitle>{text}</HabitTitle>
      <Weekday>
      {days.map(({id, day}) => <Day key = {id} isSelected = {ids.includes(id)}>{day}</Day>)}
      </Weekday>
      <DeletButton>
        <DeleteIcon/>
      </DeletButton>
    </StyledHabitCard>
  )
}