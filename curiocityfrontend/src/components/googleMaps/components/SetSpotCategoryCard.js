import React from "react";
import Button from "@material-ui/core/Button";

export default function SetSpotCategoryCard() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          padding: 0,
          background: "none",
          zIndex: 100,
        }}
      >
        <div
          style={{
            width: 350,
            height: 445,
            border: "2px solid #545A61",
            borderRadius: 10,
            backgroundColor: "white",
          }}
        >

          {/* header */}
          <div>
            <h2
              style={{
                color: "#545A61",
                paddingLeft: "15px",
                borderBottom: "1px solid #545A61",
                paddingBottom: 10,
                paddingTop: 10,
                margin: 0,
              }}
            >
              Create New Spot
            </h2>
          </div>

          {/* spot icons */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              paddingTop: 20,
              paddingBottom: 10,
            }}
          >
            <img
              src="/svg/greenIconSpot.svg"
              alt="greenSpot"
              width="50px"
              height="50px"
              style={{
                paddingLeft: 10,
              }}
            />
            <img
              src="/svg/rediconSpot.svg"
              alt="greenSpot"
              width="50px"
              height="50px"
              style={{
                paddingLeft: 10,
              }}
            />
            <img
              src="/svg/yellowIconSpot.svg"
              alt="greenSpot"
              width="50px"
              height="50px"
              style={{
                paddingLeft: 10,
              }}
            />
            <img
              src="/svg/purpleIconSpot.svg"
              alt="greenSpot"
              width="50px"
              height="50px"
              style={{
                paddingLeft: 10,
              }}
            />
            <img
              src="/svg/blueIconSpot.svg"
              alt="greenSpot"
              width="50px"
              height="50px"
              style={{
                paddingLeft: 10,
                paddingRight: 10,
              }}
            />
          </div>

          {/* title */}
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              style={{
                color: "#545A61",
                backgroundColor: "white",
                border: "1px solid #545A61",
                borderRadius: 5,
                padding: "5px 5px 5px 10px",
                margin: "5px 0px 15px 15px",
                width: 305,
              }}
            />
          </div>

          {/* description */}
          <div>
            <form>
              <label for="description"
                     style={{
                       color: "#545A61",
                       paddingLeft: 16,
                     }}
              >
                Description
              </label>
              <br/>
              <input
                type="text"
                name="description"
                placeholder="Write here..."
                style={{
                  color: "#545A61",
                  backgroundColor: "white",
                  border: "1px solid #545A61",
                  borderRadius: 5,
                  margin: "5px 0px 10px 15px",
                  padding: "10px 5px 160px 10px",
                  width: 305,
                }}
              />
            </form>
          </div>

          {/* button */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              color: "#545A61",
              paddingRight: 14,
              paddingTop: 1,
            }}
          >
            <Button variant="contained" color="secondary" style={{width: "80px"}}>
              CREATE
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}