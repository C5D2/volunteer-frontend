import Image from '@components/ui/Image';
import styled from 'styled-components';

export const ImgWrap = styled.div`
  width: 150px;
  height: 150px;
	border-radius: 50%;
	overflow: hidden;
`;
export const StImage = styled(Image)`
  width: 100%;
  height: 100%;
	object-fit: cover;
`;


export const LoginPageContainer = styled.div`
  width: 100%;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const LoginTitle = styled.h3`
  justify-content: flex-start;
  margin-top: 200px;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 25px;
  font-family: 'BMDOHYEON';
`;

export const LoginButtons = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
