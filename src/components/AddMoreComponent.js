import React from 'react';
import { Label, Col, CardBody, Button, Row } from 'reactstrap';
import { Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;

function RenderDetailsForm({ index, happyhour, handleHappyhourChange, deleteHappyhour }) {
	const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

	return (
		<CardBody className="happyHourContent border mb-3">
			<Button className="close happyHourDelete" onClick={() => deleteHappyhour(index)}>&times;</Button>

			<Row className="form-group">
				<Label>Item</Label>
				<Control.text model={`.itemDesc${index}`} name="itemDesc"
					onChange={event => handleHappyhourChange(index, event)}
					value={happyhour.itemDesc}
					placeholder="i.e. traditional wings" 
					className="form-control"
					required
					validators={{
						required
					}}
				/>
				<Errors
					className="text-danger errorMsg"
					model={`.itemDesc${index}`}
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
					<Control.text model={`.discount${index}`} name="discount"
						onChange={event => handleHappyhourChange(index, event)}
						value={happyhour.discount}
						placeholder="i.e. 1/2 price" 
						className="form-control"
						required
						validators={{
							required
						}}
					/>
					<Errors
						className="text-danger errorMsg"
						model={`.discount${index}`}
						show="touched"
						component="div"
						messages={{
							required: 'Required'
						}}
					/>
				</Col>
				<Col>
					<Label>Food/Drink</Label>
					<Control.select model={`.dealType${index}`} name="dealType"
						onChange={event => {
							handleHappyhourChange(index, event)
							console.log('select value',happyhour.dealType)
						}}
						value={happyhour.dealType}
						className="form-control"
						required
						validators={
							value => value === undefined, 
							{required}
						}
					>
						<option value="default" defaultValue disabled>select...</option>
						<option value="food">Food</option>
						<option value="drink">Drink</option>
					</Control.select>
					<Errors
						className="text-danger errorMsg"
						model={`.dealType${index}`}
						show="touched"
						component="div"
						messages={{
							required: 'Required'
						}}
					/>
				</Col>
			</Row>

			<Row className="form-group">
				<Col xs={12}>
					<Label>Day(s) Available</Label>
				</Col>
				{daysOfWeek.map(day => {
					return (
						<Col xs={4}>
							<div className="form-check" check>
								<Label check>
									<Control.checkbox model={`.${day}${index}`} name={day}
										onChange={event => handleHappyhourChange(index, event)}
										className="form-check-input"
									/> {' '}
									{day.charAt(0).toUpperCase() + day.substr(1).toLowerCase()}
								</Label>
							</div>
						</Col>
					)
				})}

			</Row>		
		</CardBody>
	);
}

export default RenderDetailsForm;