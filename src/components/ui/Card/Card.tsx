import Image from '../Image';
import styled from 'styled-components';
import { Community } from '@interfaces/Community';
import { Link, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import { deleteCommunity } from '@apis/community/post';
import { getCommunityDetail } from '@apis/community/community.ts';
import { useQuery } from 'react-query';
import { CommunityDetail } from '@interfaces/Community.ts';

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

const MyCommunityEdit = styled.span`
  background-color: #29715a;
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  color: #fff;
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

const EditBtnWrap = styled.div`
  padding: 30px 0 30px 50px;
  box-sizing: border-box;
`;

const EditBtn = styled(Link)`
  background-color: #29715a;
  padding: 7px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  color: #fff;
  flex-flow: wrap;
  font-size: 16px;
`;

type Data = {
  communityDetail: CommunityDetail;
};

type Props = {
  data: Data;
};

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

  const communityIdNumber = communityId ? parseInt(communityId, 10) : undefined;
  console.log('communityIdNumber:', communityIdNumber);

  const {
    data: DetailData,
    isLoading,
    isError,
  } = useQuery<Props | null, Error>(['communityDetail', communityIdNumber], () =>
    communityIdNumber ? getCommunityDetail(communityIdNumber) : Promise.resolve(null)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !DetailData) {
    return <div>Error occurred</div>;
  }

  console.log('DetailData:', DetailData);

  return (
    <Li>
      <StCard to={`/community/${communityId}/post`}>
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
              {/* <Image /> */}
              <span>{isParticipate ? `${communityParticipant} / ${communityMaxParticipant}` : communityStatus}</span>
            </div>
            <div>
              {/* <Image /> */}
              <span>{communityLocation}</span>
            </div>
          </Info>
        </>
      </StCard>
      {isCreate && <StButton buttonText="삭제하기" onClick={() => handleDelete(String(communityId))} />}

      {isCreate && (
        <EditBtnWrap>
          <EditBtn to={`/community/${communityId}/edit`} state={{ data: DetailData.data }}>
            커뮤니티 수정하기
          </EditBtn>
        </EditBtnWrap>
      )}
    </Li>
  );
};

export default Card;
