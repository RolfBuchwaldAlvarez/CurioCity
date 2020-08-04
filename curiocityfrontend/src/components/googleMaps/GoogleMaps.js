import React, {useEffect} from "react";
import "./googleMaps.css";
import {GoogleMap, InfoWindow, useLoadScript} from "@react-google-maps/api";
import MapStyles from "../../styles/MapStyles";
import usePlacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover,} from "@reach/combobox";
import "@reach/combobox/styles.css";
import Button from "@material-ui/core/Button";
import {fetchAllSpots, putSpot} from "../../utils/fetchSpotsFuncs";
import {SpotMarker} from "./googleMapsUtils/SpotMarker";

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

  useEffect(() => {
    fetchAllSpots().then(data => setSpots(data));
  }, [])

  // prevent map to trigger a re-render
  // useCallback creates a function which always keeps the same value unless deps are changed
  const onMapClick = React.useCallback((event) => {
    putSpot("restaurant", event.latLng.lat(), event.latLng.lng())
      .then((spot) => {
        setSpots((current) => [
          ...current, spot
        ])
      });
  }, []);

  // useRef() opposite of useState (keeps state without re-rendering)
  // re-center map to new position + prevent re-render
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map; //to avoid re-renders
  }, []);

  // re-center map to new search location
  const panTo = React.useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng});
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) {
    return "Error loading map"
  }
  if (!isLoaded) {
    return "Loading map"
  }

  return (
    <div>
      <Search panTo={panTo}/>
      <Locate panTo={panTo}/>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >

        // creates all spots
        {spots.map(spot => (
          <SpotMarker key={spot.id} spot={spot} setSelected={setSelected}/>
        ))}

        {/* info-window function for selected spot */}
        {selected ? (
          <InfoWindow
            position={{lat: selected.lat, lng: selected.lng}}
            onCloseClick={() => {
              setSelected(null);
            }}
            style={{backgroundColor: "rgba(245,245,245, 0.5)"}}
          >
            <div>
              <h2>Restaurant</h2>
              <p>A cozy looking italian diner!</p>
              {/*<p>{formatRelative(selected.time, new Date())}</p>*/}
              <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "100%",
              }}>
                <Button color="secondary">EDIT</Button>
              </div>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

// find current position and center screen accordingly
function Locate({panTo}) {
  return (
    <button
      className="locate"
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
      <img src="svg/my_location_white_18x18.png" alt="some text"/>
    </button>
  );
}

// search bar
function Search({panTo}) {
  const {
    ready,
    value,
    suggestions: {status, data},
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {lat: () => 50.937531, lng: () => 6.960279},
      radius: 200 * 1000,
    },
  });

  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({address});
            const {lat, lng} = await getLatLng(results[0]);
            panTo({lat, lng});
          } catch (error) {
            console.log("error!");
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          disabled={!ready}
          placeholder="Enter an address"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
            data.map(({id, description}) => (
              <ComboboxOption key={id} value={description}/>
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}