import ActiveInfo from './ActiveInfo';
import ProfileInfo from './ProfileInfo/index';
import styled from 'styled-components';
import { useGetMyActive, useGetMyJoinCommunites, useGetMyMakeCommunites } from '@hooks/queries/my/useMy';
import HeartIcon from '@assets/images/heart_icon.svg';
import CommunityIcon from '@assets/images/community_icon.svg';
import CommentIcon from '@assets/images/comment_icon.svg';
import GetHeart from '@assets/images/get_heart_icon.svg';
import CreateInfo from './Communinty/CreateInfo/Createlnfo';
import JoinInfo from './Communinty/JoinInfo/JoinInfo';

const MyInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1000px;
  gap: 80px;
`;

const MyInfo = () => {
  const { data: activeData } = useGetMyActive();
  const { data: createInfo } = useGetMyMakeCommunites();
  const { data: joinInfo } = useGetMyJoinCommunites();
  const { picture, nickname, email, communityUserCount, countOfPosterLike, countOfLikedPoster, commentCount } =
    activeData?.data.data ?? [];
  const { communityList } = createInfo?.data.data ?? [];
  const { communityList: communtyJoinList } = joinInfo?.data.data ?? [];
  const userActiveData = activeData
    ? [
        { icon: HeartIcon, name: '좋아요 한 게시글', value: countOfPosterLike },
        { icon: GetHeart, name: '받은 좋아요 총 개수', value: countOfLikedPoster },
        { icon: CommunityIcon, name: '내가 활동한 커뮤니티', value: communityUserCount },
        { icon: CommentIcon, name: '내가 작성한 댓글', value: commentCount },
      ]
    : [];

  return (
    <MyInfoWrap>
      <ProfileInfo nickname={nickname} email={email} picture={picture} />
      <ActiveInfo userActiveData={userActiveData} />
      <CreateInfo userCreateCommunityData={communityList} />
      <JoinInfo userJoinCommunityData={communtyJoinList} />
    </MyInfoWrap>
  );
};

export default MyInfo;
