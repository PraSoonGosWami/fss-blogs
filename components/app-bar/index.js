import Link from "next/link";
import Image from "next/image";

const AppBar = () => {
  return (
    <header className="text-gray-600 body-font sticky top-0 bg-white z-10 backdrop-filter bg-opacity-70 backdrop-blur-md">
      <div className="container max-w-screen-xl flex px-5 py-4 items-center justify-between">
        <div className="flex items-center">
          <Image
            alt="logo"
            src="/static/logo.png"
            height={45}
            width={45}
            layout="fixed"
          />
          <span className="ml-3  items-center text-xl text-black">Blogs</span>
        </div>
        <nav className="flex items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5 text-black">Home</a>
          </Link>
          {/* <a
            href="https://www.youtube.com/c/FullstackSimplified"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 text-black"
          >
            YouTube
          </a> */}
          <a
            href="https://prasoon.me"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 text-black"
          >
            Portfolio
          </a>
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
