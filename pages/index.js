import { Fragment } from "react";
import Head from "next/head";
import sanityClient from "../sanity";
import BlogList from "../components/blog-list";
import Hero from "../components/hero";

export default function Home({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>Blogs | Fullstack Simplified</title>
      </Head>
      <div>
        <Hero />
        {posts && <BlogList posts={posts} />}
      </div>
    </Fragment>
  );
}

export const getStaticProps = async (context) => {
  const res =
    await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc){
    ...,
    author->,
    "category":category->title,
  }`);
  return {
    props: {
      posts: [...res],
    },
    revalidate: 20,
  };
};
