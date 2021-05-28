import React, {useState,useEffect} from 'react';
import {useSelector} from 'react-redux'
import {Route,Redirect} from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...rest}) => {
    const isLogged = useSelector(state => state.user)
    const [state,setState] = useState(false)
    
    useEffect(() => {
        setState(isLogged)
        // eslint-disable-next-line
    },[])

    if(state === false) {
        return <></>
    }

    return (
        <Route {...rest} render={props => (
            state ? <Component {...props} /> : <Redirect to={{pathname: '/login', state: {path: rest.path}}} />
        )} />
    )
}

export default ProtectedRoute;
