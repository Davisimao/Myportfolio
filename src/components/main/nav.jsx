import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Center, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function aboutMe() {
  return (
    <Center className="relative h-[100vh]">
      <Flex direction={"column"} align={"center"}>
        <Text fontSize={"larger"}>hello word!</Text>
        <Text fontSize={"7xl"}> {"<DaviSimao/>"}</Text>
        <Text fontSize={"3xl"}>desenvolvedor full-stack</Text>
        <Link href="/assets/cv-davisimao.pdf" passHref target="_blank">
          <Button
            rounded={"lg"}
            border={"solid"}
            borderColor={"black"}
            padding={4}
            mt={5}
            _hover={{ bg: "black", color: "white" }}
          >
            download CV
          </Button>
        </Link>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 transform">
          <img src="/assets/preview.svg" alt="Seta animada" className="h-12 w-12 animate-bounce" />
        </div>
      </Flex>
    </Center>
  );
}
