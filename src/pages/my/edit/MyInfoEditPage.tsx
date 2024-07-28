import ProfileEditForm from '@components/ProfileEditForm';
import Section from '@components/ui/Section/Section';
import { useGetMyActive } from '@hooks/queries/my/useMy';

// const PROFILEDATA = {
//   nickName: '테스트',
//   phoneNum: '010-2683-3260',
// };

const MyInfoEditPage = () => {
  const { data: activeData, isLoading, isError } = useGetMyActive();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching data.</p>;
  }

  const initialData = {
    nickname: activeData?.data.data.nickname,
    phoneNum: activeData?.data.data.phoneNum || `010-1234-5678`,
  };

  return (
    <Section sectionTitle="프로필 수정">
      <ProfileEditForm initialData={initialData} />
    </Section>
  );
};

export default MyInfoEditPage;
