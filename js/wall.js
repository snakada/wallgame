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
const getWallHeightRandomly = () => wallHeights[getRandomIndex()];

/**
 * 壁DOMを生成して返します。
 */
const createWall = right => {
  // 壁の高さをランダムに取得しておきます。
  const currentHeight = getWallHeightRandomly();

  // 壁(枠)DOMを生成します。
  const $wall = createDivWithClassName('wall');
  $wall.style.right = `${right}px`;

  // 壁(上)DOMを生成します。
  const $wallTop = createDivWithClassName('wallTop');
  $wallTop.style.height = `${currentHeight[0]}px`;

  // 壁(下)DOMを生成します。
  const $wallBottom = createDivWithClassName('wallBottom');
  $wallBottom.style.height = `${currentHeight[1]}px`;

  // 壁(枠)DOMに壁(上)DOMと壁(下)DOMを組み込みます。
  $wall.appendChild($wallTop);
  $wall.appendChild($wallBottom);

  return $wall;
};

/**
 * すべての壁の位置情報を返します。 
 */
const getPositionsAllWalls = () => {
  const $wallParts = findAll('.wallTop, .wallBottom');
  return [...$wallParts].map($wallPart => {
    const parentPosition = getPositions($wallPart.parentNode);
    const returnPosition = getPositions($wallPart);
    returnPosition.left = parentPosition.left;
    returnPosition.right = parentPosition.right;
    return returnPosition;
  });
};

/**
 * 壁DOMを動かします。
 */
const moveWall = $wall => {
  const right = parseInt(getStyle($wall, 'right'));
  $wall.style.right = `${right + 20}px`;
};

/**
 * エリアからはみ出た壁DOMを削除します。
 */
const removeWallIfProtruded = $wall => {
  const left = parseInt(getStyle($wall, 'left'));
  if(left < 0) {
    removeDom($wall);
  }
};

