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
			happyhourArray: [0],
		}

		this.handleAddMore = this.handleAddMore.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleAddMore() {
		let nextNumInArr = [(this.state.happyhourArray.length-1) + 1];
		this.setState({	happyhourArray: [...this.state.happyhourArray, ...nextNumInArr] });
	}

	handleDelete(indexVal) {
		let index = this.state.happyhourArray.indexOf(indexVal);
		let newHappyhourArray = [...this.state.happyhourArray]
		newHappyhourArray.splice(index, 1);
        this.setState({ happyhourArray: newHappyhourArray });
	}

	render() {
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
							{this.state.happyhourArray.map(happyhourCount => <RenderDetailsForm key={happyhourCount} indexVal={happyhourCount} handleDelete={this.handleDelete} />)} 
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