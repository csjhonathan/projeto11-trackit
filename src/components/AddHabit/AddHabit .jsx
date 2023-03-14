import { AddHabitContainer, AddHabitForm,HabitTitleInput, DaysContainer, DayButton, SubmitContainer, SaveHabitButton, CancelHabitButton } from "./styles";
import days from "../../constants/days";
import { useState } from "react";

export default function AddHabit ({setCreatingHabit}){
  const [weekdays, setWeekdays] = useState([]);

  function handleSelectedWeekdays (d){
    if(!weekdays.includes(d)){
      setWeekdays([...weekdays, d])
    }else{
      setWeekdays(weekdays.filter(day => day!==d))
    }
  }
  return (
    <AddHabitContainer>
      <AddHabitForm onSubmit={""}>
          <HabitTitleInput 
          required
          placeholder="nome do hábito"
          />

          <DaysContainer>
            {days.map(({id, day}) => <DayButton key = {id} id = {id} isSelected = {weekdays.includes(id)} onClick = {() => handleSelectedWeekdays(id)} type = "button">{day}</DayButton>)}
          </DaysContainer>
          <SubmitContainer>
            <CancelHabitButton type="button" onClick={() => setCreatingHabit(false)}>Cancelar</CancelHabitButton>
            <SaveHabitButton type="submit">Salvar</SaveHabitButton>
          </SubmitContainer>
      </AddHabitForm>
    </AddHabitContainer>
  )
}