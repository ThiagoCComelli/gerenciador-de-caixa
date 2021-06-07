import React from 'react';
import {useDispatch} from 'react-redux'
import {removeNotification} from '../../actions'
import CheckIcon from '@material-ui/icons/Check';

import './Notification.css'

const Notification = ({props,id}) => {
    const dispatch = useDispatch()

    const handleClose = () => {
      dispatch(removeNotification({id:id}))
    }
  
    return (
      <div onClick={handleClose} onAnimationEnd={handleClose} className={`mainNotification ${props.status}`}>
        <CheckIcon style={{fontSize: 30}}/>
        <div className="mainNotificationContent">
          <strong>{props.title}</strong>
          <span>{props.description}</span>
        </div>
        <span className="mainNotificationLoader"></span>
      </div>
    )
}

export default Notification;
