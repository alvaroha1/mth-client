import React, { Component } from 'react'

class SwitchViews extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isMapOn: false,
		}
	}

	mapToggleOn = () => {
		this.state.isMapOn = true
	}

	mapToggleOff = () => {
		this.state.isMapOn = false
	}

	render() {
		return (
		<div className="SwitchViews">
		  <div className="tabs is-toggle is-fullwidth">
		    <ul>
		      <li className="is-active">
		        <a onClick={()=> this.mapToggleOff()}>
		          <span className="icon is-small"><i className="fas fa-home" aria-hidden="true"></i></span>
		          <span>Homes</span>
		        </a>
		      </li>
		      <li>
		        <a onClick={()=> this.mapToggleOn()}>
		          <span className="icon is-small"><i className="fas fa-map-marker-alt" aria-hidden="true"></i></span>
		          <span>Map</span>
		        </a>
		      </li>
		    </ul>
		  </div>
		</div>
		)
	}
}

export default SwitchViews