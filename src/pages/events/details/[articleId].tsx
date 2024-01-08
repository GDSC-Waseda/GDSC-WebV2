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
      if (item.type === "paragraph") {
        return (
          <p key={index}>
            {item.children.map((child: any) => child.text).join("")}
          </p>
        );
      }
      // Add other type cases as needed
    });
  };

  return (
    <div>
      <h1>{article.attributes.Title}</h1>
      {article.attributes.content && renderContent(article.attributes.content)}
    </div>
  );
};

export default ArticlePage;
