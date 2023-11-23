import { INITIDATA } from '@constants/community';
import Section from '@components/ui/Section/Section';
import CommunityForm from '@components/CommunityForm/CommunityForm';
import { useCreateCommunity } from '@hooks/queries/community';


const CommunityCreatePage = () => {
  const { handleCreateCommunity } = useCreateCommunity();
  return (
    <Section sectionTitle="커뮤니티 생성">
      <CommunityForm initialData={INITIDATA} onSave={handleCreateCommunity} />
    </Section>
  );
};

export default CommunityCreatePage;
