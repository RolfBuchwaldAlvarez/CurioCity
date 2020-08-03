import React, {useEffect} from "react";
import "./googleMaps.css";
import {GoogleMap, InfoWindow, Marker, useLoadScript} from "@react-google-maps/api";
import MapStyles from "../../styles/MapStyles";
import usePlacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover,} from "@reach/combobox";
import "@reach/combobox/styles.css";
import {fetchAllGreenSpots, putGreenSpot} from "../../utils/fetchGreenSpotsFuncs";
import Button from "@material-ui/core/Button";
import {fetchAllRedSpots} from "../../utils/fetchRedSpotsFunc";

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

  // set greenSpots on map
  const [greenSpots, setGreenSpots] = React.useState([]);

  // set redSpots on map
  const [redSpots, setRedSpots] = React.useState([]);

  // opens info-window for selected spot
  const [selected, setSelected] = React.useState(null);

  // render all green spots
  async function getAllGreenSpots() {
    return fetchAllGreenSpots().then(response =>
      response.map(spot => {
        return {
          id: spot.id,
          lat: spot.lat,
          lng: spot.lng,
        }
      }));
  }

  useEffect(() => {
    getAllGreenSpots().then(data => setGreenSpots(data))
  }, [])

  // render all red spots
  async function getAllRedSpots() {
    return fetchAllRedSpots().then(response =>
      response.map(spot => {
        return {
          id: spot.id,
          lat: spot.lat,
          lng: spot.lng,
        }
      }));
  }

  useEffect(() => {
    getAllRedSpots().then(data => setRedSpots(data))
  }, [])

  // prevent map to trigger a re-render
  // useCallback creates a function which always keeps the same value unless deps are changed
  const onMapClick = React.useCallback((event) => {
    console.log(event);
    putGreenSpot(event.id, event.latLng.lat(), event.latLng.lng())
      .then((spot) => {
        setGreenSpots((current) => [
          ...current,
          {
            id: event.id,
            category: "",
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            /*time: new Date(),*/
          }]);
      })
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
        // creates green spots
        {greenSpots.map(spot => (
          <Marker
            /*key={spot.time.toISOString()}*/
            position={{lat: spot.lat, lng: spot.lng}}
            icon={{
              url: "/svg/greenMarker.svg",
              scaledSize: new window.google.maps.Size(14, 14),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(7, 7),
            }}
            onClick={() => {
              setSelected(spot);
            }}
          />
        ))}

        // creates red spots
        {redSpots.map(spot => (
          <Marker
            /*key={spot.time.toISOString()}*/
            position={{lat: spot.lat, lng: spot.lng}}
            icon={{
              url: "/svg/redMarker.svg",
              scaledSize: new window.google.maps.Size(14, 14),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(7, 7),
            }}
            onClick={() => {
              setSelected(spot);
            }}
          />
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