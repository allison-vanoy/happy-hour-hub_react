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
			<React.Fragment>
				<Jumbotron fluid className="sticky-top">
					<Row>
						{/* main title */}
						<Col>
							<h1><a href="#">Happy Hour Hub</a></h1>
						</Col>
						{/* sub title */}
						<Col>
							<p>find or add happy hour specials near you</p>
						</Col>

						{/* menu options */}
						<Navbar light>
							<NavbarToggler id="menuBtn" onClick={this.toggleNav} />
							<Collapse isOpen={this.state.isNavOpen} id="navbarMenu" navbar>
								<Nav navbar id="navList">
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
			</React.Fragment>
		);
	}

}

export default Header;