import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import CategoryIcon from '@material-ui/icons/Category';
import ExposureIcon from '@material-ui/icons/Exposure';
import ListIcon from '@material-ui/icons/List';
import MenuIcon from '@material-ui/icons/Menu';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import $ from 'jquery'
import "./styles.css"
import React, { useEffect } from 'react'
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
import Blog from "../Blogs"
import Blog1 from "../Blogs/Blog1"
import Blog2 from "../Blogs/Blog2"
import Blog3 from "../Blogs/Blog3"
import Blog4 from "../Blogs/Blog4"
import Blog5 from "../Blogs/Blog5"
import Blog6 from "../Blogs/Blog6"
import Blog7 from "../Blogs/Blog7"
import Blog8 from "../Blogs/Blog8"
import Blog9 from "../Blogs/Blog9"
import Blog10 from "../Blogs/Blog10"
import Blog11 from "../Blogs/Blog11"
import Blog12 from "../Blogs/Blog12"
import Blog13 from "../Blogs/Blog13"
import Blog14 from "../Blogs/Blog14"
import Blog15 from "../Blogs/Blog15"
import Blog16 from "../Blogs/Blog16"
import Blog17 from "../Blogs/Blog17"
import Blog18 from "../Blogs/Blog18"
import Blog19 from "../Blogs/Blog19"
import Blog20 from "../Blogs/Blog20"
import Blog21 from "../Blogs/Blog21"
import Blog22 from "../Blogs/Blog22"
import Blog23 from "../Blogs/Blog23"
import Blog24 from "../Blogs/Blog24"
import Blog25 from "../Blogs/Blog25"
import Blog26 from "../Blogs/Blog26"
import Blog27 from "../Blogs/Blog27"
import Blog28 from "../Blogs/Blog28"
import Blog29 from "../Blogs/Blog29"
import Blog30 from "../Blogs/Blog30"
import Blog31 from "../Blogs/Blog31"
import Blog32 from "../Blogs/Blog32"
import Blog33 from "../Blogs/Blog33"
import Blog34 from "../Blogs/Blog34"
import Blog35 from "../Blogs/Blog35"
import Blog36 from "../Blogs/Blog36"
import Blog37 from "../Blogs/Blog37"
import Blog38 from "../Blogs/Blog38"
import Blog39 from "../Blogs/Blog39"
import Blog40 from "../Blogs/Blog40"
import Blog41 from "../Blogs/Blog41"
import Blog42 from "../Blogs/Blog42"
import Blog43 from "../Blogs/Blog43"
import Blog44 from "../Blogs/Blog44"
import Blog45 from "../Blogs/Blog45"
import Blog46 from "../Blogs/Blog46"
import Blog47 from "../Blogs/Blog47"
import Blog48 from "../Blogs/Blog48"
import Blog49 from "../Blogs/Blog49"
import Blog50 from "../Blogs/Blog50"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { ImportantDevicesTwoTone } from '@material-ui/icons';

