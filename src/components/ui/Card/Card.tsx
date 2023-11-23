import Image from '../Image';
import styled from 'styled-components';
import { Community } from '@interfaces/Community';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { deleteCommunity } from '@apis/community/post';

const Li = styled.li`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e4e2e2;
`;
const StCard = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  justify-content: space-around;
`;

const ImgWrap = styled.div`
  width: 180px;
  height: 150px;
`;
const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 16px;
`;

const CommunityInfo = styled.div`
  display: flex;
`;
const TextInfo = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
  width: 60%;
  justify-content: space-evenly;
  flex-direction: column;
`;
const CategoryChip = styled.div`
  padding: 5px 4px;
  width: 146px;
  color: #fff;
  text-align: center;
  border-radius: 20px;
  background-color: #56c9b6;
  font-size: 16px;
  font-weight: 600;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Content = styled.span`
  font-size: 18px;
  color: #464646;
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 52px;
`;

const StButton = styled(Button)`
  margin-left: 800px;
  background-color: #000;
  color: #fff;
  padding: 10px;
`;
interface CardProps {
  communityItemData: Community;
  isCreate?: string;
}
const Card = ({ communityItemData, isCreate }: CardProps) => {
  const handleDelete = (communityId: string) => {
    deleteCommunity(communityId);
  };
  const {
    categoryType,
    communityId,
    communityTitle,
    communityParticipant,
    communityMaxParticipant,
    communityStatus,
    communityContent,
    communityLocation,
    communityMainImgPath,
  } = communityItemData;
  const isParticipate = communityStatus === '모집 중';
  return (
    <Li>
      <StCard to={`/community/${communityId}`}>
        <>
          <CommunityInfo>
            <ImgWrap>
              <Img src={communityMainImgPath} alt="커뮤니티 썸네일" />
            </ImgWrap>
            <TextInfo>
              <CategoryChip>{categoryType}</CategoryChip>
              <Title>{communityTitle}</Title>
              <Content>{communityContent}</Content>
            </TextInfo>
          </CommunityInfo>

          <Info>
            <div>
              <Image src={''} alt={''} />
              <span>{isParticipate ? `${communityParticipant} / ${communityMaxParticipant}` : communityStatus}</span>
            </div>
            <div>
              <Image src={''} alt={''} />
              <span>{communityLocation}</span>
            </div>
          </Info>
        </>
      </StCard>
      {isCreate && <StButton buttonText="삭제하기" onClick={() => handleDelete(String(communityId))} />}
    </Li>
  );
};

export default Card;
