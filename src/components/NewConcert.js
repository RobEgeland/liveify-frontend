import React, {useState, useEffect} from 'react'

const NewConcert = () => {
  return (
    <form>
        <div>
            <label>Concert Name</label>
            <br/>
            <input type={"text"}/>
        </div>
        <div>
            <label>Location</label>
            <br/>
            <input type={"text"}/>
        </div>
        <div>
            <label>Venue</label>
            <br/>
            <input type={"text"}/>
        </div>
        <br></br>
        <input type={"submit"} value={"create concert"}/>
    </form>
  )
}

export default NewConcert