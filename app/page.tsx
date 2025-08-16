"use client"

import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Globe, Sun, Moon } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"


export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)
  const { language, t, toggleLanguage, experiences } = useTranslation()

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
              <span className="text-emerald-400 text-sm font-medium">{t("initialText")}</span>
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
                title={isDark ? "Light theme" : "Dark theme"}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-2">{t("name")}</h1>
          <p className={`text-xl mb-6 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>{t("title")}</p>
          <p className={`leading-relaxed ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>{t("subtitle")}</p>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-emerald-400 text-lg font-medium mb-6">{t("aboutMe")}</h2>

          <div className={`space-y-4 leading-relaxed ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
            <p>{t("aboutText1")}</p>

            <p>
              {t("currentlyWorkAt")}{" "}
              <a
                className={`font-medium ${isDark ? "text-white" : "text-zinc-900"} hover:text-emerald-400`}
                target="_blank"
                href="https://jivemaua.com.br/"
                rel="noreferrer"
              >
                JiveMaua{" "}
              </a>
              {t("aboutText2")}
            </p>

            <p>{t("aboutText3")}</p>

            <p>
              {t("pastWork")}{" "}
              <a
                className={`font-medium ${isDark ? "text-white" : "text-zinc-900"} hover:text-emerald-500`}
                target="_blank"
                href="https://vipsolutions.com.br/"
                rel="noreferrer"
              >
                {t("companiesMessaging")}
              </a>{" "}
              {language === "en" ? "and" : "e"}{" "}
              <a
                className={`font-medium ${isDark ? "text-white" : "text-zinc-900"} hover:text-emerald-500`}
                target="_blank"
                href="https://vipsolutions.com.br/"
                rel="noreferrer"
              >
                {t("whitelabelSolutions")}
              </a>
              {t("pastWorkDescription")}
            </p>

            <p>{t("aboutText4")}</p>

            <p>
              <a
                href="resume.pdf"
                target="_blank"
                className="text-emerald-400 hover:text-emerald-300 underline transition-colors"
                rel="noreferrer"
              >
                {t("resumeLink")}
              </a>
            </p>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-emerald-400 text-lg font-medium mb-8">{t("workExperience")}</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-sm ${isDark ? "text-zinc-500" : "text-zinc-500"}`}>
                    {exp.timeCompany[language]}
                  </span>
                  {exp.current && (
                    <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                      {exp.current[language]}
                    </Badge>
                  )}
                </div>
                <h3 className={`font-medium text-lg mb-1 ${isDark ? "text-white" : "text-zinc-900"}`}>
                  {exp.title[language]} - <span className="text-emerald-400">{exp.companyName}</span>
                </h3>
                <p className={`leading-relaxed mb-4 ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
                  {exp.description[language]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.stacks.map((stack, stackIndex) => (
                    <Badge
                      key={stackIndex}
                      variant="outline"
                      className={`text-xs ${isDark ? "text-zinc-300" : "text-zinc-700"}`}
                    >
                      {stack}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
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
              href="https://www.linkedin.com/in/davisanchessimao"
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
