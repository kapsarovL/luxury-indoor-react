import Home from '../pages/Home';
import PropertyDetails from '../pages/PropertyDetails';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/property/:id', element: <PropertyDetails /> },
];

export default routes;
