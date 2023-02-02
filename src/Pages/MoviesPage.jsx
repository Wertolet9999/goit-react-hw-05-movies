import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as API from '../api/api';
import { Spinner } from '../components/App/AppStyled';
import {
  SearchFormButton,
  SearchFormInput,
  FilmList,
  FilmLink,
} from '../components/MoviesPage/MoviesPageStyled';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  let [queryWord] = useSearchParams();
  let keyWord = queryWord.get('query');

  const initialValues = { query: '' };

  const getData = key => {
    setLoading(true);
    API.getMovies(key).then(response => {
      if (response) {
        setMovies(response.data.results);
        setLoading(false);
      } else {
        return;
      }
    });
  };

  useEffect(() => {
    if (keyWord) {
      getData(keyWord);
    }
  }, [keyWord]);

  const handleSubmit = (values, { resetForm }) => {
    getData(values.query);
    navigate({
      search: `?query=${values.query}`,
    });
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <SearchFormInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          />
          <SearchFormButton type="submit">Search</SearchFormButton>
        </Form>
      </Formik>
      {loading && <Spinner />}
      {movies && (
        <ul>
          {movies.map(film => (
            <FilmList key={film.id}>
              <FilmLink
                to={`/movies/${film.id}`}
                state={{ from: location, search: keyWord }}
              >
                {film.title} ({film.release_date.slice(0, 4)})
              </FilmLink>
            </FilmList>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesPage;
