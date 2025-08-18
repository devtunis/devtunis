 const players = [
  { id: 'player1', pieces: [0, 0, 0, 0], home: 0, canMove: true },
  { id: 'player2', pieces: [0, 0, 0, 0], home: 0, canMove: false },
  // Add more players as needed
];

let currentTurn = 0; // Start with the first player

// Function to roll the dice
function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
}

// Function to handle a player's turn
function playerTurn() {
  const currentPlayer = players[currentTurn];
  const diceRoll = rollDice(); // Get the number from the dice roll

  console.log(`${currentPlayer.id} rolled a ${diceRoll}`);

  // Check if the rolled number is between 1 and 6
  if (diceRoll >= 1 && diceRoll <= 6) {
    currentPlayer.canMove = true; // Allow the player to move
    // Optionally: Notify the player to choose which piece to move
    movePiece(currentPlayer, diceRoll);
  } else {
    console.log(`${currentPlayer.id} cannot move!`);
    nextTurn(); // Move to the next player if not allowed to move
  }
}

// Function to move the piece
function movePiece(player, steps) {
  // Logic to move a piece (you can ask the player which piece to move)
  const pieceIndex = 0; // Example: moving the first piece
  const currentPosition = player.pieces[pieceIndex];
  
  // Calculate new position based on steps
  const newPosition = currentPosition + steps;

  // Update piece position
  if (newPosition < 56) { // Assuming 56 is the position of the home
    player.pieces[pieceIndex] = newPosition;
    console.log(`${player.id} moved piece ${pieceIndex} to position ${newPosition}`);
  } else {
    console.log(`${player.id} cannot move piece ${pieceIndex} beyond home!`);
  }

  // Move to the next player's turn
  nextTurn();
}

// Function to switch turns
function nextTurn() {
  currentTurn = (currentTurn + 1) % players.length; // Loop back to the first player after the last
  console.log(`It is now ${players[currentTurn].id}'s turn.`);
}

// Start the game loop
playerTurn(); // Call this function to start the turn for the current player
