import React from "react";
import {Container, Stack, Box} from "@chakra-ui/react";

import Features from "./screens/Features";
import CTA from "./screens/CTA";
import Footer from "./screens/Footer";
import Hero from "./screens/Hero";
/*     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua +1-543-123-4567 example@huddle.com About Us What We Do FAQ Career Blog Contact Us © Copyright 2018 Huddle. All rights reserved. */
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
