"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Briefcase, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-padding bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Sobre Mí
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle max-w-2xl mx-auto"
          >
            Ingeniera en Construcción reconvertida a Desarrolladora Front-end
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-full h-[400px] rounded-2xl overflow-hidden tech-border glow-effect">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Andrea Valverde"
                  width={500}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 tech-gradient rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">Front-end</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Apasionada por crear experiencias digitales impactantes</h3>
            <p className="text-muted-foreground mb-6">
              Soy una desarrolladora front-end con formación en Ingeniería en Construcción de INACAP, que ha encontrado
              su verdadera pasión en el desarrollo web. Mi experiencia técnica combinada con mi creatividad me permite
              construir interfaces atractivas y funcionales.
            </p>

            <div className="space-y-4">
              <Card className="card-hover border-primary/20 shadow-sm">
                <CardContent className="p-4 flex items-start">
                  <div className="mr-4 mt-1 bg-primary/20 p-2 rounded-full">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Educación</h4>
                    <p className="text-sm text-muted-foreground">
                      Ingeniería en Construcción - INACAP
                      <br />
                      Desarrollo Front-end con React - Desafío Latam
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover border-accent/20 shadow-sm">
                <CardContent className="p-4 flex items-start">
                  <div className="mr-4 mt-1 bg-accent/20 p-2 rounded-full">
                    <Briefcase className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Experiencia</h4>
                    <p className="text-sm text-muted-foreground">
                      Desarrolladora Front-end con experiencia en React, JavaScript, CSS avanzado y SQL.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover border-secondary/20 shadow-sm">
                <CardContent className="p-4 flex items-start">
                  <div className="mr-4 mt-1 bg-secondary/20 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Intereses</h4>
                    <p className="text-sm text-muted-foreground">
                      Desarrollo web, diseño de interfaces, nuevas tecnologías y aprendizaje continuo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

