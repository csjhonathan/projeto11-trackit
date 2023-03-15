import { TodayContainer, CurrentDay, Message, CurrentHabitsList, CurrentDateContainer } from "./todaystyles";
import weekdays from "../../constants/weekdaysName";
import CurrentHabitCard from "../../components/CurrentHabitCard/CurrentHabitCard";
import { useEffect, useContext, useState } from "react";
import UserContext from "../../contextAPI/userContext";
import BASE_URL from "../../constants/BASE_URL";
import axios from "axios";
export default function TodayPage(){
  const {userData, setUserData} = useContext(UserContext);
  const [completed, setCompleted] = useState([]);
  const dayjs = require("dayjs");
  const config = {
    headers: {
        "Authorization": `Bearer ${userData.token}`
    }
  };
  const percentage = (completed.length/userData.todayHabitsList.length)*100;

  useEffect(()=> {
    axios.get(`${BASE_URL}/habits/today`, config)
      .then(({data}) => {
        setCompleted(data.filter(({done}) => done ===true))
        setUserData({...userData, todayHabitsList : data})
      })
      .catch(erro => {
        console.log(erro)
      })
  }, [userData.completedHabits])
  function currentDay(){
    return `${weekdays[dayjs().format("dddd")]}, ${dayjs().format("DD")}/${dayjs().format("MM")}`
  }
  return (
    <TodayContainer>
      <CurrentDateContainer>
        <CurrentDay data-test="today">
          {currentDay()}
        </CurrentDay>
        <Message check = {completed.length>= 1} data-test="today-counter">
          {completed.length>= 1 ? `${percentage}% dos hábitos concluídos` : "Nenhum hábito concluido ainda" }
        </Message>
      </CurrentDateContainer>

      <CurrentHabitsList>
        {userData.todayHabitsList.map(({id, name, done, currentSequence, highestSequence}) => {
          return (
            <CurrentHabitCard 
              key = {id}
              id = {id}
              name = {name}
              done = {done}
              currentSequence = {currentSequence}
              highestSequence = {highestSequence}

              data-test="today-habit-container"
            />
          )
        })}
      </CurrentHabitsList>
    </TodayContainer>
  )
}