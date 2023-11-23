import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as S from '../style';
import AddInfoForm from '@components/AddInfoForm';
import Section from '@components/ui/Section/Section';
import { setLocalStorage } from '@utils/localStorage/localStorage';

const AddUserInfoPage = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const provider = searchParams.get('provider');
  const role = searchParams.get('role');
  const checkRole = role?.length === 9 ? role.slice(5, 9) : role?.slice(5, 10);
  const name = searchParams.get('name');
  const picture = searchParams.get('picture');
  console.log(role);

  const initialData = {
    name,
    email,
    phoneNumber: '',
    nickname: '',
    role: checkRole,
    provider,
    picture,
  };
  useEffect(() => {
    if (provider && email) {
      setLocalStorage(provider, email);
    }
  }, []);

  return (
    <Section sectionTitle="회원 정보입력">
      <S.ImgWrap>
        <S.StImage src={picture!} alt="프로필 이미지" />
      </S.ImgWrap>
      <AddInfoForm initialData={initialData} />
    </Section>
  );
};

export default AddUserInfoPage;
