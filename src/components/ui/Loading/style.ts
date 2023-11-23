import styled, { css, keyframes } from 'styled-components';

// 회전 애니메이션
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// 원의 중심에서 글자를 배치하는 함수
const getRotationStyles = (index:number, total:number) => {
  const angle = (360 / total) * index; // 각 글자의 회전 각도 계산
  return css`
    transform: rotate(${angle}deg) translate(30px) rotate(-${angle}deg);
  `;
};


export const CircleContainer = styled.div`
  position: relative;
	display: flex;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
  width: 100px;
  height: 100px;
  animation: ${rotate} 2s linear infinite;
`;

interface LatterProps {
	index: number
	total:number
}

export const Letter = styled.span<LatterProps>`
  position: absolute;
  width: 10px;
  height: 10px;
  left: 50%;
  top: 50%;
  font-size: 12px;
  transform-origin: 0 0;
  ${({ index, total }) => getRotationStyles(index, total)};
  color: #56c9b6;
`;
