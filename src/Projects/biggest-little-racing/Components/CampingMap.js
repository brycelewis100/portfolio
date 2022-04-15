import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

// class CampingMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 39.584944,
//       lng: -119.903525,
//     },
//     zoom: 14,
//   };

//   render() {
//     const renderMarkers = (map, maps) => {
//       let marker = new maps.Marker({
//         position: this.props.center,
//         map,
//         title: 'Camping Spot',
//       });
//       return marker;
//     };

//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '75vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyDdTaJIU76aOdAQRYtTg59FW0ooZFMLs4k' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//           options={{
//             mapTypeId: 'satellite',
//           }}
//           onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
//         ></GoogleMapReact>
//       </div>
//     );
//   }
// }

const CampingMap = ({ camping }) => {
  const defaultZoom = 14;
  const latlng = camping.latlng;

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: latlng,
      map,
      title: 'Camping Spot',
    });
    return marker;
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '75vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDdTaJIU76aOdAQRYtTg59FW0ooZFMLs4k' }}
        defaultCenter={latlng}
        defaultZoom={defaultZoom}
        options={{
          mapTypeId: 'satellite',
        }}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      ></GoogleMapReact>
    </div>
  );
};

export default CampingMap;
