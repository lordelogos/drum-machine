import { useEffect } from "react";

export default function Banks(props) {
	let handleClick = (id) => {
		console.log(id);
		document.querySelector(`#${id}`).volume = props.volume;
		document.querySelector(`#${id}`).play();
	};

	function useKeys(e) {
		if (e.key === "e" || e.key === "E") {
			handleClick("E");
		} else if (e.key === "w" || e.key === "W") {
			handleClick("W");
		} else if (e.key === "d" || e.key === "D") {
			handleClick("D");
		} else if (e.key === "c" || e.key === "C") {
			handleClick("C");
		} else if (e.key === "z" || e.key === "Z") {
			handleClick("Z");
		} else if (e.key === "q" || e.key === "Q") {
			handleClick("Q");
		} else if (e.key === "x" || e.key === "X") {
			handleClick("X");
		} else if (e.key === "a" || e.key === "A") {
			handleClick("A");
		} else if (e.key === "s" || e.key === "S") {
			handleClick("S");
		}
	}

	useEffect(() => {
		document.addEventListener("keydown", useKeys);
		// eslint-disable-next-line
	}, []);

	let bankItems = props.bank.map((item) => (
		<div
			key={item.id}
			onClick={() => handleClick(item.keyTrigger)}
			className={`box`}>
			<p>{item.keyTrigger}</p>
			<audio id={item.keyTrigger}>
				<source src={item.url} type="audio/mpeg" />
			</audio>
		</div>
	));
	return <div className="boxContainer">{bankItems}</div>;
}
