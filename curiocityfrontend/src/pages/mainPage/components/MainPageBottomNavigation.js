import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {AppBar} from "@material-ui/core";
import styled from "@material-ui/core/styles/styled";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginBottom: 0,
    backgroundColor: "rgba(94,114,141,0.8)",
  },
  mybottomappBar: {
    top: 'auto',
    bottom: 0,
  },
});

const MyBottomAppBar = styled(AppBar)({
  backgroundColor: "rgba(94,114,141,0.8)",
  border: 0,
  borderRadius: 0,
  boxShadow: 0,
  height: 70,
})

export default function MainPageBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
      <MyBottomAppBar position="fixed" className={classes.mybottomappBar}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon/>} style={{color: '#FFFFFF'}}/>
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>} style={{color: '#FFFFFF'}}/>
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>} style={{color: '#FFFFFF'}}/>
        </BottomNavigation>
      </MyBottomAppBar>
    </>
  );
}