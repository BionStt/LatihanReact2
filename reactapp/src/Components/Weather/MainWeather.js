import React, {Component} from 'react';
import Weather  from './Weather';

export default class MainWeather extends Component {

	constructor(props) {

		super(props);

		this.state = {

		};
	}

	render() {

		return (
			<div className="main">
				<div className="title">
				What's the Weather?
				</div>
				<hr />
				<Weather />
			</div>
		);
	}
}
