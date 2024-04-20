import "./video&article.css";
import video from "./image/container.svg";
import logo from "./image/Logo.svg";
import vid1 from "./image/vid pic 1.svg";
import vid1Article from "./image/vid pic 1 article.svg";
import vid2 from "./image/vid pic 2.svg";
import vid3 from "./image/vid pic 3.svg";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import ArticleDetials from "./ArticleDetials";

const Article = () => {
  const articles = [
    {
      pic1: logo,
      video: vid1,
      span: "retetteye",
      Date: "14/april/2023",
      header: "werttttt",
      detials: "wertyuifghj",
      bigvid: vid1Article,
      body: "joel body",
      id: 1,
    },
    {
      pic1: logo,
      video: vid2,
      span: "retetteye",
      Date: "14/april/2023",
      header: "werttttt",
      detials: "wertyuifghj",
      body: "joel body",
      id: 2,
    },
    {
      pic1: logo,
      video: vid3,
      span: "retetteye",
      Date: "14/april/2023",
      header: "werttttt",
      detials: "wertyuifghj",
      body: "joel body",
      id: 3,
    },
  ];
  console.log(articles);
  return (
    <Layout>
      <div className="article-wrapper">
        <div className="article-head">
          <h2>Resources video and article</h2>
        </div>
        <div className="video">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            minima, nihil animi non dolore velit iste repellendus nemo quasi
            esse adipisci vitae. Fuga nam sit explicabo labore accusantium,
            doloribus quisquam?
          </p>
          <img src={video} alt="" />
          <span></span>
        </div>
        <div className="article-list">
          {articles.map((article) => (
            <li key={article.id}>
              <div className="article-content">
                <div className="top">
                  <img src={article.pic1} alt="" />
                  <span>
                    {article.span},{article.Date}{" "}
                  </span>
                </div>
                <h3>{article.header} </h3>
                <div className="article-text">
                  <ArticleDetials article={article} />{" "}
                </div>
                <strong>
                  <Link to="/ArticleDetials">read more</Link>
                </strong>
              </div>
              <img src={article.video} alt="" />
            </li>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Article;
