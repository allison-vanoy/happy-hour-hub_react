import React, { Component } from 'react';
import { Jumbotron, Row, Col, Navbar, Nav, NavItem, NavLink, Button, NavbarToggler, Collapse } from 'reactstrap';
import Filter from './FilterComponent';
import Searchbar from './SearchbarComponent';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false
		};

		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen 
		});
	}

	render() {
		return (
			<Jumbotron fluid className="pb-0 pt-1 mb-0 sticky-top">
				<Row>
					{/* main title */}
					<Col xs={8} lg={6} class="text-center mt-1">
						<h1><a href="#">Happy Hour Hub</a></h1>
					</Col>

					{/* sub title */}
					<Col lg={6} class="d-none d-lg-block text-left mt-4">
						<p>find or add happy hour specials near you</p>
					</Col>

					{/* menu options */}
					<Navbar light>
						<NavbarToggler id="menuBtn" onClick={this.toggleNav} />
						<Collapse isOpen={this.state.isNavOpen} id="navbarMenu" navbar>
							<Nav navbar id="navList" class="mt-4 mt-lg-0 mx-auto">
								<NavItem>
									<NavLink to="/home">Home</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/add-new-happy-hour">Add New Happy Hour</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/sign-in">Sign-In</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="/create-account">Create Account</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>

					<Filter />

					<Searchbar />

				</Row>
			</Jumbotron>
		);
	}

}

export default Header;