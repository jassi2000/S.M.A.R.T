import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles({
  root: {
    maxHeight:10+"%",
    margin: 4+"%" + " "+5+"%",
    borderRadius: 20
  },
  media: {
    height: 350,
  },
  B:{
    margin : "auto"
  }
});
export default function MediaCard() {
  const classes = useStyles();
  const [apicomp,setapicomp] =useState([]);
  useEffect(async () => {
    const result = await axios(
      'http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=30d3ef10a68e45d49472ad91db7c6cc1 ',
    );
      console.log(result)
    setapicomp(result.data.articles);
  },[]);
  console.log(apicomp)
  return (
    <div>
    {apicomp.map(item =>(
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.urlToImage}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h4">
            {item.title}
          </Typography>
          <Typography variant="h6" color="textPrimary" >
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button className={classes.B} href={item.url}  size="large" color="secondary" endIcon={<ArrowRightAltIcon fontSize="large" />}>
          Read Full Article
        </Button>
      </CardActions>
    </Card>))}
    </div>
  );
}
