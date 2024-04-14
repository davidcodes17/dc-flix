import MovieCover from "@/components/MovieCover";
import Nav from "@/components/Nav";
import Footer from "@/layouts/Footer";
import MainHeader from "@/layouts/MainHeader";
import TrendingMovies from "@/layouts/TrendingMovies";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Star } from "iconsax-react";
import React from "react";

const page = () => {
  return (
    <Box pos={"relative"}>
      <Box
        width={"100vw"}
        bgImage={"url('/bg.jpg')"}
        bgSize={"cover"}
        bgPos={"center"}
        height={"100vh"}
      >
        <Box height={"100vh"} width={"100vw"} className="bgs">
          <MainHeader />
          <Box pl={{ lg: 200, md: 200, sm: 10, base: 10 }} pt={130}>
            <Flex>
              <Box color={"#fff"}>
                <Nav />
                <Heading
                  fontSize={{ lg: 70, md: 70, sm: 50, base: 50 }}
                  fontWeight={400}
                >
                  Ghosted
                </Heading>
                <Flex gap={2}>
                  <Star size={50} variant="Bold" color="gold" />
                  <Star size={50} variant="Bold" color="gold" />
                  <Star size={50} variant="Bold" color="gold" />
                  <Star size={50} variant="Bold" color="gold" />
                  <Star size={50} variant="Outline" color="#fff" />
                </Flex>
                <Text
                  fontSize={{ lg: 15, md: 12, sm: 12, base: 12 }}
                  width={{ lg: 700, md: 500, sm: "100%  ", base: "100%" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci officiis laboriosam nam quis exercitationem. Nam quod
                  nobis, tempora earum blanditiis laudantium ut. Autem minima
                  atque consequatur delectus pariatur non ex.
                </Text>
                <Box>
                  <Flex pt={4}>
                    <MovieCover />
                    {/* <MovieCover /> */}
                    {/* <MovieCover /> */}
                    {/* <MovieCover /> */}
                    {/* <MovieCover /> */}
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <TrendingMovies />
      <Footer />
    </Box>
  );
};

export default page;
