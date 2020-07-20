import React, { Component } from 'react';
import { Label, Container, Col, Card, CardHeader, Button, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import RenderDetailsForm from './AddMoreComponent';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

const required = val => val && val.length;

class AddNewHappyHour extends Component {
	constructor(props) {
		super(props);

		this.state = {
			businessName: '',
			coordinates: {
				lat: null,
				lng: null
			},
			street_number: '',
			route: '',
			locality: '',
			administrative_area_level_1: '',
			country: '',
			postal_code: '',
			placeId: ''
		}
		// this.state = {
		// 	happyhours: [{
		// 		id: 0,
		// 		description: '',
		// 		discount: '',
		// 		dealType: '',
		// 		available: []
		// 	}]
		// }

	}

	// handleAddMore = () => {
	// 	let lastObj = (this.state.happyhours.length-1);
	// 	let lastObjId = this.state.happyhours[lastObj].id;
	// 	const newArr = [{
	// 		id: lastObjId+1,
	// 		itemDesc: '',
	// 		discount: '',
	// 		dealType: '',
	// 		available: []
	// 	}];
	// 	this.setState({	happyhours: [...this.state.happyhours, ...newArr] });
	// }

	handleBusinessSubmit = (values) => {
		const address = `${this.state.street_number} ${this.state.route}`;
		const city = this.state.locality;
		const state = this.state.administrative_area_level_1;
		const zip = this.state.postal_code;

		this.props.postBusiness(this.props.businessId, this.state.placeId, this.state.businessName, address, city, state, zip, this.state.coordinates, values.startTime, values.endTime,
			this.props.happyhourId, values.itemDesc, values.discount, values.dealType, [values.monday, values.tuesday, values.wednesday, values.thursday, values.friday, values.saturday, values.sunday]);
		this.props.resetBusinessForm();
		this.resetGoogleAddress();
		this.props.resetHappyhourForm();
	}

	resetGoogleAddress() {
		this.setState({
			businessName: '',
			street_number: '',
			route: '',
			locality: '',
			administrative_area_level_1: '',
			country: '',
			postal_code: '',
			placeId: ''
		})
	}

	handleChange = businessName => {
		this.setState({ businessName });
	};
	 
	handleSelect = (value, placeId, name) => {
		geocodeByPlaceId(placeId)
		.then(this.setState({ businessName: name.formattedSuggestion.mainText, placeId: placeId }))
		.then(results => (
			this.handleAutopopulate(results[0]),
			getLatLng(results[0])
		))
		.then(latLng => this.setState({ coordinates: latLng }))
		.then(latLng => console.log('Success', latLng))
		.catch(error => console.error('Error', error));
	  };

	handleAutopopulate = address => {
		const componentType = {
			street_number: 'short_name',
			route: 'long_name',
			locality: 'long_name',
			administrative_area_level_1: 'short_name',
			country: 'long_name',
			postal_code: 'short_name'
		};

		for (let i = 0; i < address.address_components.length; i++) {
			let addressType = address.address_components[i].types[0];
			if(componentType[addressType]) {
				let val = address.address_components[i][componentType[addressType]];
				this.setState({ [addressType]: val })
			}
		  }
	};

	render() {

		const searchOptions = {
			country: 'us',
			types: ['establishment']
		}

		return (
			<React.Fragment>
				<h2 className="mt-4 ml-3">Add New Happy Hour</h2>

				<PlacesAutocomplete 
					value={this.state.businessName} 
					onChange={this.handleChange} 
					onSelect={(value, placeId, name) => this.handleSelect(value, placeId, name)}
					searchOptions={searchOptions}
				>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<Container>
						<Form model="businessForm" onSubmit={(values) => this.handleBusinessSubmit(values)}>
							<Row className="form-group">
								<Col>
									<Label>Business Name</Label>
									<Control.text 
										model=".businessName"
										id="businessName"
										className="form-control"
										placeholder="enter business name"
										validators={{
											required
										}} 
										{...getInputProps()} 
									/>
									<Errors
										className="text-danger"
										model=".businessName"
										show="touched"
										component="div"
										messages={{
											required: 'Required'
										}}
									/>

									<div>
										{loading ? <div>...loading</div> : null}

										{suggestions.map((suggestion) => {
											const style = {
												backgroundColor: suggestion.active ? '#41b6e6' : '#fff'
											}

											return (
												<div {...getSuggestionItemProps(suggestion, { style })}>
														{suggestion.description}
												</div>
											)
										})}
									</div>
								</Col>
							</Row>

							<Row className="form-group">
								<Col>
									<Label>Address</Label>
									<input type="text" name="address"
										className="form-control"
										disabled="true"
										value={`${this.state.street_number} ${this.state.route}`}
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Col xs={7}>
									<Label>City</Label>
									<input type="text" name="city"
										className="form-control"
										disabled="true"
										value={this.state.locality}
									/>
								</Col>
								<Col xs={2}>
									<Label>State</Label>
									<input type="text" name="state"
										className="form-control"
										disabled="true"
										value={this.state.administrative_area_level_1}
									/>
								</Col>
								<Col>
									<Label>Zip</Label>
									<input type="text"  name="zip"
										className="form-control"
										disabled="true"
										value={this.state.postal_code}
									/>
								</Col>
							</Row>

							<Row className="form-group">
								<Col xs={6} >
									<Label>Start Time</Label>
									<Control.text model=".startTime" name="startTime"
										placeholder="start time" 
										className="form-control"
										validators={{
											required
										}}
									/>
									<Errors
										className="text-danger"
										model=".startTime"
										show="touched"
										component="div"
										messages={{
											required: 'Required'
										}}
									/>
								</Col>
								<Col xs={6}>
									<Label>End Time</Label>
									<Control.text model=".endTime" name="endTime"
										placeholder="end time" 
										className="form-control"
										validators={{
											required
										}}
									/>
									<Errors
										className="text-danger"
										model=".endTime"
										show="touched"
										component="div"
										messages={{
											required: 'Required'
										}}
									/>
								</Col>
							</Row>

							<Card className="border-0">
							<CardHeader className="bg-white border-0">Happy Hour Details</CardHeader>
									{/* {this.state.happyhours.map(happyhour => 
										<RenderDetailsForm happyhour={happyhour} />
									)}  */}
									<RenderDetailsForm />
							</Card>

							<Row>
								<Button id="happyHourAdd" className="btn btn-secondary mx-auto" onClick={this.handleAddMore}>Add More</Button>
							</Row>
							<Row className="mt-5 mx-3">
								<Button id="submitHappyHour" type="submit" className="btn btn-lg btn-block mb-4">Submit</Button>
							</Row>
						</Form>
					</Container>
				)}
				</PlacesAutocomplete>
			</React.Fragment>
		);
	}

}

export default AddNewHappyHour;