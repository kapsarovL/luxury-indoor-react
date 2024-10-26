// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PropertyProvider } from '../context/PropertyContext';


import Footer from '../components/layouts/Footer';
import Home from '../pages/Home';
import PropertyDetails from '../pages/PropertyDetails';

function App() {
  return (
    
    <PropertyProvider>
      <Router>
   

        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      
      </Router>
      <Footer />
    </PropertyProvider>
    
  );
}

export default App;
