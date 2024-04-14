import { Box, IconButton, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
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
  Logout,
} from "iconsax-react";
import React from "react";

const Nav = () => {
  return (
    <Box
      pos={"fixed"}
      left={{ lg: 10, md: 10, sm: 5, base: 5 }}
      bottom={{ lg: "auto", md: "auto", sm: 5, base: 5 }}
      right={{ lg: "auto", md: "auto", sm: 5, base: 5 }}
      zIndex={999}
      top={{ lg: 150, md: 150, sm: "auto", base: "auto " }}
    >
      <Box
        bg={"transparent"}
        boxShadow={"0px 0px 10px #000"}
        backdropFilter={"blur(10px)"}
        py={{lg : 10, md : 10, sm : 5, base : 5}}
        justifyContent={"space-between"}
        px={{lg : 6, md : 6, sm : 10, base : 10}}
        display={{ lg: "block", md: "block", sm: "flex", base: "flex" }}
        alignItems={"center"}
        pl={{lg : 7, md : 7, sm : 10, base : 10}}
        width={{
          lg: "fit-content",
          md: "fit-content",
          sm: "100%",
          base: "100%",
        }}
        borderRadius={40}
      >
        <IconButton
          // mt={{ lg: 5, md: 5, sm: 0, base: 0 }}
          display={"block"}
          as={Link}
          href="/home"
          className="icon"
          aria-label="Home"
          icon={<Home3 size={30} variant="Outline" color="#fff" />}
          bg={"none"}
          _hover={{ bg: "none" }}
        />
        <IconButton
          mt={{ lg: 5, md: 5, sm: 0, base: 0 }}
          display={"block"}
          aria-label="Home"
          className="icon"
          icon={<Category2 size={30} variant="Outline" color="#fff" />}
          bg={"none"}
          _hover={{ bg: "none" }}
        />
        <IconButton
          mt={{ lg: 5, md: 5, sm: 0, base: 0 }}
          display={"block"}
          aria-label="Home"
          className="icon"
          icon={<Brodcast size={30} variant="Bold" color="#fff" />}
          bg={"none"}
          _hover={{ bg: "none" }}
        />
        <IconButton
          mt={{ lg: 5, md: 5, sm: 0, base: 0 }}
          display={"block"}
          aria-label="Home"
          className="icon"
          as={Link}
          href="/movie/12"
          icon={<Screenmirroring size={30} variant="Outline" color="#fff" />}
          bg={"none"}
          textDecoration={"none"}
          _hover={{ bg: "none" }}
        />
        <IconButton
          mt={{ lg: 5, md: 5, sm: 0, base: 0 }}
          display={"block"}
          aria-label="Home"
          className="icon"
          icon={<Setting size={30} variant="Outline" color="#fff" />}
          bg={"none"}
          _hover={{ bg: "none" }}
        />
        <IconButton
          mt={{ lg: 5, md: 5, sm: 0, base: 0 }}
          display={"block"}
          as={Link}
          href="/login"
          textDecoration={"none"}
          aria-label="Home"
          className="icon"
          icon={<Logout size={30} variant="Outline" color="#fff" />}
          bg={"none"}
          _hover={{ bg: "none" }}
        />
      </Box>
    </Box>
  );
};

export default Nav;
