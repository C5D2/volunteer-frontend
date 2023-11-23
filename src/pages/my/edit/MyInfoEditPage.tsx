import ProfileEditForm from "@components/ProfileEditForm";
import Section from "@components/ui/Section/Section"
const PROFILEDATA = {
	nickName: '테스트',
	phoneNum: '010-2683-3260'
}
const MyInfoEditPage = () => {
	return (
    <Section sectionTitle="프로필 수정">
      <ProfileEditForm initialData={PROFILEDATA}/>
    </Section>
  );
}

export default MyInfoEditPage