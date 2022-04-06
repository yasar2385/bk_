// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var arr_find = 'em,strong,u,s,sup,sub';
var arr_format = ['em', 'strong', 'u', 's', 'sup', 'sub'];
var cloneParent = document.getElementById('test');
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
cloneParent.querySelectorAll('.uri,.email,.ext-link').forEach((link_elm) => {
  link_elm.querySelectorAll(arr_find).forEach((for_elm) => {
    console.log([for_elm.tagName, cloneParent.tagName]);
    console.log(arr_format.includes(cloneParent.tagName));
    if (
      for_elm.tagName == cloneParent.tagName &&
      arr_format.includes(cloneParent.tagName)
    ) {
      console.log('aaaa');
      // need remove/unwrap formatting because
      for_elm.outerHTML = for_elm.innerHTML;
    } else {
      console.log('eee');
      var cloneNode = for_elm.cloneNode(true);
      // let inside = for_elm.innerHTML;
      // console.log(for_elm.outerHTML);
      //SET_ATTR(for_elm, link_elm.attributes);
    }
  });
});

console.log(cloneParent.outerHTML);
