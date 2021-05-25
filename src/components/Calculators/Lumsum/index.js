import React, { useEffect, useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import {Doughnut} from 'react-chartjs-2'
import Container from '@material-ui/core/Container';
import "./styles.css"
export default function Lumsum(){
    const[investment,setinvestment] = useState(500)
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
        'Investment Amount',
        'Profit Amount',
      ],
      datasets: [{
        data: [investment, returnamount-investment],
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
      let FV = 0;
      const i = (percentage/100);
      FV = investment *((1+i)**year);
      setreturnamount(Math.floor(FV));
      console.log(returnamount)
    },[year,percentage,investment,returnamount])
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
            <h1>LUMP SUM Calculator</h1>
            <div className="centerdiv">   
            <div className={classes.root}>
               <Typography gutterBottom>Total investment (Rs.)</Typography>
               <div className={classes.margin}/>
                <IOSSlider onChangeCommitted={(event,value)=>setinvestment(value)} valueLabelDisplay="on" aria-label="pretto slider" defaultValue={investment} step={100} min={500} max={300000}/>
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
          <Typography variant="h6" gutterBottom align="center" >{investment}  </Typography>
          </div>
          <div className="typocss">
          <Typography variant="p" gutterBottom align="center" >Profit Amount</Typography>
        <Typography variant="h6" gutterBottom align="center" >{returnamount-investment}  </Typography>
        </div>
        </div>
        <div className={classes.margin}/>
        <Typography variant="p" gutterBottom align="center" > Total Returns </Typography>
        <Typography variant="h5" gutterBottom align="center" display="inline" >{returnamount}  </Typography>
            </div>
            
        <div className="chart"> <Doughnut data={data} options={{padding:"0px",responsive:true,maintainAspectRatio:false}}/></div>
            </div>
            </Container>
            <div className="Calculator-info">
              <p>Investments in Mutual Funds can be broadly classified into two types- lumpsum and SIP. A lumpsum investment is when the depositor invests a significant sum of money on a particular mutual fund scheme. SIP or Systematic Investment Plan, on the other hand, entails the investment of smaller amounts on a monthly basis.
<br/><br/>
Both these type of mutual fund investment strategies have their fair share of benefits. Lumpsum investments are particularly preferred by a majority of investors, as there are lesser variables involved and returns are generally on the higher side. To find out the estimated returns on your lumpsum mutual fund investment, you may use a mutual fund lumpsum calculator available online.</p>
<h2>How can a Lump sum Calculator Help You?</h2>
<p>Mutual fund investors can use this calculator to figure out the estimated returns on their investments. Before getting into the benefits of using this calculator, one must know the types of return for a lumpsum investment.
</p>
<ul>
<li>Absolute return </li>
<li>Total return</li>
<li>Annualised return</li>
<li>Point to point return</li>
<li>Trailing return</li>
<li>Rolling return</li>
</ul>
<p>It’s paramount that an investor understands all these types of returns in details to avail the maximum benefits from their mutual fund investments. 
<br/><br/>
Now that you are familiar with the type of returns, it’s time to delve into the benefits of using a lumpsum return calculator:
</p>
<ul>
<li>This calculator provides you with the estimated returns for the whole investment period. You may calculate your investments’ 1-year, 3-year and 5-year returns using this calculator.</li>
<li>It’s incredibly convenient and easy to use. Even a layperson can use this calculator with relative ease.</li>
<li>It offers a reasonably accurate estimate. Note that mutual fund investments are subject to market risks, and cannot be predicted with pinpoint accuracy. </li>
<li>An MF lumpsum calculator enables an investor to plan his/her finances better based on the estimated return they are most likely to receive at the end of their investment period.</li>
</ul>    
<h2>How to use S.M.A.R.T lumpsum calculator?</h2>
<p>The lumpsum calculator available on the S.M.A.R.T website is easily navigable. Follow the steps mentioned below to calculate your ROI on mutual funds:
</p>
<ul>
<li>Provide required variables at their designated slots. You may also use the slider to adjust values.</li>
<li>The calculator will provide you with an estimated value in seconds.</li>
</ul>
<h2>Advantages of using S.M.A.R.T lumpsum calculator</h2>
<p>
A mutual fund lumpsum calculator is an incredibly convenient financial tool which comes with a host of benefits.
</p>
<ul>
<li>Returns on mutual fund investments cannot be calculated accurately as they are subjected to market risks. A calculator provides you with the closest possible estimate.</li>
<li>It enables you to plan your finances based on the estimated returns.</li>
<li>It is an online tool, implying that you can use it at any time from any place. It eliminates time and space constraints.</li>
<li>It saves your time and effort, as these calculations can take several minutes. Doing calculations manually for more than one variation can take hours.</li>
</ul>
<p>Lumpsum investments are one of the most widely availed investment vehicles, most of which have a time-proven history of yielding high returns. You may begin your investment with a smaller amount and increase it as you become more comfortable with the procedure.
</p>
            </div>
        </div>
    )
}