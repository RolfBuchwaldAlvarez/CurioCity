import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MainPageAppDrawerLeft from "./MainPageAppDrawerLeft";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "auto",
    position: "absolute",
    top: 0,
    zIndex: 10,
  },
  appBar: {
    width: "100%",
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
}));

export default function MainPageHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar disableGutters={true}>
          <MainPageAppDrawerLeft/>
          <img
            className={classes.image}
            src="/svg/curiocityLogo.svg"
            alt="curiocity"
            style={{
              height: "35px",
              width: "auto",
              position: "absolute",
              right: 20,
            }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}