import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Home from './pages/home/Home';
import Category from './pages/Category/Category';
import Footer from './components/Footer/Footer';
import PurchaseThanks from './pages/PurchaseThanks';
import Wallet from './pages/Wallet';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import PaymentMethods from "./pages/PaymentMethods/PaymentMethods.jsx";
import LastShopping from './pages/LastShopping/LastShopping';
import SearchResult from './pages/Category/SearchResult.jsx';

//Context
import { useAuth } from './context/AuthContext';


// Imports related to users/admins/sellers
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import RegularUserProfile from './pages/UserProfile/RegularUserProfile';
import AdminUserProfile from './pages/UserProfile/AdminUserProfile';
import SellerUserProfile from './pages/UserProfile/SellerUserProfile';
import SellerPublications from './pages/UserProfile/sellerpublications/SellerPublications';
import ListUsers from "./pages/UserProfile/ListUsers.jsx"


import DetailsProducts from './pages/DetailsProducts/DetailsProducts';
import LatestPosts from './pages/UserProfile/LatestPosts';
import Publications from './pages/UserProfile/publication/Publications';
import ListProducts from './pages/ListProducts.jsx';
import AcceptPublications from './pages/UserProfile/publication/AcceptPublications.jsx'
import ListFavorites from './pages/ListFavorites.jsx'

function App() {
  const { user } = useAuth();
  const location = useLocation();
  const isWalletRoute = location.pathname === '/wallet';

  return (
    <div className='gridApp'>

      <header>
        {!isWalletRoute && <Navbar userType={user ? user.userType : null} />}
      </header>
      <main>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category/:id/:name" element={<Category />} />
          <Route path="/resultados/:name" element={<SearchResult />} />
          <Route path="/user-profile" element={<RegularUserProfile />} />
          <Route path="/admin" element={<AdminUserProfile />} />
          <Route path="/seller" element={<SellerUserProfile />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/details-product/:id" element={<DetailsProducts />} />
          <Route path="/last-shopping" element={<LastShopping />} />
          <Route path="/purchase-thanks" element={<PurchaseThanks />} />
          <Route path="/yours-publication" element={<SellerPublications />} />
          <Route path="/publication" element={<Publications />} />
          <Route path="/latest-posts" element={<LatestPosts />} />
          <Route path="/list-products" element={<ListProducts />} />
          <Route path="/list-users" element={<ListUsers />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/accept-publication" element={<AcceptPublications />} />
          <Route path="/list-favorites" element={<ListFavorites />} />
          <Route path="*" element={<NotFound />} />
     

        </Routes>
      </main>
      <footer>
        {!isWalletRoute && <Footer />}
      </footer>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
