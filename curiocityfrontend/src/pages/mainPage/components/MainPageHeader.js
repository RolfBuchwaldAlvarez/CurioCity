import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
  },
  appBar: {
    width: "100%",
  },
  wrapperBox: {
    width: "100%",
    height: "100%",
  },
  box1: {
    width: "50%",
  },
  box2: {
    width: "50%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  image: {
    padding: theme.spacing(1),
  },
}));

export default function MainPageHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Box className={classes.wrapperBox} display="flex" flexDirection="row">
            <Box className={classes.box1} display="flex" flexDirection="row" justifyContent="flex-start"
                 alignItems="center">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon/>
              </IconButton>
            </Box>
            <Box className={classes.box2} display="flex" flexDirection="row" justifyContent="flex-end"
                 alignItems="center">
              <img className={classes.image} src="/images/curiocityLogo.png" alt="curiocity"/>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}