interface ArticleProps {
  articleTitle: string;
  children: React.ReactNode;
}

const Article = ({ articleTitle, children, ...props }: ArticleProps) => {
  return (
    <article {...props}>
      <h3>{articleTitle}</h3>
      {children}
    </article>
  );
};

export default Article;
