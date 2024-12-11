import React, { useState } from 'react'
import { useEffect } from 'react'
import MovieCrad from './MovieCrad';
import './App.css';
import SearchIcon from './search.svg'
const API_URL='http://www.omdbapi.com?apikey=f4617942';


const App = () => {
  const [ movies,setMovies]= useState([]);
  const[searchTerm,setSearchTerm] = useState('')
  const searchMovies = async(title)=>{
    const respone = await fetch(`${API_URL}&s=${title}`);
    const data = await respone.json()
    setMovies(data.Search)
  }
  useEffect(()=>{
    searchMovies('Spiderman')

  },[]);
  return (
    <div className='app'><h1>MovieLand</h1>
    <div className='search'>
      <input type="text" name="" id="" placeholder='Search For Movies'
       value={searchTerm}
       onChange={(e)=>setSearchTerm(e.target.value)} />
       <img src={SearchIcon} alt="search" onClick ={()=>searchMovies(searchTerm)} />

    </div>
    {
      movies?.length >0
      ?( <div className='container'>
        {movies.map((movie)=>(
          < MovieCrad  movie={movie}/>
        ))}
  
      </div>):(
        <div className='empty'>
<h2>No Movies Found</h2>
        </div>
      )
    }
    
    </div>
    
  );
}

export default App