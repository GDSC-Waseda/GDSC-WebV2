import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Article, ArticlesResponse } from "../../../types";

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

  const res = await fetch(
    `${STRAPI_API_URL}/articles/${params.articleId}?populate=*`
  );
  const articleData: { data: Article } = await res.json();
  const article = articleData.data;

  return { props: { article } };
};

const ArticlePage: NextPage<{ article: Article }> = ({ article }) => {
  const renderContent = (content: any) => {
    return content.map((item: any, index: number) => {
      if (item.type === "paragraph") {
        return (
          <p key={index}>
            {item.children.map((child: any) => child.text).join("")}
          </p>
        );
      }
    });
  };

  const author1ImageUrl =
    article.attributes.author1?.data?.attributes?.formats?.large?.url ||
    "/default-image-path.jpg";
  const author2ImageUrl =
    article.attributes.author2?.data?.attributes?.formats?.large?.url ||
    "/default-image-path.jpg";
  const coverImageUrl =
    article.attributes.coverimg?.data?.attributes?.url ||
    "/default-image-path.jpg";

  return (
    <div className="article">
      <h1 className="article__title">{article.attributes.Title}</h1>

      <div className="article__author">
        {author1ImageUrl && (
          <div className="article__author-image-left">
            <img src={author1ImageUrl} alt="Author 1" />
          </div>
        )}
        {author2ImageUrl && (
          <div className="article__author-image">
            <img src={author2ImageUrl} alt="Author 2" />
          </div>
        )}
        <div className="article__author-text">
          <p className="article__author-names">
            {article.attributes.author1Name} & {article.attributes.author2Name}
          </p>
          <p className="article__length">
            {article.attributes.length} min read ・{" "}
            {new Date(article.attributes.publicationDate).toLocaleDateString()}
          </p>
        </div>
      </div>

      <hr />

      {coverImageUrl && (
        <div className="article__image-container">
          <img src={coverImageUrl} alt="Article cover" />
        </div>
      )}

      <div className="article__content">
        {article.attributes.content &&
          renderContent(article.attributes.content)}
      </div>

      {/* Render additional details */}
      <div className="article__details">
        <p>
          <strong>Event Date:</strong>{" "}
          {new Date(article.attributes.eventDate).toLocaleDateString()}
        </p>
        <p>
          <strong>Location:</strong> {article.attributes.location}
        </p>
        <p>
          <strong>Event Description:</strong>{" "}
          {article.attributes.eventDescription}
        </p>
        <p>
          <strong>Tags:</strong> {article.attributes.tagOne},{" "}
          {article.attributes.tagTwo}, {article.attributes.tagThree}
        </p>
      </div>

      {/* Footer section */}
      <div className="article__footer">{/* Footer content */}</div>
    </div>
  );
};

export default ArticlePage;
