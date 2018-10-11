import React, { Component } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmVuc3B5cmFtaWQiLCJhIjoiY2puMWl4NDluM3g5aTNwcG56YWVhb293YiJ9.UpzML4DXnrPKkVdvY0IOJQ';

class Map extends Component {
	constructor(props){
		console.log('sdgdsgsdgsdgsdgsd',props)
		super(props)
  this.state = {
    viewport: {
      width: this.props.width,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
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
// width = this.props.width
	// componentDidMount () {
	// 	console.log(this.props.width);
	// 	this.setState({viewport: {
	// 		width: this.props.width,
	// 		heigth:400,
	// 		 latitude: 37.7577,
  //     longitude: -122.4376,
  //     zoom: 8
	// 	}})
	// }	
// refreshWidth = (props)=>{
// 		if(props.width !== this.props.width) {
// console.log('i am triggered from refreshWidth!')
// 		this.setState({ viewport: {
// 			...this.state.viewport,
//       width: this.props.width
//     }})
// 		}
// 	}
// someMethod() {
//     // Force a render without state change...
//     this.forceUpdate();
// 		console.log('force update ran!')
// }
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
				{/* <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
          <div>You are here</div>
        </Marker> */}
			</ReactMapGL>
    );
  }
}
export default Map

