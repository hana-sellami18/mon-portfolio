import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const tryScroll = (attempts = 0) => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < 15) {
          setTimeout(() => tryScroll(attempts + 1), 100);
        }
      };
      setTimeout(() => tryScroll(), 200);
    }
  }, [location.hash, location.pathname]);

  const scrollToSection = (anchor) => {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return true;
    }
    return false;
  };

  const handleAnchorClick = (e, anchor) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === '/') {
      scrollToSection(anchor);
    } else {
      navigate('/' + anchor);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="/" className="navbar__logo" onClick={e => handleAnchorClick(e, '#hero')}>
          <span className="navbar__logo-h">H</span>ana<span className="navbar__logo-dot">.</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li>
            <a href="#hero" className="navbar__link"
              onClick={e => handleAnchorClick(e, '#hero')}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#about" className="navbar__link"
              onClick={e => handleAnchorClick(e, '#about')}>
              À propos
            </a>
          </li>
          <li>
            <a href="#experience" className="navbar__link"
              onClick={e => handleAnchorClick(e, '#experience')}>
              Expérience
            </a>
          </li>
          <li>
            <a href="#projects" className="navbar__link"
              onClick={e => handleAnchorClick(e, '#projects')}>
              Projets
            </a>
          </li>
          <li>
            <a href="#certificats" className="navbar__link"
              onClick={e => handleAnchorClick(e, '#certificats')}>
              Certificats
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar__link"
              onClick={e => handleAnchorClick(e, '#contact')}>
              Contact
            </a>
          </li>
          <li>
            <a href="/Hana_SELLAMI_CV.pdf" download className="navbar__cta">
              Télécharger mon CV
            </a>
          </li>
        </ul>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}