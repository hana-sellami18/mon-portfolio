import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Hana<span>.</span></span>
          <p>Développeuse Full Stack passionnée par l'IA</p>
        </div>
        <div className="footer__links">
          <a href="mailto:hanasellami18@gmail.com">hanasellami18@gmail.com</a>
          <a href="https://linkedin.com/in/hana-sellami" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} Hana Sellami — Tous droits réservés</p>
      </div>
    </footer>
  );
}