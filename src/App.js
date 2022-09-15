import './App.css';
import MovieCard from './MovieCard/MovieCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

const BASE_API_URL = 'http://localhost:5000/api/';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Title 1',
      rating: 5.0,
      releaseDate: '29/01/2001'
    },
    {
      title: 'Title 1',
      rating: 5.0,
      releaseDate: '29/01/2001'
    },
    {
      title: 'Title 1',
      rating: 5.0,
      releaseDate: '29/01/2001'
    }
  ]);

  useEffect(() => {
    fetch(BASE_API_URL + 'movies').then(async (response) => {
      const moviesData = await response.json();
      setMovies(moviesData);
    }).catch(err => alert(err));
  }, []);

  return (
    <div className="App">
      <Row xs={1} md={3} className="g-4 mb-2">
        {movies.map((elem, idx) => (
          <Col key={idx}>
            <MovieCard title={elem.title} rating={elem.rating} releaseDate={elem.releaseDate} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default App;
