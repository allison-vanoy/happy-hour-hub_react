import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			restaurants: [
				{ lat: 39.1031, lng: -84.5120},
				{ lat: 39.085, lng: -84.5120},
				{ lat: 39.085, lng: -84.490}
			]
		}
	};

	displayMarkers = () => {
		return (
			this.state.restaurants.map((restaurant, index) => {
				return (
					<Marker key={index} id={index} position={{
						lat: restaurant.lat,
						lng: restaurant.lng
					}} />
				)
			})
		)
	}

	render() {

		const mapStyles = {
			width: '100vw',
			height: '510px',
			left: '15px'
		}

		return (
			<Map
				google={this.props.google}
				zoom={12}
				style={mapStyles}
				initialCenter={{ lat: 39.1031, lng: -84.5120}}
			>
				{this.displayMarkers()}
			</Map>
		);
	}
};

export const GoogleMap = GoogleApiWrapper({ 
	apiKey: ''
})(MapContainer);