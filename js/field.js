/**
 * フィールドDOMを生成して
 * プレイヤーDOMと壁(枠)DOMを組み込みます。
 */
const $field = createDivWithId('field');
appendDomChildren($field, [$player, $wall]);
