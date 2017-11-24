export function startGame() {
    return {
        type: "START_GAME"
    }
}

export function resetGame() {
	return {
		type: "RESET_GAME"
	}
}

export function playerAttack() {
	return {
		type: "PLAYER_ATTACK"
	}
}

export function playerHeal() {
	return {
		type: "PLAYER_HEAL"
	}
}