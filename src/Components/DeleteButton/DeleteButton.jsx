import axios from 'axios';
const DeleteButton = (props) => {
    
function handleSubmit(event){
    axios.delete(`http://127.0.0.1:8000/api/music/${props.song.id}/`)
    props.results()
}
    
    return (
        <div>
            <button onClick={handleSubmit} key={props.song.id}>Delete</button>
        </div>

     );
}
 
export default DeleteButton;