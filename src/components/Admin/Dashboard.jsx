import './Dashboard.css';

const STATS = [
  { label: 'Projets', value: 6, icon: '🗂️', color: '#C9748A' },
  { label: 'Messages reçus', value: 12, icon: '📨', color: '#A85570' },
  { label: 'Visiteurs ce mois', value: 248, icon: '👁️', color: '#E8A0B0' },
  { label: 'Compétences', value: 25, icon: '⚡', color: '#C9748A' },
];

const RECENT = [
  { from: 'Recruiter TechCorp', subject: 'Opportunité de stage', date: 'Aujourd\'hui' },
  { from: 'Prof. Ali Ben', subject: 'Collaboration projet IA', date: 'Hier' },
  { from: 'Contact LinkedIn', subject: 'Question portfolio', date: 'Il y a 2j' },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1>Bonjour, <span>Hana</span> 👋</h1>
        <p>Voici un aperçu de votre portfolio</p>
      </div>

      <div className="dashboard__stats">
        {STATS.map(s => (
          <div key={s.label} className="dashboard__stat">
            <div className="dashboard__stat-icon">{s.icon}</div>
            <div className="dashboard__stat-val" style={{ color: s.color }}>{s.value}</div>
            <div className="dashboard__stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="dashboard__section">
        <h2>Messages récents</h2>
        <div className="dashboard__messages">
          {RECENT.map((m, i) => (
            <div key={i} className="dashboard__msg">
              <div className="dashboard__msg-dot" />
              <div>
                <strong>{m.from}</strong>
                <p>{m.subject}</p>
              </div>
              <span className="dashboard__msg-date">{m.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}