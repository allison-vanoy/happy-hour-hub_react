import React from 'react';
import { 
	Form, FormGroup, Label, Input, 
	Container, Col, 
	Card, CardHeader, CardBody, Button, Row
} from 'reactstrap';

function RenderDetailsForm() {
	return (
		<CardBody className="happyHourContent border">
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

export default RenderDetailsForm;