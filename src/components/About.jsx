import style from "../assets/stylesComponents/about.module.scss"

const About = () => (
  <section id="about" className={style.section}>
    <div>
      <img src="" alt="Pedro Gonzalez" />
    </div>
    <h2>About Me</h2>
    <div className={style.description}>
    <p>
      Hi, I&apos;m Pedro Gonzalez, a passionate full-stack developer with a strong background in building dynamic and responsive web applications. I have honed my skills in both front-end and back-end technologies.
    </p>
    <br />
    <p>
      I am proficient in JavaScript, React, Node.js, and have a deep understanding of CSS and SCSS for crafting beautiful and maintainable styles. My projects often involve using modern frameworks and libraries, and I am always eager to learn and adapt to new technologies.
    </p>
    </div>
  </section>
);

export default About;