import React, { Component } from "react";
import Banks from "./components/banks";
import Control from "./components/controls";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			volume: 1,
			bank: true,
			bankOne: [
				{
					keyCode: 81,
					keyTrigger: "Q",
					id: "Heater-1",
					url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
				},
				{
					keyCode: 87,
					keyTrigger: "W",
					id: "Heater-2",
					url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
				},
				{
					keyCode: 69,
					keyTrigger: "E",
					id: "Heater-3",
					url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
				},
				{
					keyCode: 65,
					keyTrigger: "A",
					id: "Heater-4",
					url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
				},
				{
					keyCode: 83,
					keyTrigger: "S",
					id: "Clap",
					url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
				},
				{
					keyCode: 68,
					keyTrigger: "D",
					id: "Open-HH",
					url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
				},
				{
					keyCode: 90,
					keyTrigger: "Z",
					id: "Kick-n'-Hat",
					url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
				},
				{
					keyCode: 88,
					keyTrigger: "X",
					id: "Kick",
					url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
				},
				{
					keyCode: 67,
					keyTrigger: "C",
					id: "Closed-HH",
					url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
				},
			],
			bankTwo: [
				{
					keyCode: 81,
					keyTrigger: "Q",
					id: "Chord-1",
					url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
				},
				{
					keyCode: 87,
					keyTrigger: "W",
					id: "Chord-2",
					url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
				},
				{
					keyCode: 69,
					keyTrigger: "E",
					id: "Chord-3",
					url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
				},
				{
					keyCode: 65,
					keyTrigger: "A",
					id: "Shaker",
					url:
						"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
				},
				{
					keyCode: 83,
					keyTrigger: "S",
					id: "Open-HH",
					url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
				},
				{
					keyCode: 68,
					keyTrigger: "D",
					id: "Closed-HH",
					url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
				},
				{
					keyCode: 90,
					keyTrigger: "Z",
					id: "Punchy-Kick",
					url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
				},
				{
					keyCode: 88,
					keyTrigger: "X",
					id: "Side-Stick",
					url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
				},
				{
					keyCode: 67,
					keyTrigger: "C",
					id: "Snare",
					url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
				},
			],
		};
	}

	changeVolume = (vol) => {
		this.setState({
			volume: vol,
		});
	};

	changeBank = () => {
		this.setState({
			bank: !this.state.bank,
		});
	};

	render() {
		let displayBank;
		if (this.state.bank === true) {
			displayBank = this.state.bankOne;
		} else {
			displayBank = this.state.bankTwo;
		}
		return (
			<div className="main">
				<Banks bank={displayBank} volume={this.state.volume} />
				<Control
					changeBank={this.changeBank}
					bank={this.state.bank}
					volume={this.state.volume}
					changeVolume={this.changeVolume}
				/>
			</div>
		);
	}
}

export default App;
