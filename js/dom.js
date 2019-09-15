/**
 * idを持ったDOMを生成して返します。
 * @param  {string} id 設定するid
 * @return {object}    生成したDOM
 */
const createDivWithId = id => {
  const $div = document.createElement('div');
  $div.id = id;
  return $div;
};

/**
 * CSSクラス名を持ったDOMを生成して返します。
 * @param  {string} className 設定するCSSクラス
 * @return {object}           生成したDOM
 */
const createDivWithClassName = className => {
  const $div = document.createElement('div');
  $div.className = className;
  return $div;
};

/**
 * DOMにCSSスタイルを付与します。
 * @param {object} $dom     処理対象のDOM
 * @param {string} property 設定するCSSプロパティ名
 * @param {string} value    設定するCSSプロパティ値
 */
const setDomStyle = ($dom, property, value) => $dom.style[property] = value;

/**
 * 親DOMに子DOMを組み込みます。
 * @param {object} $parent 親DOM
 * @param {object} $child  子DOM
 */
const appendDomChild = ($parent, $child) => $parent.appendChild($child);

/**
 * 親DOMに子DOMを複数まとめて組み込みます。
 * @param {object} $parent  親DOM
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
