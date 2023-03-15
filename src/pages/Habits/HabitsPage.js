import { useState, useEffect, useContext } from "react";
import { HabitsContainer, MyHabits, AddHabitButton, EmptyMessage } from "./habitsStyles";
import { HabitsListContainer } from "./habitsStyles";
import HabitCard from "../../components/HabitCard/HabitCard";
import AddHabit from "../../components/AddHabit/AddHabit ";
import UserContext from "../../contextAPI/userContext";
import axios from "axios"
import BASE_URL from "../../constants/BASE_URL";
export default function HabitsPage() {
  // const [habits, setHabits] = useState(undefined);
  const [creatingHabit, setCreatingHabit] = useState(false);
  const {userData, setUserData} = useContext(UserContext);
  const config = {
    headers: {
        "Authorization": `Bearer ${userData.token}`
    }
  };
  
  useEffect(() => {
    axios.get(`${BASE_URL}/habits`, config)
      .then(({data})=> {
        setUserData({...userData, habitsList : data})
      })
      .catch((erro)=> {
        alert(erro.response.data.message)
      })
  }, [])

  return (
    <HabitsContainer>
      <MyHabits>
        <h1>Meus hábitos</h1>
        <AddHabitButton onClick={() => setCreatingHabit(true)}  data-test="habit-create-btn">+</AddHabitButton>
      </MyHabits>
      {creatingHabit &&
      <AddHabit setCreatingHabit = {setCreatingHabit}/>
      }
      {userData.habitsList.length >= 1 ? 
      <HabitsListContainer>
        {userData.habitsList.map(({id, days, name}) => <HabitCard key ={id} id ={id} text = {name} days = {days}/>)}
      </HabitsListContainer>
      
      : 
      <EmptyMessage>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
      </EmptyMessage>}
    </HabitsContainer>
    
  )
}