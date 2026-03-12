import './About.css';

const SKILLS = {
  'Développement Web & Mobile': {
    icon: '💻',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Angular', 'PHP', 'ASP.NET', 'C#', 'Python', 'Java', 'API REST', 'Spring Boot', 'Flask', 'Flutter'],
  },
  'Bases de données & Cloud': {
    icon: '🗄️',
    items: ['MySQL', 'SQL', 'Oracle Database', 'Amazon Web Services (AWS)'],
  },
  'Data & Intelligence Artificielle': {
    icon: '🤖',
    items: ['Big Data', 'Machine Learning', 'NLP', 'Talend', 'Power BI', 'Docker'],
  },
  'IoT & Systèmes connectés': {
    icon: '📡',
    items: ['Capteurs IoT', 'Intégration systèmes intelligents', 'Collecte & analyse de données'],
  },
  'Sécurité & Qualité logicielle': {
    icon: '🔐',
    items: ['ISTQB (Software Testing)', 'Gestion des rôles & authentification', 'Sécurité informatique', 'Systèmes distribués'],
  },
};

const LANGS = [
  { name: 'Arabe', level: 'Maternelle', pct: 100 },
  { name: 'Français', level: 'B2', pct: 72 },
  { name: 'Anglais', level: 'B2', pct: 72 },
  { name: 'Espagnol', level: 'A2', pct: 30 },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="divider" />
        <h2 className="section-title">À propos de <span>moi</span></h2>
        <p className="section-subtitle">Compétences & profil</p>

        <div className="about__grid">
          {/* Bio */}
          <div className="about__bio">
            <div className="about__bio-card">
              <div className="about__bio-icon">🎓</div>
              <div>
                <strong>Formation</strong>
                <p>Licence Génie Logiciel & SI — IIT Sfax (2023 – présent)</p>
              </div>
            </div>
            <div className="about__bio-card">
              <div className="about__bio-icon">📍</div>
              <div>
                <strong>Localisation</strong>
                <p>Sfax, Tunisie</p>
              </div>
            </div>
            <div className="about__bio-card">
              <div className="about__bio-icon">💡</div>
              <div>
                <strong>Intérêts</strong>
                <p>Intelligence artificielle, piano, voyages & nouvelles cultures</p>
              </div>
            </div>
            <div className="about__bio-card">
              <div className="about__bio-icon">🌐</div>
              <div>
                <strong>IEEE</strong>
                <p>Membre active — IEEE Student Branch IIT Sfax</p>
              </div>
            </div>

            {/* Langues */}
            <div className="about__langs">
              <h3>Langues</h3>
              {LANGS.map(l => (
                <div key={l.name} className="about__lang">
                  <div className="about__lang-label">
                    <span>{l.name}</span>
                    <span className="about__lang-level">{l.level}</span>
                  </div>
                  <div className="about__lang-bar">
                    <div className="about__lang-fill" style={{ width: `${l.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="about__skills">
            {Object.entries(SKILLS).map(([cat, { icon, items }]) => (
              <div key={cat} className="about__skill-group">
                <h4 className="about__skill-cat">
                  <span className="about__skill-icon">{icon}</span>
                  {cat}
                </h4>
                <div className="about__skill-tags">
                  {items.map(s => (
                    <span key={s} className="about__tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}