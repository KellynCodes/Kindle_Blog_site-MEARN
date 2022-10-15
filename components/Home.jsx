import Head from "next/head";
import React from "react";
import Cards from "./Cards";

const Home = ({ Items }) => {
  return (
    <>
      <div className="home">
        <Head>
          <title>Kindle | Home</title>
          <link rel="shortcut icon" href="KindleLogo.png" type="image/x-icon" />
        </Head>
        {/* {Items.map((items) => (
          <Cards key={items.id} items={items} />
        ))} */}
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const fetch = fetch("https:localhost:5000/api/hello");
  const Items = fetch.json();

  return {
    props: { Items },
  };
};
