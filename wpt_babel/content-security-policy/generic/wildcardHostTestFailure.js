"use strict";

wildcardHostTestRan = false;
onload = function onload() {
  test(function () {
    assert_false(wildcardHostTestRan, 'Script should not have ran.');
  }, "Wildcard host matching works.");
};
