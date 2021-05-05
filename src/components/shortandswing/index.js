import React from 'react'
import {Link} from 'react-router-dom'
import short from "./1.png"
import swing from "./2.png"

export default function shortandswing(){
    return(
        <div className="ShortandSwing">
            <Link to="/positionals/short-term"><img className="ShortandSwing" src={short}></img></Link>
            <Link to="/positionals/swing"><img className="ShortandSwing" src={swing}></img></Link>
        </div>
    )
}