import React, { Component } from 'react';
import { Label, Input, Col, CardBody, Button, Row } from 'reactstrap';
import { Control, Errors } from 'react-redux-form';

const required = val => val && val.length;

class RenderDetailsForm extends Component {
	render() {
		return (
			<CardBody className="happyHourContent border mb-3">
				<Button className="close happyHourDelete">&times;</Button>

				<Row className="form-group">
					<Label>Item</Label>
					<Control.text model=".itemDesc" name="itemDesc"
						index={this.props.happyhour.id}
						placeholder="i.e. traditional wings" 
						className="form-control"
						validators={{
							required
						}}
					/>
					<Errors
						className="text-danger"
						model=".itemDesc"
						show="touched"
						component="div"
						messages={{
							required: 'Required'
						}}
					/>
				</Row>

				<Row className="form-group">
					<Col>
						<Label>Price/Discount</Label>
						<Control.text model=".discount" name="discount"
							index={this.props.happyhour.id}
							placeholder="i.e. 1/2 price" 
							className="form-control"
							validators={{
								required
							}}
						/>
						<Errors
							className="text-danger"
							model=".discount"
							show="touched"
							component="div"
							messages={{
								required: 'Required'
							}}
						/>
					</Col>
					<Col>
						<Label>Food/Drink</Label>
						<Control.select model=".dealType" name="dealType"
							index={this.props.happyhour.id}
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
					{this.props.happyhour.dayOfWeek.map(day => {
						return (
							<Col xs={4}>
								<div className="form-check" key={day.id} check>
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