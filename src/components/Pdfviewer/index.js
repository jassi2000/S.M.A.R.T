import React from 'react'
import img1 from "./BooksFront/7 warren buffett.PNG"
import img2 from "./BooksFront/begineer guide to short term trading.PNG"
import img3 from "./BooksFront/building wealth.PNG"
import img4 from "./BooksFront/how stock market works.PNG"
import img5 from "./BooksFront/investing in stock market.PNG"
import img6 from "./BooksFront/learn to earn.PNG"
import img7 from "./BooksFront/one up on wall street.jpg"
import img8 from "./BooksFront/peter lynch beating the street.PNG"
import img9 from "./BooksFront/stock market jumpstarter.PNG"
import img10 from "./BooksFront/stock market rules.PNG"
import img11 from "./BooksFront/stock market strategies that work.PNG"
import img12 from "./BooksFront/stock market volatility.PNG"
import img13 from "./BooksFront/the basics for investing.PNG"
import img14 from "./BooksFront/the daily telegraph.PNG"
import img15 from "./BooksFront/the stock market for begineers.PNG"
import img16 from "./BooksFront/the warren buffet way.PNG"
import img17 from "./BooksFront/what works on wall street.PNG"
import img18 from "./BooksFront/the intelligent investor.PNG"
// import Book1 from "./Books/Book1"
import {Link} from "react-router-dom"
export default function Pdfviewer(){
  console.log(img1)
  return(
    <div className="BooksFrontDiv">
      <div className="BooksFrontDivInner"><Link to='/books/1'><div><img src={img1}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/2'><div><img src={img2}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/3'><div><img src={img3}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/4'><div><img src={img4}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/5'><div><img src={img5}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/6'><div><img src={img6}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/7'><div><img src={img7}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/8'><div><img src={img8}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/9'><div><img src={img9}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/10'><div><img src={img10}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/11'><div><img src={img11}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/12'><div><img src={img12}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/13'><div><img src={img13}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/14'><div><img src={img14}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/15'><div><img src={img15}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/16'><div><img src={img16}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/17'><div><img src={img17}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
      <div className="BooksFrontDivInner"><Link to='/books/18'><div><img src={img18}  alt="Books cover not loaded"></img> <h4></h4></div></Link></div>
    </div>
  )
}