/**
 * キーダウンでプレイヤーを動かします。
 */
document.addEventListener('keydown', event => {
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

