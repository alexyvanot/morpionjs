const readline = require('readline');
const { board, currentPlayer, printBoard, makeMove, isWin, isDraw, switchPlayer, getCurrentPlayer } = require('./morpion');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getMove = () => {
    printBoard();
    rl.question(`Joueur ${getCurrentPlayer()}, entrez votre mouvement (ligne espace colonne): `, (input) => {
        const [row, col] = input.split(' ').map(num => parseInt(num.trim()));
        if (makeMove(row, col)) {
            if (isWin(currentPlayer)) {
                printBoard();
                console.log(`Le joueur ${getCurrentPlayer()} a gagné !`);
                rl.close();
            } else if (isDraw()) {
                printBoard();
                console.log('Match nul !');
                rl.close();
            } else {
                switchPlayer();
                getMove();
            }
        } else {
            console.log('Mouvement invalide. Essayez encore.');
            getMove();
        }
    });
};

getMove();
