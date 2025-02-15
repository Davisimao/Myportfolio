import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Center, Flex } from "@chakra-ui/react";

export default function aboutMe() {
  return (
    <Center mt={180}>
      <Flex direction={"column"} align={"center"}>
        <Text fontSize={"larger"}>hello word!</Text>
        <Text fontSize={"7xl"}> {"<DaviSimao/>"}</Text>
        <Text fontSize={"3xl"}>desenvolvedor full-stack</Text>
        <Button
          rounded={10}
          border={"solid"}
          borderColor={"black"}
          padding={3}
          mt={5}
          _hover={{ bg: "black", color: "white" }}
        >
          download CV
        </Button>
      </Flex>
    </Center>
  );
}
