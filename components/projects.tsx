"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"


export default function Projects() {
  const { t } = useLanguage()
  
  const projects = [
    {
      title: t("projects.picorp.title"),
      description: t("projects.picorp.description"),
      technologies: ["Firebase", "JavaScript", "TypeScript","Svelte",],
      demoUrl: "https://rimac-project-ten.vercel.app/",
      codeUrl: "https://github.com/jfacabreran/rimac-project",
      image: "/picorp.png",
    },
    {
      title: t("projects.rimac.title"),
      description: t("projects.rimac.description"),
      technologies: ["JavaScript", "TypeScript","React", "Vite"],
      demoUrl: "https://rimac-project-ten.vercel.app/",
      codeUrl: "https://github.com/jfacabreran/rimac-project",
      image: "/rimac.png",
    },
    {
      title: t("projects.limanexus.title"),
      description: t("projects.limanexus.description"),
      technologies: ["Svelte", "TypeScript", "Google Forms", "JavaScript"],
      demoUrl: "https://limanexus.pe/",
      codeUrl: "https://github.com/jfacabreran/limaNexus",
      image: "/limanexus.png",
    },
    {
      title: t("projects.somosbelcorp.title"),
      description: t("projects.somosbelcorp.description"),
      technologies: ["Angular", "TypeScript", "React", "JavaScript", "C#", "VisualStudio Community"],
      demoUrl: "https://www.somosbelcorp.com/",
      codeUrl: "#",
      image: "/belcorp.png",
    },
    {
      title: t("projects.linceimportaciones.title"),
      description: t("projects.linceimportaciones.description"),
      technologies: ["Svelte", "TypeScript", "Google Forms", "JavaScript", "Google Sheets"],
      demoUrl: "https://www.linceimportaciones.com/",
      codeUrl: "https://github.com/jfacabreran/Lince-Importaciones",
      image: "/lince.png",
    },

  ]
  
  return (
    <section id="projects" className="py-20 px-6 relative bg-cyber-darker">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-cyber-blue">{t("projects.title")}</h2>
          <div className="h-1 w-24 bg-cyber-lime mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-cyber-gray/60 backdrop-blur-sm border border-cyber-purple/50 rounded-lg overflow-hidden shadow-cyber-card hover:shadow-neon-purple transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyber-lime transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyber-purple/30 border border-cyber-purple/60 rounded-full text-sm text-cyber-purple-glow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button 
                    className="bg-cyber-lime hover:bg-cyber-lime-glow text-black font-semibold shadow-neon-lime hover:shadow-neon-lime transition-all duration-300"
                    onClick={() => window.open(project.demoUrl, "_blank", "noopener,noreferrer")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t("projects.viewDemo")}
                  </Button>

                  <Button
                    variant="outline"
                    className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black shadow-neon-blue hover:shadow-neon-blue transition-all duration-300 bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    {t("projects.viewCode")}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
