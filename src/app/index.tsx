import React from "react";

import Features from "./screens/Features";
import CTA from "./screens/CTA";
import Footer from "./screens/Footer";
import Hero from "./screens/Hero";

const App: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
