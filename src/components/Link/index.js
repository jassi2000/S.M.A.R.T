import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import CategoryIcon from '@material-ui/icons/Category';
import ExposureIcon from '@material-ui/icons/Exposure';
import ListIcon from '@material-ui/icons/List';
import MenuIcon from '@material-ui/icons/Menu';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import "./styles.css"
import React from 'react'
import Search from "../Search"
import MarketCap from "../MarketCap"
import MediaCard from "../News"
import Pdfviewer from "../Pdfviewer"
import Intraday from "../intraday"
import Book1 from "../Pdfviewer/Books/Book1"
import Book2 from "../Pdfviewer/Books/Book2"
import Book3 from "../Pdfviewer/Books/Book3"
import Book4 from "../Pdfviewer/Books/Book4"
import Book5 from "../Pdfviewer/Books/Book5"
import Book6 from "../Pdfviewer/Books/Book6"
import Book7 from "../Pdfviewer/Books/Book7"
import Book8 from "../Pdfviewer/Books/Book8"
import Book9 from "../Pdfviewer/Books/Book9"
import Book10 from "../Pdfviewer/Books/Book10"
import Book11 from "../Pdfviewer/Books/Book11"
import Book12 from "../Pdfviewer/Books/Book12"
import Book13 from "../Pdfviewer/Books/Book13"
import Book14 from "../Pdfviewer/Books/Book14"
import Book15 from "../Pdfviewer/Books/Book15"
import Book16 from "../Pdfviewer/Books/Book16"
import Book17 from "../Pdfviewer/Books/Book17"
import Book18 from "../Pdfviewer/Books/Book18"
import ourlogo from "./our logo3.png"
import Calculators from "../Calculators"
import Lumsum from "../Calculators/Lumsum"
import Sip from "../Calculators//Sip"
import ShortandSwing from "../shortandswing"
import Short from "../shortandswing/shortterm"
import Swing from "../shortandswing/swing"
import Home from "../Home"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Link1(){
    return(
        <Router>
        <div className="Link">
        <Link to="/"><div><HomeIcon style={{fontSize : 50, color: 'white'}}/> <p className="LinkPara"> Home</p> </div></Link>
        <Link to="/search"><div><SearchIcon style={{fontSize : 50 , color: 'white'}}/>  <p className="LinkPara"> Stocks</p></div></Link>
        <Link to="/categories"><div><CategoryIcon style={{fontSize : 50 , color: 'white'}}/> <p className="LinkPara"> Categories</p></div></Link>
        <Link to="/calculators">   <div> <ExposureIcon style={{fontSize : 50 , color: 'white'}}/> <p className="LinkPara"> Calculators</p></div></Link>
        <Link to="/intraday">   <div><ListIcon style={{fontSize : 50 , color: 'white'}}/> <p className="LinkPara"> Intraday</p></div></Link>
        <Link to="/positionals"> <div><MenuIcon style={{fontSize : 50,color: 'white'}}/> <p className="LinkPara"> Positional </p></div></Link>
        <Link to="/news"> <div><MenuBookIcon style={{fontSize : 50,color: 'white'}}/> <p className="LinkPara"> News</p></div></Link>
        <Link to="/books"> <div><ImportContactsTwoToneIcon style={{fontSize : 50,color: 'white'}}/> <p className="LinkPara"> Books</p></div></Link>
        </div>
        <div className="Link2">
        <img className="ourlogo" src={ourlogo}></img>
        <marquee className="marq"> All our services and training programs are completely free of cost. The S.M.A.R.T Team will never call you or send you sms to pay for any service/ training program. Do not pay anyone any amount. S.M.A.R.T is not associated with any institute in Delhi/India. Beware of Fraud Institutes misusing our name and falsely representing us to sell their training programs/advisory services. </marquee>
        <div className="Link-mobile">
        <Link to="/"><div><HomeIcon style={{fontSize : 30, color: 'white'}}/> <p className="LinkPara"> Home</p> </div></Link>
        <Link to="/search"><div><SearchIcon style={{fontSize : 30 , color: 'white'}}/>  <p className="LinkPara"> Stocks</p></div></Link>
        <Link to="/categories"><div><CategoryIcon style={{fontSize : 30 , color: 'white'}}/> <p className="LinkPara"> Categories</p></div></Link>
        <Link to="/calculators">   <div> <ExposureIcon style={{fontSize : 30 , color: 'white'}}/> <p className="LinkPara"> Calculators</p></div></Link>
        <Link to="/intraday">   <div><ListIcon style={{fontSize : 30 , color: 'white'}}/> <p className="LinkPara"> Intraday</p></div></Link>
        <Link to="/positionals"> <div><MenuIcon style={{fontSize : 30,color: 'white'}}/> <p className="LinkPara"> Positional </p></div></Link>
        <Link to="/news"> <div><MenuBookIcon style={{fontSize : 30,color: 'white'}}/> <p className="LinkPara"> News</p></div></Link>
        <Link to="/books"> <div><ImportContactsTwoToneIcon style={{fontSize : 30,color: 'white'}}/> <p className="LinkPara"> Books</p></div></Link>
        </div>
        <Switch>
        <Route exact path="/">
            <Home />
            </Route>
          <Route exact path="/search">
            <Search />
            </Route>
            <Route exact path="/calculators">
            <Calculators />
            </Route>
            <Route exact path="/calculators/sip">y
            <Sip />
            </Route>
            <Route exact path="/calculators/lumsum">
            <Lumsum />
            </Route>
            <Route exact path="/positionals">
            <ShortandSwing />
            </Route>
            <Route exact path="/positionals/short-term">
            <Short />
            </Route>
            <Route exact path="/positionals/swing">
            <Swing />
            </Route>
            <Route exact path="/categories">
            <MarketCap />
            </Route>
            <Route exact path="/news">
            <MediaCard />
            </Route>
            <Route exact path="/books">
            <Pdfviewer />
            </Route>
            <Route exact path="/intraday">
            <Intraday />
            </Route>
            <Route exact path="/books/1">
            <Book1 />
            </Route>
            <Route exact path="/books/3">
            <Book2 />
            </Route>
            <Route exact path="/books/7">
            <Book3 />
            </Route>
            <Route exact path="/books/12">
            <Book4 />
            </Route>
            <Route exact path="/books/4">
            <Book5 />
            </Route>
            <Route exact path="/books/5">
            <Book6 />
            </Route>
            <Route exact path="/books/11">
            <Book7 />
            </Route>
            <Route exact path="/books/6">
            <Book8 />
            </Route>
            <Route exact path="/books/8">
            <Book9 />
            </Route>
            <Route exact path="/books/10">
            <Book10 />
            </Route>
            <Route exact path="/books/15">
            <Book11 />
            </Route>
            <Route exact path="/books/13">
            <Book12 />
            </Route>
            <Route exact path="/books/14">
            <Book13 />
            </Route>
            <Route exact path="/books/18">
            <Book14 />
            </Route>
            <Route exact path="/books/16">
            <Book15 />
            </Route>
            <Route exact path="/books/9">
            <Book16 />
            </Route>
            <Route exact path="/books/2">
            <Book17 />
            </Route>
            <Route exact path="/books/17">
            <Book18 />
            </Route>
            
        </Switch>
        </div>
        </Router>
    )
}