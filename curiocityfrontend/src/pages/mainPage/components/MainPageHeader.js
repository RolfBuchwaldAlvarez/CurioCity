import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Box from "@material-ui/core/Box";
import MainPageAppDrawerLeft from "./MainPageAppDrawerLeft";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

  },
  appBar: {
    width: "100vw",
    backgroundColor: "rgba(94,114,141,0.8)",
  },
  wrapperBox: {
    width: "100%",
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
    width: "50%",
  },
}));

export default function MainPageHeader() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar disableGutters={true}>
          <Box className={classes.wrapperBox} display="flex" flexDirection="row">
            <Box className={classes.box1} display="flex" flexDirection="row" justifyContent="flex-start"
                 alignItems="center">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MainPageAppDrawerLeft/>
              </IconButton>
            </Box>
            <Box className={classes.box2} display="flex" flexDirection="row" justifyContent="center"
                 alignItems="center">
              <img className={classes.image} src="/images/curiocityLogo.png" alt="curiocity"/>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}