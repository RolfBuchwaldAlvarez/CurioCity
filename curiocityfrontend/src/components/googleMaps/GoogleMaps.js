import React, {useEffect} from "react";
import "./styles/googleMaps.css";
import {GoogleMap, InfoWindow, useLoadScript} from "@react-google-maps/api";
import MapStyles from "./styles/MapStyles";
import "@reach/combobox/styles.css";
import {getAllSpots} from "../../utils/fetchSpotsFuncs";
import {SpotMarker} from "./utils/SpotMarker";
import Locate from "./components/Locate";
import Search from "./components/Search";
import InfoWindowContent from "./components/InfoWindowContent";
import SpotSideBar from "./components/SpotSideBar";
import SetSpotCategoryCard from "./components/SetSpotCategoryCard";

// to use Google Places
const libraries = ["places"]

// set map size
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

// set Cologne, Germany as starting point
const center = {
  lat: 50.937531,
  lng: 6.960279,
};

// implement new map style
// disable defaults + enable zoom
const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
}

export default function GoogleMaps() {

  // custom hook to load map + libraries
  // integrate googleMapsApiKey here
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  // set all spots on map
  const [spots, setSpots] = React.useState([]);

  // opens info-window for selected spot
  const [selected, setSelected] = React.useState(null);

  // opens create-new spot window
  const [createNewSpot, setCreateNewSpot] = React.useState({visible: false});

  // to safe newly created object
  const [transferObject, setTransferObject] = React.useState({})

  useEffect(() => {
    getAllSpots().then(data => setSpots(data));
  }, [])

  // prevent map to trigger a re-render
  // useCallback creates a function which always keeps the same value unless deps are changed

  const onMapClick = async (event) => {
    if (!createNewSpot.visible) {
      await setTransferObject({
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      })
      setCreateNewSpot({visible: true});
    } else {
      setCreateNewSpot({visible: false});
    }
  };

  useEffect(() => {
    console.log(transferObject);
  }, [transferObject])

  // useRef() opposite of useState (keeps state without re-rendering)
  // re-center map to new position + prevent re-render
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map; //to avoid re-renders
  }, []);

  // re-center map to new search location
  const panTo = React.useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng});
    mapRef.current.setZoom(16);
  }, []);

  if (loadError) {
    return "Error loading map"
  }
  if (!isLoaded) {
    return "Loading map"
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        zIndex: 0,
      }}
    >
      <Search panTo={panTo}/>
      <Locate panTo={panTo}/>
      <SpotSideBar/>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >

        {/* creates all spots */}
        {spots.map(spot => (
          <SpotMarker key={spot.id} spot={spot} setSelected={setSelected}/>
        ))}

        {/* renders Create New Spot window depending on value of visible */}
        {createNewSpot.visible ?
          <SetSpotCategoryCard
            transferObject={transferObject}
            setSpots={setSpots}
            setCreateNewSpot={setCreateNewSpot}
          /> : null}

        {/* info-window function for selected spot */}
        {selected ? (
          <InfoWindow
            position={{lat: selected.lat, lng: selected.lng}}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <InfoWindowContent
              props={{
                setSelected: setSelected,
                selected: selected,
                setSpots: setSpots,
                spots: spots
              }}
            />
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}