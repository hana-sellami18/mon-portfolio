import { useState } from 'react';
import './Experience.css';

const EXPERIENCES = [
  {
    company: 'ASM – All Soft Multimédia',
    role: 'Développeuse Full-Stack – Projet de Fin d\'Études (PFE)',
    tech: 'Spring Boot / Angular / Flutter / IA',
    period: 'Fév 2026 – En cours',
    location: 'Sfax, Tunisie',
    badge: 'En cours',
    tasks: [
      'Développement d\'une plateforme intelligente de gestion des stages intégrant une application mobile Flutter et une interface web Angular.',
      'Conception du backend Spring Boot et développement d\'API REST sécurisées.',
      'Implémentation d\'un système d\'authentification avec gestion des rôles et des accès.',
      'Gestion complète du cycle de candidature et suivi des stages.',
      'Conception d\'un module d\'intelligence artificielle pour l\'analyse de CV et le scoring de compatibilité compétences/offres.',
      'Mise en place d\'une démarche DevOps : intégration et déploiement continus (CI/CD), conteneurisation avec Docker.',
    ],
  },
  {
    company: 'ASM – All Soft Multimédia',
    role: 'Stagiaire Développeuse Full-Stack – Projet de Fin d\'Année (PFA)',
    tech: 'Angular / Flask / Python',
    period: 'Juin – Août 2025',
    location: 'Sfax, Tunisie',
    badge: null,
    tasks: [
      'Développement d\'une application web de résumé automatique de documents basée sur l\'IA.',
      'Développement du backend en Python (Flask) pour le traitement et l\'analyse de texte.',
      'Intégration de modèles de summarization T5 et BART.',
      'Implémentation d\'algorithmes RAKE et TextRank pour l\'extraction de mots-clés.',
      'Développement d\'une interface web Angular pour soumettre et visualiser les résumés.',
    ],
  },
];

const PROJECTS = [
  {
    id: 1,
    title: 'Résumé automatique de documents IA',
    desc: 'Développement d\'une application web de résumé automatique de documents basée sur l\'intelligence artificielle. Intégration de modèles T5 et BART pour la summarization, algorithmes RAKE et TextRank pour l\'extraction de mots-clés, avec une interface Angular interactive.',
    tech: ['Angular', 'Flask', 'Python', 'T5', 'BART', 'RAKE', 'TextRank'],
    category: 'IA & Web',
    emoji: '🤖',
    demo: '',
    github: 'https://github.com/hana-sellami18/pfa-project',
  },
  {
    id: 2,
    title: 'Lifestyle Aura',
    desc: 'Application mobile de bien-être pour le suivi des activités physiques, alimentation et habitudes quotidiennes. Fonctionnalités : programmes d\'entraînement, recettes healthy, suivi hydratation, humeur et sommeil, notifications personnalisées.',
    tech: ['Flutter', 'Hive', 'FL Chart', 'Image Picker', 'Camera', 'Flutter Local Notifications'],
    category: 'Mobile',
    emoji: '🏃‍♀️',
    demo: '',
    github: 'https://github.com/hana-sellami18/Lifestyle-Aura-Application-mobile-de-bien--tre',
  },
  {
    id: 3,
    title: 'Architecture Microservices Restaurant',
    desc: 'Conception et développement d\'un système de gestion de restaurant basé sur une architecture microservices. Inclut des microservices métiers, API REST, documentation Swagger et gestion des exceptions.',
    tech: ['Spring Boot', 'Eureka', 'Config Server', 'API Gateway', 'Swagger', 'MySQL'],
    category: 'Backend',
    emoji: '🍽️',
    demo: '',
    github: 'https://github.com/hana-sellami18/mon-projet-microservices',
  },
  {
    id: 4,
    title: 'Application de gestion vétérinaire',
    desc: 'Développement d\'une application de gestion de données pour vétérinaire en ligne avec opérations CRUD complètes pour un traitement et une administration efficaces des informations médicales des animaux.',
    tech: ['C#', '.NET', 'MySQL'],
    category: 'Backend',
    emoji: '🗂️',
    demo: '',
    github: 'https://github.com/hana-sellami18/PetClinic',
  },
  {
    id: 5,
    title: 'Jeux Vidéo 2D & 3D Unity',
    desc: 'Conception et développement de mini-jeux interactifs 2D et 3D avec logique de mouvement, gestion des collisions, mécaniques de jeu variées et interfaces utilisateur immersives.',
    tech: ['Unity', 'C#', '2D', '3D'],
    category: 'Game Dev',
    emoji: '🎮',
    demo: '',
    github: '',
  },
  {
    id: 6,
    title: 'Animalerie en ligne',
    desc: 'Conception et développement d\'un site e-commerce pour produits pour animaux avec interface dynamique et intuitive, gestion des produits et système de commande en ligne.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    emoji: '🐾',
    demo: '',
    github: '',
  },
  {
    id: 7,
    title: 'Smart Agriculture — IA & IoT',
    desc: 'Conception d\'un système agricole intelligent pour l\'optimisation de l\'irrigation. Module Computer Vision pour la détection du stress hydrique et des maladies foliaires par analyse d\'images (CNN / transfer learning). Intégration IoT pour la collecte temps réel des données capteurs (humidité sol, niveau des puits, débit d\'eau). Agrégation de données météorologiques via API externe pour générer des recommandations d\'irrigation et des alertes automatiques.',
    tech: ['Python', 'CNN', 'Transfer Learning', 'IoT', 'Computer Vision', 'TensorFlow', 'API REST'],
    category: 'IA & IoT',
    emoji: '🌱',
    demo: '',
    github: '',
  },
];

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
    </svg>
  );
}

