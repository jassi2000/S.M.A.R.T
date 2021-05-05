import React, {useEffect } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";

export default function Barchart (props) {
    const chartRef = React.createRef();
useEffect(()=> {
    const myChartRef =  chartRef.current.getContext("2d");
        new Chart(myChartRef, {
           type: "bar",
           data: {
               //Bring in data
               labels: props.date,
               datasets: [
                   // {
                   //     label: "Open",
                   //     data: open,
                   //     fill: false,
                   //     borderColor: "red"
                   // },
                   {
                       label: "Volume",
                       data: props.data,
                       fill: false,
                       backgroundColor: "green",
                       borderColor : "red",
                       
                   },
                   // {
                   //     label: "High",
                   //     data: high,
                   //     fill: false,
                   //     borderColor: "blue"
                   // },
                   // {
                   //     label: "Low",
                   //     data: low,
                   //     fill: false,
                   //     borderColor: "violet"
                   // },
               ]
           },
           options: {
               //Customize chart options
               responsive: true,
               maintainAspectRatio: true,
               layout: {
                   padding: {
                       top: 5,
                       left: 15,
                       right: 15,
                       bottom: 15
                   }},
                   scales: {
                       xAxes: [{
                               type: 'time',
                               time: {
                                 unit: 'day'
                               },
                               // distribution: 'series'
                           gridLines: {
                               display: false,
                               drawBorder: true
                           },
                           ticks:{
                               stepSize : 3
                           }
                       }],
                       yAxes: [{
                           position:'right',
                           ticks: { callback : function(value,index,array) 
                            { return (value < 10000000) ? value/100000 + 'L' : value/10000000 + 'Cr'; } },
                           gridLines: {
                               display: true,
                               drawBorder: true
                           }
                       }]
                   }

           }
       });
   },[chartRef,props.data,props.date])
   return (
       <div>
           <p className="market-cap"><strong>Market Cap:</strong> {props.vol}</p>
    <div className={classes.graphContainer2}>
        <canvas
            id="myChart"
            ref={chartRef}
        />
        
    </div>
    </div>
   )
}