import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../images/recycle.png';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home'
import { green } from "@material-ui/core/colors";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  homeButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'black'
  },
  logo: {
    maxWidth: 40,
    marginRight: '10px'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#e8f5e9'}}>
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            <img src={Logo} alt="logo img" className={classes.logo}></img>
            Recycling Allimi
          </Typography>
          <Link to="/" style={{ textDecoration: 'none' }}>
          <IconButton type="submit" className={classes.homeButton} aria-label="home">
            <HomeIcon style={{ color: green[500], fontSize: 30}} />
          </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
