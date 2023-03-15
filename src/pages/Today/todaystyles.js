import colors from "../../constants/colors";
import styled from "styled-components";

export const TodayContainer = styled.div`
  padding-top: 98px ;
  padding-bottom: 70px;
  height: 100vh;
  background-color: ${colors.appBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`
export const CurrentDay = styled.h1`
  width: 172px;
  height: 29px;
  left: 17px;
  top: 98px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: ${colors.currentDay};
`
export const Message = styled.p`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: ${({check}) => check ? colors.completed : colors.message};

`
export const CurrentHabitsList = styled.div`

`
export const CurrentDateContainer = styled.div`
  width: 94vw;
  margin-bottom: 24px;
`