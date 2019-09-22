import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    h1 {
      font-weight: bold;
      color: #fff;
      font-size: 32px;
    }

    button {
      width: 162px;
      padding: 11px;
      background: #d44059;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        margin-right: 10px;
      }

      &:hover {
        background: ${darken(0.2, '#d44059')};
      }
    }
  }
`;

export const MeetupList = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;

  li {
    & + li {
      margin-top: 10px;
    }

    a {
      color: #fff;
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;
      padding: 20px 30px;
      background: rgba(0, 0, 0, 0.1);

      span {
        display: flex;
        align-items: center;
        justify-items: center;
        p {
          line-height: 23px;
          margin-right: 30px;
          opacity: 0.6;
        }
      }
    }
  }
`;
