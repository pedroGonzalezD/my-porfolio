import { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../assets/stylesComponents/contact.module.scss';

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const copyToClipboard = () => {
    const email = 'pedgonza01@gmail.com';
    navigator.clipboard.writeText(email);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jn35h7m', 'template_lwsp41c', e.target, 'POD3JN5FHqwe7Gawy')
      .then((result) => {
          console.log(result.text);
          setFormSuccess(true);
          setTimeout(() => {
            setFormSuccess(false);
          }, 2000);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section className={styles.contact} id='contact'>
      <h2>Contact Me</h2>
      <form className={styles.contactForm} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="website" placeholder="Your website (If exists)" />
        <textarea name="message" placeholder="How can I help?" required></textarea>
        <button type="submit">Get In Touch</button>
      </form>
      {formSuccess && <div className={styles.formMessage}>Message Sent!</div>}
      <div className={styles.emailContainer}>
        <span className={styles.email}>pedgonza01@gmail.com</span>
        <button onClick={copyToClipboard} className={styles.copyButton}>Copy Email</button>
      </div>
      {copySuccess && <div className={styles.copyMessage}>Copied!</div>}
      <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/pedro-gonzalez-8832a5304/" className={styles.socialIcon}><img src="/icons/linkedin.svg" alt="linkedin" /></a>
        <a href="https://github.com/pedroGonzalezD" className={styles.socialIcon}><img src="/icons/github.svg" alt="github" /></a>
        <a href="https://www.instagram.com/pedgonza0/" className={styles.socialIcon}><img src="/icons/instagram.svg" alt="instagram" /></a>
        <a href="https://wa.me/18294013950" className={styles.socialIcon}><img src="/icons/whatsapp.svg" alt="whatsapp" /></a>
      </div>
    </section>
  );
};

export default Contact;