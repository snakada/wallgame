/**
 * スコアDOMを生成して返します。
 */
const $score = createDivWithId('score');
setDomText($score, 0);

/**
 * 現在のスコアを取得します。
 */
const getCurrentScore = () =>  parseInt(getDomText($score));

/**
 * スコアを増やします。
 */
const plusScore = plus => setDomText($score, getCurrentScore() + plus);

