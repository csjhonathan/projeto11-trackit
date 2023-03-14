import { useState } from "react";
import { HabitsContainer, MyHabits, AddHabitButton, EmptyMessage } from "./habitsStyles";
import { HabitsListContainer } from "./habitsStyles";
import HabitCard from "../../components/HabitCard/HabitCard";
import AddHabit from "../../components/AddHabit/AddHabit ";
export default function HabitsPage() {
  const [habits, setHabits] = useState(undefined);
  const [creatingHabit, setCreatingHabit] = useState(false)
  return (
    <HabitsContainer>
      <MyHabits>
        <h1>Meus hábitos</h1>
        <AddHabitButton onClick={() => setCreatingHabit(true)}>+</AddHabitButton>
      </MyHabits>
      {creatingHabit &&
      <AddHabit setCreatingHabit = {setCreatingHabit}/>
      }
      {!habits ? 
      <HabitsListContainer>
        <HabitCard text = {"habito 1"} ids = {[1,3,5]}/>
        <HabitCard text = {"habito 2"} ids = {[1,3,5]}/>
        <HabitCard text = {"habito 3"} ids = {[1,3,5]}/>
        <HabitCard text = {"habito 4"} ids = {[2,4,6]}/>
        <HabitCard text = {"habito 5"} ids = {[2,4,6]}/>
        <HabitCard text = {"habito 6"} ids = {[2,4,6]}/>
        <HabitCard text = {"habito 7"} ids = {[2,4,6]}/>
      </HabitsListContainer>
      
      : 
      <EmptyMessage>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
      </EmptyMessage>}
    </HabitsContainer>
    
  )
}