import React, { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';


function MarkerList({homes}){
  // const list = homes.map((home)=>
  //   <Marker latitude={home.latitude} longitude={home.longitude} offsetLeft={-20} offsetTop={-10}>
  //     <div>You are here</div>
  //   <Marker />

  // )
	    return ( <div>
    {/* <ReactMapGL
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
			{ list}
      </ReactMapGL > */}
      <h1>hello</h1>
      </div>
	)
}



export default MarkerList
