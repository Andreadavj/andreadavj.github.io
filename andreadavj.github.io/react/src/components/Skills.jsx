"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Palette, Database, GitBranch, Layers, Cpu } from "lucide-react"

const skills = [
  {
    category: "Desarrollo Front-end",
    icon: <Code2 className="h-6 w-6" />,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Diseño UI/UX",
    icon: <Palette className="h-6 w-6" />,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    items: ["Responsive Design", "CSS Avanzado", "Animaciones", "Accesibilidad"],
  },
  {
    category: "Bases de Datos",
    icon: <Database className="h-6 w-6" />,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
    items: ["SQL", "Modelado de datos", "Consultas"],
  },
  {
    category: "Control de Versiones",
    icon: <GitBranch className="h-6 w-6" />,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    items: ["Git", "GitHub", "Flujos de trabajo colaborativos"],
  },
  {
    category: "Herramientas de Desarrollo",
    icon: <Layers className="h-6 w-6" />,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    items: ["VS Code", "npm", "Webpack", "DevTools"],
  },
  {
    category: "Otras Habilidades",
    icon: <Cpu className="h-6 w-6" />,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
    items: ["Metodologías Ágiles", "Trabajo en equipo", "Resolución de problemas"],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Mis Habilidades
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle max-w-2xl mx-auto"
          >
            Tecnologías y herramientas que domino
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border ${skill.borderColor} card-hover`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-full ${skill.bgColor} mr-3`}>
                  <div className={skill.color}>{skill.icon}</div>
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className={`w-2 h-2 ${skill.color.replace("text-", "bg-")} rounded-full mr-2`}></span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

