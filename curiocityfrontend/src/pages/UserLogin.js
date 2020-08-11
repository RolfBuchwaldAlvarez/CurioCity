import React from "react";
import {Link} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({

  container: {
    height: "100%",
    width: "100%",
    backgroundImage: "url(/images/landingPageImage2.png)",
    backgroundPosition: "center", /* Center the image */
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    backgroundSize: "cover", /* Resize the background image to cover the entire container */
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  layerInBetweenBox: {
    backgroundColor: "rgba(91,48,48,0.1)",
    height: "100%",
    width: "100%",
  },
  wrapperBox: {
    backgroundColor: "rgba(32,65,90,0.6)",
    width: "100%",
    height: "50%",
  },
  textPrimary: {
    width: "300px",
    margin: theme.spacing(2),
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "4px",
  },
  button: {
    margin: theme.spacing(3),
    width: "100px",

  },
  button2: {
    fontSize: "18px",
    marginBottom: theme.spacing(2),
    color: "white",
    backgroundColor: "rgba(255,255,255,0)",
  },
}));

export default function UserLogin() {
  const classes = useStyles();

  return (
    <>
      <Box /*display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center"*/
        className={classes.container}>
        <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center"
             className={classes.layerInBetweenBox}>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"
               className={classes.wrapperBox}>
            <img
              src="/svg/curiocityLogo.svg"
              alt="logo"
              style={{
                position: "absolute",
                top: 60,
                left: "13%",
                height: 80,
                width: "auto",
                zIndex: 50,
              }}
            />
            <TextField
              error
              id="outlined-error"
              label="User ID"
              defaultValue=""
              variant="outlined"
              className={classes.textPrimary}
              style={{}}
            />
            <TextField
              error
              id="outlined-error"
              label="Password"
              defaultValue=""
              variant="outlined"
              className={classes.textPrimary}
            />
            <Link to="/main">
              <Button variant="contained" color="secondary" className={classes.button}>
                LOGIN
              </Button>
            </Link>
            <Link to="/createAccount">
              <Button className={classes.button2}>
                Create New Account
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}






