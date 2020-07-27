import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MainPageHeader from "./components/MainPageHeader";
import MainPageBottomNavigation from "./components/MainPageBottomNavigation";
import MainPageAppDrawerLeft from "./components/MainPageAppDrawerLeft";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainPage: {
    height: "100%",
    width: "100%",
    backgroundImage: "url(/images/MapCologneDoubleSize.png)",
    backgroundPosition: "center", /* Center the image */
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    backgroundSize: "cover", /* Resize the background image to cover the entire container */
  },
}));

export default function MainPage() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.mainPage}>
        <MainPageHeader/>
        <MainPageAppDrawerLeft/>
        <MainPageBottomNavigation/>
      </Box>
    </>
  );
}