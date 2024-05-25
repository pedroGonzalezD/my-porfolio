import styles from "../assets/stylesComponents/hamburger.module.scss"

const Hamburger = ({ onClick, isOpen }) => {
  return (
    <div className={`${styles.burger} ${isOpen ? styles.open : ''}`} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;