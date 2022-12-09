import React, { useState } from 'react';

const SearchBar = (props) => {
    
    const[searchInput, setSearchInput] = useState('')

    const handleSearch = (event) => {
        event.preventDefault()
        setSearchInput(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        if (searchInput.length > 0) {
            let result = props.songs.filter((song) => {
                if (song.title.match(searchInput) || song.artist.match(searchInput) || song.album.match(searchInput) || song.release_date.match(searchInput) || song.genre.match(searchInput)){
                    return true
                }
                
            })
            console.log(result)
        }
    }


    
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Search here' onChange={handleSearch} value={searchInput} />
        </form>

     );
}
 
export default SearchBar;