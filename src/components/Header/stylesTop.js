import styled from "styled-components"
import colors from "../../constants/colors"

export const SyledTop = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
  background: ${colors.navBar};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 18px;

  font-family: 'Playball';
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 49px;
  color: ${colors.neutral};
  z-index : 99;
`

export const ProfilePicture = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 98.5px;
  margin-right: 20px;
`