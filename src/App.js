import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
import ArtistList from './components/ArtistList';
import ArtistDetails from './components/ArtistDetails';
import ConcertList from './components/ConcertList';
import ConcertDetails from './components/ConcertDetails';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import NewConcert from './components/NewConcert';
import UpdateConcert from './components/UpdateConcert';


function App() {
  const [artists, setArtists] = useState([])
  const [concerts, setConcerts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:9393/artists')
    .then(res => res.json())
    .then(data => setArtists(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9393/concerts')
    .then(res => res.json())
    .then(data => setConcerts(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9393/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })


  return (
    <Router>
      <div className="App">
        <NavBar />
        <h1>Liveify</h1>
        <Routes>
          <Route exact path="/" element={ <Home /> }/>
          <Route exact path="/artists" element={ <ArtistList /> }/>
          <Route exact path="/artists/:id" element={ <ArtistDetails />}/>
          <Route exact path="/concerts" element={ <ConcertList /> }/>
          <Route exact path="/concerts/:id" element={ <ConcertDetails />}/>
          <Route exact path="/concerts/:id/update" element={ <UpdateConcert concerts={concerts} artists={artists}/>}/>
          <Route exact path="/users/:id/new" element={ <NewConcert artists={artists}/>} />
          <Route exact path="/users" element={ <UserList /> }/>
          <Route exact path="/users/:id" element={ <UserDetails users={users} concerts={concerts} /> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
