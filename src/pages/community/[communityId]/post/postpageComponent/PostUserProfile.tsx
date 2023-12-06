import * as S from '@pages/community/stlyes/PostStyle.ts';

interface Props {
  posterListData: any;
}

const PostUserProfile: React.FC<Props> = ({ posterListData }) => {
  if (!posterListData || !posterListData.data || !posterListData.data.posterList) {
    return;
  }

  console.log('posterListData:', posterListData.data.posterList[0].posterAuthor);

  return (
    <S.PostUserBox>
      <S.UserProfileBox>
        <S.UserProfileImg src={posterListData.data.communityHostInfo.hostProfileImg} alt="User Profile" />
        <S.UserProfileName>{posterListData.data.communityHostInfo.hostNickName}</S.UserProfileName>
      </S.UserProfileBox>
      <S.PostCommunityTitle>{posterListData.data.communityHostInfo.communityTitle}</S.PostCommunityTitle>
    </S.PostUserBox>
  );
};

export default PostUserProfile;
