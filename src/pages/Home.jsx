import React from "react";
import WhatDefinesUs from "../components/Home/WhatDefinesUs";
import TechSolutions from "../components/Solutions/TechSolutions";
import Banner from "../components/Solutions/Banner";
import ServicesSlider from "../components/Solutions/ServicesSlider";
import ServicesSlider2 from "../components/Solutions/ServicesSlider2";
import TrendingItems from "../components/Solutions/trendingItems";

const Home = () => {
  return (
    <main>
      <Banner />
      <WhatDefinesUs />
      <ServicesSlider />
      <ServicesSlider2 />
      <TechSolutions />
      <TrendingItems />
    </main>
  );
};

export default Home;
