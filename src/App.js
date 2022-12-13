import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';
import AddNewSong from './Components/AddNewSong/AddNewSong';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  
  const  [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get("http://127.0.0.1:8000/api/music/")
    setSongs(response.data)
  }

  async function addNewSong(newSong){
    let response = await axios.post("http://127.0.0.1:8000/api/music/", newSong)
    getAllSongs()
  }

  function displaySearchResults(results){
    setSongs(results)
  }

  
  
  return (
    <div className='main-background'>
      <div className='container-fluid'>
        <div className='row'>
          <NavBar />
        </div>
        <div className='row'>
          <div className='col-3'></div>
          <div className='col-6'>
          <SearchBar songs={songs} results={displaySearchResults}/>
          <MusicTable songs={songs} />
          <AddNewSong newSong={addNewSong} />
          </div>
          <div className='col-3'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
