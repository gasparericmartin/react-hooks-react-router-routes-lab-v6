import Home from './pages/Home'
import Actors from './pages/Actors'
import Directors from './pages/Directors'
import ErrorPage from './pages/ErrorPage'
import Movie from './pages/Movie'

const routes = [
   {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/actors',
    element: <Actors />,
    errorElement: <ErrorPage />
  },
  {
    path: '/directors',
    element: <Directors />,
    errorElement: <ErrorPage />
  },
  {
    path: '/movie/:id',
    element: <Movie />,
    errorElement: <ErrorPage />
  }
  ];

export default routes;