"use client"

import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Globe, Sun, Moon, ArrowUpRight } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)
  const t = useTranslations("Index")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "pt" : "en"
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  const experienceList = t.raw("experiences") as Array<{
    timeCompany: string
    current?: string
    title: string
    companyName: string
    description: string
    projects: Array<{ name: string; url: string }>
  }>

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
                title={locale === "en" ? "Português" : "English"}
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
              {t("and")}{" "}
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
                href="/DaviSimaoCV.pdf"
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
            {experienceList.map((exp, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-sm ${isDark ? "text-zinc-500" : "text-zinc-500"}`}>
                    {exp.timeCompany}
                  </span>
                  {exp.current && (
                    <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                      {exp.current}
                    </Badge>
                  )}
                </div>
                <h3 className={`font-medium text-lg mb-1 ${isDark ? "text-white" : "text-zinc-900"}`}>
                  {exp.title} - <span className="text-emerald-400">{exp.companyName}</span>
                </h3>
                <p className={`leading-relaxed mb-4 ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
                  {exp.description}
                </p>

                {exp.projects && exp.projects.length > 0 && (
                  <div className="mt-6">
                    <h4 className={`text-sm font-medium mb-3 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                      {t("projects")}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {exp.projects.map((project, projectIndex) => (
                        <a
                          key={projectIndex}
                          href={`/${locale}${project.url}`}
                          className={`group flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                            isDark
                              ? "border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-900/50"
                              : "border-zinc-200 hover:border-emerald-500/50 hover:bg-emerald-50/50"
                          }`}
                        >
                          <span
                            className={`text-sm font-medium ${
                              isDark
                                ? "text-zinc-200 group-hover:text-emerald-400"
                                : "text-zinc-700 group-hover:text-emerald-600"
                            }`}
                          >
                            {project.name}
                          </span>
                          <ArrowUpRight
                            size={16}
                            className={`transition-all duration-200 ${
                              isDark
                                ? "text-zinc-500 group-hover:text-emerald-400"
                                : "text-zinc-400 group-hover:text-emerald-600"
                            } group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
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
