import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LogInSection from "./components/LogInSection";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "100vh",
    width: "100%",
    backgroundImage: "url(/images/LoginBGNormal.png)",
    backgroundPosition: "center", /* Center the image */
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    backgroundSize: "cover", /* Resize the background image to cover the entire container */
  },
  gridItem: {
    padding: 0,
    margin: 0,
  },
}));

export default function UserLogin() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xl" disableGutters={true}>
      <Grid justify={"flex-end"} className={classes.gridItem}>
        <LogInSection/>
      </Grid>
    </Container>
  );
}
