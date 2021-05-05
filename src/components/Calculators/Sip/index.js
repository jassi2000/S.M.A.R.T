import React, { useEffect, useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import {Doughnut} from 'react-chartjs-2'
import Container from '@material-ui/core/Container';
import "./styles.css"
export default function Sip(){
    const[invest,setinvest] = useState(500)
    const[year,setyear] = useState(10)
    const[percentage,setpercentage]=useState(12)
    const[returnamount,setreturnamount]=useState()
    const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
  const IOSSlider = withStyles({
    root: {
      color: '#3880ff',
      height: 8,
      padding: '15px 0',
    },
    thumb: {
      height: 28,
      width: 28,
      backgroundColor: '#fff',
      boxShadow: iOSBoxShadow,
      marginTop: -14,
      marginLeft: -14,
      '&:focus, &:hover, &$active': {
        boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: iOSBoxShadow,
        },
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 12px)',
      top: -22,
      '& *': {
        background: 'transparent',
        color: '#000',
      },
    },
    track: {
      height: 2,
    },
    rail: {
      height: 2,
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
    },
    mark: {
      backgroundColor: '#bfbfbf',
      height: 8,
      width: 1,
      marginTop: -3,
    },
    markActive: {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  })(Slider);
    const data = {
      labels: [
        'Invested Amount',
        'Profit On investment',
      ],
      datasets: [{
        data: [invest*year*12, returnamount-invest*year*12],
        backgroundColor: [
        '#FF6384',
        '#36A2EB'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB'
        ]
      }]
    };
    useEffect(()=>{
      let M = 0;
      const n = 12*year;
      const i = (percentage/100)/12;
      M= invest *((1+i)**n-1)*(1+i)/i;
      setreturnamount(Math.floor(M));
      console.log(returnamount)
    },[year,percentage,invest,returnamount])
    const useStyles = makeStyles((theme) => ({
        root: {
          width: 300 + theme.spacing(3) * 2,
        },
        margin: {
          height: theme.spacing(3),
        },
      }));  
     const classes = useStyles();
    return(
        <div>
          <Container>
            <h1>SIP Calculator</h1>
            <div className="centerdiv">   
            <div className={classes.root}>
               <Typography gutterBottom>Monthly Investment (Rs.)</Typography>
               <div className={classes.margin}/>
                <IOSSlider onChangeCommitted={(event,value)=>setinvest(value)} valueLabelDisplay="on" aria-label="pretto slider" defaultValue={invest} step={100} min={100} max={30000}/>
                <div className={classes.margin}/>               
                <Typography gutterBottom>Time Period (yr) </Typography>
                <div className={classes.margin}/>
                <IOSSlider onChangeCommitted={(event,value)=>setyear(value)} valueLabelDisplay="on" aria-label="pretto slider" defaultValue={year} step={1} min={1} max={30}/>
                <div className={classes.margin}/>
                <Typography gutterBottom>Expected Annual Returns (%)</Typography>
                <div className={classes.margin}/>
                <IOSSlider onChangeCommitted={(event,value)=>setpercentage(value)} valueLabelDisplay="on" aria-label="pretto slider" defaultValue={percentage} step={0.5} min={1} max={25}/>
                <div className={classes.margin}/>
                <div className="datadisplay">
              <div className="typocss">
          <Typography variant="p" gutterBottom align="center" >Invested Amount  </Typography>
          <Typography variant="h6" gutterBottom align="center" >{invest*year*12}  </Typography>
          </div>
          <div className="typocss">
          <Typography variant="p" gutterBottom align="center" >Profit Amount</Typography>
        <Typography variant="h6" gutterBottom align="center" >{returnamount-invest*year*12}  </Typography>
        </div>
        </div>
        <div className={classes.margin}/>
        <Typography variant="p" gutterBottom align="center" > Total Returns </Typography>
        <Typography variant="h5" gutterBottom align="center" display="inline" >{returnamount}  </Typography>
            </div>
            
        <div className="chart"> <Doughnut data={data} /></div>
            </div>
            </Container>
        </div>
    )
}