import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/contact.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  

  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
