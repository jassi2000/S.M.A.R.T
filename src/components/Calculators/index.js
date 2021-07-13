import React from 'react'
import one from "./3.png"
import two from "./4.png"
import {Link} from 'react-router-dom'
export default function Calci(){
    return(
        <div className="Calci">
            <Link to="/calculators/sip"><img className="Calcicomp" src={one} alt="calc navigator"></img></Link>
            <Link to="/calculators/lumsum"><img className="Calcicomp" src={two} alt="calc navigator"></img></Link>
        </div>
    )
}