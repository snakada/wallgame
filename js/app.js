/**
 * HTMLからアプリDOMを取得しておきます。
 */
const $app = getById('app');

/**
 * アプリDOMにフィールドDOMを組み込みます。
 */
$app.appendChild($field);

/**
 * アプリDOMにスコアDOMを組み込みます。
 */
$app.appendChild($score);

