const INITIAL_STATE = {
	gameOn: false,
	messageOnScreen: "",
	player: {
		name: "",
		health: 40,
		lives: 1,
		healsLeft: 2,
		roundsWon: 0
	},
	grant: {
		health: 10,
		lives: 3
	}
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

    	case 'START_GAME':
    		return startGame(state);
         
        default:
        	return state;
        	
    }
}

function startGame(state) {
	return Object.assign({}, state, {
        gameOn: !state.gameOn
    });
}