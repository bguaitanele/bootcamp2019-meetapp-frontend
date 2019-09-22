import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    input,
    textarea {
      width: 100%;
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      padding: 17px 20px;
      color: #fff;
      margin: 0 0 11px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }
    textarea {
      height: 200px;
    }

    button {
      align-self: flex-end;
    }
  }
`;
