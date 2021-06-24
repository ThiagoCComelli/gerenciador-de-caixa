import React, {useState} from 'react';
import CodeIcon from '@material-ui/icons/Code';

import './Console.css'

const Console = () => {
    const [display,setDisplay] = useState(false)

    const handleCommand = (e) => {
        const command = e.value.split(" ")

        if(command[0].toLowerCase() === "set" && command[1].toLowerCase() === "api") {
            if(command[2].toLowerCase() !== undefined) {
                localStorage.setItem("api",command[2])
            }
        } else if (command[0].toLowerCase() === "remove" && command[1] !== undefined) {
            localStorage.removeItem(command[1])
        }

        e.value = ""
    }
    
    return (
        <div className="mainConsole">
            <CodeIcon className={`mainConsoleIcon ${display ? "mainConsoleIconRotate" : null}`} onClick={() => {setDisplay(!display)}} style={{fontSize: 40, color: "#4286F5"}}/>
            {display ? <input onKeyDown={(e) => {if (e.key === "Enter") handleCommand(e.target)}} type="text"></input> : null}
        </div>
    )
}

export default Console
