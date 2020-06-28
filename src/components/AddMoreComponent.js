import React, { Component } from 'react';
import { 
	Form, FormGroup, Label, Input, 
	Container, Col, 
	Card, CardHeader, CardBody, Button, Row
} from 'reactstrap';
import { Control } from 'react-redux-form';

class RenderDetailsForm extends Component {
	render() {
		return (
			<CardBody className="happyHourContent border mb-3">
				<Button className="close happyHourDelete" onClick={() => this.props.handleDelete(this.props.indexVal)} >&times;</Button>

				<Row className="form-group">
					<Label>Item</Label>
					<Control.text model=".itemDesc" name="itemDesc"
						index={this.props.indexVal}
						placeholder="i.e. traditional wings" 
						className="form-control"
					/>
				</Row>

				<Row className="form-group">
					<Col>
						<Label>Price/Discount</Label>
						<Control.text model=".discount" name="discount"
							index={this.props.indexVal}
							placeholder="i.e. 1/2 price" 
							className="form-control"
						/>
					</Col>
					<Col>
						<Label>Food/Drink</Label>
						<Control.select model=".dealType" name="dealType"
							index={this.props.indexVal}
							className="form-control"
						>
							<option selected>select...</option>
							<option value="food">Food</option>
							<option value="drink">Drink</option>
						</Control.select>
					</Col>
				</Row>

				<Row className="form-group">
					<Col xs={12}>
						<Label>Day(s) Available</Label>
					</Col>
					{this.props.dayOfWeek.map(day => {
						return (
							<Col xs={4}>
								<div className="form-check" key={day.id}>
									<Label check>
										<Control.checkbox model=".dayOfWeek" name="dayOfWeek"
											index={day.id} 
											className="form-check-input"
										/> {' '}
										{day.name}
									</Label>
								</div>
							</Col>
						)
					})}
				</Row>		
			</CardBody>
		);
	}
}

export default RenderDetailsForm;