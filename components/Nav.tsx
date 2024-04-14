import { Box, IconButton } from "@chakra-ui/react";
import {
  Category,
  Home,
  Home3,
  Brodcast,
  Screenmirroring,
  Setting,
  Home2,
  Category2,
  SearchNormal,
} from "iconsax-react";
import React from "react";

const Nav = () => {
  return (
    <Box pos={"fixed"} left={10} top={150}>
      <Box
        bg={"transparent"}
        boxShadow={"0px 0px 10px #000"}
        backdropFilter={"blur(10px)"}
        py={10}
        px={5}
        pl={6}
        width={"fit-content"}
        borderRadius={40}
      >
        <IconButton
          mt={0}
          display={"block"}
          aria-label="Home"
          icon={<Home3 size={30} variant="Outline" color="#fff" />}
          bg={"none"}
          _hover={{ bg: "none" }}
        />
        <IconButton
          mt={5}
          display={"block"}
          aria-label="Home"
          icon={<Category2 size={30} variant="Outline" color="#fff" />}
          bg={"none"}
          _hover={{ bg: "none" }}
        />
        <IconButton
          mt={5}
          display={"block"}
          aria-label="Home"
          icon={<SearchNormal size={30} variant="Outline" color="#fff" />}
          bg={"none"}
          _hover={{ bg: "none" }}
        />
        <IconButton
          mt={5}
          display={"block"}
          aria-label="Home"
          icon={<Brodcast size={30} variant="Bold" color="#fff" />}
          bg={"none"}
          _hover={{ bg: "none" }}
        />
        <IconButton
          mt={5}
          display={"block"}
          aria-label="Home"
          icon={<Screenmirroring size={30} variant="Outline" color="#fff" />}
          bg={"none"}
          _hover={{ bg: "none" }}
        />
        <IconButton
          mt={5}
          display={"block"}
          aria-label="Home"
          icon={<Setting size={30} variant="Outline" color="#fff" />}
          bg={"none"}
          _hover={{ bg: "none" }}
        />
      </Box>
    </Box>
  );
};

export default Nav;
