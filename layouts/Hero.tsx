import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ArrowCircleDown, ArrowCircleRight, Sound, Speaker } from "iconsax-react";
import React from "react";

const Hero = () => {
  return (
    <Box>
      <Flex justifyContent={"center"} mt={30}>
        <Box width={{lg : 800, md: 800, sm : "100%", base : "100%"}} px={5}>
          <Flex justifyContent={"center"} mb={4}>
            <Button
              leftIcon={<Sound variant="Bold" />}
              borderRadius={40}
              p={8}
              fontWeight={400}
              _hover={{ bg: "#000" }}
              bg={"#000"}
              fontSize={{lg : 15, md : 15, sm : 12, base : 10}}
              color={"#fff"}
            >
              Unleash the hero within! Stream top movies now.
            </Button>
          </Flex>
          <Heading
            textAlign={"center"}
            textShadow={"2px 2px 4px rgba(0,0,0,0.5)"}
            fontFamily={"Anton !important"}
            fontSize={{lg : 100, md : 90, sm : "70px", base : "60px"}}
            color={"#fff"}
          >
            Enter a world of heroes. Watch now!
          </Heading>
          <Flex justifyContent={"center"} mt={5}>
            <Button
              p={9}
              as={Link}
              href={"#about"}
              textDecoration={"none !important"}
              width={300}
              bg={"#000"}
              color={"#fff"}
              rightIcon={<ArrowCircleDown variant="Bold" />}
              _hover={{ bg: "#000" }}
              borderRadius={40}
            >
              Get Started
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
