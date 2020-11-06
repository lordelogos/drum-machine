import { useState } from "react";

export default function Control(props) {
	// eslint-disable-next-line
	let [volume, setVolume] = useState(props.volume * 100);

	function volumeChange(e) {
		setVolume(e.target.value);
		props.changeVolume(e.target.value / 100);
	}
	return (
		<div className="control">
			<div className="volume">
				<div>Volume: {volume}</div>
				<input
					className="vol-slider"
					type="range"
					value={volume}
					min="0"
					max="100"
					onChange={volumeChange}
				/>
			</div>
			<div className="bank-chg">
				{props.bank ? "Bank: 1" : "Bank: 2"}
				<button onClick={props.changeBank} className="btn">
					Change Bank
				</button>
			</div>
		</div>
	);
}
