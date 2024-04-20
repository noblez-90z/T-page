const ArticleDetials = ({ article }) => {
  // const text = article;
  console.log("Article prop:", article);
  if (!article || !article.body) {
    return <div>Article or body not found</div>;
  }

  return (
    <div className="Detials-wrapper">
      <h2>joel</h2>
      <p> {article.body} </p>
    </div>
  );
};

export default ArticleDetials;
