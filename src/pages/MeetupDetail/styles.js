import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;
    align-items: center;
    h1 {
      color: #fff;
      font-size: 32px;
    }
    > span {
      display: flex;
      flex-direction: row;

      button,
      .button {
        margin-left: 15px;
      }
    }
  }

  img {
    width: 100%;
    background: #ccc;
    min-height: 300px;
    margin-bottom: 25px;
    border-radius: 4px;
    max-height: 300px;
  }

  div {
    color: #fff;
    font-size: 18px;
    margin-bottom: 30px;
  }

  footer {
    display: flex;
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    align-items: center;
    svg {
      color: rgba(255, 255, 255, 0.6);
      margin-right: 10px;
      & + svg {
        margin-left: 30px;
      }
    }
  }
`;

export const Loading = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: calc(100vh - 130px);
`;
