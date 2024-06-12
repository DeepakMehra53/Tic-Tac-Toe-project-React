# Project Title:
-Tic-Tac-Toe React Project
# Overview
This project is a classic Tic-Tac-Toe game built using React. It allows two players to take turns marking spaces in a 3x3 grid, with the objective of placing three of their marks in a horizontal, vertical, or diagonal row. The project demonstrates the use of state management, component-based architecture, and event handling in React.

# Features
- **Two-Player Gameplay**: Supports two players, X and O, taking alternate turns.
- **Interactive UI**:  Players can click on the grid to place their marks.
- **Win Detection**:  The game detects and announces when a player has won or when the game ends in a draw.
- **Reset Functionality**:Players can reset the game to start a new round.
- **Dynamic Player Names**:Players can edit their names, which will reflect throughout the game interface.

# Project Structure:
1. **Game**:  Manages the state of the game, including the board, the current player, and the game status.
2. **Board**: Renders the 3x3 grid and passes click events to the Game component.
3. **Square**:Represents each square in the grid, highlighting the player marks and handling click events.
4. **Player**:Allows editing of player names and indicates the active player.

# Installation:
To run this project locally, follow these steps:
1. **Clone the repository**:
  -> git clone https://github.com/your-username/                 Tic-Tac-Toe-project-React.git
   
   cd Tic-Tac-Toe-project-React
2. **Install Dependencies**:
    -> npm install

3. **Start the development server**:
    ->npm start

# Usage
1. **Play the Game**: Click on any square to mark it with your symbol (X or O). The game will automatically switch turns.
2. **Edit and Save Player Name**:Click on the "Edit" button next to a player's name to change it. Press "Save" to update the name.
3. **Reset the Game**: Click the "Reset" button to clear the board and start a new game
