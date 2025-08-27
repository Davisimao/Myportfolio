"use client"

import { useState } from "react"
import { Globe, Sun, Moon, ArrowLeft } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function ApiHubProject() {
  const [isDark, setIsDark] = useState(true)
  const { language, setLanguage, t } = useTranslation()

const projectTranslations = {
  en: {
    backToPortfolio: "← Back to Portfolio",
    title: "API-Hub Integration System",
    subtitle: "Serverless central repository managing all company integrations",
    description:
      "The API-Hub is a serverless repository responsible for handling all integrations and data workflows within the company. Every integration and routine passes through this system, including all payment system interactions with Oracle NetSuite: Payment System → API-Hub → NetSuite. I am responsible for developing, maintaining, and, in new projects, choosing the appropriate architecture to implement.",
    technologiesTitle: "Technologies Used",
    featuresTitle: "Key Features",
    features: [
      "Centralized handling of all company integrations",
      "Serverless architecture for scalability and reliability",
      "Integration layer between payment system and Oracle NetSuite",
      "Responsible for development, maintenance, and architecture decisions in new projects",
    ],
  },
  pt: {
    backToPortfolio: "← Voltar ao Portfólio",
    title: "Sistema de Integração API-Hub",
    subtitle: "Repositório serverless central que gerencia todas as integrações da empresa",
    description:
      "O API-Hub é um repositório serverless responsável por tratar todos os dados e integrações da empresa. Todo tipo de integração e rotina passa por este sistema, incluindo todas as interações do sistema de pagamentos com o Oracle NetSuite: Sistema de Pagamentos → API-Hub → NetSuite. Sou responsável por desenvolver, dar manutenção e, em novos projetos, escolher a arquitetura mais adequada para implementar.",
    technologiesTitle: "Tecnologias Utilizadas",
    featuresTitle: "Principais Funcionalidades",
    features: [
      "Gerenciamento centralizado de todas as integrações da empresa",
      "Arquitetura serverless para escalabilidade e confiabilidade",
      "Camada de integração entre sistema de pagamentos e Oracle NetSuite",
      "Responsável pelo desenvolvimento, manutenção e decisões de arquitetura em novos projetos",
    ],
  },
};


  const pt = projectTranslations[language]

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        isDark ? "bg-zinc-950 text-zinc-100" : "bg-white text-zinc-900"
      }`}
    >
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <a
            href="/"
            className={`flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm transition-colors group`}
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            {pt.backToPortfolio.replace("← ", "")}
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === "en" ? "pt" : "en")}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200"
                  : "hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900"
              }`}
              aria-label="Toggle language"
            >
              <Globe size={18} />
            </button>

            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200"
                  : "hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4">{pt.title}</h1>
        <p className={`mb-8 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>{pt.subtitle}</p>

        <div className={`space-y-6 leading-relaxed ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
          <p>{pt.description}</p>

          <h2 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? "text-white" : "text-zinc-900"}`}>
            {pt.technologiesTitle}
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Python", "Pandas", "AWS", "Step Function", "DynamoDB", "S3", "Serverless"].map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-md text-sm ${
                  isDark ? "bg-zinc-800 text-zinc-300" : "bg-zinc-100 text-zinc-700"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <h2 className={`text-xl font-semibold mt-8 mb-4 ${isDark ? "text-white" : "text-zinc-900"}`}>
            {pt.featuresTitle}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {pt.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
