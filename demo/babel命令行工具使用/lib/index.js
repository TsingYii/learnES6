"use strict";

var plus = function plus(a, b) {
  return a + b;
};

function caculate() {
  console.log(document.getElementById('a').value);
  console.log(document.getElementById('b').value);
  var a = parseInt(document.getElementById('a').value);
  var b = parseInt(document.getElementById('b').value);
  document.getElementById('res').innerText = plus(a, b);
}