export default function Link1(){

useEffect(()=>{
  $(document).on('click','.Link .Link-icons', function(ele) {
    $(".Link-icons").each(function(){
      $(this).addClass("notactive");
      $(this).removeClass("active");
    })
    $(ele.currentTarget).removeClass("notactive").addClass("active");
  });
  $(document).on('click','.Link-mobile div', function(ele) {
    $(".Link-mobile div").each(function(){
      $(this).addClass("notactive");
      $(this).removeClass("active");
    })
    $(ele.currentTarget).removeClass("notactive").addClass("active");
  });
  $(document).on('click','img.ourlogo', function() {
    $(".Link-mobile div").each(function(){
      $(this).addClass("notactive");
      $(this).removeClass("active");
    })
  });
},[]);

    return(
        <Router>
          <div className="Both-link-wrapper">
          <div className="Link-wrapper">
        <div className="Link">
        <Link to="/"><div className="Link-icons active"><HomeIcon style={{fontSize : 45, color: 'white'}}/> <p className="LinkPara"> Home</p> </div></Link>
        <Link to="/search"><div className="Link-icons">  <SearchIcon style={{fontSize : 45 , color: 'white'}}/>  <p className="LinkPara"> Stocks</p></div></Link>
        <Link to="/categories"><div className="Link-icons"><CategoryIcon style={{fontSize : 45 , color: 'white'}}/> <p className="LinkPara"> Categories</p></div></Link>
        <Link to="/calculators">   <div className="Link-icons"> <ExposureIcon style={{fontSize : 45 , color: 'white'}}/> <p className="LinkPara"> Calculators</p></div></Link>
        <Link to="/intraday">   <div className="Link-icons"><ListIcon style={{fontSize : 45 , color: 'white'}}/> <p className="LinkPara"> Intraday</p></div></Link>
        <Link to="/positionals"> <div className="Link-icons"><MenuIcon style={{fontSize : 45,color: 'white'}}/> <p className="LinkPara"> Positional </p></div></Link>
        <Link to="/news"> <div className="Link-icons"><MenuBookIcon style={{fontSize : 45,color: 'white'}}/> <p className="LinkPara"> News</p></div></Link>
        <Link to="/books"> <div className="Link-icons"><ImportContactsTwoToneIcon style={{fontSize : 45,color: 'white'}}/> <p className="LinkPara"> Books</p></div></Link>
        <Link to="/blogs"><div className="Link-icons"><ImportantDevicesTwoTone style={{fontSize : 45,color: 'white'}}/><p className="LinkPara">Blogs</p></div></Link>
        </div>
        <div className="Link2-wrapper">
        <div className="Link2">
        <Link to="/"><img className="ourlogo" src={ourlogo} alt="logo not loaded"></img></Link>
        <marquee className="marq"> All our services and training programs are completely free of cost. The S.M.A.R.T Team will never call you or send you sms to pay for any service/ training program. Do not pay anyone any amount. S.M.A.R.T is not associated with any institute in Delhi/India. Beware of Fraud Institutes misusing our name and falsely representing us to sell their training programs/advisory services. </marquee>
        <div className="Link-mobile">
        <Link to="/search"><div><SearchIcon style={{fontSize : 25 , color: 'white'}}/>  <p className="LinkPara"> Stocks</p></div></Link>
        <Link to="/categories"><div><CategoryIcon style={{fontSize : 25 , color: 'white'}}/> <p className="LinkPara"> Categories</p></div></Link>
        <Link to="/calculators">   <div> <ExposureIcon style={{fontSize : 25 , color: 'white'}}/> <p className="LinkPara"> Calculator</p></div></Link>
        <Link to="/intraday">   <div><ListIcon style={{fontSize : 25 , color: 'white'}}/> <p className="LinkPara"> Intraday</p></div></Link>
        <Link to="/positionals"> <div><MenuIcon style={{fontSize : 25,color: 'white'}}/> <p className="LinkPara"> Positional </p></div></Link>
        <Link to="/news"> <div><MenuBookIcon style={{fontSize : 25,color: 'white'}}/> <p className="LinkPara"> News</p></div></Link>
        <Link to="/books"> <div><ImportContactsTwoToneIcon style={{fontSize : 25,color: 'white'}}/> <p className="LinkPara"> Books</p></div></Link>
        <Link to="/blogs"><div><ImportantDevicesTwoTone style={{fontSize : 25, color: 'white'}}/> <p className="LinkPara"> Blogs</p> </div></Link>
        </div>
        <Switch>
          <Route exact path="/blogs">  
            <Blog />
          </Route>
          <Route exact path="/blogs/blog1">  
              <Blog1 />
             </Route>
             <Route exact path="/blogs/blog11">  
              <Blog11 />
             </Route>
             <Route exact path="/blogs/blog12">  
              <Blog12 />
             </Route>
             <Route exact path="/blogs/blog13">  
              <Blog13 />
             </Route>
             <Route exact path="/blogs/blog14">  
              <Blog14 />
             </Route>
             <Route exact path="/blogs/blog15">  
              <Blog15 />
             </Route>
             <Route exact path="/blogs/blog16">  
              <Blog16 />
             </Route>
             <Route exact path="/blogs/blog17">  
              <Blog17 />
             </Route>
             <Route exact path="/blogs/blog18">  
              <Blog18 />
             </Route>
             <Route exact path="/blogs/blog19">  
              <Blog19 />
             </Route>
             <Route exact path="/blogs/blog2">  
              <Blog2 />
             </Route>
             <Route exact path="/blogs/blog20">  
              <Blog20 />
             </Route>
             <Route exact path="/blogs/blog21">  
              <Blog21 />
             </Route>
             <Route exact path="/blogs/blog22">  
              <Blog22 />
             </Route>
             <Route exact path="/blogs/blog23">  
              <Blog23 />
             </Route>
             <Route exact path="/blogs/blog24">  
              <Blog24 />
             </Route>
             <Route exact path="/blogs/blog25">  
              <Blog25 />
             </Route>
             <Route exact path="/blogs/blog26">  
              <Blog26 />
             </Route>
             <Route exact path="/blogs/blog27">  
              <Blog27 />
             </Route>
             <Route exact path="/blogs/blog28">  
              <Blog28 />
             </Route>
             <Route exact path="/blogs/blog29">  
              <Blog29 />
             </Route>
             <Route exact path="/blogs/blog3">  
             <Blog3 />
             </Route>
             <Route exact path="/blogs/blog30">  
             <Blog30 />
             </Route>
             <Route exact path="/blogs/blog31">  
             <Blog31 />
             </Route>
             <Route exact path="/blogs/blog32">  
             <Blog32 />
             </Route>
             <Route exact path="/blogs/blog33">  
             <Blog33 />
             </Route>
             <Route exact path="/blogs/blog34">  
             <Blog34 />
             </Route>
             <Route exact path="/blogs/blog35">  
             <Blog35 />
             </Route>
             <Route exact path="/blogs/blog36">  
             <Blog36 />
             </Route>
             <Route exact path="/blogs/blog37">  
             <Blog37 />
             </Route>
             <Route exact path="/blogs/blog38">  
             <Blog38 />
             </Route>
             <Route exact path="/blogs/blog39">  
             <Blog39 />
             </Route>
             <Route exact path="/blogs/blog4">  
             <Blog4 />
             </Route>
             <Route exact path="/blogs/blog40">  
             <Blog40 />
             </Route>
             <Route exact path="/blogs/blog41">  
             <Blog41 />
             </Route>
             <Route exact path="/blogs/blog42">  
             <Blog42 />
             </Route>
             <Route exact path="/blogs/blog43">  
             <Blog43 />
             </Route>
             <Route exact path="/blogs/blog44">  
             <Blog44 />
             </Route>
             <Route exact path="/blogs/blog45">  
             <Blog45 />
             </Route>
             <Route exact path="/blogs/blog46">  
             <Blog46 />
             </Route>
             <Route exact path="/blogs/blog47">  
             <Blog47 />
             </Route>
             <Route exact path="/blogs/blog48">  
             <Blog48 />
             </Route>
             <Route exact path="/blogs/blog49">  
             <Blog49 />
             </Route>
             <Route exact path="/blogs/blog5">  
             <Blog5 />
             </Route>
             <Route exact path="/blogs/blog50">  
             <Blog50 />
             </Route>
             <Route exact path="/blogs/blog6">  
             <Blog6 />
             </Route>
             <Route exact path="/blogs/blog7">  
             <Blog7 />
             </Route>
             <Route exact path="/blogs/blog8">  
             <Blog8 />
             </Route>
             <Route exact path="/blogs/blog9">  
             <Blog9 />
             </Route>
             <Route exact path="/blogs/blog10">  
             <Blog10 />
             </Route>
        <Route exact path="/">
            <Home />
            </Route>
          <Route exact path="/search">
            <Search />
            </Route>
            <Route exact path="/calculators">
            <Calculators />
            </Route>
            <Route exact path="/calculators/sip">
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
        </div>
        </div>
        </div>
        </Router>
    )
}