"use strict";

importScripts("{{location[scheme]}}://{{host}}:{{location[port]}}/resources/testharness.js");
importScripts("{{location[scheme]}}://{{host}}:{{location[port]}}/content-security-policy/support/testharness-helper.js");
var cspEventFiredInDocument = false;
// ServiceWorker and Worker
self.addEventListener("message", function (e) {
  if (e.data == "SecurityPolicyViolation from Document") cspEventFiredInDocument = true;
});
// SharedWorker
self.addEventListener("connect", function (c) {
  c.ports[0].addEventListener("message", function (m) {
    if (m.data == "SecurityPolicyViolation from Document") cspEventFiredInDocument = true;
  });
});
async_test(function (t) {
  var url = "{{location[scheme]}}://{{host}}:{{location[port]}}/content-security-policy/support/resource.py";
  assert_no_csp_event_for_url(t, url);
  fetch(url).catch(t.unreached_func("Fetch should succeed.")).then(t.step_func_done(function (r) {
    assert_equals(r.status, 200);
    assert_false(cspEventFiredInDocument);
  }));
}, "No SecurityPolicyViolation event fired for successful load.");
async_test(function (t) {
  var url = "{{location[scheme]}}://{{domains[www2]}}:{{location[port]}}/content-security-policy/support/resource.py";
  waitUntilCSPEventForURL(t, url).then(t.step_func_done(function (e) {
    assert_equals(e.blockedURI, url);
    assert_false(cspEventFiredInDocument);
  }));
  fetch(url).then(t.unreached_func("Fetch should not succeed.")).catch(t.step_func(function (e) {
    return assert_true(e instanceof TypeError);
  }));
}, "SecurityPolicyViolation event fired on global.");
async_test(function (t) {
  var url = "{{location[scheme]}}://{{host}}:{{location[port]}}/common/redirect.py?location={{location[scheme]}}://{{domains[www]}}:{{location[port]}}/content-security-policy/support/ping.js";
  waitUntilCSPEventForURL(t, url).then(t.step_func_done(function (e) {
    assert_equals(e.blockedURI, url);
    assert_false(cspEventFiredInDocument);
  }));
  fetch(url).then(t.unreached_func("Fetch should not succeed.")).catch(t.step_func(function (e) {
    return assert_true(e instanceof TypeError);
  }));
}, "SecurityPolicyViolation event fired on global with the correct blockedURI.");

// Worker tests need an explicit `done()`.
done();
