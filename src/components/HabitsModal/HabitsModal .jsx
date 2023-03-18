import { useState } from "react"
import colors from "../../constants/colors"
import styled from "styled-components";
import { FaCheckSquare } from "react-icons/fa";
import { FiArrowLeftCircle } from "react-icons/fi";
export default function HabitsModal ({showModal , setShowModal }) {
  const {show, habits} = showModal
  console.log(show, habits)
  return(
    <StyledHabitsModal>
      <BackIcon onClick = {() => setShowModal({...showModal , show : false })}/>
      {habits.map(({name,done}, index) => {
        return(
          <Habit key = {index} >
            {name} : {done ? "Completou" : "Não completou"} 
            <CheckIcon done = {done}/>
            
          </Habit>
        )
      })}
    </StyledHabitsModal>
    
  )
}




export const StyledHabitsModal = styled.div`
  position: absolute;
  background-color: ${colors.neutral};
  left: 50% ;
  top: 50% ;
  max-height : 400px;
  width: 94vw;
  transform: translate(-50%, -50%);
  z-index: 99999;
  backdrop-filter: blur(60px) ;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  border-radius : 5px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 29px;
  opacity: .95;
`

const Habit = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 30px;
`
const CheckIcon = styled(FaCheckSquare)`
  color: ${({done}) => done ? colors.completed : "red" };
`

const BackIcon = styled(FiArrowLeftCircle)`
  color: red;
  position: fixed;
  top: 10px;
  left: 10px;
`