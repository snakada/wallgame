/*
 * 壁の高さを配列で定義しておきます。
 */
const wallHeights = [
  [20, 100],
  [40, 200],
  [60, 180],
  [80, 100],
  [100, 40],
  [100, 80],
  [100, 100],
  [160, 40],
  [160, 80],
];

/**
 * 壁の高さ配列からランダムなインデックスを返します。
 */
const getRandomIndex = () => Math.floor(Math.random() * wallHeights.length);

/**
 * 壁の高さを定義されたものからランダムに選んで返します。
 */
const getWallHeightRandomly = () => wallHeights[getRandomIndex()];///**

/**
 * 壁DOMを生成して返します。
 */
const createWall = right => {
  // 壁の高さをランダムに取得しておきます。
  const currentHeight = getWallHeightRandomly();

  // 壁(枠)DOMを生成します。
  const $wall = createDivWithClassName('wall');
  setDomStyle($wall, 'right', `${right}px`);

  // 壁(上)DOMを生成します。
  const $wallTop = createDivWithClassName('wallTop');
  setDomStyle($wallTop, 'height', `${currentHeight[0]}px`);

  // 壁(下)DOMを生成します。
  const $wallBottom = createDivWithClassName('wallBottom');
  setDomStyle($wallBottom, 'height', `${currentHeight[1]}px`);

  // 壁(枠)DOMに壁(上)DOMと壁(下)DOMを組み込みます。
  $wall.appendChild($wallTop);
  $wall.appendChild($wallBottom);

  return $wall;
};

/**
 * すべての壁の位置情報を返します。
 * @return {object[]} pos[] すべての壁の位置情報オブジェクトの配列
 * @return {number}   pos[].top
 * @return {number}   pos[].bottom
 * @return {number}   pos[].left
 * @return {number}   pos[].right
 * @return {number}   pos[].height
 */
const getDomPositionsAllWalls = () => {
  const $wallParts = findDomAll('.wallTop, .wallBottom');
  return [...$wallParts].map($wallPart => {
    const parentPosition = getDomPositions($wallPart.parentNode);
    const returnPosition = getDomPositions($wallPart);
    returnPosition.left  = parentPosition.left;
    returnPosition.right = parentPosition.right;
    return returnPosition;
  });
};
