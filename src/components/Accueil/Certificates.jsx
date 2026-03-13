import { useState } from 'react';
import { CERTIFICATS_DATA } from '../../data/certificatesData';
import './Certificates.css';

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="cert" id="certificats">
      <div className="container">
        <div className="divider" />
        <h2 className="section-title">Mes <span>certificats</span></h2>
        <p className="section-subtitle">Formations & certifications obtenues</p>

        <div className="cert-grid">
          {CERTIFICATS_DATA.map(cert => (
            <div
              key={cert.id}
              className="cert-card"
              onClick={() => cert.pdfFile && setSelected(cert)}
              style={{ cursor: cert.pdfFile ? 'pointer' : 'default' }}
            >
              {/* Aperçu PDF miniature */}
              {cert.pdfFile && (
                <div className="cert-card__preview">
                  <iframe
                    src={`${cert.pdfFile}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={cert.title}
                    className="cert-card__iframe"
                    tabIndex={-1}
                  />
                  <div className="cert-card__preview-overlay">
                    <span>👁 Voir</span>
                  </div>
                </div>
              )}

              <div className="cert-card__emoji">{cert.emoji}</div>
              <span className="cert-card__cat">{cert.category}</span>
              <h3 className="cert-card__title">{cert.title}</h3>
              <p className="cert-card__issuer">🏛️ {cert.issuer}</p>
              <p className="cert-card__date">📅 {cert.date}</p>
              <p className="cert-card__desc">{cert.description}</p>

              <div className="cert-card__tags">
                {cert.skills?.map(s => <span key={s}>{s}</span>)}
              </div>

              {cert.pdfFile && (
                <button
                  className="cert-card__link"
                  onClick={e => { e.stopPropagation(); setSelected(cert); }}
                >
                  🔍 Voir le certificat
                </button>
              )}

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card__link"
                  onClick={e => e.stopPropagation()}
                >
                  🔗 Vérifier
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal plein écran */}
      {selected && (
        <div className="cert-modal" onClick={() => setSelected(null)}>
          <div className="cert-modal__box" onClick={e => e.stopPropagation()}>
            <div className="cert-modal__header">
              <span>{selected.emoji} {selected.title}</span>
              <button className="cert-modal__close" onClick={() => setSelected(null)}>✕</button>
            </div>
            <iframe
              src={selected.pdfFile}
              title={selected.title}
              className="cert-modal__iframe"
            />
            <a
              href={selected.pdfFile}
              download
              className="cert-card__link cert-modal__download"
            >
              ⬇️ Télécharger
            </a>
          </div>
        </div>
      )}
    </section>
  );
}