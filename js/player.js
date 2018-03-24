/**
 * プレイヤーDOMを生成します。
 */
const $player = createDivWithId('player');
setDomStyle($player, 'top', '100px');
setDomStyle($player, 'left', '40px');

/**
 * 現在のプレイヤーの位置を取得します。
 */
const getPlayerPositions = () => getDomPositions($player)

/**
 * プレイヤーDOMを動かします。
 */
const movePlayer = (moveTop, moveLeft) => {
  const {top, bottom, left, right} = getPlayerPositions();
  const newTop = top + moveTop;
  const newBottom = bottom - moveTop;
  const newLeft = left + moveLeft;
  const newRight = right - moveLeft;

  setDomStyle($player, 'top', `${newTop}px`);
  setDomStyle($player, 'left', `${newLeft}px`);
};

const movePlayerUp = () => movePlayer(-20, 0);
const movePlayerDown = () => movePlayer(20, 0);
const movePlayerLeft = () => movePlayer(0, -20);
const movePlayerRight = () => movePlayer(0, 20);

