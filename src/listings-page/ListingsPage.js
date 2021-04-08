// eslint-disable-next-line
import React, { useState, useEffect, Component } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
//import { formatRelative } from "date-fns";
import Select from "react-select";

import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";
import * as listingData from "./data/property-data.json";
import "./ListingsPage.css";

import compassImg from "./compass.svg";
import { withTranslation } from "react-i18next";


const libraries = ["places"];

const mapContainerStyle = {
  height: "700px",
  width: "100vm",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 45.4231,
  lng: -75.6931,
};

export default function ListingsPage() {
  const price_filter = [
    {
      value: null,
      label: "Any",
    },
    {
      value: 100000,
      label: "$100000",
    },
    {
      value: 200000,
      label: "$200000",
    },
    {
      value: 300000,
      label: "$300000",
    },
    {
      value: 400000,
      label: "$400000",
    }
  ];

  const bed_filter = [
    {
      value: null,
      label: "Any",
    },
    {
      value: 1,
      label: "One Bed",
    },
    {
      value: 2,
      label: "Two Beds",
    },
    {
      value: 3,
      label: "Three Beds",
    }

  ];

  const bath_filter = [
    {
      value: null,
      label: "Any",
    },
    {
      value: 1,
      label: "One Bath",
    },
    {
      value: 2,
      label: "Two Baths",
    },
    {
      value: 3,
      label: "Three Baths",
    }
  ];

  //console.log(data1[0]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
    AIzaSyC5TiZoTEwEcB_HUZRhe_rXrcSWW1Z5x8I`,
    libraries,
  });

  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedBeds, setSelectedBeds] = useState(null);
  const [selectedBaths, setSelectedBaths] = useState(null);

  //const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const [budget, setBudget] = useState(null);
  const [bed, setBed] = useState(null);
  const [bath, setBath] = useState(null);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
    //console.log(current);
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(10);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  // handle onChange event of the dropdown
  const handleBudgetChange = (e) => {
    setSelectedBudget(e);
    setBudget(e.value);

    //https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object
    //https://stackoverflow.com/questions/57341541/removing-object-from-array-using-hooks-usestate/57341724
  };
  const handleBedChange = (e) => {
    setSelectedBeds(e);
    setBed(e.value);
  };
  const handleBathChange = (e) => {
    setSelectedBaths(e);
    setBath(e.value);
  };

  const { t } = this.props;
  return (

    <div className="main_borders">

      <div class="filters">
        <Search class="search" panTo={panTo} />
        <Locate class="search" panTo={panTo} />

        <Select
          class="search"
          placeholder="Select Budget"
          value={selectedBudget} // set selected value
          options={price_filter} // set list of the data
          onChange={handleBudgetChange} // assign onChange function
        />

        <Select
          class="search"
          placeholder="# Beds"
          value={selectedBeds} // set selected value
          options={bed_filter} // set list of the data
          onChange={handleBedChange} // assign onChange function
        />

        <Select
          class="search"
          placeholder="# Baths"
          value={selectedBaths} // set selected value
          options={bath_filter} // set list of the data
          onChange={handleBathChange} // assign onChange function
        />
      </div>



      <div >
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
          options={options}
          onLoad={onMapLoad}
        >
          {listingData.Properties.map((house) =>
            (budget >= house.PRICE || !budget) &&
            (bed === house.BEDS || !bed) &&
            (bath === house.BATHS || !bath) ? (
              <Marker
                key={house.LISTING_ID}
                position={{
                  lat: house.coordinates[1],
                  lng: house.coordinates[0],
                }}
                onClick={() => {
                  setSelected(house);
                }}
                icon={{
                  url: "homes-3.svg",
                  scaledSize: new window.google.maps.Size(50, 50),
                }}
                visible={true}
              />
            ) : (
              <Marker
                key={house.LISTING_ID}
                position={{
                  lat: house.coordinates[1],
                  lng: house.coordinates[0],
                }}
                onClick={() => {
                  setSelected(house);
                }}
                icon={{
                  url: "homes-3.svg",
                  scaledSize: new window.google.maps.Size(50, 50),
                }}
                visible={false}
              />
            )
          )}

          {selected ? (
            <InfoWindow
              position={{
                lat: selected.coordinates[1],
                lng: selected.coordinates[0],
              }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2>{selected.ADDRESS}</h2>
                <p> {selected.DESC}</p>
                <div>
                  <div class="row">
                    <div className="col-6">
                      <i class="fas fa-bed fa-3x"></i>{" "}
                      <span class="popup_nums"> {selected.BEDS} </span>
                      <i class="fas fa-bath fa-3x"></i>{" "}
                      <span class="popup_nums"> {selected.BATHS}</span>
                    </div>

                    <div className="col-6 booking_button">
                      <button>Show Listing</button>
                    </div>
                  </div>
                </div>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <button
      data-toggle="tooltip"
      data-placement="right"
      title="Go to my current location"
      class="buttonImg"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src={compassImg} class="compass" alt="my location" />
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
