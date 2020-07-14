import React, { Component } from 'react';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bodyClass: "light"
		};
	}

	ubahWarna = () => {
		if(this.state.bodyClass == "light")
			this.setState({ bodyClass: "dark"});
		else
			this.setState({ bodyClass: "light"});
	}

	render() {
		return (
			<>
				<h1>Halo!</h1>
				<p>Cek halaman</p>
				<button onClick={this.ubahWarna}>Ubah Warna</button>
			</>
		);
	}
}

export default Home;