import { HabitCard, ProgressContainer, ContentContainer, Progress, Title, CheckIcon, Current, Highest } from "./styles";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contextAPI/userContext";
import BASE_URL from "../../constants/BASE_URL";
import Loader from "../Loader/Loader";
export default function CurrentHabitCard({id : habitId, name, done, currentSequence, highestSequence, completed, setCompleted}) {
  const {userData, setUserData} = useContext(UserContext);
  const [sending, setSending] = useState(false)
  const [isDone, setIsdone ] = useState(done)
  const config = {
    headers: {
        "Authorization": `Bearer ${userData.token}`
    }
  };
  function markAsCompleted (id, habitIsDone){
  
    setSending(true);
    const habitIndex = userData.todayHabitsList.indexOf(userData.todayHabitsList.find(({id})=> id === habitId));
    const habit = userData.todayHabitsList[habitIndex];
    if(habitIsDone){
      axios.post(`${BASE_URL}/${id}/uncheck`, {}, config)
      .then(() => {
        setCompleted(completed.filter(({id}) => id !== habitId))
        habit.done = false
        setUserData({...userData , completedHabits : userData.todayHabitsList.filter(({done}) => done === true)})
        setIsdone(false)
        setSending(false);
        
      })
      .catch((erro)=>{
        console.log(erro.response.data.message)
        setSending(false);
      })


      return;
    }

    axios.post(`${BASE_URL}/${habitId}/check`, {}, config)
      .then(()=>{
        setCompleted([...completed, {id : habitId, name, done : true , currentSequence, highestSequence, completed}])
        habit.done = true
        setUserData({...userData , completedHabits : [...userData.completedHabits, {id : habitId, name, done : true , currentSequence, highestSequence}]})
        setIsdone(true)
        setSending(false);
        
      })
      .catch((erro)=>{
        console.log(erro.response.data.message)
        setSending(false);
      })      
  }
  return (
    <HabitCard isCompleted = {done} data-test="today-habit-container">
      <ContentContainer>
        <Title data-test="today-habit-name">{name}</Title>
        <ProgressContainer>
          <Progress >Sequencia atual: <Current checked = {done} data-test="today-habit-sequence">{`${currentSequence} ${currentSequence > 1 ? "dias" : "dia"}`}</Current></Progress>
          <Progress  data-test="today-habit-record">Seu recorde: <Highest checked = {highestSequence  === currentSequence && highestSequence !== 0}>{`${highestSequence} ${highestSequence > 1 ? "dias" : "dia"}`}</Highest></Progress>
        </ProgressContainer>
      </ContentContainer>
      {sending ? <Loader sending = {sending} /> : <CheckIcon onClick={() => markAsCompleted(habitId, isDone)} checked = {isDone} data-test="today-habit-check-btn"/>}
    </HabitCard>
  )
}