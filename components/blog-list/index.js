import Image from "next/image";
import BlogItem from "../blog-item";

const BlogList = ({ posts }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-col text-center w-full ">
        <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">
          Posts
        </h1>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {posts &&
            posts.map((post) => {
              return <BlogItem key={post._id} post={post} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
