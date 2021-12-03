import Head from "next/head";
import ArticleList from "../components/ArticleList";
import { server } from "../config";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web dev" />
      </Head>
      <ArticleList articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
