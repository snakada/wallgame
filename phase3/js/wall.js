/**
 * 壁(枠)DOMを生成します。
 */
const $wall = createDivWithClassName('wall');
setDomStyle($wall, 'right', '100px');

/**
 * 壁(上)DOMを生成します。
 */
const $wallTop = createDivWithClassName('wallTop');
setDomStyle($wallTop, 'height', '150px');

/**
 * 壁(下)DOMを生成します。
 */
const $wallBottom = createDivWithClassName('wallBottom');
setDomStyle($wallBottom, 'height', '50px');

/**
 * 壁(枠)DOMに壁(上)と壁(下)DOMを組み込みます。
 */
appendDomChildren($wall, [$wallTop, $wallBottom]);

