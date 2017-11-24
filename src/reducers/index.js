const INITIAL_STATE = {
	gameOn: false,
	messageOnScreen: "You have entereed the dungeon of Grant Chirpus. What will you do?",
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

    	case 'PLAYER_HEAL':
    		return playerHeal(state);
         
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

	var attackMessage = "You attacked Grant Chirpus! What will you do now?";
	var stunMessage = "You've stunned Grant Chirpus. His minion uses a potion to restore his health. It will take "+(state.grantLives-1)+" more stuns to defeat him. What will you do now?";

	var newGrantHealth = state.grantHealth - getRandomInt(1, 5);

	if (newGrantHealth <= 0) {
		var newGrantLives = state.grantLives - 1
	}

	if (newGrantHealth > 0) { 
		return Object.assign({}, state, {
			messageOnScreen: attackMessage,
        	grantHealth: newGrantHealth
    	});
	} else if (newGrantHealth <= 0 && newGrantLives > 0) {
		return Object.assign({}, state, {
			playerRoundsWon: state.playerRoundsWon + 1,
			messageOnScreen: stunMessage,
			grantHealth: 10,
			grantLives: state.grantLives - 1
		})
	} else if (newGrantHealth <= 0 && newGrantLives <= 0) {

		document.getElementById("attackbtn").disabled = true;
		document.getElementById("healbtn").disabled = true;

		document.getElementById("fleebtn").innerHTML = "Exit";

		return Object.assign({}, state, {
			playerRoundsWon: state.playerRoundsWon + 1,
			messageOnScreen: "Bih, you win.",
			grantHealth: 0,
			grantLives: 0
		})
	}
}

function playerHeal(state) {

	if (state.playerHealsLeft > 0) {

		var newPlayerHealth = state.playerHealth + getRandomInt(1,10);
		var newPlayerHealsLeft = state.playerHealsLeft - 1;

		return Object.assign({}, state, {
			messageOnScreen: "You healed! What will you do now?",
        	playerHealth: newPlayerHealth,
        	playerHealsLeft: newPlayerHealsLeft
    	});

	} else {
		return state;
	}
}

function getRandomInt(min, max) {//Nested into combatLoop
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}