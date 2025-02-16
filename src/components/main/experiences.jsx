import { Text, Center, Flex } from "@chakra-ui/react";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";
import { For } from "@chakra-ui/react";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaComputerMouse } from "react-icons/fa6";

const timelineValues = [
  {
    company: "JiveMauá",
    title: "Desenvolvedor FullStack Junior",
    description: "01 Fev 2025 - Atualmente",
    content:
      "Após a spin-off do time de tecnologia, assumi a responsabilidade de gerenciar o hub de integrações utilizando Python, cuidando, assegurando e criando rotinas de integração. Continuo desenvolvendo, refatorando código, ajustando bugs e implementando melhorias no sistema.",
    image: <FaComputerMouse />,
  },
  {
    company: "JiveMauá",
    title: "Desenvolvedor FullStack Assistente",
    description: "12 AUG 2024 - 31 Fev 2024",
    content:
      "Desenvolvimento e manutenção de um sistema interno de pagamentos na JiveMauá, que já processou cerca de meio milhão de reais. Atuação fullstack com Node.js e React.js, focado em implementar novas funcionalidades, refatorar código, otimizar performance, integrações internas e externas via API.",
    image: <FaComputerMouse />,
  },
  {
    company: "VIP Solutions",
    title: "Analista de Suporte Técnico",
    description: "01 Jun 2022 - 8 Aug 2024",
    content:
      "Analise e resolução de problemas utilizando logs do software Asterisk e de sistemas operacionais Linux. Supervisão e suporte de servidores utilizando a ferramenta de monitoramento Zabbix.",
    image: <MdOutlineSupportAgent />,
  },
];

export default function Experience() {
  return (
    <Center mt={70}>
      <Flex direction={"column"} align={"center"} className="gap-10">
        <Text fontSize={"2xl"}>{"<!-- experiências -->"}</Text>
        <TimelineRoot maxW="400px">
          <For each={timelineValues}>
            {(item, index) => (
              <TimelineItem key={index}>
                <TimelineTitle>{item.company}</TimelineTitle>
                <TimelineConnector>{item.image}</TimelineConnector>
                <TimelineContent>
                  <TimelineTitle fontSize={"md"}>{item.title}</TimelineTitle>
                  <TimelineDescription>{item.description}</TimelineDescription>
                  <Text fontSize={"smaller"} width={330}>
                    {item.content}
                  </Text>
                </TimelineContent>
              </TimelineItem>
            )}
          </For>
        </TimelineRoot>
      </Flex>
    </Center>
  );
}
