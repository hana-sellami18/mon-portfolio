// src/App.jsx
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Certificates from './components/Accueil/Certificates';

/* ── Lazy loading ── */
const Layout       = lazy(() => import('./Pages/Layout'));
const AdminLayout  = lazy(() => import('./components/Admin/AdminLayout'));

// Public
const Hero        = lazy(() => import('./components/Accueil/Hero'));
const About       = lazy(() => import('./components/Accueil/About'));
const Experience  = lazy(() => import('./components/Accueil/Experience'));
const ContactForm = lazy(() => import('./components/Formulaire/FormulaireG6'));

// Admin
const Dashboard     = lazy(() => import('./components/Admin/Dashboard'));
const Users         = lazy(() => import('./components/Admin/Users'));
const Statistics    = lazy(() => import('./components/Admin/Statistics'));
const Settings      = lazy(() => import('./components/Admin/Settings'));
const FormSubs      = lazy(() => import('./components/Admin/AdminFormSubmissions'));
const ProjectsAdmin = lazy(() => import('./components/Admin/ProjectsAdminPage'));

// Auth
const Login  = lazy(() => import('./components/Auth/Login'));
const Logout = lazy(() => import('./components/Auth/Logout'));

import ProtectedRoute from './components/Admin/ProtectedRoute';

/* ── Loader ── */
function Loader() {
  return (
    <div style={{
      minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',
      background:'var(--cream)', fontFamily:'var(--mono)', fontSize:'.72rem',
      letterSpacing:'.12em', textTransform:'uppercase', color:'var(--muted)',
    }}>
      Chargement…
    </div>
  );
}

/* ── 404 ── */
function NotFound() {
  return (
    <div style={{
      minHeight:'100vh', display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      background:'var(--cream)', gap:'2rem',
    }}>
      <span style={{ fontFamily:'var(--serif)', fontSize:'6rem', color:'var(--border)', lineHeight:1 }}>
        404
      </span>
      <p style={{ fontFamily:'var(--mono)', fontSize:'.7rem', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--muted)' }}>
        Page introuvable
      </p>
      <a href="/" style={{
        fontFamily:'var(--mono)', fontSize:'.65rem', letterSpacing:'.12em', textTransform:'uppercase',
        padding:'.9rem 2.2rem', background:'var(--ink)', color:'var(--cream)', textDecoration:'none',
      }}>
        ← Retour à l'accueil
      </a>
    </div>
  );
}

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Suspense fallback={<Loader />}>
      <Routes>

        {/* ── PUBLIC ── */}
        <Route path="/" element={<Layout />}>
          <Route index element={
            <>
              <Hero />
              <About />
              <Experience />
              <Certificates />
              <ContactForm />
            </>
          } />
          <Route path="contact" element={<ContactForm />} />
          <Route
            path="login"
            element={isAuthenticated ? <Navigate to="/admin" replace /> : <Login />}
          />
        </Route>

        {/* ── ADMIN ── */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index            element={<Dashboard />} />
          <Route path="users"     element={<Users />} />
          <Route path="analytics" element={<Statistics />} />
          <Route path="projects"  element={<ProjectsAdmin />} />
          <Route path="forms"     element={<FormSubs />} />
          <Route path="settings"  element={<Settings />} />
        </Route>

        <Route path="/logout" element={<Logout />} />
        <Route path="*"       element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}