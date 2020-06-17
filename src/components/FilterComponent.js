import React, { Component } from 'react';
import { Form, Row, Col, Label, FormGroup, Input, Button, Collapse } from 'reactstrap';

class Filter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFilterOpen: false,
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
			],
			type: [
				{
					id: 0,
					name: 'Food',
					isChecked: false
				},
				{
					id: 1,
					name: 'Drink',
					isChecked: false
				},
			],
			ratings: [
				{
					id: 0,
					name: '> 1 star',
					isChecked: false
				},
				{
					id: 1,
					name: '> 2 star',
					isChecked: false
				},
				{
					id: 2,
					name: '> 3 star',
					isChecked: false
				},
				{
					id: 3,
					name: '> 4 star',
					isChecked: false
				},
				{
					id: 4,
					name: '> 5 star',
					isChecked: false
				},
			]
		}
	}

	toggleFilter = () => {
		this.setState({
			isFilterOpen: !this.state.isFilterOpen
		});
	}

	handleDayChange = (event) => {
		const index = event.target.getAttribute('index');

		let newArr = JSON.parse(JSON.stringify(this.state.dayOfWeek));;
		newArr[index].isChecked = !newArr[index].isChecked;

		this.setState({
			dayOfWeek: newArr
		})
	}
	
	handleTypeChange = (event) => {
		const index = event.target.getAttribute('index');

		let newArr = JSON.parse(JSON.stringify(this.state.type));;
		newArr[index].isChecked = !newArr[index].isChecked;

		this.setState({
			type: newArr
		})
	}

	handleRatingChange = (event) => {
		const index = event.target.getAttribute('index');

		let newArr = JSON.parse(JSON.stringify(this.state.ratings));;
		newArr[index].isChecked = !newArr[index].isChecked;

		this.setState({
			ratings: newArr
		})
	}

	handleSubmit = (event) => {
		alert(JSON.stringify(this.state))
		event.preventDefault();
	}

	render() {
		return (
			<React.Fragment>
				{/* filter icon */}
				<a type="button" onClick={this.toggleFilter} id="filterBtn" className="col-2 text-center mt-2 ml-0 d-lg-none">
					<i className="fa fa-filter" />
				</a>

				<Collapse isOpen={this.state.isFilterOpen}>
					<Form onSubmit={this.handleSubmit} id="filterMenu">
					{/* Day of the Week filter section */}
						<FormGroup row>
							<Col xs={12}>
								<Label className="filterLabel">Day of the Week</Label>
							</Col>
							<Col>
								{this.state.dayOfWeek.map(day => {
									return (
										<FormGroup key={day.id} check>
											<Label check>
												<Input type="checkbox" name="dayOfWeek"
													index={day.id} 
													checked={day.isChecked} 
													onChange={this.handleDayChange}
												/> {' '}
													{day.name}
											</Label>
										</FormGroup>
									)
								})}
							</Col>
						</FormGroup>

					{/* Type of Happy Hour filter section */}
						<FormGroup row>
							<Col xs={12}>
								<Label className="filterLabel">Type of Happy Hour</Label>
							</Col>
							<Col xs={4}>
								<FormGroup check>
									<Label check>
										<Input type="checkbox" name="type"
											index="0"
											checked={this.state.type.isChecked}
											onChange={this.handleTypeChange}
										/> {' '}
										{this.state.type[0].name}
									</Label>
								</FormGroup>
							</Col>
							<Col xs={4}>
								<FormGroup check>
									<Label check>
									<Input type="checkbox" name="type"
											index="1"
											checked={this.state.type.isChecked}
											onChange={this.handleTypeChange}
										/> {' '}
										{this.state.type[1].name}
									</Label>
								</FormGroup>
							</Col>
						</FormGroup>		

					{/* Ratings filter section */}
						<FormGroup row>
							<Col xs={12}>
								<Label className="filterLabel">Ratings</Label>
							</Col>
							<Col>
								{this.state.ratings.map(rating => {
									return (
										<FormGroup key={rating.id} check>
											<Label check>
												<Input type="checkbox" name="ratings"
													index={rating.id} 
													checked={rating.isChecked} 
													onChange={this.handleRatingChange}
												/> {' '}
													{rating.name}
											</Label>
										</FormGroup>
									)
								})}
							</Col>
						</FormGroup>

						{/* Apply Filters button */}
						<FormGroup row className="mb-4 mt-4">
							<Button id="applyFilters" type="submit" className="btn btn-lg mx0auto btn-block filterSubmit">Apply Filters</Button>	
						</FormGroup>	
					</Form>

				</Collapse>
			</React.Fragment>
		);
	}
}

export default Filter;