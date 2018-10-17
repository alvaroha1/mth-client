import React, { Component } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import './Map.css'

const accessToken = 'pk.eyJ1Ijoic3RldmVuc3B5cmFtaWQiLCJhIjoiY2puMWl4NDluM3g5aTNwcG56YWVhb293YiJ9.UpzML4DXnrPKkVdvY0IOJQ'

const zoomToRadiusConversion = {
	20 : 1128.497220,
	19 : 2256.994440,
	18 : 4513.988880,
	17 : 9027.977761,
	16 : 18055.955520,
	15 : 36111.911040,
	14 : 72223.822090,
	13 : 144447.644200,
	12 : 288895.288400,
	11 : 577790.576700,
	10 : 1155581.153000,
	9  : 2311162.307000,
	8  : 4622324.614000,
	7  : 9244649.227000,
	6  : 18489298.450000,
	5  : 36978596.910000,
	4  : 73957193.820000,
	3  : 147914387.600000,
	2  : 295828775.300000,
	1  : 591657550.500000}

class Map extends Component {
	constructor(props){
		super(props)
		this.state = {
			viewport: {
				width: this.props.widthAndHeight,
				height: this.props.widthAndHeight,
				latitude: this.props.itemsAndMapInfo.centerLatitude,
				longitude: this.props.itemsAndMapInfo.centerLongitude,
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
		console.log('this is the state form map.js: ',this.state)
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
