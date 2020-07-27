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
    backgroundImage: "url(/images/LoginBGDouble.png)",
    backgroundPosition: "center", /* Center the image */
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    backgroundSize: "cover", /* Resize the background image to cover the entire container */
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  layerInBetweenBox: {
    backgroundColor: "rgba(91,48,48,0.3)",
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
    margin: theme.spacing(4),
    width: "100px",

  },
  button2: {
    fontSize: "18px",
    marginTop: theme.spacing(2),
    color: "white",
    backgroundColor: "rgba(255,255,255,0)",
  },
}));

export default function UserLoginSF() {
  const classes = useStyles();

  return (
    <>
      <Box /*display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center"*/
        className={classes.container}>
        <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center"
             className={classes.layerInBetweenBox}>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"
               className={classes.wrapperBox}>
            <TextField
              error
              id="outlined-error"
              label="User ID"
              defaultValue=""
              variant="outlined"
              className={classes.textPrimary}
            />
            <TextField
              error
              id="outlined-error"
              label="Password"
              defaultValue=""
              variant="outlined"
              className={classes.textPrimary}
            />
            <Button variant="contained" color="secondary" className={classes.button}>
              LOGIN
            </Button>
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






