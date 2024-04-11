"use strict";

wildcardPortTestRan = false;
onload = function onload() {
  test(function () {
    assert_true(wildcardPortTestRan, 'Script should have ran.');
  }, "Wildcard port matching works.");
};
