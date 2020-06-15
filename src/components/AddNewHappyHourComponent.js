import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
	Form, FormGroup, Label, Input, 
	Container, Col, 
	Card, CardHeader, CardBody, Button, Row
} from 'reactstrap';

class AddNewHappyHour extends Component {
	constructor(props) {
		super(props);

		this.state = {
			addMoreNum: 1
		}

		this.handleAddMore = this.handleAddMore.bind(this);
	}

	handleAddMore() {
		this.setState({
			addMoreNum: this.state.addMoreNum + 1
		})
	}

	render() {
		const RenderDetailsForm = () => {
			return (
				<CardBody className="happyHourContent border mt-3">
					<Button className="close happyHourDelete">&times;</Button>
	
					<FormGroup>
						<Label>Item</Label>
						<Input type="text" placeholder="i.e. traditional wings" />
					</FormGroup>
	
					<FormGroup row>
						<Col>
							<Label>Price/Discount</Label>
							<Input type="text" placeholder="i.e. 1/2 price" />
						</Col>
						<Col>
							<Label>Food/Drink</Label>
							<Input type="select">
								<option selected>select...</option>
								<option>Food</option>
								<option>Drink</option>
							</Input>
						</Col>
					</FormGroup>
	
					<FormGroup row>
						<Col xs={12}>
							<Label>Day(s) Available</Label>
						</Col>
						<Col xs={4}>
							<FormGroup check>
								<Label check>
									<Input type="checkbox" /> {' '}
									Monday
								</Label>
							</FormGroup>
						</Col>
						<Col xs={4}>
							<FormGroup check>
								<Label check>
									<Input type="checkbox" /> {' '}
									Tuesday
								</Label>
							</FormGroup>
						</Col>
						<Col xs={4}>
							<FormGroup check>
								<Label check>
									<Input type="checkbox" /> {' '}
									Wednesday
								</Label>
							</FormGroup>
						</Col>
						<Col xs={4}>
							<FormGroup check>
								<Label check>
									<Input type="checkbox" /> {' '}
									Thursday
								</Label>
							</FormGroup>
						</Col>
						<Col xs={4}>
							<FormGroup check>
								<Label check>
									<Input type="checkbox" /> {' '}
									Friday
								</Label>
							</FormGroup>
						</Col>
						<Col xs={4}>
							<FormGroup check>
								<Label check>
									<Input type="checkbox" /> {' '}
									Saturday
								</Label>
							</FormGroup>
						</Col>
						<Col xs={4}>
							<FormGroup check>
								<Label check>
									<Input type="checkbox" /> {' '}
									Sunday
								</Label>
							</FormGroup>
						</Col>
					</FormGroup>		
				</CardBody>
			);
		}

		{/* start array with one card to fill out then push more 
		to the array as state counter increases on "Add More" clicks */}
		const DetailsArray = [
			<RenderDetailsForm />
		]

		while (DetailsArray.length < this.state.addMoreNum) {
			DetailsArray.push(<RenderDetailsForm />);
		}

		return (
			<React.Fragment>
				<h2 className="mt-4 ml-3">Add New Happy Hour</h2>

				<Container>
					<Form>
						<FormGroup>
							<Label>Business Name</Label>
							<Input type="text" placeholder="enter business name" />
						</FormGroup>

						<FormGroup>
							<Label>Address</Label>
							<Input type="text" placeholder="enter business address" />
						</FormGroup>

						<FormGroup row>
							<Col xs={6} >
								<Label>Start Time</Label>
								<Input type="time" placeholder="start time" />
							</Col>
							<Col xs={6}>
								<Label>End Time</Label>
								<Input type="time" placeholder="end time" />
							</Col>
						</FormGroup>

						<Card className="border-0">
						<CardHeader className="bg-white border-0">Happy Hour Details</CardHeader>
							{DetailsArray}
						</Card>

						<Row className="mt-3">
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