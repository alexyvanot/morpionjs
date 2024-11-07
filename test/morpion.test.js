const { board, makeMove, isWin, isDraw, switchPlayer, getCurrentPlayer } = require('../src/morpion.js');

beforeEach(() => {
    board.length = 0;
    board.push([' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']);
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

test('The game should continue if there is no win or draw', () => {
    board[0] = ['X', 'O', 'X'];
    board[1] = ['O', ' ', 'O'];
    board[2] = ['X', ' ', 'X'];
    expect(isDraw()).toBe(false);
    expect(isWin('X')).toBe(false);
    expect(isWin('O')).toBe(false);
});

test('makeMove should place the correct symbol in the correct cell', () => {
    makeMove(0, 0);
    expect(board[0][0]).toBe('X');
    switchPlayer();
    makeMove(1, 1);
    expect(board[1][1]).toBe('O');
});
