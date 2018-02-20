/**
 * IDを指定してDOMを見つけて返します。
 */
const getById = id => document.getElementById(id)

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
const find = selector => document.querySelector(selector);

/**
 * DOMを見つけてすべて返します。
 */
const findAll = selector =>
  document.querySelectorAll(selector);

/**
 * 対象となるDOMの算出スタイルのうち、
 * 指定したCSSプロパティのみを返します。
 */
const getStyle = ($dom, property) =>
  window.getComputedStyle($dom, null)[property];

/**
 * 対象となるDOMの算出スタイルのうち、
 * 指定したCSSプロパティのみを配列にして返します。
 */
const getStyles = ($dom, properties) => {
  const styles = window.getComputedStyle($dom, null);
  return properties.map(property => styles[property]);
};

/**
 * 指定したDOMの位置情報をオブジェクトで返します。
 */
const getPositions = $dom => {
  const [top, bottom, left, right, height] =
    getStyles($dom, ['top', 'bottom', 'left', 'right', 'height']);
  return {
    top: parseInt(top),
    bottom: parseInt(bottom),
    left: parseInt(left),
    right: parseInt(right),
    height: parseInt(height),
  };
};

/**
 * DOMに属性を追加します。
 */
const setAttr = ($dom, key, value) => $dom.setAttribute(key, value);

/**
 * DOMに指定した属性があるか調べます。
 */
const getAttr = ($dom, key) => $dom.getAttribute(key);

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

/**
 * DOMにCSSスタイルをセットします。
 */
const setStyle = ($dom, property, value) => $dom.style[property] = value;

