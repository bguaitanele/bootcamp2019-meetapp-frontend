import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.4);

  margin-bottom: 20px;

  color: rgba(255, 255, 255, 0.3);
  transition: color 2s;
  border-radius: 4px;

  label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    height: 300px;
  }

  input {
    display: none;
  }

  &:hover {
    p,
    svg {
      color: #fff;
    }
    img {
      opacity: 0.6;
    }
  }
`;
