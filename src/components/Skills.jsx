import { useState} from 'react';
import style from "../assets/stylesComponents/skills.module.scss";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  return (
    <section id="skills" className={style.section}>
      <h2>Skills</h2>
      <div className={style.option}>
        <button 
          className={`${activeCategory === 'frontend' ? style.active : ''}`}
          onClick={() => setActiveCategory('frontend')}
        >
          Frontend
        </button>
        <button 
          className={`${activeCategory === 'backend' ? style.active : ''}`}
          onClick={() => setActiveCategory('backend')}
        >
          Backend
        </button>
        <button 
          className={`${activeCategory === 'tools' ? style.active : ''}`}
          onClick={() => setActiveCategory('tools')}
        >
          Tools
        </button>
      </div>
      <div className={style.skills}>
        {activeCategory === 'frontend' && (
          <div>
            <ul>
              <li><img src="/iconSkills/html5.svg" alt="HTML5" /> HTML5</li>
              <li><img src="/iconSkills/css.svg" alt="CSS" /> CSS</li>
              <li><img src="/iconSkills/sass.svg" alt="SASS" /> SASS</li>
              <li><img src="/iconSkills/javascript.svg" alt="Javascript" /> Javascript</li>
              <li><img src="/iconSkills/react.svg" alt="React" /> React</li>
            </ul>
          </div>
        )}
        {activeCategory === 'backend' && (
          <div >
            <ul>
              <li><img src="/iconSkills/express.svg" alt="Express.js" /> Express.js</li>
              <li><img src="/iconSkills/mongodb.svg" alt="MongoDB" />MongoDB</li>
              <li><img src="/iconSkills/mongoose.svg" alt="Mongoose" />Mongoose</li>
              <li><img src="/iconSkills/nodejs.svg" alt="Node.js" /> Node.js</li>
            </ul>
          </div>
        )}
        {activeCategory === 'tools' && (
          <div>
            <ul>
              <li><img src="/iconSkills/git.svg" alt="Git" /> Git</li>
              <li><img src="/iconSkills/webpack.svg" alt="Webpack" />Webpack</li>
              <li><img src="/iconSkills/babel.svg" alt="Babel" />Babel</li>
              <li><img src="/iconSkills/vite.svg" alt="Vite" /> Vite</li>
              <li><img src="/iconSkills/insomnia.svg" alt="Insomnia" /> Insomnia</li>
              <li><img src="/iconSkills/vsCode.svg" alt="VSCode" /> VSCode</li>
              <li><img src="/iconSkills/npm.svg" alt="NPM" />NPM</li>
              <li><img src="/iconSkills/figma.svg" alt="figma" />Figma</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;