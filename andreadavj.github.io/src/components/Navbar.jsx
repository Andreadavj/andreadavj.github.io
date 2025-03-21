"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mí", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Portafolio", href: "#portfolio" },
  { name: "Contacto", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="#home" className="text-xl font-bold gradient-text">
              Andrea Valverde
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex items-center gap-2 ml-4">
                <Link href="https://github.com/Andreadavj" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/dorisvalverde/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full border-primary/50 hover:bg-primary/20"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all text-yellow-400 dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all text-primary dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2 rounded-full border-primary/50 hover:bg-primary/20"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all text-yellow-400 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all text-primary dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="rounded-full">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-2 pl-3">
              <Link href="https://github.com/Andreadavj" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/dorisvalverde/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

