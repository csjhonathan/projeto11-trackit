import styled from "styled-components";
import colors from "../../constants/colors";

export const HabitsContainer = styled.div`
  padding-top : 70px;
  padding-bottom : 70px;
  height: 100vh;
  background-color: ${colors.appBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MyHabits = styled.div`
  display: flex;
  justify-content: space-between;
  width: 94vw;
  margin-top: 28px;
  h1{
    width: 148px;
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: ${colors.day};
  }
`
export const AddHabitButton = styled.button`
  width: 40px;
  height: 35px;
  background: ${colors.main};
  border: none;
  color : ${colors.neutral};
  border-radius: 5px;
  text-align: center;
  font-weight: 400;
  font-size: 27px;
  line-height: 34px;
  cursor: pointer;
`
export const EmptyMessage = styled.div`
  width: 338px;
  height: 74px;
  left: 17px;
  top: 155px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.habitText};
  align-self: flex-start;
  margin-left: 17px;
  margin-top: 28px;
`
export const HabitsListContainer = styled.div`
  margin-top: 22px;
  overflow: scroll;
`