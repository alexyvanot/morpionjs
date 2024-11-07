const { board, printBoard, isValidMove } = require('../src/morpion.js');

test('The board should be initialized correctly', () => {
    const expectedBoard = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
    expect(board).toEqual(expectedBoard);
});

test('isValidMove should return true for an empty cell', () => {
    expect(isValidMove(0, 0)).toBe(true);
});

test('isValidMove should return false for an already occupied cell', () => {
    board[0][0] = 'X';
    expect(isValidMove(0, 0)).toBe(false);
});
