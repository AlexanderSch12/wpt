"use strict";

var t1 = async_test("Prevents access to external scripts.");
onload = function onload() {
  t1.done();
};
