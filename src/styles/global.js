import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import { darken } from 'polished';

export default createGlobalStyle`

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus{
    outline:0;
  }

  html,body, #root{
    height:100%;

  }

  body{
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(-90deg, #22202c, #402845);
  }

  body,input,textarea, button{
    font: 18px 'Helvetiva', 'Arial', sans-serif;
  }

  a{
    text-decoration:none;
  }

  ul{
    list-style:none;
  }

  button, .button{
    cursor: pointer;
    padding: 11px;
    border: 0;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #d44059;
      &:hover {
        background: ${darken(0.2, '#d44059')};
      }

    svg {
      margin-right: 10px;
    }

    &.secondary{
      background: #4DBAF9;
      &:hover {
        background: ${darken(0.2, '#4DBAF9')};
      }
    }

  }
`;
