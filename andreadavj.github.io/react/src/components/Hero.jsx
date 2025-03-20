"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Code, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl opacity-50 animate-rotate" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/30 rounded-full filter blur-3xl opacity-50 animate-rotate"
          style={{ animationDirection: "reverse" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-secondary/30 rounded-full filter blur-3xl opacity-40 animate-rotate"
          style={{ animationDuration: "10s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 glow-effect"
          >
            <span className="text-sm font-medium text-primary glow-text">Desarrolladora Front-end</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-poppins"
          >
            Hola, soy <span className="gradient-text glow-text">Andrea Valverde</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Transformando ideas en experiencias digitales interactivas con React, JavaScript y CSS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="#portfolio">
              <Button size="lg" className="rounded-full tech-gradient hover:opacity-90 shadow-lg">
                <Briefcase className="mr-2 h-5 w-5" />
                Ver Portafolio
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="rounded-full tech-border hover:bg-primary/10">
                <Code className="mr-2 h-5 w-5" />
                Contactar
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <Link href="#about">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-primary hover:text-primary/80 hover:bg-primary/10"
          >
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </Link>
      </div>
    </section>
  )
}

