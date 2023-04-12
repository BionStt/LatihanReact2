import React, { Component } from "react";
export default class Contoh2 extends Component {

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
	// Overriding the city property of address object
	this.setState({ address: { ...this.state.address, city: "kota" } })
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

// export default Contoh2;
