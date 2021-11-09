import { Fragment } from "react";
import Image from "next/image";
import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../../sanity";
import { getDateAndTime } from "../../utils/date-formatter";
import toUrl from "../../utils/toUrl";

const Post = ({ data }) => {
  const { title, info, body, yt, author, publishedAt } = data;

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={info} />
      </Head>
      <div className="container min-w-xl p-4 mx-auto prose">
        <h1 className="text-gray-400"> {title} </h1>

        <div className="flex items-center mb-9">
          <span className="inline-flex items-center ">
            <Image
              alt="author"
              src={toUrl(author.image)}
              height={32}
              width={32}
              layout="fixed"
              className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span className="w-2" />
            <span claclassNamess="title-font font-medium text-gray-900">
              {author.name}
            </span>
          </span>
          <div className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
            {getDateAndTime(publishedAt)}
          </div>
        </div>
        <section className="relative h-0" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 h-full w-full"
            width="560px"
            height="315px"
            src={yt}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        <div className="mt-12 prose">
          <BlockContent blocks={body} />
        </div>
      </div>
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const res = await sanityClient.fetch(`*[_type == "post"]{slug}`);

  const paths = res.map((item) => {
    return {
      params: { slug: item.slug.current },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const res = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug]{
      ...,
      author->
    }[0]`,
    { slug }
  );
  return {
    props: {
      data: res,
    },
    revalidate: 20,
  };
};

export default Post;
