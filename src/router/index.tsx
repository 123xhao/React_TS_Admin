import Home from '../views/Home';
import About from '../views/About';
import ThreeDemo from "../views/ThreeDemo";
import ThreeA from "../views/Three";
import ThreeReactHome from "../views/ThreeReactHome";
import ThreeReactDemo from '../views/ThreeReact/demo'

const routes = [
    {
      path: '/about/:id',
      element: <About />,
    },
    {
      path: '/',
      element: <Home />,
    },
    {
        path: '/threeDemo',
        element: <ThreeDemo />,
    },
    {
        path: '/three',
        element: <ThreeA />,
    },
    {
        path: '/threeReactHome',
        element: <ThreeReactHome />,
        children: [
            { path: 'ThreeReactDemo', element: <ThreeReactDemo /> },
        ],
    },
    {
        path: '*',
        element: <Home />,
    }
  ]

export default routes

