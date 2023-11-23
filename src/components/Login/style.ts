import styled from 'styled-components';
interface ButtonProps {
  $fontColor: string;
}
export const Button = styled.button<ButtonProps>`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: center;
  width: 380px;
  height: 70px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
  box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => (props.$fontColor === 'naver' ? '#fff' : '#000')};
`;

export const ImgWrap = styled.div`
  width: 40px;
  height: 40px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
