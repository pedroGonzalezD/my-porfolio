import { useState } from "react";
import style from "../assets/stylesComponents/header.module.scss"
import Hamburger from "./Hamburger";

const Header = () =>{
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () =>{
    setIsOpen(!isOpen)
  };

  return(
    <header className={style.header}>
        <a href="#home" className={style.a}>
          <h1>
            Pedro González
          </h1>
        </a>
        <Hamburger onClick={toggleMenu} isOpen={isOpen}/>
        <div className={`${style.overlay} ${isOpen ? style.show : ''}`} onClick={toggleMenu}></div>
        <nav className={`${style.nav} ${isOpen ? style.open : ''}`} >
          <ul>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" onClick={toggleMenu}>skills</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header