import React, { Component } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl';
import MarkerList from './MarkerList'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarker)
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmVuc3B5cmFtaWQiLCJhIjoiY2puMWl4NDluM3g5aTNwcG56YWVhb293YiJ9.UpzML4DXnrPKkVdvY0IOJQ';


class Map extends Component {
	constructor(props){
		console.log('homesList',props.itemList)
		super(props)
  this.state = {
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
console.log('i am triggered!')
		this.setState({ viewport: {
			...this.state.viewport,
      width: this.props.width
    }})
		}
	}

refreshWidth = ()=>{
return this.props.refreshDisplay()
	}





  render() {
		console.log('this.state',this.props.width)
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
				{/* <MarkerList homes={this.props.itemList}/> */}
				<Marker latitude={this.props.itemList[0].latitude} longitude={this.props.itemList[0].longitude} offsetLeft={-20} offsetTop={-10}>
          <div className="markerIcon">
          <FontAwesomeIcon icon="map-marker" />
          </div>
        </Marker>
					<Marker latitude={this.props.itemList[1].latitude} longitude={this.props.itemList[1].longitude} offsetLeft={-20} offsetTop={-10}>
          <div className="markerIcon">
          <FontAwesomeIcon icon="map-marker" /></div>
        </Marker>
				<Marker latitude={this.props.itemList[2].latitude} longitude={this.props.itemList[2].longitude} offsetLeft={-20} offsetTop={-10}>
          <div className="markerIcon">
          <FontAwesomeIcon icon="map-marker" /></div>
        </Marker>
					<Marker latitude={this.props.itemList[3].latitude} longitude={this.props.itemList[3].longitude} offsetLeft={-20} offsetTop={-10}>
          <div className="markerIcon">
          <FontAwesomeIcon icon="map-marker" /></div>
        </Marker>
				<Marker latitude={this.props.itemList[4].latitude} longitude={this.props.itemList[4].longitude} offsetLeft={-20} offsetTop={-10}>
          <div className="markerIcon">
          <FontAwesomeIcon icon="map-marker" /></div>
        </Marker>
					<Marker latitude={this.props.itemList[5].latitude} longitude={this.props.itemList[5].longitude} offsetLeft={-20} offsetTop={-10}>
          <div className="markerIcon">
          <FontAwesomeIcon icon="map-marker" /></div>
        </Marker>
					<Marker latitude={this.props.itemList[6].latitude} longitude={this.props.itemList[6].longitude} offsetLeft={-20} offsetTop={-10}>
          <div className="markerIcon">
          <FontAwesomeIcon icon="map-marker" /></div>
        </Marker>
					<Marker latitude={this.props.itemList[7].latitude} longitude={this.props.itemList[7].longitude} offsetLeft={-20} offsetTop={-10}>
          <div className="markerIcon">
          <FontAwesomeIcon icon="map-marker" /></div>
        </Marker>
			</ReactMapGL>
    );
  }
}
export default Map
