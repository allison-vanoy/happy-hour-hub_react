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
					<Input type="text" name="itemDesc"
						index={this.props.indexVal}
						onChange={this.props.handleHappyhourChange}  
						placeholder="i.e. traditional wings" 
					/>
				</FormGroup>

				<FormGroup row>
					<Col>
						<Label>Price/Discount</Label>
						<Input type="text" name="discount"
							index={this.props.indexVal}
							onChange={this.props.handleHappyhourChange}    
							placeholder="i.e. 1/2 price" />
					</Col>
					<Col>
						<Label>Food/Drink</Label>
						<Input type="select" name="dealType"
							index={this.props.indexVal}
							onChange={this.props.handleHappyhourChange}  
						>
							<option selected>select...</option>
							<option value="food">Food</option>
							<option value="drink">Drink</option>
						</Input>
					</Col>
				</FormGroup>

				<FormGroup row>
					<Col xs={12}>
						<Label>Day(s) Available</Label>
					</Col>
					{this.props.dayOfWeek.map(day => {
						return (
							<Col xs={4}>
								<FormGroup key={day.id} check>
									<Label check>
										<Input type="checkbox" name="dayOfWeek"
											index={day.id} 
											checked={day.isChecked} 
											onChange={this.props.handleDayChange}
										/> {' '}
										{day.name}
									</Label>
								</FormGroup>
							</Col>
						)
					})}
				</FormGroup>		
			</CardBody>
		);
	}
}

export default RenderDetailsForm;