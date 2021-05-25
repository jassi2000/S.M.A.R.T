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
          width: 45+"vw",
          marginRight: 2 + "vw"
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
            
        <div className="chart"> <Doughnut data={data} options={{padding:"0px",responsive:true,maintainAspectRatio:false}} /></div>
            </div>
            </Container>
            <div className="Calculator-info">
            <h2>SIP Calculator – Systematic Investment Plan Calculator</h2>
<p>Prospective investors can think that SIPs and mutual funds are the same. However, SIPs are merely a method of investing in mutual funds, the other method being a lump sum. A SIP calculator is a tool that helps you determine the returns you can avail when parking your funds in such investment tools. Systematic Investment Plan or SIP is a process of investing a fixed sum of money in mutual funds at regular intervals. SIPs usually allow you to invest weekly, quarterly, or monthly.</p>

<h2>What is a SIP Calculator?</h2>
<p>A SIP calculator is a simple tool that allows individuals to get an idea of the returns on their mutual fund investments made through SIP. SIP investments in mutual funds have become one of the most popular investment options for millennials lately.
<br/><br/>
These mutual fund sip calculators are designed to give potential investors an estimate on their mutual fund investments. However, the actual returns offered by a mutual fund scheme varies depending on various factors. The SIP calculator does not provide clarification for the exit load and expense ratio (if any).
<br/><br/>
This calculator will calculate the wealth gain and expected returns for your monthly SIP investment. Indeed, you get a rough estimate on the maturity amount for any of your monthly SIP, based on a projected annual return rate.
</p>
<h2>How can a SIP return calculator help you?</h2>
<p>SIPs are a more lucrative mode of investing funds compared to a lump sum amount according to several mutual fund experts. It helps you become financially disciplined and create a habit of savings that can benefit you in the future.
<br/><br/>
A SIP calculator online is a beneficial tool, which shows the estimated returns you will earn after the investment tenure.
<br/><br/>
Few of the benefits of SIP calculators include –
</p>
<ol>
<li>Assists you to determine the amount you want to invest in.</li>
<li>Tells you the total amount you have invested.</li>
<li>Gives an estimated value of the returns.</li>
</ol>
<h2>How to use S.M.A.R.T’s systematic investment plan calculator?</h2>
<p>
You can use the SIP amount calculator from S.M.A.R.T within a few clicks.
<br/><br/>
Just enter the monthly invested amount (the amount for which you have started the SIP), the number of years for which you want to stay invested, and the expected rate of return.
<br/><br/>
As soon as you input the value, the calculator will show you the estimated amount you can avail after your investment tenure is complete.
</p>
<h2>Advantages of using S.M.A.R.T systematic investment plan calculator</h2>
<p>
S.M.A.R.T offers the best SIP calculator, which provides the following advantages –
</p>
<ul>
<li>Plan your investment based on the amount and tenure.</li>
<li>It helps you compute an estimation of the total value of investments at the end of your SIP tenure.</li>
<li>Shows accurate results and helps you save time required during a manual calculation.</li>
</ul>
<p>A systematic investment plan calculator ensures that your savings portfolio is as per your requirements and financial needs.</p>

        </div>
        </div>
    )
}