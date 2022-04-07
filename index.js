// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var arr_find = 'em,strong,u,s,sup,sub';
var arr_format = ['em', 'strong', 'u', 's', 'sup', 'sub'];

var stringConstructor = 'test'.constructor;
var arrayConstructor = [].constructor;
var objectConstructor = {}.constructor;

function whatIsIt(object) {
  if (object === null) {
    return 'null';
  }
  if (object === undefined) {
    return 'undefined';
  }
  if (object.constructor === stringConstructor) {
    return 'String';
  }
  if (object.constructor === arrayConstructor) {
    return 'Array';
  }
  if (object.constructor === objectConstructor) {
    return 'Object';
  }
  if (object.constructor.name === 'NamedNodeMap') {
    console.log(object.constructor.name);
    return 'Object';
  }
  {
    return "don't know";
  }
}
function SET_ATTR(el, attr_json) {
  if (attr_json.constructor.name === 'NamedNodeMap') {
    Array.from(attr_json).forEach(function (attr) {
      el.setAttribute(attr.name, attr.value);
    });
  }
  return el;
}
var FORMAT_EQ_TEXT = {
  em: 'italic',
  strong: 'bold',
  u: 'underline',
  s: 'strike',
  sup: 'superscript',
  sub: 'subscript',
};

var arr_find = Object.keys(FORMAT_EQ_TEXT).join(',');
var arr_format = Object.keys(FORMAT_EQ_TEXT);
function DO(id) {
  var cloneParent = document.getElementById(id);
  var Link_ELm = cloneParent.querySelector('.uri,.email,.ext-link');
  var format_ELm = Link_ELm ? Link_ELm.querySelector(arr_find) : null;
  if (Link_ELm && format_ELm) {
    // ? https://stackblitz.com/edit/js-awt7ys?file=index.js
    if (
      format_ELm.tagName == cloneParent.tagName &&
      arr_format.includes(cloneParent.tagName.toLocaleLowerCase())
    ) {
      console.log('same as parent');
      // need remove/unwrap formatting
      format_ELm.outerHTML = format_ELm.innerHTML;
    } else {
      var cloneNode_link = Link_ELm.cloneNode();
      var cloneNode_for = format_ELm.cloneNode();
      cloneNode_link.innerHTML = format_ELm.innerHTML;
      //console.log([cloneNode_link.outerHTML]);
      var index = Array.prototype.indexOf.call(
        format_ELm.parentElement.childNodes,
        format_ELm
      );
      Link_ELm.childNodes.forEach(function (elm, idx, arr) {
        cloneNode_for.appendChild(index == idx ? cloneNode_link : elm);
      });
      Link_ELm.replaceWith(cloneNode_for);
    }
    console.log(cloneParent.outerHTML);
  }
}


DO('test');
DO('test1');