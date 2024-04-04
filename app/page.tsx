import About from "@/layouts/About";
import ChildrenandKids from "@/layouts/ChildrenandKids";
import Contact from "@/layouts/Contact";
import Games from "@/layouts/Games";
import Header from "@/layouts/Header";
import Hero from "@/layouts/Hero";
import { Box } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <Box>
      <Box
        position={"relative"}
        width={"100vw"}
        height={"100vh"}
        bgImage={"url('/bg.jpg')"}
        bgSize={"cover"}
      >
        <Box className="black">
          <Header />
          <Hero />
        </Box>
        <About />
        <ChildrenandKids />
        <Games />
        <Contact />
      </Box>
    </Box>
  );
};

export default page;
