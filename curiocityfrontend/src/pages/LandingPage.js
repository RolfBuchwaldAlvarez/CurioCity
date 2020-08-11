import React from "react";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        padding: 0,
        margin: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src="/images/landingPageImage.png"
          alt="city"
          style={{
            height: "100%",
            width: "100%",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(177,166,201,0.3)",
            zIndex: 25,
          }}
        />
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
          }}/>
        <Link to="/login">
          <Button
            variant="contained"
            color="secondary"
            style={{
              position: "absolute",
              bottom: 200,
              left: "37%",
              width: 100,
              zIndex: 40,
            }}
          >
            ENTER
          </Button>
        </Link>
      </div>
    </div>
  );
}