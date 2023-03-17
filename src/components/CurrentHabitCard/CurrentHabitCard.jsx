import { HabitCard, ProgressContainer, ContentContainer, Progress, Title, CheckIcon, Current, Highest } from "./styles";
import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../../contextAPI/userContext";
import BASE_URL from "../../constants/BASE_URL";
export default function CurrentHabitCard({id, name, done, currentSequence, highestSequence}) {
  const [isChecked, setIsCheked] = useState (done);
  const {userData, setUserData} = useContext(UserContext);
  const [habitSequence, setHabitSequence] = useState({done, currentSequence})
  const config = {
    headers: {
        "Authorization": `Bearer ${userData.token}`
    }
  };

  console.log(id, name, done, currentSequence, highestSequence)
  function markAsCompleted (habitId, habitIsDone){
    if(habitIsDone === false){
      axios.post(`${BASE_URL}/${habitId}/check`, {}, config)
        .then(()=>{
          setHabitSequence({done: true, currentSequence: currentSequence + 1})
          setUserData({...userData, completedHabits : [...userData.completedHabits , habitId]})
          setIsCheked(true)
        })
        .catch(()=>{
          console.log("erro")
        })      
    }

    if(habitIsDone === true){
      axios.post(`${BASE_URL}/${habitId}/uncheck`, {}, config)
      .then(()=>{
        setHabitSequence({done: true, currentSequence: currentSequence - 1})
        setUserData({...userData, completedHabits : userData.completedHabits.filter(h => h!==habitId)})
        setIsCheked(false)
      })
      .catch((erro)=>{
        console.log(erro.response.data.message)
      })
    }
  }
  return (
    <HabitCard isCompleted = {isChecked} data-test="today-habit-container">
      <ContentContainer>
        <Title data-test="today-habit-name">{name}</Title>
        <ProgressContainer>
          <Progress >Sequencia atual: <Current checked = {done} data-test="today-habit-sequence">{`${habitSequence.currentSequence} ${habitSequence.currentSequence > 1 ? "dias" : "dia"}`}</Current></Progress>
          <Progress  data-test="today-habit-record">Seu recorde: <Highest checked = {currentSequence === habitSequence.currentSequence && habitSequence.currentSequence !== 0}>{`${highestSequence} ${highestSequence > 1 ? "dias" : "dia"}`}</Highest></Progress>
        </ProgressContainer>
      </ContentContainer>
      <CheckIcon onClick={() => markAsCompleted(id, done, isChecked)} checked = {isChecked} data-test="today-habit-check-btn"/>
    </HabitCard>
  )
}