import React from 'react'
import {Link} from 'react-router-dom'
import one from './logo/11.png'
import two from './logo/12.png'
import three from './logo/13.png'
import four from './logo/14.png'
import five from './logo/15.png'
import six from './logo/16.png'
import seven from './logo/17.png'
import eight from './logo/18.png'

export default function Home(){
    return(
        <div className="Homelogo">
            <Link to="/search"><img src={one} alt="Home logo "></img></Link>
            <Link to="/intraday"><img src={three} alt="Home logo "></img></Link>
            <Link to="/categories"><img src={two} alt="Home logo "></img></Link>
            <Link to="/calculators"><img src={five} alt="Home logo "></img></Link>
            <Link to="/positionals"><img src={four} alt="Home logo "></img></Link>
            <Link to="/news"><img src={six} alt="Home logo "></img></Link>
            <Link to="/books"><img src={seven} alt="Home logo "></img></Link>
            <Link to="/blogs"><img src={eight} alt="Home logo "></img></Link>
        </div>
    )
}