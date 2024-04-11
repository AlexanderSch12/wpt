"use strict";

wildcardHostTestRan = false;
onload = function onload() {
  test(function () {
    assert_true(wildcardHostTestRan, 'Script should have ran.');
  }, "Wildcard host matching works.");
};
