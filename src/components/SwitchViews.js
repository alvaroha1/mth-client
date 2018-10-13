import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapToggle } from '../redux/actions';

class SwitchViews extends Component {
	constructor(props) {
		super(props)
	}

	mapToggleOn = () => {
		this.props.mapToggle(true)
	}

	mapToggleOff = () => {
		this.props.mapToggle(false)
	}

	render() {
		return (
		<div className="SwitchViews">
		  <div className="tabs is-toggle is-fullwidth is-dark">
		    <ul>
		      <li className="is-active">
		        <a onClick={()=> this.mapToggleOff()}>
		          <span className="icon is-small"><i className="fas fa-home" aria-hidden="true"></i></span>
		          <span>List</span>
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

const mapDispatchToProps = (dispatch) => ({
	mapToggle: (bool) => dispatch(mapToggle(bool))
});

export default connect(null, mapDispatchToProps)(SwitchViews)





