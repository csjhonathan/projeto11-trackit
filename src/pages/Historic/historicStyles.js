import styled from "styled-components";
import colors from "../../constants/colors";
import Calendar from "react-calendar";

export const HistoricContainer = styled.div`
  padding: 98px 18px 70px 18px;
  height: 90vh;
  background-color: ${colors.appBackground};
  display: flex;
  flex-direction: column;
  align-items: center;

  
  .react-calendar {
    border-radius: 5px;
    border: none;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button{
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  
`
export const HistoricTitle = styled.h1`
  
  width: 94vw;
  height: 29px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 29px;
  color:${colors.historicTitle};
  margin-bottom: 17px;

`
export const NoHistoricMessage = styled.p`
  width: 338px;
  height: 74px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color:${colors.habitText};
`