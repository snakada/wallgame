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

/**
 * デフォルトのスピードを設定しておきます。
 */
const defaultSpeed = 500;

/**
 * タイマーを始動させる関数を返します。
 * @return {function(speed)} タイマーを始動させる関数、返される関数は speed(ms) 後に
 *                           スコア加算と壁の生成・移動・削除をおこないます。
 *                           最後に自身を再帰呼び出しします。
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

    const currentScore = getCurrentScore();
    const division = Math.floor(currentScore / 10);
    const newSpeed = defaultSpeed - division;
    step(newSpeed);
  }, speed);
};

/**
 * 最初のタイマーを始動させます。
 */
step(defaultSpeed);
