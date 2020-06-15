import React, { Component } from 'react';
import { Jumbotron, Row, Col, Navbar, Nav, NavItem, NavLink, Button, NavbarToggler, Collapse } from 'reactstrap';
import Menu from './MenuComponent';
import Filter from './FilterComponent';
import Searchbar from './SearchbarComponent';

class Header extends Component {
	render() {
		return (
			<Jumbotron fluid className="pb-0 pt-1 mb-0 sticky-top">
				<Row>
					<Menu />

					{/* main title */}
					<Col xs={8} lg={6} className="text-center mx-auto mt-1">
						<h1><a href="#">Happy Hour Hub</a></h1>
					</Col>

					<Filter />
				</Row>

				<Row>
					{/* sub title */}
					<Col lg={6} className="text-center">
						<p className="subHeading">find or add happy hour specials near you</p>
					</Col>
				</Row>

				<Searchbar />

			</Jumbotron>
		);
	}

}

export default Header;