import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import React, {useEffect,useState} from 'react'
import Dashboard from '../pages/Dashboard/Dashboard'
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import Navbar from './Navbar/Navbar'
import Modal from './Modal/Modal'
import Notification from './Notification/Notification'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import {verifyTokenAPI} from '../utils/api/auth'
import {useDispatch,useSelector} from 'react-redux'
import {signIn} from '../actions'
import './App.css';

function App() {
  const havePost = useSelector(state => state.post)
  const isLogged = useSelector(state => state.user)
  const allNotifications = useSelector(state => state.notifications)
  const [state,setState] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {

    const verify = async () => {
      return await verifyTokenAPI({data:{token:localStorage.getItem("authToken")}})
    }

    const setup = async () => {
      if(localStorage.getItem("authToken") !== null) {
        try {
          await verify().then((res) => {
            if(res.data.message === "Token verificado!") {
              dispatch(signIn(res.data.user))
            } else {
              localStorage.removeItem("authToken")
            }
          })
        } catch {
          
        }
      }
  
      setState(isLogged)
    }

    setup()

    
    // eslint-disable-next-line
  },[])
  
  if (state === false) {
    return <></>
  }

  

  return (
    <div className="App">
      <div className="AppNotifications">
        {allNotifications.map((item) => {
          return <Notification key={item.id} id={item.id} props={item.props}/>
        })}
      </div>
      
      <Router>
        <Navbar />
        <Switch>
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
          <ProtectedRoute path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
      {havePost ? <Modal component={havePost} /> : null}
    </div>
  )
}

export default App;
