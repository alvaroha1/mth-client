import React, { Component } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import './Map.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
library.add(faMapMarker)
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmVuc3B5cmFtaWQiLCJhIjoiY2puMWl4NDluM3g5aTNwcG56YWVhb293YiJ9.UpzML4DXnrPKkVdvY0IOJQ'

class Map extends Component {
	constructor(props){
		super(props)
		this.state = {
			viewport: {
				width: this.props.width,
				height: 400,
				latitude: 41.37959,
				longitude: 2.16836,
				zoom: 12
			}
		}
	}
	componentDidUpdate(prevProps) {
		if(prevProps.width !== this.props.width) {
			this.setState({ viewport: {
				...this.state.viewport,
				width: this.props.width
			}})
		}
	}


	refreshWidth () {
		return this.props.refreshDisplay()
	}

	render() {
		// const popup = <a href={url}>
		const list = this.props.itemList.map((home, i)=>{
			if(home.estimatedPricePercentageDifference>0){
				return(
					<Marker key={i} latitude={home.latitude} longitude={home.longitude}>
						<span className="tag is-success">
							<div className="tooltip">
								{home.estimatedPricePercentageDifference}%
								<span className="tooltiptext">
									<a href={home.url}>	
										<img src={home.thumbnail}/>
									</a>		
								</span>
							</div>
						</span>
					</Marker>
				)
			}
			if(home.estimatedPricePercentageDifference<0){
				return(
					<Marker key={i} latitude={home.latitude} longitude={home.longitude}>
						<span className="tag is-danger">
							<div className="tooltip">
								{home.estimatedPricePercentageDifference}%
								<span className="tooltiptext">
									<a href={home.url}>	
										<img className="img" src={home.thumbnail}/>
									</a>							
								</span>
							</div>
						</span>
					</Marker>
				)
			}
		}
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
		)
	}
}
export default Map
