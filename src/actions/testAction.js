const selectFirst = () => {
	console.log("Button one pressed");

	return {
		type: "BUTTON_SELECTED",
		color: {
			backgroundColor: 'green'
		}
	}
};

const selectSecond = () => {
	console.log("Button 2 pressed");

	return {
		type: "BUTTON_SELECTED",
		color: {
			backgroundColor: 'red'
		}
	}
};

export {
	selectFirst,
	selectSecond
}
