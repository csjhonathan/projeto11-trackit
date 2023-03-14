import styled from "styled-components";
import colors from "../../constants/colors";
import { FaCheckSquare } from "react-icons/fa";
export const HabitCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94vw;
  height: 94px;
  background-color: ${colors.neutral};
  border-radius: 5px;
  padding: 13px;
  font-family: 'Lexend Deca';
  color: ${colors.habitTitle};
  font-weight: 400;
  margin-bottom: 10px;
`
export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Title = styled.p`
  font-style: normal;
  font-size: 19.976px;
  line-height: 25px;
  
`
export const Progress = styled.p`
  font-size: 12.976px;
  line-height: 16px;
`
export const ContentContainer = styled.div`
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
export const CheckIcon = styled(FaCheckSquare)`
  color: ${({ isCompleted }) => isCompleted ? colors.habitCompleted : colors.habitNotCompleted};
  width: 79px;
  height: 79px;
`