
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BeautyCatalog from './pages/BeautyCatalog';
import MedicantionCatalog from './pages/MedicantionCatalog';
import Category from './pages/Category';
import PharmacyOnDuty from './pages/PharmacyOnDuty';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog1" element={<BeautyCatalog />} />
          <Route path="/catalog2" element={<MedicantionCatalog />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/category/:id" element={<Category/>} />
          <Route path="/pharmacy-on-duty" element={<PharmacyOnDuty/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;