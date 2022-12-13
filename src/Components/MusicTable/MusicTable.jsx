import DeleteButton from '../DeleteButton/DeleteButton';
import './MusicTable.css'

const MusicTable = (props) => {
    return (
      <div className='table-margin-bottom'>
          <table className="table table-striped border table-background">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Artist</th>
              <th scope="col">Album</th>
              <th scope="col">Release Date</th>
              <th scope="col">Genre</th>
            </tr>
          </thead>
          <tbody>
            {props.songs.map((song) => {
              return (
                <tr>
                  <td>
                    {song.title}
                  </td>
                  <td>
                    {song.artist}
                  </td>
                  <td>
                    {song.album}
                  </td>
                  <td>
                    {song.release_date}
                  </td>
                  <td>
                    {song.genre}
                  </td>
                  <td>
                    <DeleteButton song={song} results={props.results} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

     );
}
 
export default MusicTable;
