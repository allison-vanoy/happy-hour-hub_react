import React, { Component } from 'react';
import { Jumbotron, Row, Col, Input } from 'reactstrap';
import Menu from './MenuComponent';
import Filter from './FilterComponent';

function Searchbar() {
	return (
		<Row className="pb-3">
			<Col xs={8} md={5} xl={3} className="mx-auto">
				<div id="searcharea" className="bg-white d-lg-inline-block">
					<i className="fa fa-search ml-2 d-inline-block" />
					<Input className="border-0 d-inline-block" type="search" placeholder="search by zip" />
				</div>
			</Col>
		</Row>
	);

}

function Header() {
	return (
		<Jumbotron fluid className="pb-0 pt-1 mb-0 sticky-top">
			<Row>
				<Menu />

				{/* main title */}
				<Col xs={8} lg={6} className="text-center mx-auto mt-1">
					<h1><a href="/">Happy Hour Hub</a></h1>
					<p className="subHeading">find or add happy hour specials near you</p>
				</Col>

				<Filter />
			</Row>

			<Searchbar />

		</Jumbotron>
	);
}

export default Header;