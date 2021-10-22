


var playerPosition = 0;

game_init = () =>{
	console.log("Posición inicial del jugador ======> " + playerPosition);
  	gameAction();
}


showMessageWin = () => {
	if(playerPosition >= 25)
		console.log("Jugador ha ganado en la posición ======> " + playerPosition);
};

//game action
gameAction = () => {
	do {
		playerPosition = randomDice() + playerPosition;
		console.log("Jugador avanza a la posición ========> " + playerPosition);
		positionCondition(playerPosition);
		showMessageWin();
	  }
	  while (checkEndGame());
}

//Dice random values
randomDice = () => {
  var dice = 0;
  dice =  Math.floor(Math.random() * (7 - 1)) + 1;
  console.log("El dado arroja  ===> " + dice);
  return dice;
}


//Validate position player
positionCondition = (position) => {
  switch(position){
    case 3:
      	playerPosition = 11;
     	console.log("Sube por la escalera a la posición " + playerPosition +" :D");
		break;
    case 6:
     	playerPosition = 17;
		console.log("Sube por la escalera a la posición " + playerPosition +" :D");
        break; 
    case 9:
        playerPosition = 18;
        console.log("Sube por la escalera a la posición " + playerPosition +" :D");
        break;
	case 10:
		playerPosition = 12;
		console.log("Sube por la escalera a la posición " + playerPosition +" :D");
		break;
	case 14:
		playerPosition = 4;
		console.log("Baja por la escalera a la posición " + playerPosition +" :C");
		break;
	case 19:
	    playerPosition = 8;
		console.log("Baja por la escalera a la posición " + playerPosition +" :C");
		break; 
	case 22:
	    playerPosition = 20;
	    console.log("Baja por la escalera a la posición " + playerPosition +" :C");
	    break;
	case 24:
	    playerPosition = 16;
	    console.log("Baja por la escalera a la posición " + playerPosition +" :C");
	    break;	   
    default:
      break;
  }
}

checkEndGame = () => {
	if(playerPosition >= 25){
		return false
	}
	else{
		return true;
	}
}



module.exports = game_init;