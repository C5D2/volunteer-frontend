import * as S from './style';
import ActiveBox from './ActiveBox';

interface ActiveInfoProps {
  userActiveData: {
    icon: string;
    name: string;
    value: number;
  }[];
}

const ActiveInfo = ({ userActiveData }: ActiveInfoProps) => {
  return (
    <S.Aticle articleTitle="내 활동">
      <S.HostGradeUpRequirement>
        🥦 호스트 등업 조건: 받은 좋아요 총 개수 1개, 내가 작성한 글 3개, 내가 작성한 댓글 6개
      </S.HostGradeUpRequirement>
      <S.HostGradeButton>호스트 등업신청</S.HostGradeButton>
      <S.ActiveBox>
        {userActiveData.map((active) => (
          <ActiveBox key={active.name} active={active} />
        ))}
      </S.ActiveBox>
    </S.Aticle>
  );
};

export default ActiveInfo;
