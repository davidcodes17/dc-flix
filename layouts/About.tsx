import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { Apple, ArrowCircleRight, Google, Happyemoji } from "iconsax-react";
import React from "react";

const About = () => {
  return (
    <Box id="about" py={40} px={{lg : 50, md : 50, sm : 10, base : 5}} height={{lg : "100vh", md : "100vh", sm :  "fit-content", base : "fit-content"}}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box
          width={{ lg: 600, md: 600, sm: "100%", base: "100%" }}
          bgImage={{lg : "none", md : "none", sm : "url('/Laptop.svg')", base : "url('/Laptop.svg')"}}
          backdropFilter={"blur(20px)"}
          objectFit={"contain"}
        >
          <Button
            bg={"#000"}
            color={"#fff"}
            _hover={{ bg: "#000" }}
            p={7}
            borderRadius={40}
            leftIcon={<Happyemoji variant="Bold" />}
          >
            No Restrictions
          </Button>
          <Text pt={2} fontSize={15} color={"#fff"}>
            Welcome to our movie universe, where every click unlocks a world of
            endless entertainment. Dive into a vast galaxy of cinematic wonders,
            where heroes, villains, and legends come alive with every stream.
            From pulse-pounding blockbusters to timeless classics, our website
            is your portal to unforgettable storytelling. Explore, discover, and
            immerse yourself in the magic of movies like never before. Start
            your cinematic journey today!
          </Text>
          <Flex alignItems={"center"} gap={2} mt={5}>
            <Button
              bg={"#fff"}
              rightIcon={<ArrowCircleRight variant="Bold" />}
              color={"#000"}
              px={8}
              py={6}
              borderRadius={40}
            >
              Get Started
            </Button>
            <IconButton
              icon={<Google variant="Bold" />}
              borderRadius={40}
              bg={"#fff"}
              color={"#000"}
              _hover={{ bg: "#fff", color: "#000" }}
              aria-label={"Google Logo"}
            />
            <IconButton
              icon={<Apple variant="Bold" />}
              borderRadius={40}
              bg={"#fff"}
              color={"#000"}
              _hover={{ bg: "#fff", color: "#000" }}
              aria-label={"Apple Logo"}
            />
          </Flex>
        </Box>
        <Image
          display={{ lg: "block", md: "block", sm: "none", base: "none" }}
          width={"40%"}
          src="/Laptop.svg"
        />
      </Flex>
    </Box>
  );
};

export default About;
