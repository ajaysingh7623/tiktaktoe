var ticTacToe = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

var PLAYERS = {
    player1: 'X',
    player2: 'O'
}


var currentPlayer = PLAYERS.player1;

function markTheBox(element, row, col) {
    // update the grid
    ticTacToe[row][col] = currentPlayer;
    // update the DOM
    element.innerHTML = currentPlayer;
    // check if current player won
    if (isCurrentPlayerWinner()) {
        updateTheBanner()
    }
    // switch player
    if (currentPlayer === PLAYERS.player1) {
        currentPlayer = PLAYERS.player2
    } else {
        currentPlayer = PLAYERS.player1
    }
}

function updateTheBanner() {
    document.getElementById("winnerBanner").innerHTML = currentPlayer + ' Wins!'
}

function isCurrentPlayerWinner() {
    return ((ticTacToe[0][0] === currentPlayer && ticTacToe[0][1] === currentPlayer && ticTacToe[0][2] === currentPlayer) ||
    (ticTacToe[1][0] === currentPlayer && ticTacToe[1][1] === currentPlayer && ticTacToe[1][2] === currentPlayer) ||
    (ticTacToe[2][0] === currentPlayer && ticTacToe[2][1] === currentPlayer && ticTacToe[2][2] === currentPlayer) ||
    (ticTacToe[0][0] === currentPlayer && ticTacToe[1][0] === currentPlayer && ticTacToe[2][0] === currentPlayer) ||
    (ticTacToe[0][1] === currentPlayer && ticTacToe[1][1] === currentPlayer && ticTacToe[2][1] === currentPlayer) ||
    (ticTacToe[0][2] === currentPlayer && ticTacToe[1][2] === currentPlayer && ticTacToe[2][2] === currentPlayer) ||
    (ticTacToe[0][0] === currentPlayer && ticTacToe[1][1] === currentPlayer && ticTacToe[2][2] === currentPlayer) ||
    (ticTacToe[0][2] === currentPlayer && ticTacToe[1][1] === currentPlayer && ticTacToe[2][0] === currentPlayer))
}

function reset() {
    
 ticTacToe = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = PLAYERS.player1;
    document.getElementById('winnerBanner').innerHTML = ''
    document.querySelectorAll('td').forEach(el => el.innerHTML = '')
}