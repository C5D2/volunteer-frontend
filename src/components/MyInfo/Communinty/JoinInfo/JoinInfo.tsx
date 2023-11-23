import EmptyStateCard from '@components/EmptyStateCard/EmptyStateCard';
import Article from '@components/ui/Aticle/Aticle';
import Card from '@components/ui/Card/Card';
import { Community } from '@interfaces/Community';
import styled from 'styled-components';
import JoinCommunity from '@assets/images/join_community_icon.svg'
export const StArticle = styled(Article)`
  width: 100%;
  font-size: 18px;
`;
const Ul = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 24px;
  align-items: center;
	flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 16px;
`;

interface JoinInfoProps {
  userJoinCommunityData: Community[];
}

const JoinInfo = ({ userJoinCommunityData }: JoinInfoProps) => {
  if (!userJoinCommunityData) {
    return (
      <StArticle articleTitle="내가 생성한 커뮤니티 가기">
        <Ul>
          <EmptyStateCard
            src={JoinCommunity}
            alt="커뮤니티 아이콘"
            pathName="/"
            text="커뮤니티를 가입하러 가기"
          />
        </Ul>
      </StArticle>
    );
  }
  return (
    <StArticle articleTitle="내가 가입한 커뮤니티">
      <Ul>
        {userJoinCommunityData?.map((communityItemData) => (
          <Card communityItemData={communityItemData} />
        ))}
      </Ul>
    </StArticle>
  );
};

export default JoinInfo;
