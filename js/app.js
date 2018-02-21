/**
 * アプリDOMを生成します。
 */
const $app = createDivWithId('app');

/**
 * bodyにアプリDOMを組み込みます。
 */
document.body.appendChild($app);

/**
 * アプリDOMにフィールドDOMを組み込みます。
 */
$app.appendChild($field);

/**
 * アプリDOMにスコアDOMを組み込みます。
 */
$app.appendChild($score);

