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
      <S.ActiveBox>
        {userActiveData.map((active) => (
          <ActiveBox key={active.name} active={ active} />
        ))}
      </S.ActiveBox>
    </S.Aticle>
  );
};

export default ActiveInfo;
