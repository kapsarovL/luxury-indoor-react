// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PropertyProvider } from '../context/PropertyContext';
import { AuthProvider } from '../context/AuthContext';
import { SubscriptionProvider } from '../context/SubscriptionContext';
import { ToastProvider } from '../context/ToastContext';
import useScrollToTop from '../hooks/useScrollToTop';
import ToastContainer from '../components/ui/Toast';

import Footer from '../components/layouts/Footer';
import Home from '../pages/Home';
import PropertyDetails from '../pages/PropertyDetails';
import NotFound from '../pages/NotFound';
import LoginForm from '../components/forms/LoginForm';
import SignupForm from '../components/forms/SignupForm';

const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

function App() {
  return (
    <PropertyProvider>
      <AuthProvider>
        <SubscriptionProvider>
          <ToastProvider>
            <Router>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/property/:id" element={<PropertyDetails />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </Router>
            <ToastContainer />
          </ToastProvider>
        </SubscriptionProvider>
      </AuthProvider>
    </PropertyProvider>
  );
}

export default App;
