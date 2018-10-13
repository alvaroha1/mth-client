import React, { Component } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarker)
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmVuc3B5cmFtaWQiLCJhIjoiY2puMWl4NDluM3g5aTNwcG56YWVhb293YiJ9.UpzML4DXnrPKkVdvY0IOJQ';


class Map extends Component {
	constructor(props){
		super(props)
  this.state = {
    itemList : this.props.itemList,
    viewport: {
      width: this.props.width,
      height: 400,
      latitude: 40.123,
      longitude: -3.242,
      zoom: 8
    }
  };
	}
	componentDidUpdate(prevProps) {
		if(prevProps.width !== this.props.width) {
		this.setState({ viewport: {
			...this.state.viewport,
      width: this.props.width
    }})
		}
	}

refreshWidth = () => {
return this.props.refreshDisplay()
	}

  render() {
    const list = this.state.itemList.map((home)=>
	  <Marker latitude={home.latitude} longitude={home.longitude} offsetLeft={-20} offsetTop={-10}>
<FontAwesomeIcon icon="map-marker" />
	  </ Marker>
	)
    return (
			<ReactMapGL
				mapboxApiAccessToken={'pk.eyJ1Ijoic3RldmVuc3B5cmFtaWQiLCJhIjoiY2puMWl4NDluM3g5aTNwcG56YWVhb293YiJ9.UpzML4DXnrPKkVdvY0IOJQ'}
        {...this.state.viewport}
        onViewportChange={(viewport) =>{
					this.refreshWidth()
					this.setState({viewport:{
					...this.state.viewport,
					width: this.props.width,
					latitude: viewport.latitude,
					longitude: viewport.longitude,
					zoom: viewport.zoom,
				}})
				}
				}
      >
  {list}
  </ReactMapGL>
    );
  }
  // }
}
export default Map
