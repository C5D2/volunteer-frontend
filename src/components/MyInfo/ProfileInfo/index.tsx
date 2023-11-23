import DefaultProfile from '@assets/images/default_profile_img.gif';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import { usePostUnsubscribing } from '@hooks/queries/my/useMy';
import useShownModal from '@hooks/modal';
import Modal from '@components/ui/Modal';

interface ProfileInfoProps {
  nickname: string
  picture: string
  email: string
}

const ProfileInfo = ({ nickname, picture, email }: ProfileInfoProps) => {
  const { handleUnsubscribing } = usePostUnsubscribing()
  const navigate = useNavigate()
  const { isShown, setIsShown, handleCloseClick } = useShownModal();
  const handleClick = () => {
   setIsShown(true)
  }
  const handleConfirmClick = () => {
    handleUnsubscribing()
    navigate('/')
  }
  return (
    <>
     {isShown && (
        <Modal
          modalText={'회원 탈퇴를 하시겠습니까'}
          handleCloseClick={handleCloseClick}
          handleConfirmClick={handleConfirmClick}
        />
      )}
    <S.ProfileWrap>
      <S.ProfileTitle>내정보</S.ProfileTitle>
      <S.ProfileImgWrap>
        <S.ProfileImg src={picture ? picture : DefaultProfile} alt="기본 프로필 이미지" />
      </S.ProfileImgWrap>
      <S.ProfileTextInfo>
        <S.UserNickName>{nickname} 님</S.UserNickName>
        <S.UserEmail>{email}</S.UserEmail>
      </S.ProfileTextInfo>
      <S.ButtonWrap>
        <S.ProfileEditButton>
          <Link to="edit">프로필 수정</Link>
        </S.ProfileEditButton>
        <S.UnsubscribingButton buttonText="회원 탈퇴" onClick={handleClick} />
      </S.ButtonWrap>
    </S.ProfileWrap>
    </>
  );
};

export default ProfileInfo;
