let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let currentPlayer = 'X';

const printBoard = () => {
    console.log('  0   1   2');
    for (let i = 0; i < 3; i++) {
        console.log(`${i} ${board[i].map(cell => cell === ' ' ? ' ' : cell).join(' | ')}`);
        if (i < 2) {
            console.log(' -----------');
        }
    }
};

function isValidMove(line, column) {
    // check for bounds
    if (line < 0 || line >= board.length || column < 0 || column >= board[line].length) {
        return false;
    }
    // check if cell is empty
    if (board[line][column] !== ' ') {
        return false;
    }
    return true;
}

const makeMove = (row, col) => {
    if (isValidMove(row, col)) {
        board[row][col] = currentPlayer; 
        return true;
    }
    return false;
};

const isWin = (player) => {
    for (let i = 0; i < 3; i++) {
        if (board[i].every(cell => cell === player)) return true; // line
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true; // col
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true; // diag
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true; // other diag
    return false;
};

const isDraw = () => {
    return board.flat().every(cell => cell !== ' ');
};

const switchPlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const getCurrentPlayer = () => currentPlayer;

module.exports = { board, currentPlayer, printBoard, makeMove, isWin, isDraw, isValidMove, switchPlayer, getCurrentPlayer };
