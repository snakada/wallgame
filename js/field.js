/**
 * HTMLからアプリDOMを取得しておきます。
 */
const $field = createDivWithId('field');

/**
 * アプリDOMにスネークDOMを組み込んでおきます。
 */
$field.appendChild($snake);

/**
 * アプリDOMに壁DOMを組み込んでみます。
 */
$field.appendChild(createWall(280));
$field.appendChild(createWall(140));
$field.appendChild(createWall(0));

