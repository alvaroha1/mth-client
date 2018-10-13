import React, {Component} from 'react'
// import {Marker} from 'google-maps-react'


class Icon extends Component {

	render() {
  
		return (
			<a href={this.props.url}>{this.props.deviation}</a>

		// <div>
		// 	<h1>value:{this.props.deviation}</h1>
		// </div>
		)
	}
}
export default Icon