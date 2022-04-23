import React from 'react';
import GoogleMapReact from 'google-map-react';

const CampingMap = ({ camping }) => {
  const defaultZoom = 20;
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
