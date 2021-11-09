import Image from "next/image";
import Link from "next/link";
import { getDate } from "../../utils/date-formatter";
import toUrl from "../../utils/toUrl";
const BlogItem = ({ post }) => {
  const { category, title, slug, publishedAt, mainImage, author, info } = post;
  return (
    <div className="p-5 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image
          alt="post"
          height={300}
          width={500}
          className="2xl:h-60 xl:h-58 lg:h-52 md:h-32 w-full"
          src={toUrl(mainImage)}
          layout="responsive"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {category}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{info}</p>
          <span className="inline-flex items-center">
            <Image
              alt="author"
              src={toUrl(author.image)}
              height={32}
              width={32}
              layout="fixed"
              className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span className="w-2" />
            <span classNamess="title-font font-medium text-gray-900">
              {author.name}
            </span>
          </span>
          <div className="flex items-center ">
            <div className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
              Publised: {getDate(publishedAt)}
            </div>

            <Link href={`/post/${slug.current}`}>
              <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
