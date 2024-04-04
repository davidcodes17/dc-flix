import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { Apple, GooglePlay } from "iconsax-react";
import React from "react";

const Contact = () => {
  return (
    <Box pt={40} px={{ lg: 10, md: 10, sm: 0, base: 0 }}>
      <Box bg={"#000"} borderRadius={20} position={"relative"}>
        <Flex
          flexWrap={"wrap"}
          p={{ lg: 40, md: 40, sm: 10, base: 10 }}
          color={"#fff"}
          gap={20}
        >
          <Box>
            <Image
              cursor={"pointer"}
              width={100}
              height={"50px"}
              borderRadius={40}
              src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
            />
            <Link py={4} href="https://areegbe.vercel.app/">
              <Text py={2}>Meet Me</Text>
            </Link>
            <Text>&copy; All Rights Reserved @Areegbe David</Text>
            <Text pt={2}>Avaliable on All Platforms</Text>
            <Flex gap={2} pt={4} flexWrap={"wrap"}>
              <Button
                border={"2px solid #fff"}
                bg={"none"}
                color={"#fff"}
                p={6}
                borderRadius={10}
                _hover={{ bg: "#000" }}
                leftIcon={<GooglePlay variant="Bold" />}
                fontWeight={400}
              >
                Google Play
              </Button>
              <Button
                border={"2px solid #fff"}
                bg={"none"}
                color={"#fff"}
                p={6}
                borderRadius={10}
                _hover={{ bg: "#000" }}
                leftIcon={<Apple variant="Bold" />}
                fontWeight={400}
              >
                App Store
              </Button>
            </Flex>
          </Box>
          <Box>
            <Heading fontWeight={300} fontSize={40}>
              Navigation
            </Heading>
            <Link
              pt={4}
              display={"block"}
              fontSize={15}
              color={"#fff"}
              href={"/"}
            >
              Home
            </Link>
            <Link
              display={"block"}
              pt={2}
              fontSize={15}
              color={"#fff"}
              href={"#about"}
            >
              About
            </Link>
            <Link
              display={"block"}
              pt={2}
              fontSize={15}
              color={"#fff"}
              href={"/"}
            >
              Children and Kids
            </Link>
            <Link
              display={"block"}
              pt={2}
              fontSize={15}
              color={"#fff"}
              href={"/"}
            >
              Games
            </Link>
            <Link
              display={"block"}
              pt={2}
              fontSize={15}
              color={"#fff"}
              href={"/"}
            >
              Contact
            </Link>
            <Flex gap={2} pt={4} flexWrap={"wrap"}>
              <Button
                border={"2px solid #fff"}
                bg={"#fff"}
                color={"#000"}
                borderRadius={20}
                _hover={{ bg: "##fff" }}
                fontWeight={400}
              >
                Login
              </Button>
              <Button
                border={"2px solid #fff"}
                bg={"#fff"}
                color={"#000"}
                borderRadius={20}
                _hover={{ bg: "#fff" }}
                fontWeight={400}
              >
                Sign Up
              </Button>
            </Flex>
          </Box>
          <Image
            display={{ lg: "block", md: "block", sm: "none", base: "none" }}
            src={"/mock.png"}
            width={"20%"}
            pos={"absolute"}
            bottom={20}
            right={20}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Contact;
