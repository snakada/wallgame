/**
 * フィールドDOMを生成します。
 */
const $field = createDivWithId('field');

/**
 * フィールドDOMにプレイヤーDOMを組み込んでおきます。
 */
$field.appendChild($player);

/**
 * フィールドDOMに壁DOMを組み込んでみます。
 */
$field.appendChild(createWall(280));
$field.appendChild(createWall(140));
$field.appendChild(createWall(0));

