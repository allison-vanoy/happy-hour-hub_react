import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
	Form, FormGroup, Label, Input, 
	Container, Col, 
	Card, CardHeader, CardBody, Button, Row
} from 'reactstrap';
import RenderDetailsForm from './AddMoreComponent';

class AddNewHappyHour extends Component {
	constructor(props) {
		super(props);

		this.state = {
			happyhourArray: [{
				id: 0,
				itemDesc: '',
				discount: '',
				type: '',
				dayAvailability: ''
			}],
			businessName: '',
			address: '',
			startTime: '',
			endTime: '',
		}

		this.handleAddMore = this.handleAddMore.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleBusinessChange = this.handleBusinessChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleAddMore() {
		let nextNumInArr = (this.state.happyhourArray.length-1) + 1;
		const newArr = [{
			id: nextNumInArr,
			itemDesc: '',
			discount: '',
			type: '',
			dayAvailability: ''
		}];
		this.setState({	happyhourArray: [...this.state.happyhourArray, ...newArr] });
	}

	handleDelete(indexVal) {
		let index = this.state.happyhourArray.indexOf(indexVal);
		let newHappyhourArray = [...this.state.happyhourArray]
		newHappyhourArray.splice(index, 1);
        this.setState({ happyhourArray: newHappyhourArray });
	}

	handleBusinessChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;

		this.setState({
			[name]: value
		})
	}

	handleSubmit(event) {
		alert(JSON.stringify(this.state))
		event.preventDefault();
	}

	render() {
		return (
			<React.Fragment>
				<h2 className="mt-4 ml-3">Add New Happy Hour</h2>

				<Container>
					<Form onSubmit={this.handleSubmit}>
						<FormGroup>
							<Label>Business Name</Label>
							<Input type="text" name="businessName"
								value={this.state.businessName} 
								onChange={this.handleBusinessChange} 
								placeholder="enter business name" 
							/>
						</FormGroup>

						<FormGroup>
							<Label>Address</Label>
							<Input type="text" name="address"
								value={this.state.address} 
								onChange={this.handleBusinessChange} 
								placeholder="enter business address" 
							/>
						</FormGroup>

						<FormGroup row>
							<Col xs={6} >
								<Label>Start Time</Label>
								<Input type="time" name="startTime"
									value={this.state.startTime} 
									onChange={this.handleBusinessChange} 
									placeholder="start time" 
								/>
							</Col>
							<Col xs={6}>
								<Label>End Time</Label>
								<Input type="time" name="endTime"
									value={this.state.endTime} 
									onChange={this.handleBusinessChange} 
									placeholder="end time" 
								/>
							</Col>
						</FormGroup>

						<Card className="border-0">
						<CardHeader className="bg-white border-0">Happy Hour Details</CardHeader>
							{this.state.happyhourArray.map(happyhour => 
								<RenderDetailsForm 
									indexVal={happyhour.id} 
									key={happyhour.id} 
									itemDesc={happyhour.itemDesc}
									discount={happyhour.discount}
									type={happyhour.type}
									dayAvailability={happyhour.dayAvailability}
									handleDelete={this.handleDelete} 
								/>
							)} 
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