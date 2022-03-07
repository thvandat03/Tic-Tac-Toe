const selectBox = document.querySelector('.select-box'),
selectX = selectBox.querySelector('.playerX'),
selectO = selectBox.querySelector('.playerO'),
playerTurn = document.querySelector('.player-turn'),
gameMain = document.querySelector('.game-main');

window.onload = () =>{
  selectX.onclick = () =>{
    selectBox.classList.add('hide');
    gameMain.classList.add('show');
  }
  selectO.onclick = () =>{
    selectBox.classList.add('hide');
   gameMain.classList.add('show');
  }
}
