import Nav from "@/components/Nav";
import Footer from "@/layouts/Footer";
import MainHeader from "@/layouts/MainHeader";
import RelatedMovies from "@/layouts/RelatedMovies";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { DocumentDownload, Play } from "iconsax-react";
import React from "react";

const page = () => {
  return (
    <Box>
      <Box
        width={"100vw"}
        bgImage={"url('/kid.jpg')"}
        bgSize={"cover"}
        bgPos={"center"}
        bgPosition={"center"}
        height={"100vh"}
      >
        <Box height={"100vh"} width={"100vw"} className="bgss">
          <MainHeader />
          <Nav />
          <Box
            pt={130}
            px={{ lg: 100, md: 100, sm: 10, base: 10 }}
            color={"#fff"}
          >
            <Flex gap={20}>
              <Image
                src="/kid.jpg"
                objectFit={"cover"}
                borderRadius={20}
                width={"500px"}
                display={{ lg: "block", md: "block", sm: "none", base: "base" }}
                height={"520px"}
              />
              <Box>
                <Heading
                  fontSize={{ lg: 60, md: 60, sm: 50, base: 40 }}
                  fontWeight={400}
                >
                  Aladin Movie
                </Heading>
                <Flex gap={5} py={2}>
                  <Badge bg={"#D40A12"} color={"#fff"}>
                    Action
                  </Badge>
                  <Badge bg={"#D40A12"} color={"#fff"}>
                    Adventure
                  </Badge>
                  <Badge bg={"#D40A12"} color={"#fff"}>
                    Trending
                  </Badge>
                  <Badge bg={"#D40A12"} color={"#fff"}>
                    Family
                  </Badge>
                </Flex>
                <Flex
                  my={5}
                  alignItems={"center"}
                  gap={{ lg: 10, md: 10, sm: 5, base: 5 }}
                >
                  <Play size={60} />
                  <Text fontSize={{ lg: 60, md: 60, sm: 40, base: 40 }}>
                    Watch Trailer
                  </Text>
                </Flex>
                <Text fontSize={{ lg: 15, md: 15, sm: 12, base: 12 }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Architecto veniam ad vel animi omnis! Amet et cupiditate
                  sapiente laboriosam, in, placeat ullam nostrum officiis id
                  odit sint nobis rem itaque. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Architecto veniam ad vel animi
                  omnis! Amet et cupiditate sapiente laboriosam, in, placeat
                  ullam nostrum officiis id odit sint nobis rem itaque. Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Architecto
                  veniam ad vel animi omnis! Amet et cupiditate sapiente
                  laboriosam, in, placeat ullam nostrum officiis id odit sint
                  nobis rem itaque.
                </Text>
                <Button
                  leftIcon={<DocumentDownload variant="Bold" />}
                  mt={5}
                  bg={"#D40A12"}
                  padding={6}
                  borderRadius={40}
                  color={"#fff"}
                  _hover={{ bg: "#D40A12" }}
                >
                  Dowload Now
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <RelatedMovies />
      <Footer />
    </Box>
  );
};

export default page;
