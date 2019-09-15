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
 * @return {number} 壁の高さ配列(wallHeights)の任意の要素のインデックス
 */
const getRandomIndex = () => Math.floor(Math.random() * wallHeights.length);

/**
 * 壁の高さを定義されたものからランダムに選んで返します。
 * @return {number[]} 壁の高さ配列(wallHeights)のうち任意の要素
 */
const getWallHeightRandomly = () => wallHeights[getRandomIndex()];

/**
 * 壁(枠)DOMを生成して返します。予め用意された壁の高さ配列(wallHeights)から
 * ランダムに要素を決定し、壁(上)および壁(下)のDOMも含めておきます。
 * なおこの関数では壁(枠)DOMをドキュメントに配置するわけではないことに注意してください。
 * @param  {number} right 壁DOMに設定するCSSプロパティのrightの値
 * @return {object}       生成した壁DOM(枠)
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

/**
 * 壁(枠)DOMを現在いる位置から right + 20px 分（すなわち1列分左側へ）移動させます。
 * @param {object} $wall 壁(枠)DOM
 */
const moveWall = $wall => {
  const right = parseInt(getDomStyle($wall, 'right'));
  setDomStyle($wall, 'right', `${right + 20}px`);
};

/**
 * 指定した壁(枠)DOMがエリアからはみ出ていれば削除します。
 * @param {object} $wall 壁(枠)DOM
 */
const removeWallIfProtruded = $wall => {
  const left = parseInt(getDomStyle($wall, 'left'));
  if(left < 0) {
    removeDom($wall);
  }
};
