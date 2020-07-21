import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
    backgroundImage: "url(/images/LoginBGDouble.png)",
    backgroundPosition: "center", /* Center the image */
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    backgroundSize: "cover", /* Resize the background image to cover the entire container */

  },
  layerInBetweenBox: {
    backgroundColor: "rgba(91,48,48,0.3)",
    height: "100%",
    width: "100%",
  },
  wrapperBox: {
    backgroundColor: "rgba(32,65,90,0.6)",
    width: "100%",
    height: "72%",
  },
  typo: {
    color: "white",
    fontSize: "24px",
    margin: theme.spacing(2),
  },
  textfieldBox: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "4px",
    border: "solid white 1px",
    padding: theme.spacing(2),
  },
  textfield: {
    margin: theme.spacing(1),
    width: "300px",
    color: "white",
    height: "40px",
  },
  button: {
    marginTop: theme.spacing(4),
  }
}));

export default function CreateAccount() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center"
             className={classes.layerInBetweenBox}>
          <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center"
               className={classes.wrapperBox}>
            <Typography className={classes.typo}>Create New Account</Typography>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"
                 className={classes.textfieldBox}>
              <TextField rid="standard-basic" label="First Name" className={classes.textfield}/>
              <TextField rid="standard-basic" label="Last Name" className={classes.textfield}/>
              <TextField rid="standard-basic" label="E-Mail Address" className={classes.textfield}/>
              <TextField rid="standard-basic" label="Gender" className={classes.textfield}/>
              <TextField rid="standard-basic" label="Year of Birth" className={classes.textfield}/>
              <TextField rid="standard-basic" label="Country of Residence" className={classes.textfield}/>
              <TextField rid="standard-basic" label="Postal Code" className={classes.textfield}/>
              <TextField rid="standard-basic" label="Password" className={classes.textfield}/>
            </Box>
            <Button variant="contained" color="secondary" className={classes.button}>
              CONFIRM
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}