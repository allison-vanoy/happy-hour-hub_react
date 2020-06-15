import React, { Component } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

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
							<Link to="/">Home</Link>
						</NavItem>
						<NavItem>
							<Link to="/add-new-happy-hour">Add New Happy Hour</Link>
						</NavItem>
						<NavItem>
							<Link to="/sign-in">Sign-In</Link>
						</NavItem>
						<NavItem>
							<Link to="/create-account">Create Account</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

export default Menu;