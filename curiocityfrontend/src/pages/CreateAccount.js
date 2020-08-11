import React from "react";
import {Link} from "react-router-dom";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import UsernameTextfield from "../components/UsernameTextfield";
import PasswordTextfield from "../components/PasswordTextfield";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
    backgroundImage: "url(/images/landingPageImage2.png)",
    backgroundPosition: "center", /* Center the image */
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    backgroundSize: "cover", /* Resize the background image to cover the entire container */
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
  typo: {
    color: "white",
    fontSize: "24px",
    margin: theme.spacing(3),
  },
  textfieldBox: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "4px",
    border: "solid white 1px",
    padding: theme.spacing(2),
    width: "80%",
  },
  textfield: {
    marginBottom: theme.spacing(2),
    width: "300px",
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
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="center"
          className={classes.layerInBetweenBox}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.wrapperBox}
          >
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
            <Typography
              className={classes.typo}
            >
              Create New Account
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              className={classes.textfieldBox}
            >
              <UsernameTextfield/>
              <PasswordTextfield/>
            </Box>
            <Link to="/login">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                CONFIRM
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

