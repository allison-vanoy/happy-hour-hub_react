import React, { Component } from 'react';
import Header from './HeaderComponent';
import Map from './MapComponent';

//Main will handle any state
class Main extends Component {

	render() {
		return (
			<React.Fragment>
				<Header />
				<Map />
			</React.Fragment>
		);
	}

}

export default Main;