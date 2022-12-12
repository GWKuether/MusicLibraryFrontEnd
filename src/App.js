import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';
import AddNewSong from './Components/AddNewSong/AddNewSong';

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
  
  
  
  return (
    <div>
      <MusicTable songs={songs} />
      <SearchBar songs={songs}/>
      <AddNewSong newSong={addNewSong} />
    </div>
  );
}

export default App;
