import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" component={Home}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
