import { AddHabitContainer, AddHabitForm,HabitTitleInput, DaysContainer, DayButton, SubmitContainer, SaveHabitButton, CancelHabitButton } from "./styles";
import days from "../../constants/days";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../contextAPI/userContext";
import BASE_URL from "../../constants/BASE_URL";
import axios from "axios";
import Loader from "../Loader/Loader";
export default function AddHabit ({setCreatingHabit}){
  const [weekdays, setWeekdays] = useState([]);
  const [habitName, setHabitName] =useState("");
  const {userData, setUserData} = useContext(UserContext);
  const [sendingHabit, setSendingHabit] = useState(false)

  //header config
  const config = {
    headers: {
        "Authorization": `Bearer ${userData.token}`
    }
  };

  //selecionar dias
  function handleSelectedWeekdays (d){
    if(!weekdays.includes(d)){
      setWeekdays([...weekdays, d])
    }else{
      setWeekdays(weekdays.filter(day => day!==d))
    }
  }

  //adicionar um habito e mostrar a nova lista
  function addHabit (e){
    e.preventDefault();

    
    if(weekdays.length === 0 || habitName === ""){
      alert("Preencha todos os dados corretamente")
      return;
    }
    
    setSendingHabit(true)
    axios.post(`${BASE_URL}/habits`, {name: habitName, days: weekdays}, config)
      .then(() => {
        setSendingHabit(false)
        setCreatingHabit(false)
        axios.get(`${BASE_URL}/habits`, config)
          .then(({data})=> {
            checkTodayHabits(data)
          })
          .catch((erro)=> {
            alert(erro.response.data.message)
          })
      })
      .catch(erro => {
        alert(erro.response.data.message)
      })
  }

  function checkTodayHabits(recenthabit) {
    axios.get(`${BASE_URL}/habits/today`, config)
      .then(({data}) => {
        setUserData({...userData, todayHabitsList : data, completedHabits : data.filter(({done}) => done ===true), habitsList : recenthabit})
        console.log(data)
        console.log(userData)
      })
      .catch(erro => {
        console.log(erro)
      })
  }
  return (
    <AddHabitContainer data-test="habit-create-container">
      <AddHabitForm onSubmit={addHabit}>
          <HabitTitleInput 
            placeholder="nome do hábito"
            value={habitName}

            onChange = {e => setHabitName(e.target.value)}
            disabled = {sendingHabit}

            data-test="habit-name-input"
          />

          <DaysContainer>
            {days.map(({id, day}) =>{
              return(
              <DayButton key = {id} 
                id = {id} 
                isSelected = {weekdays.includes(id)} 
                onClick = {() => handleSelectedWeekdays(id)} 
                type = "button" disabled = {sendingHabit} 
                data-test="habit-day">{day}
              </DayButton>)
            })}
          </DaysContainer>
          <SubmitContainer>
            <CancelHabitButton type="button" disabled = {sendingHabit} onClick={() => setCreatingHabit(false)} data-test="habit-create-cancel-btn">Cancelar</CancelHabitButton>
            <SaveHabitButton type="submit" disabled = {sendingHabit} data-test="habit-create-save-btn">{sendingHabit ? <Loader/> : "Salvar"}</SaveHabitButton>
          </SubmitContainer>
      </AddHabitForm>
    </AddHabitContainer>
  )
}