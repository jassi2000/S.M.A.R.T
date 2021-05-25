import React, {useEffect,useState } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
import Barchart from "./barchart"
export default function LineGraph (props) {
    const chartRef = React.createRef();
    // const[open,setopen] = useState([]);
    const[close,setclose] = useState([]);
    // const[high,sethigh] = useState([]);
    // const[low,setlow] = useState([]);
    const[date,setdate] = useState([]);
    const[vol,setvol] = useState([]);
     useEffect(()=> {
     const myChartRef =  chartRef.current.getContext("2d");
         new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: date,
                datasets: [
                    // {
                    //     label: "Open",
                    //     data: open,
                    //     fill: false,
                    //     borderColor: "red"
                    // },
                    {
                        label: props.sym.name,
                        data: close,
                        fill: true,  
                        borderColor: "green"
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
                maintainAspectRatio: false,
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
                            gridLines: {
                                display: true,
                                drawBorder: true
                            }
                        }]
                    }

            }
        });
    },[close,props.sym])

    useEffect(()=>{
        const timeout = setTimeout(()=>{
        if(props.datas.length !== 0 ){
            // let Array1=[];
            // let Array2=[];
            // let Array3=[];
            let Array4=[];
            let Array5=[];
            let Array6=[];
            // {stockdata1.map((value,index)=>(
            //     Array1[index]=value.open,
            //     Array2[index]=value.high,
            //     Array3[index]=value.low,---
            //     Array4[index]=value.date,
            //     Array5[index]=value.volume,
            //     Array6[index]=value.close))};
                for (let i = 0; i < props.datas.length; i++) {
                    const value = props.datas[i];
                    // Array1[i]=value.open;
                    // Array2[i]=value.high;
                    // Array3[i]=value.low;
                    Array4[i]=value.date;
                    Array5[i]=value.volume;
                    Array6[i]=value.close;;
                }
            // setopen(Array1);
            // sethigh(Array2);
            // setlow(Array3);
            setdate(Array4);
            setvol(Array5);
            setclose(Array6);
            }
        },200)
        return ()=> clearTimeout(timeout);
        },[props.datas])
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={chartRef}
                />
                <Barchart data={vol} date={date} vol={props.sym["market-cap"]}/>
            </div>
            
        )
    }