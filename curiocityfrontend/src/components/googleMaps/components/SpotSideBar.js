import React from "react";

export default function SpotSideBar() {
  return (
    <div
      style={{
        /*display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",*/
        height: "100vh",
        width: "100vw",
        background: "none",
        zIndex: 50,
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "2%",
          top: 330,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #545A61",
          borderRadius: 20,
          height: 185,
          width: 40,
        }}>
        <img
          src="/svg/blueIconSpot.svg"
          alt="greenIconSpot"
          style={{
            padding: "5px 5px"
          }}
        />
        <img
          src="/svg/purpleIconSpot.svg"
          alt="greenIconSpot"
          style={{
            padding: "5px 5px"
          }}
        />
        <img
          src="/svg/yellowIconSpot.svg"
          alt="greenIconSpot"
          style={{
            padding: "5px 5px"
          }}
        />
        <img
          src="/svg/redIconSpot.svg"
          alt="greenIconSpot"
          style={{
            padding: "5px 5px"
          }}
        />
        <img
          src="/svg/greenIconSpot.svg"
          alt="greenIconSpot"
          style={{
            padding: "5px 5px"
          }}
        />
      </div>
    </div>
  );
}