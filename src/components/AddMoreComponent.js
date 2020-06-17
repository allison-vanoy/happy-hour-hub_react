import React, { Component } from 'react';
import { 
	Form, FormGroup, Label, Input, 
	Container, Col, 
	Card, CardHeader, CardBody, Button, Row
} from 'reactstrap';

class RenderDetailsForm extends Component {
	render() {
		return (
			<CardBody className="happyHourContent border mb-3">
				<Button className="close happyHourDelete" onClick={() => this.props.handleDelete(this.props.indexVal)} >&times;</Button>

				<FormGroup>
					<Label>Item</Label>
					<Input type="text"  
					placeholder="i.e. traditional wings" />
				</FormGroup>

				<FormGroup row>
					<Col>
						<Label>Price/Discount</Label>
						<Input type="text"  
							placeholder="i.e. 1/2 price" />
					</Col>
					<Col>
						<Label>Food/Drink</Label>
						<Input type="select" 
						>
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
								<Input type="checkbox" 
								/> {' '}
								Monday
							</Label>
						</FormGroup>
					</Col>
					<Col xs={4}>
						<FormGroup check>
							<Label check>
								<Input type="checkbox" 
								/> {' '}
								Tuesday
							</Label>
						</FormGroup>
					</Col>
					<Col xs={4}>
						<FormGroup check>
							<Label check>
								<Input type="checkbox" 
								/> {' '}
								Wednesday
							</Label>
						</FormGroup>
					</Col>
					<Col xs={4}>
						<FormGroup check>
							<Label check>
								<Input type="checkbox" 
								/> {' '}
								Thursday
							</Label>
						</FormGroup>
					</Col>
					<Col xs={4}>
						<FormGroup check>
							<Label check>
								<Input type="checkbox" 
								/> {' '}
								Friday
							</Label>
						</FormGroup>
					</Col>
					<Col xs={4}>
						<FormGroup check>
							<Label check>
								<Input type="checkbox" 
								/> {' '}
								Saturday
							</Label>
						</FormGroup>
					</Col>
					<Col xs={4}>
						<FormGroup check>
							<Label check>
								<Input type="checkbox" 
								/> {' '}
								Sunday
							</Label>
						</FormGroup>
					</Col>
				</FormGroup>		
			</CardBody>
		);
	}
}

export default RenderDetailsForm;