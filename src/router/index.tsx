import Home from '../views/Home';
import About from '../views/About';

const routes = [
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/',
      element: <Home />,
    }
  ]
  
export default routes

