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
			address: '',
			coordinates: {
				lat: null,
				lng: null
			}
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
		this.props.postBusiness(this.props.businessId, values.businessName, values.address, values.city, values.state, values.zip, values.startTime, values.endTime);
		this.props.postHappyhour(this.props.happyhourId, values.itemDesc, values.discount, values.dealType, [values.monday, values.tuesday, values.wednesday, values.thursday, values.friday, values.saturday, values.sunday])
		this.props.resetBusinessForm();
		this.props.resetHappyhourForm();
	}

	handleChange = address => {
		this.setState({ address });
	};
	 
	handleSelect = value => {
		const results = geocodeByAddress(value);
		const latLng = getLatLng(results[0]);

		this.setState({ address: value });
		this.setState({ coordinates: latLng });
	};

	render() {
		return (
			<React.Fragment>
				<h2 className="mt-4 ml-3">Add New Happy Hour</h2>

				{/* test google places api container */}
				<Container>
					<Row className="form-group">
						<Col>
							<PlacesAutocomplete value={this.state.address} onChange={this.handleChange} onSelect={value => this.handleSelect(value)}>
								{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
									<div>
										<input className="form-control" {...getInputProps({ placeholder: 'test google places' })} />

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
									</div>
								)}
							</PlacesAutocomplete>
						</Col>
					</Row>
				</Container>
				<Container>
					<Form model="businessForm" onSubmit={values => this.handleBusinessSubmit(values)}>
						<Row className="form-group">
							<Col>
								<Label>Business Name</Label>
								<Control.text model=".businessName" name="businessName"
									placeholder="enter business name" 
									className="form-control"
									validators={{
										required
									}}
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
							</Col>
						</Row>

						<Row className="form-group">
							<Col>
								<Label>Address</Label>
								<Control.text model=".address" name="address"
									placeholder="enter business address" 
									className="form-control"
									validators={{
										required
									}}
								/>
								<Errors
									className="text-danger"
									model=".address"
									show="touched"
									component="div"
									messages={{
										required: 'Required'
									}}
								/>
							</Col>
						</Row>

						<Row className="form-group">
							<Col xs={7}>
								<Label>City</Label>
								<Control.text model=".city" name="city"
									placeholder="city name" 
									className="form-control"
									validators={{
										required
									}}
								/>
								<Errors
									className="text-danger"
									model=".city"
									show="touched"
									component="div"
									messages={{
										required: 'Required'
									}}
								/>
							</Col>
							<Col xs={2}>
								<Label>State</Label>
								<Control.text model=".state" name="state"
									placeholder="state" 
									className="form-control"
									validators={{
										required
									}}
								/>
								<Errors
									className="text-danger"
									model=".state"
									show="touched"
									component="div"
									messages={{
										required: 'Required'
									}}
								/>
							</Col>
							<Col>
								<Label>Zip</Label>
								<Control.text model=".zip" name="zip"
									placeholder="zip code" 
									className="form-control"
									validators={{
										required
									}}
								/>
								<Errors
									className="text-danger"
									model=".zip"
									show="touched"
									component="div"
									messages={{
										required: 'Required'
									}}
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
			</React.Fragment>
		);
	}

}

export default AddNewHappyHour;