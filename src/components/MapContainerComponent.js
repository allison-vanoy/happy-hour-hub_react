import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
								<div>
									<div style={{ fontSize: '16px' }}>{business.name}</div>
									<div className='seeMore' style={{textAlign: 'center', marginTop: 10}}>
										<Link 
											to={`/business/${business.id}`}
											
										>
												see happy hours
										</Link>
										</div>
									</div>
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