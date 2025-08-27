"use client"

import { useState } from "react"
import { Globe, Sun, Moon, ArrowLeft } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function LoginPage() {
  const [isDark, setIsDark] = useState(true)
  const { language, setLanguage } = useTranslation()

  const projectTranslations = {
  en: {
    backToPortfolio: "← Back to Portfolio",
    title: "Video Conference Login Page",
    subtitle: "Access point for users to log in or sign up to the company's video conferencing system",
    description:
      "This login page was developed as part of the company's landing page, providing a seamless entry point to the internal video conferencing system. Users could log in with existing credentials or create a new account directly from the interface, ensuring quick and secure access to virtual meetings.",
    technologiesTitle: "Technologies Used",
    featuresTitle: "Key Features",
    features: [
      "Integrated login and registration form",
      "Secure authentication and data handling",
      "User-friendly and responsive interface",
    ],
  },
  pt: {
    backToPortfolio: "← Voltar ao Portfólio",
    title: "Página de Login para Videoconferência",
    subtitle: "Ponto de acesso para usuários realizarem login ou cadastro no sistema de videoconferência da empresa",
    description:
      "Esta página de login foi desenvolvida como parte da landing page da empresa, oferecendo um ponto de entrada rápido e integrado ao sistema interno de videoconferência. Os usuários podiam acessar com credenciais existentes ou criar uma nova conta diretamente na interface, garantindo acesso seguro e ágil às reuniões virtuais.",
    technologiesTitle: "Tecnologias Utilizadas",
    featuresTitle: "Principais Funcionalidades",
    features: [
      "Formulário integrado de login e cadastro",
      "Autenticação segura e tratamento adequado de dados",
      "Interface responsiva e fácil de usar",
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
            {["Angular", "HTML", "CSS", "SASS", "Responsive Desing", "Material UI"].map((tech) => (
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
