import React from "react";
import "./LogInSection.css";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    maxWidth: "100%",
  },
  svg: {
    padding: 0,
    margin: 0,
    height: "100%",
    minWidth: "100%",
  }
}));

function LogInSection() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container} disableGutters={true}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="414"
          height="436"
          viewBox="0 0 414 436"
        >
          <g fill="none" fillRule="even odd" stroke="none" strokeWidth="1">
            <g transform="translate(0 -460)">
              <g transform="translate(0 460)">
                <path
                  fill="#60708B"
                  fillOpacity="0.75"
                  d="M0 0c0 16.569 13.431 30 30 30h354c16.569 0 30-13.431 30-30v436H0z"
                />
                <text
                  fill="#FFF"
                  fontFamily="Lato-Bold, Lato"
                  fontSize="22"
                  fontWeight="bold"
                >
                  <tspan x="104" y="397">
                    Create New Account
                  </tspan>
                </text>
                <rect
                  width="160"
                  height="54"
                  x="219.5"
                  y="304.5"
                  fill="#F76279"
                  stroke="#F76279"
                  rx="10"
                />
                <rect
                  width="344"
                  height="54"
                  x="35.5"
                  y="304.5"
                  stroke="#F76279"
                  rx="10"
                />
                <text
                  fill="#F76279"
                  fontFamily="Lato-Regular, Lato"
                  fontSize="17"
                  fontWeight="normal"
                >
                  <tspan x="67" y="338">
                    Request Access
                  </tspan>
                </text>
                <text
                  fill="#FFF"
                  fontFamily="Lato-Bold, Lato"
                  fontSize="22"
                  fontWeight="bold"
                >
                  <tspan x="262" y="340">
                    LOG IN
                  </tspan>
                </text>
                <text
                  fill="#FFF"
                  fontFamily="Lato-Regular, Lato"
                  fontSize="12"
                  fontWeight="normal"
                >
                  <tspan x="286" y="268">
                    Forgot Password?
                  </tspan>
                </text>
                <path
                  fill="#FFF"
                  fillRule="nonzero"
                  d="M370 191c5.523 0 10 4.477 10 10v35c0 5.523-4.477 10-10 10H45c-5.523 0-10-4.477-10-10v-35c0-5.523 4.477-10 10-10v1a9 9 0 00-8.996 8.735L36 201v35a9 9 0 008.735 8.996L45 245h325a9 9 0 008.996-8.735L379 236v-35a9 9 0 00-8.735-8.996L370 192H102v-1h268z"
                />
                <text
                  fill="#FFF"
                  fontFamily="Lato-Regular, Lato"
                  fontSize="12"
                  fontWeight="normal"
                >
                  <tspan x="48" y="194">
                    Password
                  </tspan>
                </text>
                <path
                  fill="#FFF"
                  fillRule="nonzero"
                  d="M370 106c5.523 0 10 4.477 10 10v35c0 5.523-4.477 10-10 10H45c-5.523 0-10-4.477-10-10v-35c0-5.523 4.477-10 10-10v1a9 9 0 00-8.996 8.735L36 116v35a9 9 0 008.735 8.996L45 160h325a9 9 0 008.996-8.735L379 151v-35a9 9 0 00-8.735-8.996L370 107H89v-1h281z"
                />
                <text
                  fill="#FFF"
                  fontFamily="Lato-Regular, Lato"
                  fontSize="12"
                  fontWeight="normal"
                >
                  <tspan x="48" y="109">
                    user ID
                  </tspan>
                </text>
                <text
                  fill="#FFF"
                  fontFamily="Lato-Bold, Lato"
                  fontSize="22"
                  fontWeight="bold"
                >
                  <tspan x="35" y="74">
                    Sign in
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </svg>
      </Container>
    </>
  );
}

export default LogInSection;