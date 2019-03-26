export default function (state = {}, action) {
	switch (action.type) {
		case 'BUTTON_SELECTED':
			return {
				color: action.color
			}

		default:
			return state;
	}
}
