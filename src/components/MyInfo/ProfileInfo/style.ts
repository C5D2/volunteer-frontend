import Button from '@components/ui/Button/Button';
import Image from '@components/ui/Image';
import styled from 'styled-components';
export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

export const ProfileTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const ProfileImgWrap = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileImg = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const UserNickName = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
export const UserEmail = styled.span`
  font-size: 14px;
  color: #383838;
  font-weight: 600;
`;

export const ProfileEditButton = styled.button`
  background-color: transparent;
  border: 2px solid #56c9b6;
  width: 150px;
  height: 50px;
  border-radius: 30px;
  color: #56c9b6;
  a {
    font-weight: 600;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const UnsubscribingButton = styled(Button)`
  color: #ccc;
  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;
