import { Component } from 'react'
import * as React from 'react'
import Bulma from 'bulma'
import './App.css'

import Navbar from './components/Navbar'
import Display from './components/Display'
import Filter from './components/Filter'
import SwitchViews from './components/SwitchViews'

class App extends Component {
	render() {
		return (
			<div>
				<div className="NavBar">
					<Navbar />
				</div>
				    	<div className="tile is-parent">
					<div className="tile is-4 is-child">
						<SwitchViews/>
						<Filter/>
					</div>
					<div className="tile is-child">
						<Display />
					</div>
				</div>
			</div>
		)
	}
}

export default App
