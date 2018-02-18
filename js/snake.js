/**
 * スネークDOMを生成します。
 */
const $snake = createDivWithId('snake');

/**
 * 現在のスネークの位置を取得します。
 */
const getSnakePositions = () => getPositions($snake)

/**
 * スネークDOMが壁DOMに重なるか調べます。
 */
const snakeOverlapsWall = (top, left, wallPosition) => {
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
 * スネークDOMを動かしていい場所か調べます。
 */
const allowMoveSnake = (top, bottom, left, right) => {
  if(top < 0 || bottom < 0 || left < 0 || right < 0) {
    return false;
  }
  return getPositionsAllWalls().every(wallPosition => {
    return !snakeOverlapsWall(top, left, wallPosition);
  });
};

/**
 * 壁DOMがスネークDOMに衝突したか調べます。
 */
const snakeHitWall = () => {
  const {top, left} = getSnakePositions();
  const newLeft = left + 20;
  return getPositionsAllWalls().some(wallPosition => {
    return snakeOverlapsWall(top, newLeft, wallPosition);
  });
};

/**
 * スネークDOMを動かします。
 */
const moveSnake = (moveTop, moveLeft) => {
  const {top, bottom, left, right} = getSnakePositions();
  const newTop = top + moveTop;
  const newBottom = bottom - moveTop;
  const newLeft = left + moveLeft;
  const newRight = right - moveLeft;
  if(allowMoveSnake(newTop, newBottom, newLeft, newRight)) {
    $snake.style.top = `${newTop}px`;
    $snake.style.left = `${newLeft}px`;
  }
};

const moveSnakeUp = () => moveSnake(-20, 0);
const moveSnakeDown = () => moveSnake(20, 0);
const moveSnakeLeft = () => moveSnake(0, -20);
const moveSnakeRight = () => moveSnake(0, 20);

