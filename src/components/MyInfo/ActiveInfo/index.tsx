import * as S from './style';
import ActiveBox from './ActiveBox';

interface ActiveInfoProps {
  userActiveData: {
    icon: string;
    name: string;
    value: number;
  }[];
}

// 호스트 등업신청 버튼 활성화 조건
const ActiveInfo = ({ userActiveData }: ActiveInfoProps) => {
  const isEligibleForUpgrade = userActiveData.every((activity) => {
    switch (activity.name) {
      case '내가 활동한 커뮤니티':
        return activity.value >= 1;
      case '받은 좋아요 총 개수':
        return activity.value >= 1;
      case '내가 작성한 게시글':
        return activity.value >= 3;
      case '내가 작성한 댓글':
        return activity.value >= 6;
      default:
        return true;
    }
  });

  return (
    <S.Aticle articleTitle="내 활동">
      <S.HostGradeUpRequirement>
        🥦 호스트 등업 조건 : 내가 활동한 커뮤니티 1개, 받은 좋아요 총 개수 1개, 내가 작성한 게시글 3개, 내가 작성한
        댓글 6개
      </S.HostGradeUpRequirement>
      <S.HostGradeButton eligible={isEligibleForUpgrade}>호스트 등업신청</S.HostGradeButton>
      <S.ActiveBox>
        {userActiveData.map((active) => (
          <ActiveBox key={active.name} active={active} />
        ))}
      </S.ActiveBox>
    </S.Aticle>
  );
};

export default ActiveInfo;
