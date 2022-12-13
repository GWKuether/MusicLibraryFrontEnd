import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
    
    const[searchInput, setSearchInput] = useState('')

    const handleSearch = (event) => {
        event.preventDefault()
        setSearchInput(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        if (searchInput.length > 0) {
            let results = props.songs.filter((song) => {
                if (song.title.toLowerCase().match(searchInput.toLowerCase()) ||  song.artist.toLowerCase().match(searchInput.toLowerCase()) || song.album.toLowerCase().match(searchInput.toLowerCase()) || song.release_date.match(searchInput) || song.genre.toLowerCase().match(searchInput.toLowerCase())){
                    return true
                }
                
            })
            props.results(results)
            console.log(results)
        }
    }


    
    return (
        <form onSubmit={handleSubmit} className='margin-bottom'>
            <input type='text' placeholder='Search here' onChange={handleSearch} value={searchInput} />
        </form>

     );
}
 
export default SearchBar;