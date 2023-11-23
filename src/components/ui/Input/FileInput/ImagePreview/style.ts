import Image from '@components/ui/Image';
import styled from 'styled-components';

interface StImageProps {
  $isExist: boolean;
}

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  `;

export const ImageInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  text-align: center;
  margin-top: 20px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`; 
export const StImage = styled(Image)<StImageProps>`
  text-align: center;
  width: ${(props) => (props.$isExist ? '100%' : '')};
  height: ${(props) => (props.$isExist ? '100%' : '40%')};
  border-radius: 8px;
  object-fit: cover;
`;

export const CloseBtnWrap = styled.div`
position: absolute;
right: -4px;
top: 0;
`

export const CloseBtn = styled.button`
border-radius: 50%;
background-color: rgba(0,0,0,0.2);
text-align: center;
width: 30px;
height: 30px;
font-size: 20px;
color: #fff;
`