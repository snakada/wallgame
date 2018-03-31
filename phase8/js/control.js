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

  if(playerHitWall()) {
    setGameOver();
  }
});

/**
 * デフォルトのスピードを設定しておきます。
 */
const defaultSpeed = 500;

/**
 * タイマーを始動させます。
 */
const step = speed => {
  const timer = setTimeout(() => {
    plusScore(10);

    findDomAll('.wall').forEach($wall => {
      moveWall($wall);
      removeWallIfProtruded($wall)
    });

    if(getDomPositions(findDom('.wall:last-child')).right === 140) {
      $field.appendChild(createWall(0));
    }

    if(playerHitWall()) {
      setGameOver();
    }

    const currentScore = getCurrentScore();
    const division = Math.floor(currentScore / 10);
    const newSpeed = defaultSpeed - division;
    step(newSpeed);
  }, speed);
};

step(defaultSpeed);

/**
 * ゲームオーバーにします。
 */
const setGameOver = () => {
  setDomAttr($app, 'data-gamveover', 'true');
  showGameOver();
};

