import React, { Component, createRef } from 'react'

export default class MapContainer extends Component {
  googleMapRef = createRef()

  componentDidMount() {
    const googleScript = document.createElement('script')
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS}`
    window.document.body.appendChild(googleScript)

    googleScript.addEventListener('load', () =>
        this.googleMap = this.createGoogleMap()
    )
  }

  createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
        center: {
            lat: 41.2672,
            lng: -97.7431
          },
          zoom: 4
    })

  render() {
    return (
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: '100%', height: '90vh' }}
      />
    )
  }
}