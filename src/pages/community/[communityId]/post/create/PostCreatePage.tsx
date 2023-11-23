import PostForm from '@components/PostForm/PostForm';
import Section from '@components/ui/Section/Section';
import { useCreatePost } from '@hooks/queries/post';
const INITIDATA = {
  posterTitle: '',
  posterContent: '',
  file: [],
};
const PostCreatePage = () => {
  const { handleCreatePost } = useCreatePost();
  return (
    <Section sectionTitle="게시글 작성">
      <PostForm initialData={INITIDATA} onSave={handleCreatePost} />
    </Section>
  );
};

export default PostCreatePage;
