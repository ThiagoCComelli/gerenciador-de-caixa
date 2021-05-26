import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Navbar from './Navbar/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
