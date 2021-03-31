// eslint-disable-next-line
import React, { useState, useEffect, Component } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as listingData from "./data/property-data.json";
import mapStyles from "./mapStyles";
import "./ListingsPage.css";

function Map() {

  const [selectedProperty, setSelectedProperty] = useState(null);



  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.4231, lng: -75.6931 }}
      //https://snazzymaps.com/explore
      defaultOptions={{ styles: mapStyles }}
    >

      {listingData.Properties.map(house => (

        <Marker
          key={house.LISTING_ID}
          position={{
            lat: house.coordinates[1],
            lng: house.coordinates[0]

          }}

          onClick={() => {
            setSelectedProperty(house)
          }}

          icon={{
            url: "homes-3.svg",
            scaledSize: new window.google.maps.Size(50, 50)
          }}



        />



      ))}


      {selectedProperty && (

        <InfoWindow
          position={{
            lat: selectedProperty.coordinates[1],
            lng: selectedProperty.coordinates[0]

          }}
          onCloseClick={() => {
            setSelectedProperty(null);
          }}
        >
          <div>
            <h2>{selectedProperty.ADDRESS}</h2>
            <p> {selectedProperty.DESC}</p>
            <div>
              <div class="row">

                <div className="col-6">
                  <i class="fas fa-bed fa-3x"></i> <span class="popup_nums"> 1 </span>
                  <i class="fas fa-bath fa-3x"></i> <span class="popup_nums"> 2</span>



                </div>

                <div className="col-6 booking_button">
                  <button>Show Listing</button>


                </div>

              </div>


            </div>


          </div>
        </InfoWindow>

      )}





    </GoogleMap>


  );

}

const MapWrapped = withScriptjs(withGoogleMap(Map))


class ListingsPage extends Component {
  render() {
    return (

      <div className="listings">

        <section class="colored-section2" id="cta">


          {/*
      
    
    
        <div class="row"> 

    
          <div class="col-12">
          
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

          </div>

        </div>
  */}

          <div class="row">

            <div class="col-12">

              <section className="colored-section" id="features">
                <div className="container-fluid">
                  <h2> Map </h2>
                </div>
              </section>

              <div style={{ width: "100vm", height: "800px" }}>
                <MapWrapped
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
                AIzaSyC5TiZoTEwEcB_HUZRhe_rXrcSWW1Z5x8I`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `100%` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </div>




            </div>

          </div>




        </section>


      </div>



    );
  }
}

export default ListingsPage;
