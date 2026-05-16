import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";
import CounDown from "./Countdown";
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";

const Home = () => {
  return (
    <main>
      <Hero />
      {/* <Categories /> */}
      <div className="my-10"></div> {/* This to be removed. They just help to mentain the because of missing / commented component */}
      <NewArrival />
      {/* <PromoBanner /> */}
      <div className="mt-8"></div> {/* This to be removed. They just help to mentain the because of missing / commented component */}
      <BestSeller />
      {/* <CounDown /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </main>
  );
};

export default Home;
