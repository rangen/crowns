import React, { PureComponent } from 'react'
import GoogleMapReact from 'google-map-react'

const createMapOptions = {
        draggable: false,
        scrollwheel: false,
        panControl: false,
        disableDefaultUI: true
}

export default class MapContainer extends PureComponent {
    static defaultProps = {
        center: {
          lat: 41.2672,
          lng: -97.7431
        },
        zoom: 4
      };
    
    handleLoaded = (e) => {
        this.state = {
            map: e.map,
            maps: e.maps
        }
    }

    componentDidUpdate(){
        debugger
        console.log("comp will update!")
    }
    
    render() {
        return (
            <div style={{ height: '90vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options={createMapOptions}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={this.handleLoaded}>
                </GoogleMapReact>
            </div>
        )
    }
}

