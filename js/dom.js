/**
 * IDを指定してDOMを見つけて返します。
 */
const getDomById = id => document.getElementById(id)

/**
 * ID付DIVを生成して返します。
 */
const createDivWithId = id => {
  const $div = document.createElement('div');
  $div.id = id;
  return $div;
};

/**
 * className付DIVを生成して返します。
 */
const createDivWithClassName = className => {
  const $div = document.createElement('div');
  $div.classList.add(className);
  return $div;
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
 * 対象となるDOMの算出スタイルのうち、
 * 指定したCSSプロパティのみを返します。
 */
const getDomStyle = ($dom, property) =>
  window.getComputedStyle($dom, null)[property];

/**
 * DOMにCSSスタイルをセットします。
 */
const setDomStyle = ($dom, property, value) => $dom.style[property] = value;

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
 * DOMに属性を追加します。
 */
const setDomAttr = ($dom, key, value) => $dom.setAttribute(key, value);

/**
 * DOMに指定した属性があるか調べます。
 */
const getDomAttr = ($dom, key) => $dom.getAttribute(key);

/**
 * DOMを削除します。
 */
const removeDom = $dom => $dom.parentNode.removeChild($dom);

/**
 * DOMにテキストをセットします。
 */
const setDomText = ($dom, text) => $dom.textContent = text;

/**
 * DOMにHTMLをセットします。
 */
const setDomHtml = ($dom, text) => $dom.innerHTML = text;

/**
 * DOMのテキストを取得します。
 */
const getDomText = $dom => $dom.textContent;

