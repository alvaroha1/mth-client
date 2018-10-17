import React, { Component } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import './Map.css'

const accessToken = 'pk.eyJ1Ijoic3RldmVuc3B5cmFtaWQiLCJhIjoiY2puMWl4NDluM3g5aTNwcG56YWVhb293YiJ9.UpzML4DXnrPKkVdvY0IOJQ'

class Map extends Component {
	constructor(props){
		super(props)
		this.state = {
			viewport: {
				width: this.props.widthAndHeight,
				height: this.props.widthAndHeight,
				latitude: this.props.itemsAndMapInfo.centerLatitude,
				longitude: this.props.itemsAndMapInfo.centerLongitude,
				zoom: Math.log2(156543.03/(this.props.itemsAndMapInfo.radius/(this.props.widthAndHeight/2)))
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
		console.log('this is the state from map.js: ',this.state)
		const positiveNegative = (num)=>num>0 ? 'success' : 'danger'
		const list = this.props.itemsAndMapInfo.homesList.map((home, i)=>{
			return(
				<Marker key={i} latitude={home.latitude} longitude={home.longitude}>
					<span className={`tag is-${positiveNegative(home.estimatedPricePercentageDifference)}`}>
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
		)

		return (
			<ReactMapGL
				mapboxApiAccessToken={accessToken}
				{...this.state.viewport}
				onViewportChange={(viewport) =>{
					this.refreshWidth()
					this.setState({viewport:{
						...this.state.viewport,
						latitude: viewport.latitude,
						longitude: viewport.longitude,
						zoom: viewport.zoom,
					}})
					console.log('the state from viewport: ', this.state)
				}
				}
			>
				{list}
			</ReactMapGL>
		)
	}
}
export default Map
