import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      margin-top: 10px;
      border: 0;
      height: 50px;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      border-radius: 4px;
      font-size: 18px;
      padding: 14px 20px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.2);
      }
    }

    span {
      margin: 5px 0 10px;
      color: #ff0000;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 30px 0 9px 0;
    }

    button {
      align-self: flex-end;
      width: 162px;
      margin-top: 20px;
      background: #d44059;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 42px;
      svg {
        margin-right: 10px;
      }

      &:hover {
        background: ${darken(0.2, '#d44059')};
      }
    }
  }
`;
