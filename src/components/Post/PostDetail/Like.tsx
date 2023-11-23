import FullHeart from '@assets/images/full_heart.svg';
import EmptyHeart from '@assets/images/empty_heart.svg';
import * as S from './style';

interface LikeButtonProps {
  like: boolean;
  onClick: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ like, onClick }) => {
  return <S.Heart src={like ? FullHeart : EmptyHeart} onClick={onClick} />;
};

export default LikeButton;
