import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  title: {
    flexGrow: 1,
  },
}));

export default function MyNavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Link to={"/"} style={{ textDecoration: 'none' }} className="nav-link">Schedule</Link>
          </Button>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button color="inherit">
            <Link to={"/add"} style={{ textDecoration: 'none' }} className="nav-link">Add Client</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}