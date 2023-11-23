import CommentForm from '@components/Post/PostDetail/CommentForm';
import Comments from '@components/Post/PostDetail/Comments';
import PostDetail from '@components/Post/PostDetail/PostDetail';
import Section from '@components/ui/Section/Section';
import * as S from '@components/Post/PostDetail/style';

const PostDetailPage = () => {
  return (
    <Section>
      <S.Comments>
        <PostDetail />
        <Comments />
        <CommentForm />
      </S.Comments>
    </Section>
  );
};

export default PostDetailPage;
