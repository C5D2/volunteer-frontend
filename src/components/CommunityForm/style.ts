import styled from 'styled-components'
import Button from "@components/ui/Button/Button";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
`;
export const BtnWrap = styled.div`
  width: 50%;
`;
export const StButton = styled(Button)`
  width: 100%;
  height: 50px;
  color: #f3f2f2;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  background-color: #56c9b6;
`;
