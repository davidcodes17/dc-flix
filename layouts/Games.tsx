import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import {
  Happyemoji,
  ArrowCircleRight,
  Google,
  Apple,
  Game,
} from "iconsax-react";
import React from "react";

const Games = () => {
  return (
    <Box>
      <Flex
        px={{lg : 50, md : 50, sm : 10, base : 0}}
        py={20}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box
          width={{ lg: 600, md: 600, sm: "100%", base: "100%" }}
          borderRadius={40}
          bgImage={{
              lg: "none",
              md: "none",
              sm: "url('/cod.png')",
              base: "url('/cod.png')",
            }}
            backdropFilter={"blur(20px)"}
            bgSize={"cover"}
            >
          <Box
            bg={{ lg: "none", md: "none", sm: "#000000a1", base: "#000000a1" }}
            p={{lg : 0, md : 0, sm : 10, base : 10}}
            borderRadius={40}
          >
            <Button
              bg={"#000"}
              color={"#fff"}
              _hover={{ bg: "#000" }}
              p={7}
              borderRadius={40}
              leftIcon={<Game variant="Bold" />}
            >
              Relax and Enjoy Games
            </Button>
            <Text pt={2} fontSize={15} color={"#fff"}>
              Enjoy and Relax with our mind blowing Games endless entertainment.
              Dive into a vast galaxy of cinematic wonders, where heroes,
              villains, and legends come alive with every stream. From
              pulse-pounding blockbusters to timeless classics, our website is
              your portal to unforgettable storytelling. Explore, discover, and
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
        </Box>
        <Image
          display={{ lg: "block", md: "block", sm: "none", base: "none" }}
          src="/cod.png"
          width={"40%"}
          borderRadius={40}
        />
      </Flex>
    </Box>
  );
};

export default Games;
