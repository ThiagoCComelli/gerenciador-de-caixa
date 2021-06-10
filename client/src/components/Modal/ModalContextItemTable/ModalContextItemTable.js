import React from 'react';
import './ModalContextItemTable.css'

const ModalContextItemTable = ({props}) => {
    return (
        <div className="mainContext" style={{left: `${props.position.x}px`, top: `${props.position.y}px`}}>
            {props.options.map((item) => {
                return (
                    <span key={item.title} onClick={item.function}>{item.title}</span>
                )
            })}
        </div>
    )
}

export default ModalContextItemTable
