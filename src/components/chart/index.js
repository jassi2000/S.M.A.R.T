import React, {useEffect,useState } from 'react'
import axios from 'axios'
import LineGraph from "./linegraph"
import "./LineGraph.module.css";

export default function ComboChart(props){
    const[dataofstock,setdataofstock] = useState([]);
    console.log(props.data)
    useEffect(async()=>{
            console.log("hiff")
            const url1 = '//api.marketstack.com/v1/eod?access_key=8a2c17e83a0c6516c98715bcf77ed1be&symbols='+ props.data.symbol;
            const result = await axios(url1);
            const r = result.data;
            setdataofstock(r.data);
            console.log(r);
    },[props.data])

    console.log(dataofstock);
    return (
        <div>
        <p className="company-desc">{props.data.description}</p>
        <LineGraph datas={dataofstock} sym={props.data}/>
        </div>
    )
}