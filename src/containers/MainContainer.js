import React, { PureComponent } from 'react'
import MapContainer from './MapContainer'

export default class MainContainer extends PureComponent {
    render() {
        return (
            <div>
                <MapContainer polygon={this.props.polygon} />
            </div>
        )
    }
}
