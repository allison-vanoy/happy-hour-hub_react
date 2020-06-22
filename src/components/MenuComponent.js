import React, { Component } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
							<NavLink className="nav-link" to="/home" onClick={this.toggleNav}>Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="nav-link" to="/add-new-happy-hour" onClick={this.toggleNav}>Add New Happy Hour</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="nav-link" to="/sign-in" onClick={this.toggleNav}>Sign-In</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="nav-link" to="/create-account" onClick={this.toggleNav}>Create Account</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

export default Menu;