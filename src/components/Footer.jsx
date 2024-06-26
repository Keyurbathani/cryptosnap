import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import photo from "../assets/keyur.jpg"
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems="center">
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in wordl, we Provide our guidance
            at free of cost.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={photo} />
          <Text>CEO</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
