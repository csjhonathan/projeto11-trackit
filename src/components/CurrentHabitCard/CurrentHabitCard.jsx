import { HabitCard, ProgressContainer, ContentContainer, Progress, Title, CheckIcon, Current, Highest } from "./styles";
import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../../contextAPI/userContext";
import BASE_URL from "../../constants/BASE_URL";
export default function CurrentHabitCard({id, name, done, currentSequence, highestSequence}) {
  const [isChecked, setIsCheked] = useState (done)
  const {userData, setUserData} = useContext(UserContext);
  const config = {
    headers: {
        "Authorization": `Bearer ${userData.token}`
    }
  };

  function markAsCompleted (habitId, habitIsDone){
    if(habitIsDone === false){
      axios.post(`${BASE_URL}/habits/${habitId}/check`, "", config)
        .then(()=>{
          setUserData({...userData, completedHabits : [...userData.completedHabits , habitId]})
          setIsCheked(true)
        })
        .catch(()=>{
          console.log("erro")
        })      
    }

    if(habitIsDone === true){
      axios.post(`${BASE_URL}/habits/${habitId}/uncheck`, "", config)
      .then(()=>{
        setUserData({...userData, completedHabits : userData.completedHabits.filter(h => h!==habitId)})
        setIsCheked(false)
      })
      .catch((erro)=>{
        console.log(erro.response.data.message)
      })
    }
  }
  return (
    <HabitCard isCompleted = {isChecked} >
      <ContentContainer>
        <Title data-test="today-habit-name"> {name} </Title>
        <ProgressContainer>
          <Progress data-test="today-habit-sequence">Sequencia atual: <Current checked = {currentSequence===highestSequence && currentSequence !== 0 ? true : done}>{currentSequence}</Current></Progress>
          <Progress  data-test="today-habit-record">Seu recorde: <Highest checked = {currentSequence===highestSequence && highestSequence !== 0}>{highestSequence}</Highest></Progress>
        </ProgressContainer>
      </ContentContainer>
      <CheckIcon onClick={() => markAsCompleted(id, done, isChecked)} checked = {isChecked} data-test="today-habit-check-btn"/>
    </HabitCard>
  )
}