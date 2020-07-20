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
      zoom: 4,
      center: {
        lat: 43.642567,
        lng: -79.387054,
      },
      disableDefaultUI: true,
    })

  render() {
    return (
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: '400px', height: '300px' }}
      />
    )
  }
}