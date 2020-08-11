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
          src="/images/landingPageImage2.png"
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
            backgroundColor: "rgba(91,48,48,0.1)",
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
          }}
        />
        <p
          style={{
            position: "absolute",
            top: 220,
            left: "14%",
            color: "#F5F5F5",
            fontSize: 40,
            height: 90,
            width: 210,
            zIndex: 30,
            border: "2px solid #F5F5F5",
            padding: "40px 20px 0px 35px",
            margin: 0,
            backgroundColor: "rgba(255,255,255,0.4)",
          }}
        >
          WELCOME
        </p>
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