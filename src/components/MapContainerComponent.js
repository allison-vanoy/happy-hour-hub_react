import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

class Map extends Component {

	constructor(props) {
		super(props);

		this.state = {
			openInfoWindowId: ''
		};
	}

	handleInfoWindowToggle = (markerId) => {
		this.setState({ openInfoWindowId: markerId })
	}

	displayMarkers() {
		return (
			this.props.businesses.map((business, placeId) => {
				return (

					<Marker
						key={placeId}
						position={{ 
							lat: business.coordinates.lat,
							lng: business.coordinates.lng 
						}}
						onClick={() => this.handleInfoWindowToggle(placeId)}
					>
						{this.state.openInfoWindowId === placeId && (
							<InfoWindow>
								<div>{business.name}</div>
							</InfoWindow>
						)}
					</Marker>
				);
			})
		)
	}

	render() {

		const GoogleMapExample = withGoogleMap(props => (
			<GoogleMap
				defaultCenter={{ lat: 39.1031, lng: -84.5120 }}
				defaultZoom={ 12 }
			>
				{this.displayMarkers()}
			</GoogleMap>
		));

		return(
			<GoogleMapExample
				containerElement={ <div style={{ height: `400px`, width: '100vw' }} /> }
				mapElement={ <div style={{ height: `100%` }} /> }
			/>
		);
	}
};

export default Map;