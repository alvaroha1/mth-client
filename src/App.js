import { Component } from 'react'
import Bulma from 'bulma'
import * as React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Display from './components/Display'
import Filter from './components/Filter'

class App extends Component {
	render() {
		return (

			<div className="App">
			<div className="NavBar"><Navbar /></div>
		
				<div className="basicFlexbox column">	
					<div className="Filter column is-one-quarter"><Filter /></div>
					<div className="Display column is-three-quarter"><Display /></div>
				
				</div>
			</div>
		)
	}
}

export default App
