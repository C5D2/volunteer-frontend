import styled from 'styled-components';
import Button from '../Button/Button';

export const DimmedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StModal = styled.div`
  width: 400px;
  height: 280px;
  gap: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  border-radius: 8px;
  background-color: #fff;
  font-size: 20px;
`;

export const ModalText = styled.p`
  font-family: 'BMDOHYEON';
`;
export const BtnWrap = styled.div`
  display: flex;
	align-items: center;
	gap: 50px;
  justify-content: space-evenly;
  width: 250px;
	font-size: 16px;
`;

export const ConfirmBtn = styled(Button)`
  font-size: 16px;
	width: 120px;
	height: 40px;
	color: #fff;
	font-weight: 500;
	text-align: center;
  border-radius: 5px;
	background-color: #56c9b6;
`;
export const CloseBtn = styled(Button)`
width: 120px;
height: 40px;
font-size: 16px;
background-color: #e2e2e2;
font-weight: 500;
border-radius: 5px;
font-size: 16px;
`