import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/Arpit's Picture(1).jpg";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.900"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} fontSize={"lg"}>About Us</Text>
          <Text
            fontSize={"lg+1"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We Are The Best Crypto Trading App In India, We Provide Our Guidance
            At A Very Reasonable Price.
          </Text>
          <Text fontWeight={"bold"} fontSize={"lg"}>Contact Us</Text>
          <a fontSize={"lg+1"} letterSpacing={"widest"} textAlign={["center", "left"]} target="blank" href="mailto:arpitaggarwal1012@gmail.com">Email</a>
          <a fontSize={"lg+1"} letterSpacing={"widest"} textAlign={["center", "left"]} target="blank" href="https://www.linkedin.com/in/arpit-aggarwal10/">LinkedIn</a>
          <a fontSize={"lg+1"} letterSpacing={"widest"} textAlign={["center", "left"]} target="blank" href="https://github.com/ArpitAggarwal10">GitHub</a>
        </VStack>
        <VStack pr={"1"} mr={"1"} textAlign={"center"}>
          <Avatar boxSize={"28"} mt={["4", "0"]} cursor={"pointer"} src={btcSrc} />
          <Text fontSize={"lg"}>ARPIT AGGARWAL</Text>
          <Text fontSize={"lg+1"}>Founder Of Xcrypto App</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;