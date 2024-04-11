"use strict";

var fn = function fn() {
  postMessage('Function() function blocked');
};
try {
  fn = new Function("", "postMessage('Function() function allowed');");
} catch (e) {}
fn();
