import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import NavBar from '../components/NavBar'

function Movie() {
  const params = useParams()
  const movieId = params.id
  const [movieInfo, setMovieInfo] = useState({})


  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(data => setMovieInfo(data))
  }, [movieId])

  if(!movieInfo.title) {
    return <h1>Loading...</h1>
  }
  
  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>{movieInfo.title}</h1>
        <p>Runtime: {movieInfo.time} min</p>
        {movieInfo.genres.map(genre => {
          return <span key={genre}>{genre}</span>
        })} 
      </main>
    </>
  );
};

export default Movie;
