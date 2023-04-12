import React, {Component} from 'react';

export default class Weather extends Component {

	constructor(props) {
		super(props);

		this.state = {
			location: "",
			place: "",
			temp: "",
			weather: ""
		};
	}

	render() {

		return (
			<div className="weather">
				<label htmlFor="text">Enter Location</label>
				<br />
				<div id="location">
					<input onChange={this.changeValue}
						type="text" value={this.state.location} />
				</div>
				<div className="button">
					<button onClick={this.getWeather}>
					Check Weather
					</button>
				</div>
				<div>
					<h1>Location: {this.state.place}</h1>
					<h3>Temperature: {this.state.temp} C</h3>
					<h3>Condition: {this.state.weather}</h3>
				</div>
			</div>
		);
	}

	changeValue = (event) => {

		this.setState({
			location: event.target.value
		});
	}

	getWeather = () => {

		fetch(`
https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&units=metric&APPID=APIKEY`)
			.then(response => response.json())
			.then(data => {
				this.setState({
					place: data.name,
					temp: data.main.temp,
					weather: data.weather[0].main
				});
			});

	}
}
