import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-xl font-bold gradient-text glow-text">
              Andrea Valverde
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">Desarrolladora Front-end | React | JavaScript | CSS</p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/Andreadavj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
            >
              <Github className="h-5 w-5 text-primary" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/dorisvalverde/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-accent/20 hover:bg-accent/40 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-accent" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:contacto@andreavalverde.com"
              className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/40 transition-colors"
            >
              <Mail className="h-5 w-5 text-secondary" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Andrea Valverde. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

