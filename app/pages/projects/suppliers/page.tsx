"use client"

import { useState } from "react"
import { Globe, Sun, Moon, ArrowLeft } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function Suppliers() {
  const [isDark, setIsDark] = useState(true)
  const { language, setLanguage } = useTranslation()

  const projectTranslations = {
  en: {
    backToPortfolio: "← Back to Portfolio",
    title: "Supplier Management Module",
    subtitle: "Automated supplier registration integrated with Oracle NetSuite ERP",
    description:
      "Within the company's payment system, I developed a complete supplier registration module fully integrated with the Oracle NetSuite ERP. The module allowed registering suppliers with essential data such as name, document, bank account, and address. Previously, the IT team manually registered suppliers in both the payment system and the ERP through support tickets. My development automated this process, reducing around 25% of the support team's workload.",
    technologiesTitle: "Technologies Used",
    featuresTitle: "Key Features",
    features: [
      "Front-end form with field validations for supplier data",
      "Backend APIs for database persistence",
      "API integration with NetSuite via AWS Step Functions",
      "Database schema updates with new tables, columns, and triggers",
      "Reduction of ~25% in support ticket volume",
    ],
  },
  pt: {
    backToPortfolio: "← Voltar ao Portfólio",
    title: "Módulo de Gestão de Fornecedores",
    subtitle: "Cadastro automatizado de fornecedores integrado ao ERP Oracle NetSuite",
    description:
      "Dentro do sistema de pagamentos da empresa, desenvolvi um módulo completo de cadastro de fornecedores, totalmente integrado ao ERP Oracle NetSuite. O módulo permite registrar fornecedores com dados essenciais como nome, documento, conta bancária e endereço. Antes, a equipe de TI precisava realizar o cadastro manualmente tanto no sistema de pagamentos quanto no ERP, a partir de chamados de sustentação. Essa automação reduziu cerca de 25% da demanda de chamados da área.",
    technologiesTitle: "Tecnologias Utilizadas",
    featuresTitle: "Principais Funcionalidades",
    features: [
      "Formulário no front-end com validações de campos para dados do fornecedor",
      "APIs no backend para persistência no banco de dados",
      "Integração com o NetSuite via AWS Step Functions",
      "Criação de novas tabelas, colunas e triggers no banco de dados",
      "Redução de aproximadamente 25% nos chamados da sustentação",
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
            {["React", "TypeScript", "Tailwind", "Node.js", "Sequelize ORM", "PostgresSQL", "Netsuite ERP", "Lambda AWS", "Step Function"].map((tech) => (
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
