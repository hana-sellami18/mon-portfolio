import { useParams, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projectsData';
import './ProjectDetails.css';

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
    </svg>
  );
}

export default function ProjectDetails() {
  const { id } = useParams();
  const project = PROJECTS_DATA.find(p => p.id === Number(id));

  if (!project) return (
    <div className="pd-notfound container">
      <h2>Projet non trouvé</h2>
      <Link to="/projects">← Retour aux projets</Link>
    </div>
  );

  return (
    <main className="pd-page">
      <div className="container">
        <Link to="/projects" className="pd-back">← Retour aux projets</Link>

        <div className="pd-hero">
          {project.emoji    && <div className="pd-emoji">{project.emoji}</div>}
          {project.category && <span className="pd-category">{project.category}</span>}
          <h1>{project.title}</h1>
          <p>{project.description}</p>

          <div className="pd-actions">
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                 className="pd-btn pd-btn--demo">
                🚀 Voir la démo
              </a>
            ) : (
              <span className="pd-btn pd-btn--disabled">🚀 Démo non disponible</span>
            )}

            {project.github ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                 className="pd-btn pd-btn--github">
                <GitHubIcon /> Voir le code
              </a>
            ) : (
              <span className="pd-btn pd-btn--disabled">
                <GitHubIcon /> Dépôt privé
              </span>
            )}
          </div>
        </div>

        <div className="pd-grid">
          {project.features?.length > 0 && (
            <div>
              <h3>Fonctionnalités</h3>
              <ul className="pd-features">
                {project.features.map((f, i) => (
                  <li key={i}><span className="pd-check">✓</span> {f}</li>
                ))}
              </ul>
            </div>
          )}

          {project.tags?.length > 0 && (
            <div>
              <h3>Technologies</h3>
              <div className="pd-tech">
                {project.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}