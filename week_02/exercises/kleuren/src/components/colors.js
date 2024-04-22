import React, { useState } from "react";
import Color from "./color";

export default function Colors() {
	const [listColors, setListColors] = useState([
		"rgb(10,30,55)",
		"rgb(255, 0,0)",
		"rgb(0, 255,0)",
	]);
	const generateRandomColor = () => {
		return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
			Math.random() * 255
		)},${Math.floor(Math.random() * 256)})`;
	};
	const handleClick = () => {
		const newColor = generateRandomColor();
		setListColors((prev) => [...prev, newColor]);
	};
	return (
		<div>
			{listColors.map((color) => (
				<Color color={color} />
			))}
			<button onClick={handleClick}>Add Random color</button>
		</div>
	);
}