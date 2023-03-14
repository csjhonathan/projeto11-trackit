import styled from "styled-components"
import colors from "../../constants/colors"

export const StyledNavBar = styled.div`
  position: fixed;
  width: 100%;
  max-height: 70px;
  left: 0px;
  bottom: 0px;
  background-color: ${colors.neutral};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    text-decoration: none;
    color: ${colors.main};
  }
`
export const Today = styled.button`
  position: relative;
  top: -20px;
  width: 91px;
  height: 91px;
  background-color: transparent;
  border: none;
`