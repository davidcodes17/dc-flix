import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import {
  Apple,
  ArrowCircleRight,
  Google,
  Volume,
  VolumeHigh,
} from "iconsax-react";
import React from "react";

const ChildrenandKids = () => {
  return (
    <Box>
      <Flex pb={20} alignItems={"center"} px={{lg : 10, md : 10, sm : 10, base : 5}}pt={{lg : 0, md : 0, sm : 0, base : 0}} justifyContent={"space-between"}>
        <Image
          borderRadius={100}
          width={"40vw"}
          height={"80vh"}
          display={{ lg: "block", md: "block", sm: "none", base: "none" }}
          objectFit={"cover"}
          src="/kid.jpg"
        />
        <Box
          width={{ lg: 600, md: 600, sm: "100%", base: "100%" }}
          bgPosition={"center"}
          bgSize={"cover"}
          borderRadius={40}
          bgImage={{
            lg: "none",
            md: "none",
            sm: "url('/kid.jpg')",
            base: "url('/kid.jpg')",
          }}
          backdropFilter={"blur(20px)"}
        >
          <Box
            borderRadius={40}
            bg={{base : "#000000a1", sm : "#000000a1", md : "none", lg  : "none"}}
            className="bb"
            p={{ lg: 0, md: 0, sm: 10, base: 5 }}
          >
            <Button
              color={"#fff"}
              bg={"#000"}
              p={7}
              borderRadius={40}
              _hover={{ bg: "#000", color: "#fff" }}
              leftIcon={<VolumeHigh variant="Bold" />}
            >
              Children and Kids
            </Button>
            <Text color={"#fff"} py={3}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis architecto iste perferendis officiis, eum dolore?
              Sed, est voluptate. Obcaecati cupiditate neque temporibus, minima
              saepe est incidunt sapiente repellat pariatur quis! Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Perspiciatis
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
      </Flex>
    </Box>
  );
};

export default ChildrenandKids;
