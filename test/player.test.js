const { switchPlayer, getCurrentPlayer } = require('../src/morpion.js');

test('The initial player should be X', () => {
    expect(getCurrentPlayer()).toBe('X');
});

test('switchPlayer should alternate between X and O', () => {
    switchPlayer();
    expect(getCurrentPlayer()).toBe('O');
    switchPlayer();
    expect(getCurrentPlayer()).toBe('X');
});
