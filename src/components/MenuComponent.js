import React, { Component } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false,
			isLoginModalOpen: false,
			isAcctModalOpen: false
		};

		this.toggleNav = this.toggleNav.bind(this);
		this.toggleLoginModal = this.toggleLoginModal.bind(this);
		this.toggleAcctModal = this.toggleAcctModal.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen 
		});
	}

	toggleLoginModal() {
		this.setState({
			isLoginModalOpen: !this.state.isLoginModalOpen
		});
	}

	toggleAcctModal() {
		this.setState({
			isAcctModalOpen: !this.state.isAcctModalOpen
		});
	}


	render() {
		return (
			<React.Fragment>
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
								<NavLink className="nav-link" to="/sign-in" onClick={this.toggleLoginModal}>Sign-In</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/create-account" onClick={this.toggleAcctModal}>Create Account</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>

				<Modal isOpen={this.state.isLoginModalOpen} onClick={this.toggleLoginModal}>
					<ModalHeader toggle={this.toggleLoginModal}>Sign-in</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label>Username</Label>
								<Input type="text" name="username" />
							</FormGroup>
							<FormGroup>
								<Label>Password</Label>
								<Input type="password" name="password" />
							</FormGroup>
						</Form>
						<Button type="submit" value="submit" onClick={this.toggleNav}>Sign-in</Button>
					</ModalBody>
				</Modal>

				<Modal isOpen={this.state.isAcctModalOpen} onClick={this.toggleAcctModal}>
					<ModalHeader toggle={this.toggleAcctModal}>Create Account</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label>Email</Label>
								<Input type="email" name="email" />
							</FormGroup>
							<FormGroup>
								<Label>Username</Label>
								<Input type="text" name="username" />
							</FormGroup>
							<FormGroup>
								<Label>Password</Label>
								<Input type="password" name="password" />
							</FormGroup>
							<FormGroup>
								<Label>Re-Type Password</Label>
								<Input type="password" name="password2" />
							</FormGroup>
						</Form>
						<Button type="submit" value="submit" onClick={this.toggleNav}>Create Account</Button>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}

export default Menu;