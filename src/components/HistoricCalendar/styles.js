import styled from "styled-components";
import colors from "../../constants/colors"

export const Day = styled.div`
  background-color: ${({isDone}) => isDone ? colors.completed : colors.habitNotCompletedHistoric};
  width: 40px;
  height: 40px;
  padding: 10px 6.6667px;
  text-align: center;
  line-height: 16px;
  border-radius : 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NormalDay = styled.div`
  
`