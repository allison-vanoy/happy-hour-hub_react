import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedCenter: null,
		}
	};

	displayMarkers = () => {
		return (
			this.props.businesses.map((business, placeId) => {
				return (
					<Marker key={placeId} id={placeId} 
						position={{
							lat: business.coordinates.lat,
							lng: business.coordinates.lng
						}} 
						onClick={() => {
							console.log(business.coordinates);
						}}
					/>
				)
			})
		)
	}

	render() {

		const mapStyles = {
			width: '100vw',
			height: '400px',
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