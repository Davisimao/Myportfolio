"use client"

import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Globe, Sun, Moon } from "lucide-react"
import { Experience } from "@/types/experience"

const translations = {
  en: {
    initialText: "Exploring new technologies",
    name: "Davi Sanches Simão",
    title: "FullStack Engineer",
    subtitle: "Building robust applications with innovation, performance, and purpose",
    aboutMe: "About Me",
    aboutText1:
      "I am a FullStack Engineer with over 2 years of professional experience. I build clean, functional, and efficient interfaces, always focusing on clarity, consistency, and performance.",
    aboutText2:
      "as the main developer responsible for the company's systems.",
    aboutText3:
      "After the sale of the company’s main platform, I took over the management and evolution of the company's legacy systems, becoming the focal point for all system-related demands and ensuring scalable, high-performance, and maintainable solutions.",
    aboutText4:
      "Currently, I maintain a daily goal of solving practical challenges and studying new topics, in addition to developing personal projects to experiment and expand my knowledge.",
    resumeLink: "Check out my resume",
    workExperience: "Professional Experience",
    writing: "Writing",
    writingTitle: "Medium: Journey to the Portfolio →",
    writingDesc:"Some guidelines for effectively showcasing your work, especially as a front-end developer.",
  },
  pt: {
    initialText: "Explorando novas tecnologias",
    name: "Davi Sanches Simão",
    title: "Engenheiro FullStack",
    subtitle: "Construindo aplicações sólidas com inovação, performance e propósito",
    aboutMe: "Sobre mim",
    aboutText1:
      "Sou um Engenheiro FullStack com mais de 2 anos de experiência profissional. Construo interfaces limpas, funcionais e eficientes, sempre focando em clareza, consistência e performance.",
    aboutText2:
      "como o principal desenvolvedor responsável pelos sistemas da empresa.",
    aboutText3:
      "Após a venda do principal sistema da empresa, assumi a gestão e evolução dos sistemas legados da empresa, tornando-me o ponto focal para todas as demandas relacionadas a sistemas e garantindo soluções escaláveis, performáticas e de fácil manutenção.",
    aboutText4:
      "Atualmente, mantenho uma meta diária de resolver desafios práticos e estudar novos temas, além de desenvolver projetos pessoais para experimentar e expandir meu conhecimento.",
    resumeLink: "Confira meu currículo",
    workExperience: "Experiência Profissional",
    writing: "Escrita",
    writingTitle: "Medium: Jornada para o Portfólio →",
    writingDesc:
      "Algumas diretrizes para uma boa forma de mostrar seu trabalho, especialmente como desenvolvedor front-end.",
  },
}

const experiences : Experience[] = [
  {
    timeCompany: "2023 - Present",
    current: "Atual",
    title: "FullStack Engineer Junior",
    companyName: "JiveMaua",
    description: "Responsável pela arquitetura e manutenção do API-Hub, um repositório central de integrações desenvolvido em Python que interliga todos os sistemas da empresa (NetSuite, Bubble e automações internas).",
    stacks: ["React", "TypeScript", "Node.js", "Python", "AWS"]
  },
  {
    timeCompany: "2023 - Present",
    title: "FullStack Engineer Assistente",
    companyName: "JiveMaua",
    description: "Trabalhando no desenvolvimento e manutenção de um sistema interno de pagamentos que processou cerca de meio bilhão de reais, criado para facilitar e centralizar os pagamentos das empresas JiveMauá.",
    stacks: ["React", "TypeScript", "ANT Design", "Node.js", "AWS"]
  },
  {
    timeCompany: "Jun 2022 - Ago 2024",
    title: "Analista de Suporte Tecnico",
    companyName: "VIP Solutions",
    description: "Analise e resolução de problemas utilizando logs do software Asterisk e de sistemas operacionais Linux. Supervisão e suporte de servidores utilizando a ferramenta de monitoramento Zabbix.",
    stacks: ["SQL", "Linux", "Suporte Técnico"]
  },

]

