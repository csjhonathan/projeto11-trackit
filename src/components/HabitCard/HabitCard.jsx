import { StyledHabitCard, HabitTitle, Weekday, Day, DeletButton, DeleteIcon } from "./styles";
import daysList from "../../constants/days";
import axios from "axios";
import UserContext from "../../contextAPI/userContext";
import { useContext } from "react";
import BASE_URL from "../../constants/BASE_URL";
import { useNavigate } from "react-router-dom";
export default function HabitCard({id, text, days}) {
  const {userData, setUserData} = useContext(UserContext);
  const navigate = useNavigate()
  const config = {
    headers: {
        "Authorization": `Bearer ${userData.token}`
    }
  };
  function deleteHabit (habitId) {
    if(window.confirm("REALMENTE DESEJA ESCLUIR ESSE HÁBITO?")){
      axios.delete(`${BASE_URL}/${habitId}`, config)
      .then((resposta)=>{
        axios.get(BASE_URL, config)
          .then(({data})=> {
            checkTodayHabits(data)
          })
          .catch((erro)=> {
            alert(erro.response.data.message)
          })
      })
      .catch((erro)=> {
        alert(erro.response.data.message)
      })
    }
  }

  function checkTodayHabits(recenthabit) {
    axios.get(`${BASE_URL}/today`, config)
      .then(({data}) => {
        setUserData({...userData, todayHabitsList : data, completedHabits : data.filter(({done}) => done ===true), habitsList : recenthabit})
  
      })
      .catch(erro => {
        console.log(erro)
      })
  }

  return (
    <StyledHabitCard data-test="habit-container">
      <HabitTitle data-test="habit-name">{text}</HabitTitle>
      <Weekday>
        {daysList.map(({id:dayListId, day}, index) => <Day key = {index} isSelected = {days.includes(dayListId)} data-test="habit-day">{day}</Day>)}
      </Weekday>
      <DeletButton onClick={() => deleteHabit(id)} data-test="habit-delete-btn">
        <DeleteIcon/>
      </DeletButton>
    </StyledHabitCard>
  )
}