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
			<div className="tile is-ancestor">
				<div className="tile is-12 is-vertical is-parent">
					<div className="NavBar tile is-child">
						<Navbar />
					</div>
					<div className="tile is-child ">
						<div className="tile is-12 is-parent">
							<div className="Filter tile is-3 is-child">
								<SwitchViews/>
								<Filter />
							</div>
							<div className="Display tile is-child">
								<Display />
							</div> 
						</div>	
					</div>			
				</div>
			</div>
		)
	}
}

export default App
