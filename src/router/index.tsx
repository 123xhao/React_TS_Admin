import ThreeLogin from '../views/ThreeLogin/index';
import ThreeDemoOne from '../views/ThreeReact/demo'
import ThreeDemoTwo from '../views/ThreeReact/demo2'
import ThreeDemoThree from '../views/ThreeReact/demo3'
import ThreeDemoFour from '../views/ThreeReact/demo4'
import ThreeDemoFive from '../views/ThreeReact/demo5'
import ThreeDemoSix from '../views/ThreeReact/demo6'

const routes = [
    {
        path: '/',
        element: <ThreeLogin />,
    },
    {
        path: '/demo1',
        element: <ThreeDemoOne />,
    },
    {
        path: '/demo2',
        element: <ThreeDemoTwo />,
    },
    {
        path: '/demo3',
        element: <ThreeDemoThree />,
    },
    {
        path: '/demo4',
        element: <ThreeDemoFour />,
    },
    {
        path: '/demo5',
        element: <ThreeDemoFive />,
    },
    {
        path: '/demo6',
        element: <ThreeDemoSix />,
    },
    {
        path: '*',
        element: <ThreeLogin />,
    }
  ]

export default routes

