/**
 * idを持ったDOMを生成して返します。
 * @param {string} id 設定するid
 * @return {object} 生成したDOM
 */
const createDivWithId = id => {
  const $div = document.createElement('div');
  $div.id = id;
  return $div;
};

/**
 * CSSクラス名を持ったDOMを生成して返します。
 * @param {string} className 設定するCSSクラス
 * @return {object} 生成したDOM
 */
const createDivWithClassName = className => {
  const $div = document.createElement('div');
  $div.className = className;
  return $div;
};

/**
 * DOMにCSSスタイルを付与します。
 * @param {object} $dom 処理対象のDOM
 * @param {string} style 設定するCSSスタイル
 */
const setDomStyle = ($dom, property, value) => $dom.style[property] = value;

/**
 * 親DOMに子DOMを組み込みます。
 * @param {object} $parent 親DOM
 * @param {object} $child 子DOM
 */
const appendDomChild = ($parent, $child) => $parent.appendChild($child);

/**
 * 親DOMに子DOMを複数まとめて組み込みます。
 * @param {object} $parent 親DOM
 * @param {object} children 子DOMの配列
 */
const appendDomChildren = ($parent, children) =>
  children.forEach($child => appendDomChild($parent, $child));

/**
 * DOMにテキストをセットします。
 * @param {object} $dom 処理対象のDOM
 * @param {string} text セットするテキスト
 */
const setDomText = ($dom, text) => $dom.textContent = text;

/**
 * DOMにHTMLをセットします。
 * @param {object} $dom 処理対象のDOM
 * @param {string} html セットするHTML
 */
const setDomHtml = ($dom, html) => $dom.innerHTML = html;

/**
 * 対象となるDOMの算出スタイルのうち、
 * 指定したCSSプロパティのみを返します。
 */
const getDomStyle = ($dom, property) =>
  window.getComputedStyle($dom, null)[property];

/**
 * 対象となるDOMの算出スタイルのうち、
 * 指定したCSSプロパティのみを配列にして返します。
 */
const getDomStyles = ($dom, properties) => {
  const styles = window.getComputedStyle($dom, null);
  return properties.map(property => styles[property]);
};

/**
 * ポジション情報に限定してCSSプロパティの配列を返します。
 */
const getDomPositionsArray = $dom =>
  getDomStyles($dom, ['top', 'bottom', 'left', 'right', 'height']);

/**
 * 指定したDOMの位置情報をオブジェクトで返します。
 */
const getDomPositions = $dom => {
  const [top, bottom, left, right, height] =
    getDomPositionsArray($dom).map(property => parseInt(property));
  return {top, bottom, left, right, height};
};

/**
 * DOMを見つけて最初のものを返します。
 */
const findDom = selector => document.querySelector(selector);

/**
 * DOMを見つけてすべて返します。
 */
const findDomAll = selector => document.querySelectorAll(selector);

/**
 * DOMのテキストを取得します。
 */
const getDomText = $dom => $dom.textContent;

/**
 * DOMを削除します。
 */
const removeDom = $dom => $dom.parentNode.removeChild($dom);

/**
 * DOMに属性を追加します。
 */
const setDomAttr = ($dom, key, value) => $dom.setAttribute(key, value);

/**
 * DOMに指定した属性があるか調べます。
 */
const getDomAttr = ($dom, key) => $dom.getAttribute(key);

