import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ArtistsPage from './pages/ArtistsPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="artistas" element={<ArtistsPage />} />
        <Route path="agendamento" element={<BookingPage />} />
        <Route path="contato" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;