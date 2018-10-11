import React, { Component } from 'react'
// import L from 'leaflet'
import ReactMapGL from 'react-map-gl';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmVuc3B5cmFtaWQiLCJhIjoiY2puMWl4NDluM3g5aTNwcG56YWVhb293YiJ9.UpzML4DXnrPKkVdvY0IOJQ';

class Map extends Component {
// 	constructor(props){
// 		super(props)
// 		this.state = {
// 			lng: 5,
// 			lat: 34,
// 			zoom: 1.5
// 		}
// 	}
// 	componentDidMount(){
// 		const {lng, lat, zoom} = this.state;

// 	const map = new mapboxgl.Map({
//       container: this.mapContainer,
//       style: 'mapbox://styles/mapbox/streets-v9',
//       center: [lng, lat],
//       zoom
//     });
// var mapLeaflet = L.mapbox.map('map-leaflet', 'mapbox.light')
//   .setView([37.8, -96], 4);

// L.marker([38.913184, -77.031952]).addTo(mapLeaflet);
// L.marker([37.775408, -122.413682]).addTo(mapLeaflet);

// mapLeaflet.scrollWheelZoom.disable();

// map.on('move', () => {
//       const { lng, lat } = map.getCenter();

//       this.setState({
//         lng: lng.toFixed(4),
//         lat: lat.toFixed(4),
//         zoom: map.getZoom().toFixed(2)
//       });
//     });
//   }


// 	render() {
// 		    const { lng, lat, zoom } = this.state;

//   return (
//       <div>
//         <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
//         </div>
//         <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
//       </div>
//     );
// 	}
// }

  state = {
    viewport: {
      width: this.props.width,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
				mapboxApiAccessToken={'pk.eyJ1Ijoic3RldmVuc3B5cmFtaWQiLCJhIjoiY2puMWl4NDluM3g5aTNwcG56YWVhb293YiJ9.UpzML4DXnrPKkVdvY0IOJQ'}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}
export default Map

