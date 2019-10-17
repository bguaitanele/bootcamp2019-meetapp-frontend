import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  button {
    display: flex;
    margin: 10px 3px;
    &:disabled {
      background: #333;
      border: 0;
      cursor: not-allowed !important;
    }

    svg {
      margin: 0;
    }
  }
`;

export const ButtonNumber = styled.button.attrs(props => ({
  disabled: props.selected,
}))`
  border: 1px solid #ccc !important;
  &:disabled {
    background: #ccc !important;
    cursor: not-allowed !important;
  }

  &:hover {
    color: #fff !important;
  }
`;
