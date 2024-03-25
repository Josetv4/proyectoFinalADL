
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Home from './pages/home/Home'
import BeautyCatalog from './pages/BeautyCatalog';
import MedicantionCatalog from './pages/MedicantionCatalog';
import Category from './pages/Category/Category';
import PharmacyOnDuty from './pages/PharmacyOnDuty';
import Footer from './components/Footer/Footer';

//Context
import { useAuth } from './context/AuthContext';

// Imports related to users/admins/sellers
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import RegularUserProfile from './pages/UserProfile/RegularUserProfile';
import AdminUserProfile from './pages/UserProfile/AdminUserProfile';
import SellerUserProfile from './pages/UserProfile/SellerUserProfile';

function App() {
  const { user } = useAuth();

  return (
    <div className='gridApp'>
      <Router>
        <header>
          <Navbar userType={user ? user.userType : null} />
        </header>
        <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre-nosotros" element={<AboutUs />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register />} />
              <Route path="/catalog1" element={<BeautyCatalog />} />
              <Route path="/catalog2" element={<MedicantionCatalog />} />
              <Route path="/category/:id/:name" element={<Category />} />
              <Route path="/pharmacy-on-duty" element={<PharmacyOnDuty />} />
              <Route path="/user-profile" element={<RegularUserProfile />} />
              <Route path="/admin" element={<AdminUserProfile />} />
              <Route path="/seller" element={<SellerUserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
