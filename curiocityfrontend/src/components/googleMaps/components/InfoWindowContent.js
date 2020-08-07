import React from "react";
import Button from "@material-ui/core/Button";
import {deleteSpot} from "../../../utils/fetchSpotsFuncs";

export default function InfoWindowContent({props}) {
  console.log(props)
  return (
    <div style={{maxWidth: 176}}>
      <h2>RESTAURANT</h2>
      <p>Retro style place with a sexy food selection. Can't wait to taste the fancy looking pasta dishes!</p>
      {/*<p>{formatRelative(selected.time, new Date())}</p>*/}
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