/**
 * スコアDOMを生成します。
 */
const $score = createDivWithId('score');
setDomText($score, '0');

/**
 * 現在のスコアを返します。
 * @return {number} 現在のスコア
 */
const getCurrentScore = () => parseInt(getDomText($score));

/**
 * スコアを増やします。
 * @param {number} plus スコアに加算する分の数値
 */
const plusScore = plus => setDomText($score, getCurrentScore() + plus);
