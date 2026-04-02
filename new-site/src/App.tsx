import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import DentistsDetail from './pages/DentistsDetail';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="equipe" element={<Team />} />
          <Route path="dentistes-details" element={<DentistsDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
