import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.584944,
      lng: -119.903525,
    },
    zoom: 15,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '75vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDdTaJIU76aOdAQRYtTg59FW0ooZFMLs4k' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          mapTypeId="satellite"
        >
          <AnyReactComponent
            lat={39.584944}
            lng={-119.903525}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
