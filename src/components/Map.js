import React, { Component } from 'react'
import ReactMapGL, {Marker, LinearInterpolator} from 'react-map-gl'
// import { connect } from 'react-redux'
import './Map.css'

// const _ = 
// const debounce = require('lodash.debounce')
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

	// fetchOnMapChange(){
	// 	console.log('yeah')
	// }
	// fetchOnMapChangeDebounce () {
	// 	debounce(this.fetchOnMapChange(),400)
	// }
	render() {
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
				transitionDuration={100}
				// transitionInterpolator={new LinearInterpolator()}
				mapboxApiAccessToken={accessToken}
				{...this.state.viewport}
				onViewportChange={(viewport) =>{
					// onTransitionEnd(){
					this.refreshWidth()
					this.setState({viewport:{
						...this.state.viewport,
						latitude: viewport.latitude,
						longitude: viewport.longitude,
						zoom: viewport.zoom,
					}})
					// this.fetchOnMapChange()
					console.log('changed!!!')
				}
				}
				// }
			>
				{list}
			</ReactMapGL>
		)
	}
}

// const mapStateToProps = (state) => ({
// 	queryParameters: state.queryParameters
// })

// const mapDispatchToProps = (dispatch) => ({
// 	filterHomes: (filter) => dispatch({
// 		type: 'FILTER_HOMES',
// 		api: {
// 			endpoint: '/homes?'+filter
// 		}
// 	}),
// 	// queryParameters: (qp) => dispatch(queryParameters(qp))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Map)


export default Map