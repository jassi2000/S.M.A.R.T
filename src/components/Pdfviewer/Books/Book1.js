import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import file from './7 Warren Buffett Articles.pdf'
import {Link} from 'react-router-dom'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SkipNextIcon from '@material-ui/icons/SkipNext';

export default function Book1() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    if(event.target.value < numPages){
    setPageNumber(event.target.value);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  function plustenpage(){
    if(pageNumber <= numPages-10){
    changePage(10);
    }
  }
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return (
    <div className="pdfview">
      <Link to="/books"><button className="back-to-books"> <ArrowLeftOutlinedIcon style={{fontSize:"30"}}> </ArrowLeftOutlinedIcon> Back </button> </Link>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="prevandnexthold">
        <p>Jump to : </p>
      <FormControl className="select-book-page">
  
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleChange}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={60}>60</MenuItem>
          <MenuItem value={70}>70</MenuItem>
          <MenuItem value={80}>80</MenuItem>
          <MenuItem value={90}>90</MenuItem>
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={110}>110</MenuItem>
          <MenuItem value={120}>120</MenuItem>

        </Select>
      </FormControl>
        <button
          type="button" className="navigationofbooks"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          <ArrowBackIosOutlinedIcon></ArrowBackIosOutlinedIcon>
        </button>
        <p className="pagenumber">
       
          Page   {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button" className="navigationofbooks"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          <ArrowForwardIosOutlinedIcon></ArrowForwardIosOutlinedIcon>
        </button>
      <button type="button" className="navigationofbooks" onClick={plustenpage} disabled={pageNumber >  numPages-10}><SkipNextIcon></SkipNextIcon></button>
      </div>
    </div>
  );
}