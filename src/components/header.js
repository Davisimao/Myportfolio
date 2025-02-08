import { Container, Flex } from "@chakra-ui/react";

export default function header() {
  return (
    <header>
      <Container className="mt-8 rounded-lg bg-cyan-800 p-4">
        <Flex className="justify-between">
          <h1>@davisimao</h1>
          <Flex className="gap-10">
            <a>Sobre</a>
            <a>Projetos</a>
            <a>Habilidades</a>
            <a>Contato</a>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}
