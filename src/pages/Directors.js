import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import NavBar from '../components/NavBar'
import DirectorCard from '../components/DirectorCard'

function Directors() {
  const [directors, setDirectors] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(r => r.json())
    .then(data => setDirectors(data))
  }, [])
  
  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director) => {
          return <DirectorCard
                    director={director} 
                    key={director.id}/>})}
      </main>
    </>
  );
};

export default Directors;
