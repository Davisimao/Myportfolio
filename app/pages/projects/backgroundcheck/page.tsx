"use client"

import { useState } from "react"
import { Globe, Sun, Moon, ArrowLeft } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function BackgroundCheck() {
  const [isDark, setIsDark] = useState(true)
  const { language, setLanguage } = useTranslation()

  const projectTranslations = {
  en: {
    backToPortfolio: "← Back to Portfolio",
    title: "Background Check Automation",
    subtitle: "Automated compliance workflow for supplier risk assessment",
    description:
      "I implement a complete background check flow integrated with the company's payment system and internal intranet (Bubble.io). After a supplier is registered, the compliance team receives an automatically created record in Bubble.io via API, containing five customizable questions to assess impact, probability, and overall risk. Based on the evaluation, compliance can approve or reject the supplier directly from Bubble.io without accessing the payment system. The solution also sends daily email reminders about pending checks. This process, previously handled manually through spreadsheets, is now fully automated, resulting in an estimated 80% time savings for the compliance team.",
    technologiesTitle: "Technologies Used",
    featuresTitle: "Key Features",
    features: [
      "Automatic creation of compliance records via API",
      "Customizable risk evaluation criteria",
      "Integration between payment system and Bubble.io intranet",
      "Daily email reminders for pending checks",
      "80% reduction in compliance processing time",
    ],
  },
  pt: {
    backToPortfolio: "← Voltar ao Portfólio",
    title: "Automação de Background Check",
    subtitle: "Fluxo automatizado de compliance para avaliação de risco de fornecedores",
    description:
      "Implemento um fluxo completo de background check integrado ao sistema de pagamentos e à intranet corporativa (Bubble.io). Após o cadastro de um fornecedor, um registro é criado automaticamente no Bubble.io via API, contendo cinco perguntas personalizáveis para avaliar impacto, probabilidade e risco. Com base nas respostas, o time de compliance pode aprovar ou reprovar o fornecedor diretamente pelo Bubble.io, sem precisar acessar o sistema de pagamentos. A solução também envia diariamente pela manhã um e-mail com fornecedores pendentes de análise. Esse processo, antes feito manualmente em planilhas, agora é totalmente automatizado, gerando uma economia de cerca de 80% no tempo do time de compliance no BackgroundCheck.",
    technologiesTitle: "Tecnologias Utilizadas",
    featuresTitle: "Principais Funcionalidades",
    features: [
      "Criação automática de registros de compliance via API",
      "Critérios de avaliação de risco totalmente personalizáveis",
      "Integração entre sistema de pagamentos e intranet Bubble.io",
      "Envio diário de e-mails com pendências de análise",
      "Economia de aproximadamente 80% no tempo de processamento do compliance",
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
            {["Node.js", "PostgresSQL", "API", "Cognito", "Bubble.io"].map((tech) => (
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
