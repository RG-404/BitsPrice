import Head from "next/head";
import Navbar from "./Navbar";

const Layout = (props) => (
  <div>
    <Head>
      <title>BitsPrice</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
