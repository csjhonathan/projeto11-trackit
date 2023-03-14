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
  height: 145px;
`
const InputLoginForm = styled.input`
  width: 303px;
  height: 45px;
  background: ${colors.neutral};
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  padding-left: 11px;
  &::placeholder{
    color: ${colors.placeholder};
    height: 25px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
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
`
export {LoginContainer, Logo, LoginForm, InputLoginForm, LoginButton};
