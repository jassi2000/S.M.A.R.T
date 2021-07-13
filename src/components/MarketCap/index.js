import jsondata from "./market-cap.json"
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from 'react-bootstrap/Table'
import "bootstrap/dist/css/bootstrap.min.css";

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }
  
  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      margin: 2+"%" +" "+1+"%"
    },
  }));

export default function MarketCap(){
    const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    console.log(jsondata);
    let i;
    let j=0;
    let k=0;
    let Array1=[];
    let Array2=[];
    let Array3=[];

    for(i=0; i<jsondata.length;i++){
      if(jsondata[i].Categorization === "Large Cap"){
        Array1[i]=jsondata[i];
    }
    else if(jsondata[i].Categorization === "Mid Cap"){
      Array2[j] = jsondata[i];
      j++;
    }
    else{
      Array3[k] = jsondata[i];
      k++;
    }
  }
    return(
        <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Small Cap"  {...a11yProps(0)} />
          <LinkTab label="Mid Cap" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Large Cap" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Sr.no</th>
      <th>Company Name</th>
      <th>NSE Symbol</th>
      <th>Market Capitalisation (in Crs)</th>
      <th>Categorization</th>
    </tr>
  </thead>
  <tbody>
  {Array3.map((value,index)=>{return<tr>
    <td>{index+1}</td>
      <td>{value["Company-name"]}</td>
      <td>{value["NSE-Symbol"]}</td>
      <td>{value["Market-Cap-in-crs"]}</td>
      <td>{value.Categorization}</td>
    </tr>
    })}
  </tbody>
</Table>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Sr.no</th>
      <th>Company Name</th>
      <th>NSE Symbol</th>
      <th>Market Capitalisation (in Crs)</th>
      <th>Categorization</th>
    </tr>
  </thead>
  <tbody>
  {Array2.map((value,index)=>{return<tr>
    <td>{index+1}</td>
      <td>{value["Company-name"]}</td>
      <td>{value["NSE-Symbol"]}</td>
      <td>{value["Market-Cap-in-crs"]}</td>
      <td>{value.Categorization}</td>
    </tr>
    })}
  </tbody>
</Table>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Sr.no</th>
      <th>Company Name</th>
      <th>NSE Symbol</th>
      <th>Market Capitalisation (in Crs)</th>
      <th>Categorization</th>
    </tr>
  </thead>
  <tbody>
  {Array1.map((value,index)=>{return<tr>
      <td>{index+1}</td>
      <td>{value["Company-name"]}</td>
      <td>{value["NSE-Symbol"]}</td>
      <td>{value["Market-Cap-in-crs"]}</td>
      <td>{value.Categorization}</td>
    </tr>
    })}
  </tbody>
</Table>
      </TabPanel>
    </div>
    );
}