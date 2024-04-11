"use strict";

// META: global=window,worker

promise_test(function (t) {
  return fetch("{{location[scheme]}}://{{host}}.:{{location[port]}}" + "/content-security-policy/support/resource.py");
}, "Fetch from host with trailing dot should be allowed by CSP.");
