"use client"

import { useState } from "react"
import { Globe, Sun, Moon, ArrowLeft } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function Jivemauapay() {
  const [isDark, setIsDark] = useState(true)
  const { language, setLanguage, t } = useTranslation()

const projectTranslations = {
  en: {
    backToPortfolio: "← Back to Portfolio",
    title: "JiveMauaPay – Internal Payment System",
    subtitle: "Full-stack development and maintenance of the company's internal payment system",
    description:
      "I am responsible for full-stack development, maintenance, and implementing new features in JiveMauaPay, the internal payment system that processes around half a billion reais. The system centralizes and facilitates company payments, including payment approvals and spending limits. My work includes developing integrations with Oracle NetSuite ERP, Bubble, and external systems, refactoring code, optimizing performance, and automating routines.",
    technologiesTitle: "Technologies Used",
    featuresTitle: "Key Features",
    features: [
      "Full-stack development and maintenance",
      "Implementation of new functionalities and code refactoring",
      "Integration with Oracle NetSuite, Bubble, and external systems",
      "Payment approval workflows and spending limits",
      "Performance optimization and automation of routines",
    ],
  },
  pt: {
    backToPortfolio: "← Voltar ao Portfólio",
    title: "JiveMauaPay – Sistema Interno de Pagamentos",
    subtitle: "Desenvolvimento full-stack e manutenção do sistema interno de pagamentos da empresa",
    description:
      "Sou responsável pelo desenvolvimento full-stack, manutenção e implementação de novas funcionalidades no JiveMauaPay, o sistema interno de pagamentos que processa cerca de meio bilhão de reais. O sistema centraliza e facilita os pagamentos da empresa, incluindo aprovação de pagamentos e limites de alçada. Meu trabalho inclui desenvolvimento de integrações com Oracle NetSuite ERP, Bubble e sistemas externos, refatoração de código, otimização de performance e automatização de rotinas.",
    technologiesTitle: "Tecnologias Utilizadas",
    featuresTitle: "Principais Funcionalidades",
    features: [
      "Desenvolvimento e manutenção full-stack",
      "Implementação de novas funcionalidades e refatoração de código",
      "Integração com Oracle NetSuite, Bubble e sistemas externos",
      "Fluxos de aprovação de pagamentos e limites de alçada",
      "Otimização de performance e automatização de rotinas",
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
            {["React", "Node.js", "PostgresSQL", "Sequelize", "DynamoDB"].map((tech) => (
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
