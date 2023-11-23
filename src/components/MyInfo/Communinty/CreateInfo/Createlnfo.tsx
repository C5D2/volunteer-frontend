import EmptyStateCard from '@components/EmptyStateCard/EmptyStateCard';
import Article from '@components/ui/Aticle/Aticle';
import Card from '@components/ui/Card/Card';
import { Community } from '@interfaces/Community';
import CreateIcon from '@assets/images/create_icon.svg';
import styled from 'styled-components';

export const StArticle = styled(Article)`
  width: 100%;
  font-size: 18px;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 24px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 16px;
`;

interface CreateInfoProps {
  userCreateCommunityData: Community[];
}

const CreateInfo = ({ userCreateCommunityData }: CreateInfoProps) => {
  if (!userCreateCommunityData) {
    return (
      <StArticle articleTitle='내가 생성한 커뮤니티 가기'>
        <Ul>
        <EmptyStateCard
          src={CreateIcon}
          alt="커뮤니티 아이콘"
          pathName="/community/create"
          text="커뮤니티를 생성하러 가기"
        />
        </Ul>
      </StArticle>
    );
  }
  return (
    <StArticle articleTitle="내가 생성한 커뮤니티">
      <Ul>
        {userCreateCommunityData?.map((createCommunityItemData) => (
          <Card communityItemData={createCommunityItemData} isCreate={'isCreate'} />
        ))}
      </Ul>
    </StArticle>
  );
};

export default CreateInfo;
