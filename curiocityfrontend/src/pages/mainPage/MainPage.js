import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MainPageHeader from "./components/MainPageHeader";
import MainPageBottomNavigation from "./components/MainPageBottomNavigation";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainPage: {
    height: "100vh",
    width: "100%",
    backgroundImage: "url(/images/MapCologneDoubleSize.png)",
    backgroundPosition: "center", /* Center the image */
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    backgroundSize: "cover", /* Resize the background image to cover the entire container */
  },
  box1: {
    height: "50%",
  },
  box2: {
    height: "50%",
  }
}));

export default function MainPage() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.mainPage} display="flex" flexDirection="column">
        <Box className={classes.box1} display="flex" flexDirection="column" justifyContent="flex-start">
          <MainPageHeader/>
        </Box>
        <Box className={classes.box2} display="flex" flexDirection="column" justifyContent="flex-end">
          <MainPageBottomNavigation/>
        </Box>
      </Box>
    </>
  );
}