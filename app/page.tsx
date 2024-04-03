import About from "@/layouts/About";
import Header from "@/layouts/Header";
import Hero from "@/layouts/Hero";
import { Box } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <Box>
      <Box
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
      </Box>
    </Box>
  );
};

export default page;
