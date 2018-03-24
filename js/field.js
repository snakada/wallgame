/**
 * フィールドDOMを生成して
 * プレイヤーDOMと壁(枠)DOMを組み込みます。
 */
const $field = createDivWithId('field');
appendDomChild($field, $player);

/**
 * フィールドDOMに壁DOMを組み込んでみます。
 */
appendDomChild($field, createWall(280));
appendDomChild($field, createWall(140));
appendDomChild($field, createWall(0));

