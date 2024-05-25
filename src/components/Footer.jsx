import styles from '../assets/stylesComponents/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Pedro Gonzalez. All rights reserved.</p>
        <span>Made in React</span>
    </footer>
  );
};

export default Footer;
