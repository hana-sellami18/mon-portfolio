import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import './AdminLayout.css';

const MENU = [
  { label: 'Dashboard', to: '/admin', icon: '📊', end: true },
  { label: 'Projets', to: '/admin/projects', icon: '🗂️' },
  { label: 'Utilisateurs', to: '/admin/users', icon: '👥' },
  { label: 'Messages', to: '/admin/submissions', icon: '📨' },
  { label: 'Statistiques', to: '/admin/statistics', icon: '📈' },
  { label: 'Paramètres', to: '/admin/settings', icon: '⚙️' },
];

export default function AdminLayout() {
  const navigate = useNavigate();

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar__brand">
          <span className="admin-sidebar__logo">H<span>.</span></span>
          <p>Admin Panel</p>
        </div>
        <nav className="admin-sidebar__nav">
          {MENU.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `admin-sidebar__link ${isActive ? 'admin-sidebar__link--active' : ''}`
              }
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button className="admin-sidebar__logout" onClick={() => navigate('/logout')}>
          🚪 Déconnexion
        </button>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}