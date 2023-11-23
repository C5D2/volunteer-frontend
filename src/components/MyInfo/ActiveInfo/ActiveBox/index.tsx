import Image from '@components/ui/Image';
import * as S from './style';

interface ActiveProps {
  active: {
    icon: string;
    name: string;
    value: number;
  }
}

const ActiveBox = ({ active }: ActiveProps) => {
  return (
    <S.ActiveBoxInfo>
      <div>
        <Image src={active.icon} alt={active.name} />
      </div>
      <p>{active.name }</p>
      <S.ActiveCount>{active.value}</S.ActiveCount>
    </S.ActiveBoxInfo>
  );
};

export default ActiveBox;
