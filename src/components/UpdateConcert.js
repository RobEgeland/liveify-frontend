import { useEffect, useState } from "react"
import React from 'react'
import { useParams, useNavigate } from "react-router-dom"


const UpdateConcert = ({artists, concerts}) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [concert, setConcert] = useState({
        name: "",
        location: "",
        venue: "",
        artist_id: "",
        user_id: "",
      })
    

    // useEffect(() => {
    //     fetch(`http://localhost:9393/concerts/${id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setConcert({
    //           name: data.name,
    //           location: data.location,
    //           venue:data.venue,
    //           artist_id: data.artist_id
    //         })
    //     })
    // }, [])
    
    
    useEffect(() => {
      const updateConcert = concerts.filter(concert => concert.id === parseInt(id))
      setConcert({
        name: updateConcert.name,
        location: updateConcert.location,
        venue:updateConcert.venue,
        artist_id: updateConcert.artist_id
      })
      console.log()
    },[])
    

    function handleSubmit(e) {
        e.preventDefault()
        console.log(concert)
        const headers = {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
        const options = {
          method: "PATCH",
          headers,
          body: JSON.stringify(concert)
        }
        fetch(`http://localhost:9393/concerts/${id}`, options)
        .then(res => res.json())
        .then(data => console.log(data))
        navigate(`/concerts/${id}`)
      }

    function handleChange(e) {
        setConcert({
          ...concert,
          [e.target.name]: e.target.value
        })
      }

      function handleArtistChange(e) {
        setConcert({
          ...concert,
          artist_id: e.target.value
        })
      }

  return (
    <form onSubmit={handleSubmit}>
        {/* <h1>Add a Concert for {user.name}</h1> */}
        <div>
            <label htmlFor='name'>Concert Name</label>
            <br/>
            <input id="name" name='name' type={"text"} value={concert.name} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='location'>Location</label>
            <br/>
            <input id='location' name='location' type={"text"} value={concert.location} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor='venue'>Venue</label>
            <br/>
            <input id='venue' name='venue' type={"text"} value={concert.venue} onChange={handleChange}/>
        </div>
        <div>
            <label>Change Who you saw</label>
            <br/>
            <select name='artist_id' value={concert.artist_id} onChange={handleArtistChange}>
              {artists.map((artist) => <option key={artist.id} value={artist.id} >{artist.name}</option>)}
            </select>
        </div>
        <br></br>
        <input type={"submit"} value={"update concert"}/>
    </form>
  )
}

export default UpdateConcert