import React, { Component } from 'react'
import { connect } from 'react-redux';
import { mapToggle } from '../redux/actions';

class SwitchViews extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isMapOn: false,
		}
	}

	mapToggleOn = () => {
		this.isMapOn = true
		this.setState(this.isMapOn = true)
		this.props.mapToggle(this.state.isMapOn)
	}

	mapToggleOff = () => {
		this.setState(this.isMapOn = false)
		this.props.mapToggle(this.state.isMapOn)
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

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
	mapToggle: (isMapOn) => dispatch(mapToggle(isMapOn))
});

export default connect(mapStateToProps, mapDispatchToProps)(SwitchViews)





