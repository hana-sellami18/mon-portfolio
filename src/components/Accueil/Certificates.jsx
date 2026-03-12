import { CERTIFICATS_DATA } from '../../data/certificatesData';
import './Certificates.css';

export default function Certificates() {
  return (
    <section className="cert" id="certificats">
      <div className="container">
        <div className="divider" />
        <h2 className="section-title">Mes <span>certificats</span></h2>
        <p className="section-subtitle">Formations & certifications obtenues</p>

        <div className="cert-grid">
          {CERTIFICATS_DATA.map(cert => (
            <div key={cert.id} className="cert-card">
              <div className="cert-card__emoji">{cert.emoji}</div>
              <span className="cert-card__cat">{cert.category}</span>
              <h3 className="cert-card__title">{cert.title}</h3>
              <p className="cert-card__issuer">🏛️ {cert.issuer}</p>
              <p className="cert-card__date">📅 {cert.date}</p>
              <p className="cert-card__desc">{cert.description}</p>
              <div className="cert-card__tags">
                {cert.skills?.map(s => <span key={s}>{s}</span>)}
              </div>
              {cert.credentialUrl && (
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
                   className="cert-card__link">
                  🔗 Vérifier
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}