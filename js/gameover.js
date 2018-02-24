/**
 * ゲームオーバーDOMを生成します。
 */
const $gameover = createDivWithId('gameover');
setDomHtml($gameover, 'GAMEOVER<br><span>RETRY</span>');

/**
 * ゲームーバー画面を隠します。
 */
const hideGameOver = () => setDomStyle($gameover, 'display', 'none');

/**
 * 一旦ゲームオーバー画面は隠しておきます。
 */
hideGameOver();

