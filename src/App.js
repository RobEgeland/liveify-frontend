import React from 'react';
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


function App() {


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
          <Route exact path="/concerts/new" element={ <NewConcert />} />
          <Route exact path="/users" element={ <UserList /> }/>
          <Route exact path="/users/:id" element={ <UserDetails /> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
