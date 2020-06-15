import React, { Component } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

class Menu extends Component {
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
			<Navbar light>
				<NavbarToggler id="menuBtn" onClick={this.toggleNav} className="ml-2 border-0" />
				<Collapse isOpen={this.state.isNavOpen} id="navbarMenu" navbar>
					<Nav navbar id="navList" className="mt-lg-0 mx-auto">
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
		);
	}
}

export default Menu;