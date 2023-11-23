import PostForm from '@components/PostForm/PostForm';
import Section from '@components/ui/Section/Section';
import { useUpdatePost } from '@hooks/queries/post';
import { useLocation } from 'react-router-dom';

const PostEditPage = () => {
  const { data } = useLocation().state;
  const { posterTitle, posterContent, posterImgPath } = data;
  const { handleUpdatePost} = useUpdatePost()
    console.log(data);
  const initialData = {
    posterTitle,
    posterContent,
    file: posterImgPath,
  };

  return (
    <Section sectionTitle="게시글 수정">
      <PostForm initialData={initialData} initialImageURLs={[posterImgPath]} onEdit={handleUpdatePost} />
    </Section>
  );
};

export default PostEditPage;
