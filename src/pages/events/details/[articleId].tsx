import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Article, ArticlesResponse } from "../../../types";

// Strapi API Base URL
const STRAPI_API_URL =
  "https://agile-dawn-20856-3c917b85c4f4.herokuapp.com/api";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${STRAPI_API_URL}/articles`);
  const { data }: ArticlesResponse = await res.json();

  const paths = data.map((article) => ({
    params: { articleId: article.id.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  if (!params || typeof params.articleId !== "string") {
    return { notFound: true };
  }

  const res = await fetch(`${STRAPI_API_URL}/articles/${params.articleId}`);
  const articleData: { data: Article } = await res.json();
  const article = articleData.data;

  return { props: { article } };
};

const ArticlePage: NextPage<{ article: Article }> = ({ article }) => {
  const renderContent = (content: any) => {
    return content.map((item: any, index: number) => {
      // Handle paragraphs
      if (item.type === "paragraph") {
        return (
          <p key={index}>
            {item.children.map((child: any) => child.text).join("")}
          </p>
        );
      }
      // Add more conditions here for other content types like images, videos, etc.
    });
  };

  return (
    <div className="article">
      <h1 className="article__title">{article.attributes.Title}</h1>

      <div className="article__author">
        <div className="article__author-image-left">
          {/* Replace with the actual path to the author's image */}
          <img src={article.attributes.author1.picture} alt="Author 1" />
        </div>
        <div className="article__author-image">
          {/* Replace with the actual path to the author's image */}
          <img src={article.attributes.author2.picture} alt="Author 2" />
        </div>
        <div className="article__author-text">
          <p className="article__author-names">
            {article.attributes.author1.name} &{" "}
            {article.attributes.author2.name}
          </p>
          {/* <p className="article__length">
            {article.attributes.length} min read ・{" "}
            {new Date(article.attributes.publicationDate).toLocaleDateString()}
          </p> */}
        </div>
      </div>

      <hr />

      <div className="article__image-container">
        {/* Replace with the actual path to the cover image */}
        <img
          className="article__image"
          src={article.attributes.coverimg.url}
          alt="Article cover"
        />
      </div>

      <div className="article__content">
        {article.attributes.content &&
          renderContent(article.attributes.content)}
      </div>

      {/* <div className="article__footer">
        {article.attributes.tags.map((tag: string, index: number) => (
          <div className="article__tag" key={index}>
            {tag}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ArticlePage;
