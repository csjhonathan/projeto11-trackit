import styled from "styled-components";
import colors from "../../constants/colors";


const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a{
    height: 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-decoration-line: underline;
    color: ${colors.main};
    &:visited{
      color: ${colors.main};
    }
  }
`
const Logo = styled.img`
  width: 180px;
  height: 178px;
`
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 32px;
  height: 180px;
`
const InputLoginForm = styled.input`
  width: 303px;
  height: 45px;
  background: ${colors.neutral};
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  padding-left: 11px;
  font-size: 20px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  line-height: 25px;

  &::placeholder{
    color: ${colors.placeholder};
  }
  &:disabled{
    background-color: #F2F2F2;
    color: #AFAFAF;
  }
`
const LoginButton = styled.button`
  width: 303px;
  height: 45px;
  background: ${colors.main};
  border-radius: 5px;
  border: none;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
  color : ${colors.neutral};
  display: flex;
  justify-content: center;
  align-items: center;
  &:disabled{
    opacity: 0.7;
  }
`
const KeepLoggedArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
`
const InputLoginFormCheckBox = styled.input`
  align-self: flex-end;
  width: 20px;
  height: 20px;
  
`
const CheckLabel = styled.label`
  font-family: 'Lexend Deca';
`

export {LoginContainer, Logo, LoginForm, InputLoginForm, LoginButton, InputLoginFormCheckBox, KeepLoggedArea, CheckLabel};
