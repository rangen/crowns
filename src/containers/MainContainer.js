import React, { PureComponent } from 'react'
import MapContainer from './MapContainer'
import TwitterContainer from './TwitterContainer'

export default class MainContainer extends PureComponent {

    fillColor = () => {
        const cookIndex = this.props.cookIndex
        let index;

        if (cookIndex === 'EVEN' || cookIndex === null) {return '#AAAAAA'}

        let [party, num] = cookIndex.split("+")
        const colors = ['#AAAAAA', '#F37381', '#EE384C', '#BE2839', '#AAAAAA', '#70A1D1', '#347ABE', '#265C91']

        num = ~~num
        if (num <= 5) {
            index = 0
        } else if (num <= 12) {
            index = 1
        } else if (num <= 25 ) {
            index = 2
        } else {
            index = 3
        }
        if (party === 'D') {index += 4}

        return colors[index]
    }

    render() {
        return (
            <div>
                {/* <MapContainer color={this.fillColor()} polygon={this.props.polygon} /> */}
                <TwitterContainer />
            </div>
        )
    }
}
