import colors from "../../constants/colors";
import styled from "styled-components";

export const AddHabitContainer = styled.div`
  margin-top: 18px;
  width: 94vw;
  height: 180px;
  background: ${colors.neutral};
  border-radius: 5px;
  transition: height .5s;
`
export const AddHabitForm = styled.form`
  display: flex;
  height: 180px;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px 20px 15px 20px;
`
export const HabitTitleInput = styled.input`
  width: 303px;
  height: 45px;
  left: 36px;
  top: 165px;
  background: ${colors.neutral};
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  font-size: 20px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  padding-left: 11px;
  &::placeholder{
    color: ${colors.placeholder};
  }
`

export const DaysContainer = styled.div`
  display: flex;
  gap: 4px;
`
export const DayButton = styled.button`
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
  transition: all .3s;
`
export const SubmitContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 5px;

`
export const SaveHabitButton = styled.button`
  width: 84px;
  height: 35px;
  background: ${colors.main};
  border-radius: 5px;
  border: none;
  color: ${colors.neutral};
  display: flex;
  justify-content: center;
  align-items: center;

`
export const CancelHabitButton = styled.button`
  width: 84px;
  height: 35px;
  background: ${colors.neutral};
  border-radius: 5px;
  border: none;
  color: ${colors.main};

`