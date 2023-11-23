import styled from 'styled-components';

export const InputLabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 780px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 50%;
  }
  width: 100%;
  label {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
  }
  input {
    padding: 0 24px;
    height: 42px;
    border-radius: 10px;
    border: 2px solid #d9d9d9
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  p {
    font-size: 16px;
    font-weight: 600;
    height: 14px;
    margin: 10px 0;
  }
`;
