import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Link,
} from "@chakra-ui/react";
import { HambergerMenu, LoginCurve } from "iconsax-react";
import React from "react";

const MainHeader = () => {
  return (
    <Box
      px={{ lg: 7, md: 7, sm: 4, base: 2 }}
      pos={"fixed"}
      right={0}
      zIndex={9999}
      left={0}
      pt={7}
    >
      <Flex
        justifyContent={{lg : "space-between", md : "space-between", sm : "left", base : "left"}}
        className="blur"
        boxShadow={"0px 0px 10px #000"}
        borderRadius={100}
        gap={{lg : 0, md : 0, sm : 10, base : 10}}
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

        <Flex>
          <Input
            borderRadius={40}
            bg={"none"}
            border={"none"}
            color={"#fff"}
            fontSize={12}
            width={{lg:"400px", md : "400px", sm : "100%", base : "100%"}}
            placeholder="Search Movies...."
          />
        </Flex>
        <Button
          bg={"#000"}
          color={"#fff"}
          display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
          fontWeight={400}
          as={Link}
          href={"/login"}
          px={10}
          textDecor={"none !important"}
          py={6}
          borderRadius={20}
          rightIcon={<LoginCurve variant="Bold" />}
          _hover={{ bg: "#000" }}
        >
          Logout
        </Button>
      </Flex>
    </Box>
  );
};

export default MainHeader;
