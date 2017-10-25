

function addClass(el, className) {
  if(el.classList) {
    // All modern browsers, with the exception of IE9
    el.classList.add(className);
    return true;
  }

  // All browsers
  el.className += className;
}

function removeClass(el, className) {
  if(el.classList) {
    // All modern browsers, with the exception of IE9
    el.classList.remove(className);
    return true;
  }

  // All browsers
  el.className = el.className.replace(/^bold$/, '');
}
