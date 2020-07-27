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

	displayMarkers = () => {
		const happyhourDetails = busId => { 
			//find name of days that have true for checked state in filter
			const checkedFilterDays = [];
			this.props.dayOfWeek.map(checkedDay => {
				if (checkedDay.isChecked) {
					checkedFilterDays.push(checkedDay.name);
				}
			});
	
			//find which deal types (food/drink) have a true checked state in filter
			const checkedFilterTypes = [];
			this.props.dealType.map(checkedType => {
				if (checkedType.isChecked) {
					checkedFilterTypes.push(checkedType.name.toLowerCase());
				}
			});
	
			//get array of happy hours that have the passed business idea and match filter criteria
			const happyhourFilter = this.props.happyhours.filter(happyhour => (
				(happyhour.businessId === busId) && (happyhour.available.some(day => checkedFilterDays.includes(day))) && (checkedFilterTypes.includes(happyhour.type))
			));
	
			//if filter array isn't empty, return all matching happy hours for the business, 
			//otherwise return null so business knows not to display
			if (happyhourFilter.length > 0) {
				return happyhourFilter
			}
			return null;
		};
	
		//return businesses that don't have all happy hour details filtered out
		//if happy hour information returns null(didn't match filter criteria) don't return any business information
		let filteredBusinesses = [];
		const businessMarkers = this.props.businesses.map(business => {
			if (happyhourDetails(business.id) === null) {
				return <div></div>
			} else {
				filteredBusinesses.push(business.id);
				console.log('filter',filteredBusinesses);
			}
			return (
				this.props.businesses.map((business, placeId) => {
					if (filteredBusinesses.includes(business.id)) {
						console.log('if entered')
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
						)
					}
				})
			);
		});

		return businessMarkers;
	}


	render() {
		const GoogleMapWrapper = withGoogleMap(props => (
			<GoogleMap
				defaultCenter={{ lat: 39.1031, lng: -84.5120 }}
				defaultZoom={ 12 }
			>
				{this.displayMarkers()}
			</GoogleMap>
		));

		return(
			<GoogleMapWrapper
				containerElement={ <div style={{ height: `400px`, width: '100vw' }} /> }
				mapElement={ <div style={{ height: `100%` }} /> }
			/>
		);
	}
};

export default Map;