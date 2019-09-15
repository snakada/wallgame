/**
 * ゲームオーバーDOMを生成します。
 */
const $gameover = createDivWithId('gameover');
setDomHtml($gameover, 'GAMEOVER<br><span>RETRY</span>');

/**
 * ゲームーバー画面を隠す関数。
 */
const hideGameOver = () => setDomStyle($gameover, 'display', 'none');

/**
 * 一旦ゲームオーバー画面は隠しておきます。
 */
hideGameOver();
