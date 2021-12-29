import * as React from "react";
import Greeting from "../components/greeting";
import "../styles/global.scss";

const IndexPage = () => {
  return (
    <main className="main-padding">
      <title>Home Page</title>
      <Greeting />
      <p className="subtitle">Tailwind + SCSS + Gatsby</p>
      <p className="pt-80px text-gray-400 text-sm">Boilerplate </p>
    </main>
  );
};

export default IndexPage;
