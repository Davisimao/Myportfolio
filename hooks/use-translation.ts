"use client"

import { useState } from "react"

export type Language = "en" | "pt"

export interface Translation {
  en: string
  pt: string
}

export interface ExperienceTranslation {
  timeCompany: Translation
  current?: Translation
  title: Translation
  companyName: string
  description: Translation
  stacks: string[]
}

const translations = {
  initialText: { en: "Exploring new technologies", pt: "Explorando novas tecnologias" },
  name: { en: "Davi Sanches Simão", pt: "Davi Sanches Simão" },
  title: { en: "FullStack Engineer", pt: "Engenheiro FullStack" },
  subtitle: {
    en: "Building robust applications with innovation, performance, and purpose",
    pt: "Construindo aplicações sólidas com inovação, performance e propósito",
  },
  aboutMe: { en: "About Me", pt: "Sobre mim" },
  aboutText1: {
    en: "I am a FullStack Engineer with over 2 years of professional experience. I build clean, functional, and efficient interfaces, always focusing on clarity, consistency, and performance.",
    pt: "Sou um Engenheiro FullStack com mais de 2 anos de experiência profissional. Construo interfaces limpas, funcionais e eficientes, sempre focando em clareza, consistência e performance.",
  },
  aboutText2: {
    en: "as the main developer responsible for the company's systems.",
    pt: "como o principal desenvolvedor responsável pelos sistemas da empresa.",
  },
  aboutText3: {
    en: "After the sale of the company's main platform, I took over the management and evolution of the company's legacy systems, becoming the focal point for all system-related demands and ensuring scalable, high-performance, and maintainable solutions.",
    pt: "Após a venda do principal sistema da empresa, assumi a gestão e evolução dos sistemas legados da empresa, tornando-me o ponto focal para todas as demandas relacionadas a sistemas e garantindo soluções escaláveis, performáticas e de fácil manutenção.",
  },
  aboutText4: {
    en: "Currently, I maintain a daily goal of solving practical challenges and studying new topics, in addition to developing personal projects to experiment and expand my knowledge.",
    pt: "Atualmente, mantenho uma meta diária de resolver desafios práticos e estudar novos temas, além de desenvolver projetos pessoais para experimentar e expandir meu conhecimento.",
  },
  currentlyWorkAt: { en: "I currently work at", pt: "Atualmente trabalho na" },
  pastWork: {
    en: "In the past, I've worked at",
    pt: "No passado, trabalhei em",
  },
  companiesMessaging: {
    en: "companies focused on messaging (chatbots)",
    pt: "empresas de mensageria (chatbot)",
  },
  whitelabelSolutions: {
    en: "whitelabel solutions",
    pt: "soluções whitelabel",
  },
  pastWorkDescription: {
    en: ", which gave me a solid understanding of how to adapt systems to different constraints, always keeping the end user in mind.",
    pt: ", o que me deu uma sólida compreensão de como adaptar sistemas a diferentes restrições, sempre com foco no usuário final.",
  },
  resumeLink: { en: "Check out my resume", pt: "Confira meu currículo" },
  workExperience: { en: "Professional Experience", pt: "Experiência Profissional" },
  writing: { en: "Writing", pt: "Escrita" },
  writingTitle: {
    en: "Medium: Journey to the Portfolio →",
    pt: "Medium: Jornada para o Portfólio →",
  },
  writingDesc: {
    en: "Some guidelines for effectively showcasing your work, especially as a front-end developer.",
    pt: "Algumas diretrizes para uma boa forma de mostrar seu trabalho, especialmente como desenvolvedor front-end.",
  },
}

const experiences: ExperienceTranslation[] = [
  {
    timeCompany: { en: "2023 - Present", pt: "2023 - Presente" },
    current: { en: "Current", pt: "Atual" },
    title: { en: "Junior FullStack Engineer", pt: "FullStack Engineer Junior" },
    companyName: "JiveMaua",
    description: {
      en: "Responsible for the architecture and maintenance of API-Hub, a central integration repository developed in Python that interconnects all company systems (NetSuite, Bubble, and internal automations).",
      pt: "Responsável pela arquitetura e manutenção do API-Hub, um repositório central de integrações desenvolvido em Python que interliga todos os sistemas da empresa (NetSuite, Bubble e automações internas).",
    },
    stacks: ["React", "TypeScript", "Node.js", "Python", "AWS"],
  },
  {
    timeCompany: { en: "2023 - Present", pt: "2023 - Presente" },
    title: { en: "Assistant FullStack Engineer", pt: "FullStack Engineer Assistente" },
    companyName: "JiveMaua",
    description: {
      en: "Working on the development and maintenance of an internal payment system that processed around half a billion reais, created to facilitate and centralize payments for JiveMauá companies.",
      pt: "Trabalhando no desenvolvimento e manutenção de um sistema interno de pagamentos que processou cerca de meio bilhão de reais, criado para facilitar e centralizar os pagamentos das empresas JiveMauá.",
    },
    stacks: ["React", "TypeScript", "ANT Design", "Node.js", "AWS"],
  },
  {
    timeCompany: { en: "Jun 2022 - Aug 2024", pt: "Jun 2022 - Ago 2024" },
    title: { en: "Technical Support Analyst", pt: "Analista de Suporte Tecnico" },
    companyName: "VIP Solutions",
    description: {
      en: "Analysis and problem resolution using Asterisk software logs and Linux operating systems. Server supervision and support using the Zabbix monitoring tool.",
      pt: "Analise e resolução de problemas utilizando logs do software Asterisk e de sistemas operacionais Linux. Supervisão e suporte de servidores utilizando a ferramenta de monitoramento Zabbix.",
    },
    stacks: ["SQL", "Linux", "Technical Support"],
  },
]

export function useTranslation() {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: keyof typeof translations): string => {
    return translations[key][language]
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"))
  }

  return {
    language,
    t,
    toggleLanguage,
    experiences,
    setLanguage,
  }
}
