// src/app/page.tsx

import React from "react";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";

const Home = () => {
  return (
    <div className="mt-16"> {/* Added margin-top to ensure content appears below the navbar */}
      <Hero />
      <ServicesGrid />
    </div>
  );
};

export default Home;
