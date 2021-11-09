import { Fragment } from "react";
import "tailwindcss/tailwind.css";
import AppBar from "../components/app-bar";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <AppBar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
