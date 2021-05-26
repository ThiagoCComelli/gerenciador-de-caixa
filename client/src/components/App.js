import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import React, {useEffect} from 'react'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Navbar from './Navbar/Navbar'
// import {useSelector,useDispatch} from 'react-redux'
// import {signIn,signOut} from '../actions'
import './App.css';

function App() {
  // const isLogged = useSelector(state => state.user)
  // const dispatch = useDispatch()

  useEffect(() => {

    if(localStorage.getItem("authToken") === null) {

    }

  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
