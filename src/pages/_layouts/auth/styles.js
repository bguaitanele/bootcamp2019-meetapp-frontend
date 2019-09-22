import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #22202c, #402845);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 20px;
      color: #fff;
      margin: 0 0 11px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    /* span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    } */

    button {
      height: 50px;
      font-size: 18px;
    }

    a {
      color: #fff;
      margin-top: 20px;
      font-size: 16px;
      opacity: 0.6;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
