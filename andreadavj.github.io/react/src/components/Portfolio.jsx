"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Proyecto React",
    description: "Aplicación web desarrollada con React y CSS avanzado",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "CSS", "JavaScript"],
    github: "https://github.com/Andreadavj/andreadavj.github.io",
    demo: "#",
    color: "primary",
  },
  {
    title: "Aplicación JavaScript",
    description: "Aplicación interactiva utilizando JavaScript para la web",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Andreadavj/andreadavj.github.io",
    demo: "#",
    color: "accent",
  },
  {
    title: "Diseño Responsivo",
    description: "Proyecto con diseño adaptable a diferentes dispositivos",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["HTML", "CSS Avanzado", "Responsive"],
    github: "https://github.com/Andreadavj/andreadavj.github.io",
    demo: "#",
    color: "secondary",
  },
  {
    title: "Base de Datos SQL",
    description: "Proyecto con implementación de consultas SQL",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["SQL", "Database", "Backend"],
    github: "https://github.com/Andreadavj/andreadavj.github.io",
    demo: "#",
    color: "primary",
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="portfolio" className="section-padding bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Mi Portafolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle max-w-2xl mx-auto"
          >
            Proyectos destacados que he desarrollado
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className={`overflow-hidden card-hover h-full flex flex-col border-${project.color}/30 shadow-sm`}>
                <div className="relative h-48 w-full overflow-hidden">
                  <div className={`absolute inset-0 bg-${project.color}/20 mix-blend-overlay z-10`}></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className={`text-xl font-bold mb-2 text-${project.color}`}>{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className={`bg-${project.color}/10 text-${project.color} hover:bg-${project.color}/20`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className={`border-${project.color}/30 hover:bg-${project.color}/10 hover:text-${project.color}`}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </Button>
                    </Link>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className={`bg-${project.color} hover:bg-${project.color}/90`}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

