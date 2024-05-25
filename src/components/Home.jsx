import { useState, useEffect } from 'react';
import styles from '../assets/stylesComponents/home.module.scss';


const Home = () => {
  const [text, setText] = useState('')
  const fullText = "Let's work together!"

  useEffect(()=>{
    let index = 0;
    const interval = setInterval(()=>{
      setText(fullText.slice(0, index));
      index++
      if(index > fullText.length){
        clearInterval(interval)
      }
    },100);
    return ()=> clearInterval(interval)
  }, [])

  return (
    <div className={styles.home} id='home'>
      <div className={styles.imageContainer}>
        <img src="images/column.svg" alt="Pedro Gonzalez" />
      </div>
      <div className={styles.textContainer}>
        <h1>
          Hello I&apos;am <span className={styles.name}>Pedro González.</span>
          <br />
          <span className={styles.frontend}>Full Stack</span> Developer <br />
        </h1>
        <p>
        Whatever you need, I can help you develop it. 
        </p>
        <p>
          {text}<span className={styles.cursor}>|</span>
        </p>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/pedro-gonzalez-8832a5304/" className={styles.socialIcon}><img src="/icons/linkedin.svg" alt="linkedin" /></a>
          <a href="https://github.com/pedroGonzalezD" className={styles.socialIcon}><img src="/icons/github.svg" alt="github"/></a>
          <a href="https://www.instagram.com/pedgonza0/" className={styles.socialIcon}><img src="/icons/instagram.svg" alt="instagram" /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
