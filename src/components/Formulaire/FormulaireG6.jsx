import { useState } from 'react';
import styles from './formulaire.module.css';

export default function FormulaireG6() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    setLoading(true);
    // Simule envoi — connecte à ton emailservice.js
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className="divider" />
        <h2 className="section-title">Me <span>contacter</span></h2>
        <p className="section-subtitle">Discutons d'une opportunité ensemble</p>

        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <span>📧</span>
              <div>
                <strong>Email</strong>
                <a href="mailto:hanasellami18@gmail.com">hanasellami18@gmail.com</a>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span>📱</span>
              <div>
                <strong>Téléphone</strong>
                <a href="tel:+21628333457">(+216) 28 333 457</a>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span>📍</span>
              <div>
                <strong>Localisation</strong>
                <p>Route Tboulbi km 4.5, Sfax, Tunisie</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span>💼</span>
              <div>
                <strong>LinkedIn</strong>
                <a href="https://linkedin.com/in/hana-sellami" target="_blank" rel="noreferrer">Hana Sellami</a>
              </div>
            </div>
          </div>

          <div className={styles.formWrap}>
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label>Nom complet</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                />
              </div>
              <div className={styles.field}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            <div className={styles.field}>
              <label>Sujet</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Stage, collaboration..."
              />
            </div>
            <div className={styles.field}>
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Votre message..."
              />
            </div>

            {status === 'success' && (
              <div className={styles.alertSuccess}>✅ Message envoyé avec succès !</div>
            )}
            {status === 'error' && (
              <div className={styles.alertError}>⚠️ Veuillez remplir tous les champs obligatoires.</div>
            )}

            <button
              className={styles.submitBtn}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Envoi...' : 'Envoyer le message →'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}