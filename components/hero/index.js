import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome to <br className="hidden lg:inline-block" />
            Fullstack Simplified
          </h1>
          <p className="mb-8 leading-relaxed">
            Fullstack Simplified is all about sharing full-stack development
            skills and techniques from scratch efficiently and practically.
            Fullstack Simplified has got all the tools you need, to learn the
            newest and most popular technologies to convert you from a no stack
            to a full stack developer.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.youtube.com/c/FullstackSimplified"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                YouTube
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            alt="hero"
            src="/static/hero.png"
            height={600}
            width={720}
            layout="responsive"
            className="object-cover object-center rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
