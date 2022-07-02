import { useEffect, useState } from "react"
import React from 'react'
import { useParams, useNavigate } from "react-router-dom"


const UpdateConcert = ({artists}) => {
    const [concert, setConcert] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    const [state, setState] = useState({
        name: "",
        location: "",
        venue: "",
        artist_id: "",
        user_id: id,
      })

    useEffect(() => {
        fetch(`http://localhost:9393/concerts/${id}`)
        .then(res => res.json())
        .then(data => {
            setConcert(data)
            setState(data)
        })
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        const headers = {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
        const options = {
          method: "PATCH",
          headers,
          body: JSON.stringify(state)
        }
        fetch(`http://localhost:9393/concerts/${id}`, options)
        navigate(`/concerts/${id}`)
      }

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
          artist_id: e.target.value
        })
      }

  return (
    <form onSubmit={handleSubmit}>
        {/* <h1>Add a Concert for {user.name}</h1> */}
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
            <label>Change Who you saw</label>
            <br/>
            <select name='artist_id' value={state.artist_id} onChange={handleArtistChange}>
              {artists.map((artist, index) => <option key={artist.id} value={artist.id} >{artist.name}</option>)}
            </select>
        </div>
        <br></br>
        <input type={"submit"} value={"update concert"}/>
    </form>
  )
}

export default UpdateConcert