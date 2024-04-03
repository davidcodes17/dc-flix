import { Box, Button, Flex, Heading, Image, Link } from "@chakra-ui/react";
import { HambergerMenu } from "iconsax-react";
import React from "react";

const Header = () => {
  return (
    <Box p={7}>
      <Flex
        justifyContent={"space-between"}
        className="blur"
        boxShadow={"0px 0px 10px #000"}
        borderRadius={100}
        // py={6}
        p={3}
        px={4}
        alignItems={"center"}
      >
        <Image
          cursor={"pointer"}
          width={100}
          height={"50px"}
          borderRadius={40}
          src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
        />

        <Flex
          gap={10}
          display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
        >
          <Link fontSize={15} color={"#fff"} href={"/"}>
            Home
          </Link>
          <Link fontSize={15} color={"#fff"} href={"#about"}>
            About
          </Link>
          <Link fontSize={15} color={"#fff"} href={"/"}>
            Contact
          </Link>
          <Link fontSize={15} color={"#fff"} href={"/"}>
            Services
          </Link>
          <Link fontSize={15} color={"#fff"} href={"/"}>
            Children and Kids
          </Link>
          <Link fontSize={15} color={"#fff"} href={"/"}>
            Games
          </Link>
        </Flex>

        <Flex display={{ lg: "flex", md: "flex", sm: "none", base: "none" }} gap={5} alignItems={"center"}>
          <Button
            bg={"#000"}
            color={"#fff"}
            fontWeight={400}
            px={5}
            borderRadius={20}
            width={120}
            _hover={{ bg: "#000" }}
          >
            Login
          </Button>
          <Button
            bg={"#000"}
            color={"#fff"}
            fontWeight={400}
            px={5}
            borderRadius={20}
            width={120}
            _hover={{ bg: "#000" }}
          >
            Sign Up
          </Button>
        </Flex>
        <Box display={{lg : "none", md : "none", sm : "block", base : "block"}} mr={10} cursor={"pointer"}>
          <HambergerMenu size={40} color="#fff" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
