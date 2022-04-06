// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var arr = 'em,strong,u,s,sup,sub';
var cloneParent = document.getElementById('test');
cloneParent.querySelectorAll('.uri,.email,.ext-link').forEach((elm) => {
  elm.querySelectorAll(formatTags).forEach((format) => {
    if (
      format.tagName == cloneParent.tagName &&
      formatTags.includes(cloneParent.tagName)
    ) {
      // need remove/unwrap formatting because
      format.outerHTML = format.innerHTML;
    } else {
      let inside = format.innerHTML;
      cloneParent.insertAfter(format, elm);
    }
  });
});
