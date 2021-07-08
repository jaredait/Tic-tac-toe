// players
const Player = () => {

    let name;
    const score = 0;
    let turn;
    let mark;

    // methods
    const getName = () => name;
    const setName = newName => { name = newName };
    const getScore = () => score;
    const addScore = () => { score++ };
    const getTurn = () => turn;
    const setTurn = newTurn => { turn = newTurn };
    const getMark = () => mark;
    const setMark = newMark => { mark = newMark };

    return {
        getName,
        setName,
        getScore,
        addScore,
        getTurn,
        setTurn,
        getMark,
        setMark,
    };
};

// gameboard
const gameboard = (() => {
    let board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];

    const getGameBoard = () => board;

    return {
        getGameBoard,
    };
})();

// display the board on the browser
const displayGameBoard = (() => {
    const boardContainer = document.createElement('div');
    boardContainer.id = 'board-container';
    boardContainer.classList = 'game-board-style';
    for (let i = 0; i < 9; i++){
        let temp = document.createElement('div');
        temp.id = i;
        temp.classList = 'mark-spaces';
        boardContainer.appendChild(temp);
    }
        document.body.appendChild(boardContainer);
})();