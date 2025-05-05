import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Footer from "@/components/Footer";




const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesGrid />
      <Footer />
    </div>
  );
};

export default Home;
