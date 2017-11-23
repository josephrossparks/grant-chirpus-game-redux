const INITIAL_STATE = {
	gameOn: false,
	messageOnScreen: "",
	playerName: "",
	playerHealth: 40,
	playerLives: 1,
	playerHealsLeft: 2,
	playerRoundsWon: 0,
	grantHealth: 10,
	grantLives: 3
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

    	case 'START_GAME':
    		return startGame(state);

    	case 'RESET_GAME':
    		return resetGame(state);

    	case 'PLAYER_ATTACK':
    		return playerAttack(state);
         
        default:
        	return state;
        	
    }
}

function startGame(state) {
	return Object.assign({}, state, {
        gameOn: !state.gameOn
    });
}

function resetGame(state) {
	return Object.assign({}, state, INITIAL_STATE);
}

function playerAttack(state) {

	var newGrantHealth = state.grantHealth - getRandomInt(1, 5);

	if (newGrantHealth > 0) {
		return Object.assign({}, state, {
        	grantHealth: newGrantHealth
    	});
	} else {
		return Object.assign({}, state, {
			grantHealth: 10,
			grantLives: state.grantLives - 1
		})
	}
}

function getRandomInt(min, max) {//Nested into combatLoop
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}