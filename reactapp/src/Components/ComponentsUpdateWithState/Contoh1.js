import React, { Component } from "react";
class Contoh1 extends Component {

// Nested object
state = {
	name: 'kapil',
	address: {
	colony: 'vaishnav nagar',
	city: 'Jaipur',
	state: 'Rajasthan'
	}
};

handleUpdate = () => {
	// Creating a dummy object using spread operator
	var address = { ...this.state.address }

	// Updating the city
	address.city = 'Kota';
	this.setState({ address })
}

render() {
	return (
	<div style={{ margin: 200 }}>
		<h1>{this.state.name}</h1>
		<h1>{this.state.address.colony} {","}
		{this.state.address.city}{", "}
		{this.state.address.state}</h1>
		<button
		onClick={this.handleUpdate}
		>UpdateCity </button>
	</div>
	);
}
}

export default Contoh1;
