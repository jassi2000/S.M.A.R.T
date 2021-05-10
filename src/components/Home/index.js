import React from 'react'
import {Link} from 'react-router-dom'
import one from './logo/11.png'
import two from './logo/12.png'
import three from './logo/13.png'
import four from './logo/14.png'
import five from './logo/15.png'
import six from './logo/16.png'
import seven from './logo/17.png'

export default function Home(){
    return(
        <div className="Homelogo">
            <Link to="/search"><img src={one}></img></Link>
            <Link to="/intraday"><img src={three}></img></Link>
            <Link to="/categories"><img src={two}></img></Link>
            <Link to="/calculators"><img src={five}></img></Link>
            <Link to="/positionals"><img src={four}></img></Link>
            <Link to="/news"><img src={six}></img></Link>
            <Link to="/books"><img src={seven}></img></Link>
        </div>
    )
}