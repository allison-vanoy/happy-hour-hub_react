import React, { Component } from 'react';
import { Form, Row, Col, Label, FormGroup, Input, Button, Collapse } from 'reactstrap';


class Filter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFilterOpen: false,
		}
	}

	toggleFilter = () => {
		this.setState({
			isFilterOpen: !this.state.isFilterOpen
		});
	}

	// handleRatingChange = (event) => {
	// 	const index = event.target.getAttribute('index');

	// 	let newArr = JSON.parse(JSON.stringify(this.state.ratings));;
	// 	newArr[index].isChecked = !newArr[index].isChecked;

	// 	this.setState({
	// 		ratings: newArr
	// 	})
	// }

	handleSubmit = (event) => {
		event.preventDefault();
	}

	//changes are sent to Main Component's local state so it's child Home Component can react to filter changes
	render() {
		return (
			<React.Fragment>
				{/* filter icon */}
				<a type="button" onClick={this.toggleFilter} id="filterBtn" className="col-2 text-center pt-4 ml-0 d-lg-none">
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
								{this.props.dayOfWeek.map(day => {
									return (
										<FormGroup key={day.id} check>
											<Label check>
												<Input type="checkbox" name="dayOfWeek"
													index={day.id} 
													checked={day.isChecked} 
													onChange={this.props.handleFilterDayChange}
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
											checked={this.props.dealType[0].isChecked}
											onChange={this.props.handleFilterTypeChange}
										/> {' '}
										{this.props.dealType[0].name}
									</Label>
								</FormGroup>
							</Col>
							<Col xs={4}>
								<FormGroup check>
									<Label check>
									<Input type="checkbox" name="type"
											index="1"
											checked={this.props.dealType[1].isChecked}
											onChange={this.props.handleFilterTypeChange}
										/> {' '}
										{this.props.dealType[1].name}
									</Label>
								</FormGroup>
							</Col>
						</FormGroup>		

					{/* Ratings filter section */}
						{/* <FormGroup row>
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
 */}
						{/* Apply Filters button */}
						<FormGroup row className="mb-4 mt-4">
							<Button id="applyFilters" type="submit" onClick={this.toggleFilter} className="btn btn-lg mx0auto btn-block filterSubmit">Close Filter</Button>	
						</FormGroup>	
					</Form>

				</Collapse>
			</React.Fragment>
		);
	}
}

export default Filter;