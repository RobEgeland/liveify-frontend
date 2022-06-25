import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
import ArtistList from './components/ArtistList';
import ArtistDetails from './components/ArtistDetails';
import ConcertList from './components/ConcertList';
import UserList from './components/UserList';


function App() {


  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={ <Home /> }/>
          <Route exact path="/artists" element={ <ArtistList /> }/>
          <Route exact path="/artists/:id" element={ <ArtistDetails />}/>
          <Route exact path="/concerts" element={ <ConcertList /> }/>
          <Route exact path="/users" element={ <UserList /> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
