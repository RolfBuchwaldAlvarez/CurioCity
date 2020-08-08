import React from "react";
import Button from "@material-ui/core/Button";
import {deleteSpot} from "../../../utils/fetchSpotsFuncs";

export default function InfoWindowContent({props}) {
  const url = getIconUrl(props.selected.category);
  console.log(props)
  console.log(props.selected)

  return (
    <div
      style={{
        maxWidth: 200,
        border: "2px, solid, #545A61",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <img src={"/svg/" + url} alt="spot icon" width="20" height="20"/>
        <h2
          style={{
            paddingLeft: 10,
            color: "#545A61",
          }}
        >
          {props.selected.category.toUpperCase()}
        </h2>
      </div>
      <div
        style={{
          paddingLeft: 10,
        }}>
        <h3
          style={{
            color: "#545A61",
            marginTop: 0,
          }}
        >
          {props.selected.title}
        </h3>
        <p
          style={{
            color: "#545A61",
          }}
        >
          {props.selected.description}
        </p>
        {/*<p>{formatRelative(selected.time, new Date())}</p>*/}
      </div>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%",
      }}>
        <Button color="secondary"
                onClick={() => {
                  deleteSpot(props.selected.id)
                    .then(() => {
                      props.setSelected(undefined);
                      props.setSpots(props.spots.filter(spot => spot.id !== props.selected.id))
                    });
                }}
        >DELETE</Button>
      </div>
    </div>
  );
}

function getIconUrl(category) {
  switch (category) {
    case "restaurant":
      return "/svg/greenSpot.svg";
    case "bar":
      return "/svg/redSpot.svg";
    case "store":
      return "/svg/yellowSpot.svg";
    case "concert":
      return "/svg/purpleSpot.svg";
    case "random":
      return "/svg/blueSpot.svg";
    default:
      return "/svg/greenSpot.svg";
  }
}