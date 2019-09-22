import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  height: 92px;
  margin-bottom: 40px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 940px;
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 25px 0;
  img {
    width: 31px;
  }

  div {
    display: flex;
    justify-items: flex-end;

    span {
      display: flex;
      flex-direction: column;
      flex: 1;
      text-align: right;
      margin-right: 30px;

      strong {
        color: #fff;
        line-height: 21px;
      }

      a {
        color: #999;
        &:hover {
          color: #ccc;
        }
      }
    }

    button {
      width: 71px;
    }
  }
`;
