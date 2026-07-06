// src/App.jsx

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { SubscriptionProvider } from '../context/SubscriptionContext';
import { ToastProvider } from '../context/ToastContext';
import { Analytics } from '@vercel/analytics/react';
import useScrollToTop from '../hooks/useScrollToTop';
import ToastContainer from '../components/ui/Toast';

import Footer from '../components/layouts/Footer';
import Home from '../pages/Home';

const PropertyDetails = lazy(() => import('../pages/PropertyDetails'));
const NotFound = lazy(() => import('../pages/NotFound'));
const LoginForm = lazy(() => import('../components/forms/LoginForm'));
const SignupForm = lazy(() => import('../components/forms/SignupForm'));
const Contact = lazy(() => import('../pages/Contact'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
  </div>
);

const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

function App() {
  return (
    <AuthProvider>
      <SubscriptionProvider>
        <ToastProvider>
          <Router>
            <ScrollToTop />
            <Analytics />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/property/:id"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <PropertyDetails />
                  </Suspense>
                }
              />
              <Route
                path="/login"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <LoginForm />
                  </Suspense>
                }
              />
              <Route
                path="/signup"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <SignupForm />
                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <Contact />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <NotFound />
                  </Suspense>
                }
              />
            </Routes>
            <Footer />
          </Router>
          <ToastContainer />
        </ToastProvider>
      </SubscriptionProvider>
    </AuthProvider>
  );
}

export default App;
