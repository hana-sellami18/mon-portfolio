import { Outlet } from 'react-router-dom';
import Navbar from '../components/Commun/Navbar';
import Footer from '../components/Commun/Footer';

export default function Layout() {
  return (
    <>
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}