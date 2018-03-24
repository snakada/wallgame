/**
 * キーダウンでプレイヤーを動かします。
 */
document.addEventListener('keydown', event => {

  plusScore(15);

  switch(event.key) {
    case 'ArrowUp':
      movePlayerUp();
      break;
    case 'ArrowDown':
      movePlayerDown();
      break;
    case 'ArrowLeft':
      movePlayerLeft();
      break;
    case 'ArrowRight':
      movePlayerRight();
      break;
  }
});

