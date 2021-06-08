import React,{useState,useEffect} from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import './Tag.css'

const Tag = ({tag,handleRemoveTag}) => {
    const [state,setState] = useState(null)

    useEffect(() => {
        setState(tag)
        // eslint-disable-next-line
    },[])

    return (
        <>
        <div className="mainTag">
            <span>{tag.title}</span>
            <HighlightOffIcon onClick={() => {handleRemoveTag(state)}} className="tagIcon" style={{cursor: "pointer",fontSize: 15, color: "#000"}}/>
        </div>
        </>
    )
}

export default Tag;
