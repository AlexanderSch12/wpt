"use strict";

// META: global=window,worker
var code = new Uint8Array([0x53, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0]);
async_test(function (t) {
  self.addEventListener('securitypolicyviolation', t.step_func_done(function (e) {
    assert_equals(e.violatedDirective, "script-src");
    assert_equals(e.originalPolicy, "default-src 'self' 'unsafe-inline'");
    assert_equals(e.blockedURI, "wasm-eval");
  }));
}, "Securitypolicyviolation event looks like it should");
promise_test(function (t) {
  return promise_rejects_js(t, WebAssembly.CompileError, WebAssembly.instantiate(code));
});