function ProjectCard({ p }) {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div className="proj__card">
      <div className="proj__emoji">{p.emoji}</div>
      {p.category && <span className="proj__cat">{p.category}</span>}
      <h3 className="proj__title">{p.title}</h3>
      {showDesc && <p className="proj__desc">{p.desc}</p>}
      <div className="proj__tags">
        {p.tech.map(t => (
          <span key={t} className="proj__tag">{t}</span>
        ))}
      </div>
      <div className="proj__actions">
        <button
          className="proj__btn proj__btn--details"
          onClick={() => setShowDesc(!showDesc)}>
          📄 {showDesc ? 'Masquer' : 'Description'}
        </button>
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noopener noreferrer"
             className="proj__btn proj__btn--demo">
            🚀 Démo
          </a>
        )}
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer"
             className="proj__btn proj__btn--github">
            <GitHubIcon /> Code
          </a>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <>
      {/* ── Expérience professionnelle ── */}
      <section className="experience" id="experience">
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Expérience <span>professionnelle</span></h2>
          <p className="section-subtitle">Mon parcours en entreprise</p>

          <div className="exp__timeline">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className={`exp__card${exp.badge ? ' exp__card--active' : ''}`}>
                <div className="exp__card-header">
                  <div>
                    <h3 className="exp__role">{exp.role}</h3>
                    <div className="exp__badges">
                      <span className="exp__tech-badge">{exp.tech}</span>
                      {exp.badge && <span className="exp__status-badge">{exp.badge}</span>}
                    </div>
                  </div>
                  <div className="exp__meta">
                    <span className="exp__company">{exp.company}</span>
                    <span className="exp__period">{exp.period}</span>
                    <span className="exp__location">📍 {exp.location}</span>
                  </div>
                </div>
                <ul className="exp__tasks">
                  {exp.tasks.map((t, j) => (
                    <li key={j}><span className="exp__bullet" /> {t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projets ── */}
      <section className="experience" id="projects">
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Mes <span>projets</span></h2>
          <p className="section-subtitle">Ce que j'ai construit</p>

          <div className="proj__grid">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}