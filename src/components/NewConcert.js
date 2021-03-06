import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const NewConcert = ({artists}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const navigate = useNavigate()
  const [state, setState] = useState({
    name: "",
    location: "",
    venue: "",
    artist_id: "",
    user_id: parseInt(id),
  })

  useEffect(() => {
    fetch(`http://localhost:9393/users/${id}`)
    .then(res => res.json())
    .then(data => {
      setUser(data)
      setLoading(false)
    })
  }, [])

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleArtistChange(e) {
    console.log(e.target.value)
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: state.name,
        location: state.location,
        venue: state.venue,
        artist_id: state.artist_id,
        user_id: state.user_id
      })
    }
    fetch(`http://localhost:9393/concerts`, options)
    .then(res => res.json())
    .then(data => navigate(`/concerts/${data.id}`))
    
  }

  if (loading) {
    return(
      <h1>Loading...</h1>
    )
  }else {
     return (
    <form onSubmit={handleSubmit}>
        <h1>Add a Concert for {user.name}</h1>
        <div>
            <label htmlFor='name'>Concert Name</label>
            <br/>
            <input id="name" name='name' type={"text"} value={state.name} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='location'>Location</label>
            <br/>
            <input id='location' name='location' type={"text"} value={state.location} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor='venue'>Venue</label>
            <br/>
            <input id='venue' name='venue' type={"text"} value={state.venue} onChange={handleChange}/>
        </div>
        <div>
            <label>Who did you see?</label>
            <br/>
            <select name='artist_id' value={state.artist_id} onChange={handleArtistChange}>
              <option value='' disabled selected hidden>Artists</option>
              {artists.map((artist, index) => <option key={index + 1} value={index + 1} >{artist.name}</option>)}
            </select>
        </div>
        <br></br>
        <input type={"submit"} value={"create concert"}/>
    </form>
  )
  }
 
}

export default NewConcert