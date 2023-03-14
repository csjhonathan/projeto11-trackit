import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  ::-webkit-scrollbar{
    display: none;
  }
`

export default Global;