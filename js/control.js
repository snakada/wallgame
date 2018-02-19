/**
 * ゲームオーバーDOMを用意しておきます。
 */
const $gameover = createDivWithId('gameover');
setDomHtml($gameover, 'GAMEOVER<br><span>RETRY</span>');

/**
 * ゲームオーバーDOMをクリックするとページリロードします。
 */
$gameover.addEventListener('click', () => {
  location.reload();
});

/**
 * ゲームオーバーにします。
 */
const setGameover = () => {
  setAttr($app, 'data-gamveover', 'true');
  $app.appendChild($gameover);
};

/**
 * ゲームオーバーか調べます。
 */
const isGameover = () => getAttr($app, 'data-gamveover');

/**
 * キーダウンでスネークを動かします。 
 */
document.addEventListener('keydown', event => {
  if(isGameover()) {
    return;
  }

  plusScore(15);

  switch(event.key) {
    case 'ArrowUp':
      moveSnakeUp();
      break;
    case 'ArrowDown':
      moveSnakeDown();
      break;
    case 'ArrowLeft':
      moveSnakeLeft();
      break;
    case 'ArrowRight':
      moveSnakeRight();
      break;
  }

  if(snakeHitWall()) {
    setGameover();
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
    if(isGameover()) {
      return;
    }

    plusScore(10);

    findAll('.wall').forEach($wall => {
      moveWall($wall);
      removeWallIfProtruded($wall)
    });

    if(getPositions(find('.wall:last-child')).right === 140) {
      $field.appendChild(createWall(0));
    }

    if(snakeHitWall()) {
      setGameover();
    }

    const currentScore = getCurrentScore();
    const division = Math.floor(currentScore / 10);
    const newSpeed = defaultSpeed - division;
    step(newSpeed);
  }, speed);
};

step(defaultSpeed);

