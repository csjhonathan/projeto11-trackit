import colors from "../../constants/colors";
import styled from "styled-components";

export const StyledHabitCard = styled.div`
  width: 94vw;
  height: 91px;
  background: ${colors.neutral};
  border-radius: 5px;
  margin-bottom: 10px ;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 13px;
  position: relative;
`
export const HabitTitle = styled.p`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: ${colors.habitTitle};
`
export const Weekday = styled.div`
  display: flex;
  gap: 4px;
`
export const Day = styled.div`
  width: 30px;
  height: 30px;
  background: ${({isSelected}) => isSelected ? colors.selectedWeekday : colors.neutral};
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  color: ${({isSelected}) => isSelected ? colors.neutral : colors.nonSelectedWeekday};
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
`
export const DeletButton = styled.button`
  position: absolute;
  right: 10px;
  top: 11px;
  background-color: transparent;
  border: none;
  cursor: pointer;
` 