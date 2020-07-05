import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Label, Input, Container, Col, Card, CardHeader, CardBody, Button, Row } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';
import RenderDetailsForm from './AddMoreComponent';

const required = val => val && val.length;

const initialHappyhourArray = [{
	id: 0,
	description: '',
	discount: '',
	dealType: '',
	dayOfWeek: [
		{
			id: 0,
			name: 'Monday',
			isChecked: false
		},
		{
			id: 1,
			name: 'Tuesday',
			isChecked: false
		},
		{
			id: 2,
			name: 'Wednesday',
			isChecked: false
		},
		{
			id: 3,
			name: 'Thursday',
			isChecked: false
		},
		{
			id: 4,
			name: 'Friday',
			isChecked: false
		},
		{
			id: 5,
			name: 'Saturday',
			isChecked: false
		},
		{
			id: 6,
			name: 'Sunday',
			isChecked: false
		},
	]
}];

class AddNewHappyHour extends Component {
	constructor(props) {
		super(props);

		this.state = {
			happyhourArray: initialHappyhourArray,
			businessName: '',
			address: '',
			startTime: '',
			endTime: '',
		}
	}

	handleAddMore = () => {
		let lastObj = (this.state.happyhourArray.length-1);
		let lastObjId = this.state.happyhourArray[lastObj].id;
		const newArr = [{
			id: lastObjId+1,
			itemDesc: '',
			discount: '',
			dealType: '',
			dayOfWeek: [
				{
					id: 0,
					name: 'Monday',
					isChecked: false
				},
				{
					id: 1,
					name: 'Tuesday',
					isChecked: false
				},
				{
					id: 2,
					name: 'Wednesday',
					isChecked: false
				},
				{
					id: 3,
					name: 'Thursday',
					isChecked: false
				},
				{
					id: 4,
					name: 'Friday',
					isChecked: false
				},
				{
					id: 5,
					name: 'Saturday',
					isChecked: false
				},
				{
					id: 6,
					name: 'Sunday',
					isChecked: false
				},
			]
		}];
		this.setState({	happyhourArray: [...this.state.happyhourArray, ...newArr] });
	}

	// handleDelete = (indexVal) => {
	// 	let index = this.state.happyhourArray.findIndex(i => i.id == indexVal);
	// 	let newHappyhourArray = [...this.state.happyhourArray]
	// 	newHappyhourArray.splice(index, 1);
    //     this.setState({ happyhourArray: newHappyhourArray });
	// }

	// handleBusinessChange = (event) => {
	// 	const target = event.target;
	// 	const name = target.name;
	// 	const value = target.value;

	// 	this.setState({
	// 		[name]: value
	// 	})
	// }

	// handleHappyhourChange = (event, groupIndex) => {
	// 	const value = event.target.value;
	// 	const newState = {...this.state.happyhourArray}
	// 	newState[groupIndex].itemDesc = value;

	// 	this.setState(newState);
	// }
	
	// handleDayChange = (event, groupIndex) => {
	// 	const checkIndex = event.target.getAttribute('index');
	// 	const newState = {...this.state.happyhourArray}
	// 	newState[groupIndex].dayOfWeek[checkIndex].isChecked = !newState[groupIndex].dayOfWeek[checkIndex].isChecked;

	// 	this.setState(newState);
	// }
	
	handleSubmit = (values) => {
		this.props.addBusiness(this.props.businessId, values.businessName, values.address, values.startTime, values.endTime);
		alert(JSON.stringify(values));
		this.props.resetBusinessForm();
		this.props.resetHappyhourForm();
	}

	render() {
		return (
			<React.Fragment>
				<h2 className="mt-4 ml-3">Add New Happy Hour</h2>

				<Container>
					<Form model="businessForm" onSubmit={values => this.handleSubmit(values)}>
						<Row className="form-group">
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
						</Row>

						<Row className="form-group">
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
							<Form model="happyhourForm">
								{this.state.happyhourArray.map(happyhour => 
									<RenderDetailsForm happyhour={happyhour}
										addBusiness={this.props.addBusiness}
										// indexVal={happyhour.id} 
										// key={happyhour.id} 
										// description={happyhour.description}
										// discount={happyhour.discount}
										// dealType={happyhour.dealType}
										// dayOfWeek={happyhour.dayOfWeek}
										// handleDelete={this.handleDelete} 
										// handleHappyhourChange={(event) => this.handleHappyhourChange(event, happyhour.id)}
										// handleDayChange={(event) => this.handleDayChange(event, happyhour.id)}
									/>
								)} 
							</Form>
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