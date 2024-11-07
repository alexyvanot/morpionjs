const { board, currentPlayer, makeMove, isWin, isDraw, isValidMove, switchPlayer, getCurrentPlayer } = require('../src/morpion.js');

beforeEach(() => {
    board.length = 0;
    board.push([' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']);
});

test('isValidMove should return true for an empty cell', () => {
    expect(isValidMove(0, 0)).toBe(true);
});

test('isValidMove should return false for an occupied cell', () => {
    board[0][0] = 'X';
    expect(isValidMove(0, 0)).toBe(false);
});

test('isValidMove should return false for an out-of-bounds move', () => {
    expect(isValidMove(-1, 0)).toBe(false);
    expect(isValidMove(0, 3)).toBe(false);
    expect(isValidMove(3, 0)).toBe(false);
});

test('makeMove should place the correct symbol on the board', () => {
    makeMove(0, 0);
    expect(board[0][0]).toBe('X');
    switchPlayer();
    makeMove(1, 1);
    expect(board[1][1]).toBe('O');
});

test('makeMove should return false if the move is invalid', () => {
    board[0][0] = 'X';
    expect(makeMove(0, 0)).toBe(false);
});

test('isWin should detect a horizontal win', () => {
    board[0] = ['X', 'X', 'X'];
    expect(isWin('X')).toBe(true);
});

test('isWin should detect a vertical win', () => {
    board[0][0] = 'O';
    board[1][0] = 'O';
    board[2][0] = 'O';
    expect(isWin('O')).toBe(true);
});

test('isWin should detect a diagonal win', () => {
    board[0][0] = 'X';
    board[1][1] = 'X';
    board[2][2] = 'X';
    expect(isWin('X')).toBe(true);
});

test('isWin should not detect a win if no row, column, or diagonal is winning', () => {
    expect(isWin('X')).toBe(false);
});

test('isDraw should return true if all cells are filled without a win', () => {
    board[0] = ['X', 'O', 'X'];
    board[1] = ['O', 'X', 'O'];
    board[2] = ['O', 'X', 'O'];
    expect(isDraw()).toBe(true);
});

test('isDraw should return false if the game is not a draw', () => {
    board[0] = ['X', 'O', 'X'];
    board[1] = ['O', ' ', 'O'];
    board[2] = ['X', ' ', 'X'];
    expect(isDraw()).toBe(false);
});

test('switchPlayer should toggle the current player', () => {
    expect(getCurrentPlayer()).toBe('O');
    switchPlayer();
    expect(getCurrentPlayer()).toBe('X');
    switchPlayer();
    expect(getCurrentPlayer()).toBe('O');
});
