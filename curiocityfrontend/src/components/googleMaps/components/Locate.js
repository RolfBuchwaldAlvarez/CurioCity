import Button from "@material-ui/core/Button";
import React from "react";

// find current position on Google Map and center screen accordingly
export default function Locate({panTo}) {
  return (
    <div className="locate">
      <Button
        style={{
          padding: 0,
        }}
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null,
          );
        }}
      >
        <img
          src="/svg/myLocation.svg"
          alt="some text"
          width="30px"
          height="30px"
          style={{
            paddingLeft: 28,
          }}
        />
      </Button>
    </div>
  );
}