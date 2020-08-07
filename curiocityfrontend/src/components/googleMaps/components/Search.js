import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover} from "@reach/combobox";
import React from "react";

// Google Maps Search Bar
export default function Search({panTo}) {
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