import React, {useEffect} from "react";
import Button from "@material-ui/core/Button";

export default function SetSpotCategoryCard({transferObject}) {
  const [fetchObject, setFetchObject] = React.useState({});
  useEffect(() => {
    console.log(fetchObject)
  }, [fetchObject]);

  const [spotColorGreen, setSpotColorGreen] = React.useState("/svg/greyRestaurantSpot.svg");

  const changeSpotColorOnClickToGreen = () => {
    if (spotColorGreen === "/svg/greyRestaurantSpot.svg") {
      setSpotColorGreen("/svg/greenIconSpot.svg");
      setFetchObject({
        ...transferObject, category: "restaurant"
      });
    } else {
      setSpotColorGreen("/svg/greyRestaurantSpot.svg");
    }
  };

  const [spotColorRed, setSpotColorRed] = React.useState("/svg/greyBarSpot.svg");
  const changeSpotColorOnClickToRed = () => {
    if (spotColorRed === "/svg/greyBarSpot.svg") {
      setSpotColorRed("/svg/redIconSpot.svg");
      setFetchObject({
        ...transferObject, category: "bar"
      });
    } else {
      setSpotColorRed("/svg/greyBarSpot.svg");
    }
  };

  const [spotColorYellow, setSpotColorYellow] = React.useState("/svg/greyStoreSpot.svg");
  const changeSpotColorOnClickToYellow = () => {
    if (spotColorYellow === "/svg/greyStoreSpot.svg") {
      setSpotColorYellow("/svg/yellowIconSpot.svg");
      setFetchObject({
        ...transferObject, category: "store"
      });
    } else {
      setSpotColorYellow("/svg/greyStoreSpot.svg");
    }
  };

  const [spotColorPurple, setSpotColorPurple] = React.useState("/svg/greyConcertSpot.svg");
  const changeSpotColorOnClickToPurple = () => {
    if (spotColorPurple === "/svg/greyConcertSpot.svg") {
      setSpotColorPurple("/svg/purpleIconSpot.svg");
      setFetchObject({
        ...transferObject, category: "concert"
      });
    } else {
      setSpotColorPurple("/svg/greyConcertSpot.svg");
    }
  };

  const [spotColorBlue, setSpotColorBlue] = React.useState("/svg/greyRandomSpot.svg");
  const changeSpotColorOnClickToBlue = () => {
    if (spotColorBlue === "/svg/greyRandomSpot.svg") {
      setSpotColorBlue("/svg/blueIconSpot.svg");
      setFetchObject({
        ...transferObject, category: "random"
      });
    } else {
      setSpotColorBlue("/svg/greyRandomSpot.svg");
    }
  };

  const newSpot = {
    lat: 6.02340,
    lng: 50.000034,
    category: "restaurant",
    title: "Giovanni's Pizza Place",
    description: "blablabla",
  }

  return (
    /*<>
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
      >*/
        <div
          style={{
            position: "absolute",
            top: 150,
            left: 11,
            width: 351,
            height: 445,
            border: "2px solid #545A61",
            borderRadius: 10,
            backgroundColor: "white",
            zIndex: 100,
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
              id="green"
              src={spotColorGreen}
              alt="greenSpot"
              onClick={changeSpotColorOnClickToGreen}
              width="50px"
              height="50px"
              style={{
                paddingLeft: 10,
              }}
            />
            <img
              id="red"
              src={spotColorRed}
              alt="greenSpot"
              onClick={changeSpotColorOnClickToRed}
              width="50px"
              height="50px"
              style={{
                paddingLeft: 10,
              }}
            />
            <img
              id="yellow"
              src={spotColorYellow}
              alt="greenSpot"
              onClick={changeSpotColorOnClickToYellow}
              width="50px"
              height="50px"
              style={{
                paddingLeft: 10,
              }}
            />
            <img
              id="purple"
              src={spotColorPurple}
              alt="greenSpot"
              onClick={changeSpotColorOnClickToPurple}
              width="50px"
              height="50px"
              style={{
                paddingLeft: 10,
              }}
            />
            <img
              id="blue"
              src={spotColorBlue}
              alt="greenSpot"
              onClick={changeSpotColorOnClickToBlue}
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
              <label
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
    /*</div>
  </>*/
  );
}

const spotCombos = [
  {
    id: "green",
    urlGreyIcon: "/svg/greyRestaurantSpot.svg",
    urlColoredIcon: "/svg/greenIconSpot.svg"
  },
  {
    id: "red",
    urlGreyIcon: "/svg/greyBarSpot.svg",
    urlColoredIcon: "/svg/redIconSpot.svg"
  },
  {
    id: "yellow",
    urlGreyIcon: "/svg/greyStoreSpot.svg",
    urlColoredIcon: "/svg/yellowIconSpot.svg"
  },
  {
    id: "purple",
    urlGreyIcon: "/svg/greyConcertSpot.svg",
    urlColoredIcon: "/svg/purpleIconSpot.svg"
  },
  {
    id: "blue",
    urlGreyIcon: "/svg/greyRandomSpot.svg",
    urlColoredIcon: "/svg/blueIconSpot.svg"
  }
]

/*
function getIconUrl(id) {
  switch (id) {
    case "green"
  }
}*/
