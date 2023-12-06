import FullHeart from '@assets/images/full_heart.svg';
import EmptyHeart from '@assets/images/empty_heart.svg';
import * as S from './style';
import styled, { css, keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

interface LikeButtonProps {
  like: boolean;
  onClick: () => void;
}

interface AnimatedHeartProps {
  show: boolean;
  src: string;
}

export const PostContainer = styled.div`
  position: relative; // 이를 통해 하위 요소들이 이 컴포넌트를 기준으로 위치를 잡을 수 있습니다.
`;

export const AnimatedHeart = styled.img<AnimatedHeartProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  opacity: 0;
  animation: ${(props) =>
    props.show &&
    css`
      ${heartAnimation} 1.5s ease-in-out forwards;
    `};
`;

const LikeButton: React.FC<LikeButtonProps> = ({ like, onClick }) => {
  const [heart, setHeart] = useState(like ? FullHeart : EmptyHeart);
  const [animationKey, setAnimationKey] = useState(0); // 애니메이션 키를 관리하는 상태

  const handleClick = () => {
    onClick();
    setAnimationKey((prevKey) => prevKey + 1); // 버튼이 클릭될 때마다 애니메이션 키를 증가
  };

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (like) {
      setHeart(FullHeart);
      timer = setTimeout(() => setHeart(EmptyHeart), 100);
    } else {
      setHeart(EmptyHeart);
    }

    return () => clearTimeout(timer); // 컴포넌트가 언마운트되거나 업데이트되기 전에 타이머를 제거
  }, [like, animationKey]); // like 또는 animationKey가 변경될 때마다 효과를 재실행

  return <S.Heart src={heart} onClick={handleClick} />;
};

export default LikeButton;

// 애니메이션 정의
const heartAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -150%) scale(5);
    opacity: 0;
  }
`;
