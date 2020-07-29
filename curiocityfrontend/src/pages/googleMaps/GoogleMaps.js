import React from "react";
import {GoogleMap, InfoWindow, Marker, useLoadScript} from "@react-google-maps/api";
import MapStyles from "../../utils/MapStyles";
import {formatRelative} from "date-fns";

const libraries = ["places"]
const mapContainerStyle = {
  width: "100vw",
  height: "551px",
};
const center = {
  lat: 50.937531,
  lng: 6.960279,
};
const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
}

export default function GoogleMaps() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((event) => {
    console.log(event);
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map; //to avoid re-renders
  }, []);

  if (loadError) {
    return "Error loading maps"
  }
  if (!isLoaded) {
    return "Loading maps"
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map(marker => (
          <Marker
            key={marker.time.toISOString()}
            position={{lat: marker.lat, lng: marker.lng}}
            icon={{
              url: "/svg/greenMarker.svg",
              scaledSize: new window.google.maps.Size(14, 14),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(7, 7),
            }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{lat: selected.lat, lng: selected.lng}}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>Restaurant</h2>
              <p>A cozy looking italian diner!</p>
              <p>{formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}