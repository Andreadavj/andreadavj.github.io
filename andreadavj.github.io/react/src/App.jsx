import Hero from "./components/hero"
import Navbar from "./components/navbar"
import About from "./components/about"
import Skills from "./components/skills"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Footer from "./components/footer"
import { ThemeProvider } from "./components/theme-provider"
import './app.css';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