export default function Portfolio() {
  const [language, setLanguage] = useState<"en" | "pt">("en")
  const [isDark, setIsDark] = useState(true)

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en")
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        isDark ? "bg-zinc-950 text-zinc-100" : "bg-white text-zinc-900"
      }`}
    >
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-sm flex items-center justify-center">
                <span className="text-zinc-950 font-bold text-sm">DS</span>
              </div>
              <span className="text-emerald-400 text-sm font-medium">{t.initialText}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200"
                    : "hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900"
                }`}
                title={language === "en" ? "Português" : "English"}
              >
                <Globe size={18} />
              </button>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200"
                    : "hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900"
                }`}
                title={isDark ? "Tema claro" : "Tema escuro"}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-2">{t.name}</h1>
          <p className={`text-xl mb-6 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>{t.title}</p>

          <p className={`leading-relaxed ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>{t.subtitle}</p>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-emerald-400 text-lg font-medium mb-6">{t.aboutMe}</h2>

          <div className={`space-y-4 leading-relaxed ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
            <p>{t.aboutText1}</p>

            <p>
            
              {language === "en" ? (
                <>
                  I currently work at{" "}
                </>
              ) : (
                <>
                  Atualmente trabalho na{" "}
                </>
              )} 
              <a className={`font-medium ${isDark ? "text-white" : "text-zinc-900"} hover:text-emerald-400`} target="_blank" href="https://jivemaua.com.br/" >JiveMaua </a>
               {t.aboutText2}
            </p>

            <p>{t.aboutText3}</p>

            <p>
              {language === "en" ? (
                <>
                  In the past, I've worked at{" "}
                  <a className={`font-medium ${isDark ? "text-white" : "text-zinc-900"}hover:text-emerald-500`} target="_blank" href="https://vipsolutions.com.br/" >companies focused on messaging (chatbots)</a>{" "}
                  and <a className={`font-medium ${isDark ? "text-white" : "text-zinc-900"}hover:text-emerald-500`} target="_blank" href="https://vipsolutions.com.br/" >whitelabel solutions</a>, which gave me a solid understanding of how to adapt systems to different constraints, always keeping the end user in mind..
                </>
              ) : (
                <>
                  No passado, trabalhei em{" "}
                  <a className={`font-medium ${isDark ? "text-white" : "text-zinc-900"} hover:text-emerald-500`} target="_blank" href="https://vipsolutions.com.br/" >empresas de mensageria (chatbot)</a>{" "}
                  e <a className={`font-medium ${isDark ? "text-white" : "text-zinc-900"} hover:text-emerald-500`} target="_blank" href="https://vipsolutions.com.br/" >soluções whitelabel</a>, o que me deu uma sólida compreensão de como adaptar sistemas a diferentes restrições, sempre com foco no usuário final..
                </>
              )}
            </p>

            <p>{t.aboutText4}</p>

            <p>
              <a href="resume.pdf" target="_blank" className="text-emerald-400 hover:text-emerald-300 underline  transition-colors" >
                {t.resumeLink}
              </a>
            </p>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-emerald-400 text-lg font-medium mb-8">{t.workExperience}</h2>

          <div className="space-y-12">
            {/* Current Role */}

            {experiences.map((exp : Experience,index : number) =>{
              return(
              <div key={index}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-sm ${isDark ? "text-zinc-500" : "text-zinc-500"}`}>{exp.timeCompany}</span>
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                  {exp.current}
                </Badge>
              </div>
              <h3 className={`font-medium text-lg mb-1 ${isDark ? "text-white" : "text-zinc-900"}`}>
                {exp.title} - <span className="text-emerald-400">{exp.companyName}</span>
              </h3>
              <p className={`leading-relaxed mb-4 ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.stacks.map((stack, index)=>{
                  return ( <Badge key={index} variant="outline" className={`text-xs ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>{stack}</Badge>)
                })}
              </div>
            </div>)
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className={`pt-8 border-t ${isDark ? "border-zinc-800" : "border-zinc-200"}`}>
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="mailto:davisimao.dev@gmail.com"
              className={`transition-colors ${isDark ? "text-zinc-400 hover:text-emerald-400" : "text-zinc-600 hover:text-emerald-500"}`}
            >
              Email
            </a>
            <a
              href="www.linkedin.com/in/davisanchessimao"
              className={`transition-colors ${isDark ? "text-zinc-400 hover:text-emerald-400" : "text-zinc-600 hover:text-emerald-500"}`}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Davisimao"
              className={`transition-colors ${isDark ? "text-zinc-400 hover:text-emerald-400" : "text-zinc-600 hover:text-emerald-500"}`}
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
