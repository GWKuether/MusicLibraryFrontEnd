import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';


function App() {
  
  const  [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get("http://127.0.0.1:8000/api/music/")
    setSongs(response.data)
  }
  
  
  
  return (
    <div>
      <DisplaySongs songs={songs} />
    </div>
  );
}

export default App;
