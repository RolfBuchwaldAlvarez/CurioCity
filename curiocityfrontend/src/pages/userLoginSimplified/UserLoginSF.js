import React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    backgroundImage: "url(/images/LoginBGDouble.png)",
    backgroundPosition: "center", /* Center the image */
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    backgroundSize: "cover", /* Resize the background image to cover the entire container */
  },
  gridContainer: {
    backgroundColor: "white",
    opacity: "60%",
    height: "50%",
    padding: 0,
    margin: 0,
  },
  gridItem: {
    paddingTop: "15%",
  },
  text1: {
    margin: theme.spacing(2),
  },
  button: {
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function UserLoginSF() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
          <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.gridContainer}>
            <Grid item >
              <TextField
                label="Dense"
                id="filled-margin-dense"
                defaultValue="Default Value"
                className={classes.textField}
                helperText="Some important text"
                margin="dense"
                variant="filled"
              />
            </Grid>
            <Grid item >
              <TextField
                error
                id="outlined-error"
                label="Password"
                defaultValue=" "
                variant="outlined"
                className={classes.text1}
              />
            </Grid>
            <Grid item className={classes.gridItem}>
              <Button variant="contained" color="secondary" classname={classes.button}>
                LOGIN
              </Button>
            </Grid>
          </Grid>
    </div>
  );
}






