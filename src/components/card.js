import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
  const changecolor = () =>{
    
  var rr = Math.floor(Math.random()*16777215).toString(16);
  // setcol(rr);
   // return 
   return '#' + rr;
  }
export default function OutlinedCard(props) {
  const classes = useStyles();
  const [col, setcol] = useState();
  const bull = <span className={classes.bullet}>•</span>;
  

  return (
    <Card className={classes.root} variant="outlined"  >
      <CardContent  style={{backgroundColor: changecolor()}} >
        <Typography className={classes.title} color="textSecondary" gutterBottom >
          {props.heading1}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.heading2}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.data1}
        </Typography>
        
      </CardContent>
    
    </Card>
  );
}