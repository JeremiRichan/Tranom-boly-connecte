import React from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import EspacesPage from './pages/EspacesPage';
import VentePage from './pages/VentePage';
import MeteoPage from './pages/MeteoPage';
import HelpPage from './pages/HelpPage';
import ContactPage from './pages/ContactPage';

function AppShell() {
    const location = useLocation();
    const isLanding = location.pathname === '/';

    return (
        <div className="min-h-screen bg-gray-50">
            {!isLanding && <Navbar />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/espaces" element={<EspacesPage />} />
                <Route path="/vente" element={<VentePage />} />
                <Route path="/meteo" element={<MeteoPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <AppShell />
        </Router>
    );
}

export default App;
