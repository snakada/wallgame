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
 * プレイヤーDOMが壁DOMに重なるか調べます。
 */
const playerOverlapsWall = (top, left, wallPosition) => {
  const wallLeft = wallPosition.left;
  const top2 = top + 20;
  const wallTop = wallPosition.top;
  const wallTop2 = wallTop + wallPosition.height;
  if(
    left === wallLeft
    && (
         (top > wallTop && top < wallTop2)
      || (top2 > wallTop && top2 < wallTop2)
      || (top === wallTop && top2 === wallTop2)
    )
  ) {
    return true;
  }
  return false;
};

/**
 * プレイヤーDOMを動かしていい場所か調べます。
 */
const allowMovePlayer = (top, bottom, left, right) => {
  if(top < 0 || bottom < 0 || left < 0 || right < 0) {
    return false;
  }
  return getDomPositionsAllWalls().every(wallPosition => {
    return !playerOverlapsWall(top, left, wallPosition);
  });
};

/**
 * プレイヤーDOMを動かします。
 */
const movePlayer = (moveTop, moveLeft) => {
  const {top, bottom, left, right} = getPlayerPositions();
  const newTop = top + moveTop;
  const newBottom = bottom - moveTop;
  const newLeft = left + moveLeft;
  const newRight = right - moveLeft;

  if(allowMovePlayer(newTop, newBottom, newLeft, newRight)) {
    setDomStyle($player, 'top', `${newTop}px`);
    setDomStyle($player, 'left', `${newLeft}px`);
  }
};

const movePlayerUp = () => movePlayer(-20, 0);
const movePlayerDown = () => movePlayer(20, 0);
const movePlayerLeft = () => movePlayer(0, -20);
const movePlayerRight = () => movePlayer(0, 20);

