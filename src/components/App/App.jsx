import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import GlobalStyle from '../../GlobalStyle';
import { Container, Spinner } from './AppStyled';
import Navigation from '../../components/Navigation/Navigation';

const HomePage = lazy(() => import('../../Pages/HomePage'));
const MoviesPage = lazy(() => import('../../Pages/MoviesPage'));
const MovieDataPage = lazy(() => import('../../Pages/MovieDataPage'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const NotFoundPage = lazy(() => import('../../Pages/NotFoundPage'));

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDataPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </Container>
  );
};
