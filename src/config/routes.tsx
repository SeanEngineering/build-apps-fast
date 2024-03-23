import { RouteObject, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Home from '../pages/home/Home';
import { GlobalPageWrapper } from '../components/common/styles';

const routeConfiguration: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
];

export const router = createBrowserRouter(
  routeConfiguration.map((item) => {
    return {
      ...item,
      element: <GlobalPageWrapper>{item.element}</GlobalPageWrapper>,
    };
  })
);
