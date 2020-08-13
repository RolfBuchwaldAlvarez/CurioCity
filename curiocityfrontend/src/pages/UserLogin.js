import React from "react";
import {Link} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import PasswordLoginTextfield from "../components/PasswordLoginTextfield";
import UserIDTextfield from "../components/UserIDTextfield";

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
            <PasswordLoginTextfield/>
            <UserIDTextfield/>
            <Link to="/main">
              <Button
                variant="contained"
                color="secondary"
                style={{
                  position: "absolute",
                  bottom: 90,
                  left: "37%",
                  width: 100,
                }}
              >
                LOGIN
              </Button>
            </Link>
            <Link to="/createAccount">
              <Button
                style={{
                  position: "absolute",
                  bottom: 25,
                  left: "25%",
                  color: "white",
                  background: "none",
                  fontSize: 15,
                }}
              >
                Create New Account
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}






