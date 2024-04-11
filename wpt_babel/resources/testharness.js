(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.async-iterator.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-string-tag.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.json.to-string-tag.js");
require("core-js/modules/es.math.to-string-tag.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.last-index-of.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.array.splice.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.string.repeat.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.string.split.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/esnext.map.delete-all.js");
require("core-js/modules/esnext.map.every.js");
require("core-js/modules/esnext.map.filter.js");
require("core-js/modules/esnext.map.find.js");
require("core-js/modules/esnext.map.find-key.js");
require("core-js/modules/esnext.map.includes.js");
require("core-js/modules/esnext.map.key-of.js");
require("core-js/modules/esnext.map.map-keys.js");
require("core-js/modules/esnext.map.map-values.js");
require("core-js/modules/esnext.map.merge.js");
require("core-js/modules/esnext.map.reduce.js");
require("core-js/modules/esnext.map.some.js");
require("core-js/modules/esnext.map.update.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*global self*/
/*jshint latedef: nofunc*/

/* Documentation: https://web-platform-tests.org/writing-tests/testharness-api.html
 * (../docs/_writing-tests/testharness-api.md) */

(function (global_scope) {
  // default timeout is 10 seconds, test can override if needed
  var settings = {
    output: true,
    harness_timeout: {
      "normal": 10000,
      "long": 60000
    },
    test_timeout: null,
    message_events: ["start", "test_state", "result", "completion"],
    debug: false
  };
  var xhtml_ns = "http://www.w3.org/1999/xhtml";

  /*
   * TestEnvironment is an abstraction for the environment in which the test
   * harness is used. Each implementation of a test environment has to provide
   * the following interface:
   *
   * interface TestEnvironment {
   *   // Invoked after the global 'tests' object has been created and it's
   *   // safe to call add_*_callback() to register event handlers.
   *   void on_tests_ready();
   *
   *   // Invoked after setup() has been called to notify the test environment
   *   // of changes to the test harness properties.
   *   void on_new_harness_properties(object properties);
   *
   *   // Should return a new unique default test name.
   *   DOMString next_default_test_name();
   *
   *   // Should return the test harness timeout duration in milliseconds.
   *   float test_timeout();
   * };
   */

  /*
   * A test environment with a DOM. The global object is 'window'. By default
   * test results are displayed in a table. Any parent windows receive
   * callbacks or messages via postMessage() when test events occur. See
   * apisample11.html and apisample12.html.
   */
  function WindowTestEnvironment() {
    this.name_counter = 0;
    this.window_cache = null;
    this.output_handler = null;
    this.all_loaded = false;
    var this_obj = this;
    this.message_events = [];
    this.dispatched_messages = [];
    this.message_functions = {
      start: [add_start_callback, remove_start_callback, function (properties) {
        this_obj._dispatch("start_callback", [properties], {
          type: "start",
          properties: properties
        });
      }],
      test_state: [add_test_state_callback, remove_test_state_callback, function (test) {
        this_obj._dispatch("test_state_callback", [test], {
          type: "test_state",
          test: test.structured_clone()
        });
      }],
      result: [add_result_callback, remove_result_callback, function (test) {
        this_obj.output_handler.show_status();
        this_obj._dispatch("result_callback", [test], {
          type: "result",
          test: test.structured_clone()
        });
      }],
      completion: [add_completion_callback, remove_completion_callback, function (tests, harness_status, asserts) {
        var cloned_tests = map(tests, function (test) {
          return test.structured_clone();
        });
        this_obj._dispatch("completion_callback", [tests, harness_status], {
          type: "complete",
          tests: cloned_tests,
          status: harness_status.structured_clone(),
          asserts: asserts.map(function (assert) {
            return assert.structured_clone();
          })
        });
      }]
    };
    on_event(window, 'load', function () {
      setTimeout(function () {
        this_obj.all_loaded = true;
        if (tests.all_done()) {
          tests.complete();
        }
      }, 0);
    });
    on_event(window, 'message', function (event) {
      if (event.data && event.data.type === "getmessages" && event.source) {
        // A window can post "getmessages" to receive a duplicate of every
        // message posted by this environment so far. This allows subscribers
        // from fetch_tests_from_window to 'catch up' to the current state of
        // this environment.
        for (var i = 0; i < this_obj.dispatched_messages.length; ++i) {
          event.source.postMessage(this_obj.dispatched_messages[i], "*");
        }
      }
    });
  }
  WindowTestEnvironment.prototype._dispatch = function (selector, callback_args, message_arg) {
    this.dispatched_messages.push(message_arg);
    this._forEach_windows(function (w, same_origin) {
      if (same_origin) {
        try {
          var has_selector = (selector in w);
        } catch (e) {
          // If document.domain was set at some point same_origin can be
          // wrong and the above will fail.
          has_selector = false;
        }
        if (has_selector) {
          try {
            w[selector].apply(undefined, callback_args);
          } catch (e) {}
        }
      }
      if (w !== self) {
        w.postMessage(message_arg, "*");
      }
    });
  };
  WindowTestEnvironment.prototype._forEach_windows = function (callback) {
    // Iterate over the windows [self ... top, opener]. The callback is passed
    // two objects, the first one is the window object itself, the second one
    // is a boolean indicating whether or not it's on the same origin as the
    // current window.
    var cache = this.window_cache;
    if (!cache) {
      cache = [[self, true]];
      var w = self;
      var i = 0;
      var so;
      while (w != w.parent) {
        w = w.parent;
        so = is_same_origin(w);
        cache.push([w, so]);
        i++;
      }
      w = window.opener;
      if (w) {
        cache.push([w, is_same_origin(w)]);
      }
      this.window_cache = cache;
    }
    forEach(cache, function (a) {
      callback.apply(null, a);
    });
  };
  WindowTestEnvironment.prototype.on_tests_ready = function () {
    var output = new Output();
    this.output_handler = output;
    var this_obj = this;
    add_start_callback(function (properties) {
      this_obj.output_handler.init(properties);
    });
    add_test_state_callback(function (test) {
      this_obj.output_handler.show_status();
    });
    add_result_callback(function (test) {
      this_obj.output_handler.show_status();
    });
    add_completion_callback(function (tests, harness_status, asserts_run) {
      this_obj.output_handler.show_results(tests, harness_status, asserts_run);
    });
    this.setup_messages(settings.message_events);
  };
  WindowTestEnvironment.prototype.setup_messages = function (new_events) {
    var this_obj = this;
    forEach(settings.message_events, function (x) {
      var current_dispatch = this_obj.message_events.indexOf(x) !== -1;
      var new_dispatch = new_events.indexOf(x) !== -1;
      if (!current_dispatch && new_dispatch) {
        this_obj.message_functions[x][0](this_obj.message_functions[x][2]);
      } else if (current_dispatch && !new_dispatch) {
        this_obj.message_functions[x][1](this_obj.message_functions[x][2]);
      }
    });
    this.message_events = new_events;
  };
  WindowTestEnvironment.prototype.next_default_test_name = function () {
    var suffix = this.name_counter > 0 ? " " + this.name_counter : "";
    this.name_counter++;
    return get_title() + suffix;
  };
  WindowTestEnvironment.prototype.on_new_harness_properties = function (properties) {
    this.output_handler.setup(properties);
    if (properties.hasOwnProperty("message_events")) {
      this.setup_messages(properties.message_events);
    }
  };
  WindowTestEnvironment.prototype.add_on_loaded_callback = function (callback) {
    on_event(window, 'load', callback);
  };
  WindowTestEnvironment.prototype.test_timeout = function () {
    var metas = document.getElementsByTagName("meta");
    for (var i = 0; i < metas.length; i++) {
      if (metas[i].name == "timeout") {
        if (metas[i].content == "long") {
          return settings.harness_timeout.long;
        }
        break;
      }
    }
    return settings.harness_timeout.normal;
  };

  /*
   * Base TestEnvironment implementation for a generic web worker.
   *
   * Workers accumulate test results. One or more clients can connect and
   * retrieve results from a worker at any time.
   *
   * WorkerTestEnvironment supports communicating with a client via a
   * MessagePort.  The mechanism for determining the appropriate MessagePort
   * for communicating with a client depends on the type of worker and is
   * implemented by the various specializations of WorkerTestEnvironment
   * below.
   *
   * A client document using testharness can use fetch_tests_from_worker() to
   * retrieve results from a worker. See apisample16.html.
   */
  function WorkerTestEnvironment() {
    this.name_counter = 0;
    this.all_loaded = true;
    this.message_list = [];
    this.message_ports = [];
  }
  WorkerTestEnvironment.prototype._dispatch = function (message) {
    this.message_list.push(message);
    for (var i = 0; i < this.message_ports.length; ++i) {
      this.message_ports[i].postMessage(message);
    }
  };

  // The only requirement is that port has a postMessage() method. It doesn't
  // have to be an instance of a MessagePort, and often isn't.
  WorkerTestEnvironment.prototype._add_message_port = function (port) {
    this.message_ports.push(port);
    for (var i = 0; i < this.message_list.length; ++i) {
      port.postMessage(this.message_list[i]);
    }
  };
  WorkerTestEnvironment.prototype.next_default_test_name = function () {
    var suffix = this.name_counter > 0 ? " " + this.name_counter : "";
    this.name_counter++;
    return get_title() + suffix;
  };
  WorkerTestEnvironment.prototype.on_new_harness_properties = function () {};
  WorkerTestEnvironment.prototype.on_tests_ready = function () {
    var this_obj = this;
    add_start_callback(function (properties) {
      this_obj._dispatch({
        type: "start",
        properties: properties
      });
    });
    add_test_state_callback(function (test) {
      this_obj._dispatch({
        type: "test_state",
        test: test.structured_clone()
      });
    });
    add_result_callback(function (test) {
      this_obj._dispatch({
        type: "result",
        test: test.structured_clone()
      });
    });
    add_completion_callback(function (tests, harness_status, asserts) {
      this_obj._dispatch({
        type: "complete",
        tests: map(tests, function (test) {
          return test.structured_clone();
        }),
        status: harness_status.structured_clone(),
        asserts: asserts.map(function (assert) {
          return assert.structured_clone();
        })
      });
    });
  };
  WorkerTestEnvironment.prototype.add_on_loaded_callback = function () {};
  WorkerTestEnvironment.prototype.test_timeout = function () {
    // Tests running in a worker don't have a default timeout. I.e. all
    // worker tests behave as if settings.explicit_timeout is true.
    return null;
  };

  /*
   * Dedicated web workers.
   * https://html.spec.whatwg.org/multipage/workers.html#dedicatedworkerglobalscope
   *
   * This class is used as the test_environment when testharness is running
   * inside a dedicated worker.
   */
  function DedicatedWorkerTestEnvironment() {
    WorkerTestEnvironment.call(this);
    // self is an instance of DedicatedWorkerGlobalScope which exposes
    // a postMessage() method for communicating via the message channel
    // established when the worker is created.
    this._add_message_port(self);
  }
  DedicatedWorkerTestEnvironment.prototype = Object.create(WorkerTestEnvironment.prototype);
  DedicatedWorkerTestEnvironment.prototype.on_tests_ready = function () {
    WorkerTestEnvironment.prototype.on_tests_ready.call(this);
    // In the absence of an onload notification, we a require dedicated
    // workers to explicitly signal when the tests are done.
    tests.wait_for_finish = true;
  };

  /*
   * Shared web workers.
   * https://html.spec.whatwg.org/multipage/workers.html#sharedworkerglobalscope
   *
   * This class is used as the test_environment when testharness is running
   * inside a shared web worker.
   */
  function SharedWorkerTestEnvironment() {
    WorkerTestEnvironment.call(this);
    var this_obj = this;
    // Shared workers receive message ports via the 'onconnect' event for
    // each connection.
    self.addEventListener("connect", function (message_event) {
      this_obj._add_message_port(message_event.source);
    }, false);
  }
  SharedWorkerTestEnvironment.prototype = Object.create(WorkerTestEnvironment.prototype);
  SharedWorkerTestEnvironment.prototype.on_tests_ready = function () {
    WorkerTestEnvironment.prototype.on_tests_ready.call(this);
    // In the absence of an onload notification, we a require shared
    // workers to explicitly signal when the tests are done.
    tests.wait_for_finish = true;
  };

  /*
   * Service workers.
   * http://www.w3.org/TR/service-workers/
   *
   * This class is used as the test_environment when testharness is running
   * inside a service worker.
   */
  function ServiceWorkerTestEnvironment() {
    WorkerTestEnvironment.call(this);
    this.all_loaded = false;
    this.on_loaded_callback = null;
    var this_obj = this;
    self.addEventListener("message", function (event) {
      if (event.data && event.data.type && event.data.type === "connect") {
        this_obj._add_message_port(event.source);
      }
    }, false);

    // The oninstall event is received after the service worker script and
    // all imported scripts have been fetched and executed. It's the
    // equivalent of an onload event for a document. All tests should have
    // been added by the time this event is received, thus it's not
    // necessary to wait until the onactivate event. However, tests for
    // installed service workers need another event which is equivalent to
    // the onload event because oninstall is fired only on installation. The
    // onmessage event is used for that purpose since tests using
    // testharness.js should ask the result to its service worker by
    // PostMessage. If the onmessage event is triggered on the service
    // worker's context, that means the worker's script has been evaluated.
    on_event(self, "install", on_all_loaded);
    on_event(self, "message", on_all_loaded);
    function on_all_loaded() {
      if (this_obj.all_loaded) return;
      this_obj.all_loaded = true;
      if (this_obj.on_loaded_callback) {
        this_obj.on_loaded_callback();
      }
    }
  }
  ServiceWorkerTestEnvironment.prototype = Object.create(WorkerTestEnvironment.prototype);
  ServiceWorkerTestEnvironment.prototype.add_on_loaded_callback = function (callback) {
    if (this.all_loaded) {
      callback();
    } else {
      this.on_loaded_callback = callback;
    }
  };

  /*
   * Shadow realms.
   * https://github.com/tc39/proposal-shadowrealm
   *
   * This class is used as the test_environment when testharness is running
   * inside a shadow realm.
   */
  function ShadowRealmTestEnvironment() {
    WorkerTestEnvironment.call(this);
    this.all_loaded = false;
    this.on_loaded_callback = null;
  }
  ShadowRealmTestEnvironment.prototype = Object.create(WorkerTestEnvironment.prototype);

  /**
   * Signal to the test environment that the tests are ready and the on-loaded
   * callback should be run.
   *
   * Shadow realms are not *really* a DOM context: they have no `onload` or similar
   * event for us to use to set up the test environment; so, instead, this method
   * is manually triggered from the incubating realm
   *
   * @param {Function} message_destination - a function that receives JSON-serializable
   * data to send to the incubating realm, in the same format as used by RemoteContext
   */
  ShadowRealmTestEnvironment.prototype.begin = function (message_destination) {
    if (this.all_loaded) {
      throw new Error("Tried to start a shadow realm test environment after it has already started");
    }
    var fakeMessagePort = {};
    fakeMessagePort.postMessage = message_destination;
    this._add_message_port(fakeMessagePort);
    this.all_loaded = true;
    if (this.on_loaded_callback) {
      this.on_loaded_callback();
    }
  };
  ShadowRealmTestEnvironment.prototype.add_on_loaded_callback = function (callback) {
    if (this.all_loaded) {
      callback();
    } else {
      this.on_loaded_callback = callback;
    }
  };

  /*
   * JavaScript shells.
   *
   * This class is used as the test_environment when testharness is running
   * inside a JavaScript shell.
   */
  function ShellTestEnvironment() {
    this.name_counter = 0;
    this.all_loaded = false;
    this.on_loaded_callback = null;
    Promise.resolve().then(function () {
      this.all_loaded = true;
      if (this.on_loaded_callback) {
        this.on_loaded_callback();
      }
    }.bind(this));
    this.message_list = [];
    this.message_ports = [];
  }
  ShellTestEnvironment.prototype.next_default_test_name = function () {
    var suffix = this.name_counter > 0 ? " " + this.name_counter : "";
    this.name_counter++;
    return get_title() + suffix;
  };
  ShellTestEnvironment.prototype.on_new_harness_properties = function () {};
  ShellTestEnvironment.prototype.on_tests_ready = function () {};
  ShellTestEnvironment.prototype.add_on_loaded_callback = function (callback) {
    if (this.all_loaded) {
      callback();
    } else {
      this.on_loaded_callback = callback;
    }
  };
  ShellTestEnvironment.prototype.test_timeout = function () {
    // Tests running in a shell don't have a default timeout, so behave as
    // if settings.explicit_timeout is true.
    return null;
  };
  function create_test_environment() {
    if ('document' in global_scope) {
      return new WindowTestEnvironment();
    }
    if ('DedicatedWorkerGlobalScope' in global_scope && global_scope instanceof DedicatedWorkerGlobalScope) {
      return new DedicatedWorkerTestEnvironment();
    }
    if ('SharedWorkerGlobalScope' in global_scope && global_scope instanceof SharedWorkerGlobalScope) {
      return new SharedWorkerTestEnvironment();
    }
    if ('ServiceWorkerGlobalScope' in global_scope && global_scope instanceof ServiceWorkerGlobalScope) {
      return new ServiceWorkerTestEnvironment();
    }
    if ('WorkerGlobalScope' in global_scope && global_scope instanceof WorkerGlobalScope) {
      return new DedicatedWorkerTestEnvironment();
    }
    /* Shadow realm global objects are _ordinary_ objects (i.e. their prototype is
     * Object) so we don't have a nice `instanceof` test to use; instead, we
     * check if the there is a GLOBAL.isShadowRealm() property
     * on the global object. that was set by the test harness when it
     * created the ShadowRealm.
     */
    if (global_scope.GLOBAL && global_scope.GLOBAL.isShadowRealm()) {
      return new ShadowRealmTestEnvironment();
    }
    return new ShellTestEnvironment();
  }
  var test_environment = create_test_environment();
  function is_shared_worker(worker) {
    return 'SharedWorker' in global_scope && worker instanceof SharedWorker;
  }
  function is_service_worker(worker) {
    // The worker object may be from another execution context,
    // so do not use instanceof here.
    return 'ServiceWorker' in global_scope && Object.prototype.toString.call(worker) == '[object ServiceWorker]';
  }
  var seen_func_name = Object.create(null);
  function get_test_name(func, name) {
    if (name) {
      return name;
    }
    if (func) {
      var func_code = func.toString();

      // Try and match with brackets, but fallback to matching without
      var arrow = func_code.match(/^\(\)\s*=>\s*(?:{(.*)}\s*|(.*))$/);

      // Check for JS line separators
      if (arrow !== null && !/[\u000A\u000D\u2028\u2029]/.test(func_code)) {
        var trimmed = (arrow[1] !== undefined ? arrow[1] : arrow[2]).trim();
        // drop trailing ; if there's no earlier ones
        trimmed = trimmed.replace(/^([^;]*)(;\s*)+$/, "$1");
        if (trimmed) {
          var _name = trimmed;
          if (seen_func_name[trimmed]) {
            // This subtest name already exists, so add a suffix.
            _name += " " + seen_func_name[trimmed];
          } else {
            seen_func_name[trimmed] = 0;
          }
          seen_func_name[trimmed] += 1;
          return _name;
        }
      }
    }
    return test_environment.next_default_test_name();
  }

  /**
   * @callback TestFunction
   * @param {Test} test - The test currnetly being run.
   * @param {Any[]} args - Additional args to pass to function.
   *
   */

  /**
   * Create a synchronous test
   *
   * @param {TestFunction} func - Test function. This is executed
   * immediately. If it returns without error, the test status is
   * set to ``PASS``. If it throws an :js:class:`AssertionError`, or
   * any other exception, the test status is set to ``FAIL``
   * (typically from an `assert` function).
   * @param {String} name - Test name. This must be unique in a
   * given file and must be invariant between runs.
   */
  function test(func, name, properties) {
    if (tests.promise_setup_called) {
      tests.status.status = tests.status.ERROR;
      tests.status.message = '`test` invoked after `promise_setup`';
      tests.complete();
    }
    var test_name = get_test_name(func, name);
    var test_obj = new Test(test_name, properties);
    var value = test_obj.step(func, test_obj, test_obj);
    if (value !== undefined) {
      var msg = 'Test named "' + test_name + '" passed a function to `test` that returned a value.';
      try {
        if (value && typeof value.then === 'function') {
          msg += ' Consider using `promise_test` instead when ' + 'using Promises or async/await.';
        }
      } catch (err) {}
      tests.status.status = tests.status.ERROR;
      tests.status.message = msg;
    }
    if (test_obj.phase === test_obj.phases.STARTED) {
      test_obj.done();
    }
  }

  /**
   * Create an asynchronous test
   *
   * @param {TestFunction|string} funcOrName - Initial step function
   * to call immediately with the test name as an argument (if any),
   * or name of the test.
   * @param {String} name - Test name (if a test function was
   * provided). This must be unique in a given file and must be
   * invariant between runs.
   * @returns {Test} An object representing the ongoing test.
   */
  function async_test(func, name, properties) {
    if (tests.promise_setup_called) {
      tests.status.status = tests.status.ERROR;
      tests.status.message = '`async_test` invoked after `promise_setup`';
      tests.complete();
    }
    if (typeof func !== "function") {
      properties = name;
      name = func;
      func = null;
    }
    var test_name = get_test_name(func, name);
    var test_obj = new Test(test_name, properties);
    if (func) {
      var value = test_obj.step(func, test_obj, test_obj);

      // Test authors sometimes return values to async_test, expecting us
      // to handle the value somehow. Make doing so a harness error to be
      // clear this is invalid, and point authors to promise_test if it
      // may be appropriate.
      //
      // Note that we only perform this check on the initial function
      // passed to async_test, not on any later steps - we haven't seen a
      // consistent problem with those (and it's harder to check).
      if (value !== undefined) {
        var msg = 'Test named "' + test_name + '" passed a function to `async_test` that returned a value.';
        try {
          if (value && typeof value.then === 'function') {
            msg += ' Consider using `promise_test` instead when ' + 'using Promises or async/await.';
          }
        } catch (err) {}
        tests.set_status(tests.status.ERROR, msg);
        tests.complete();
      }
    }
    return test_obj;
  }

  /**
   * Create a promise test.
   *
   * Promise tests are tests which are represented by a promise
   * object. If the promise is fulfilled the test passes, if it's
   * rejected the test fails, otherwise the test passes.
   *
   * @param {TestFunction} func - Test function. This must return a
   * promise. The test is automatically marked as complete once the
   * promise settles.
   * @param {String} name - Test name. This must be unique in a
   * given file and must be invariant between runs.
   */
  function promise_test (func, name, properties) {
    if (typeof func !== "function") {
      properties = name;
      name = func;
      func = null;
    }
    var test_name = get_test_name(func, name);
    var test = new Test(test_name, properties);
    test._is_promise_test = true;

    // If there is no promise tests queue make one.
    if (!tests.promise_tests) {
      tests.promise_tests = Promise.resolve();
    }
    tests.promise_tests = tests.promise_tests.then(function () {
      return new Promise(function (resolve) {
        var promise = test.step(func, test, test);
        test.step(function () {
          assert(!!promise, "promise_test", null, "test body must return a 'thenable' object (received ${value})", {
            value: promise
          });
          assert(typeof promise.then === "function", "promise_test", null, "test body must return a 'thenable' object (received an object with no `then` method)", null);
        });

        // Test authors may use the `step` method within a
        // `promise_test` even though this reflects a mixture of
        // asynchronous control flow paradigms. The "done" callback
        // should be registered prior to the resolution of the
        // user-provided Promise to avoid timeouts in cases where the
        // Promise does not settle but a `step` function has thrown an
        // error.
        add_test_done_callback(test, resolve);
        Promise.resolve(promise).catch(test.step_func(function (value) {
          if (value instanceof AssertionError) {
            throw value;
          }
          assert(false, "promise_test", null, "Unhandled rejection with value: ${value}", {
            value: value
          });
        })).then(function () {
          test.done();
        });
      });
    });
  }
  /**
   * Make a copy of a Promise in the current realm.
   *
   * @param {Promise} promise the given promise that may be from a different
   *                          realm
   * @returns {Promise}
   *
   * An arbitrary promise provided by the caller may have originated
   * in another frame that have since navigated away, rendering the
   * frame's document inactive. Such a promise cannot be used with
   * `await` or Promise.resolve(), as microtasks associated with it
   * may be prevented from being run. See `issue
   * 5319<https://github.com/whatwg/html/issues/5319>`_ for a
   * particular case.
   *
   * In functions we define here, there is an expectation from the caller
   * that the promise is from the current realm, that can always be used with
   * `await`, etc. We therefore create a new promise in this realm that
   * inherit the value and status from the given promise.
   */

  function bring_promise_to_current_realm(promise) {
    return new Promise(promise.then.bind(promise));
  }

  /**
   * Assert that a Promise is rejected with the right ECMAScript exception.
   *
   * @param {Test} test - the `Test` to use for the assertion.
   * @param {Function} constructor - The expected exception constructor.
   * @param {Promise} promise - The promise that's expected to
   * reject with the given exception.
   * @param {string} [description] Error message to add to assert in case of
   *                               failure.
   */
  function promise_rejects_js(test, constructor, promise, description) {
    return bring_promise_to_current_realm(promise).then(test.unreached_func("Should have rejected: " + description)).catch(function (e) {
      assert_throws_js_impl(constructor, function () {
        throw e;
      }, description, "promise_rejects_js");
    });
  }

  /**
   * Assert that a Promise is rejected with the right DOMException.
   *
   * For the remaining arguments, there are two ways of calling
   * promise_rejects_dom:
   *
   * 1) If the DOMException is expected to come from the current global, the
   * third argument should be the promise expected to reject, and a fourth,
   * optional, argument is the assertion description.
   *
   * 2) If the DOMException is expected to come from some other global, the
   * third argument should be the DOMException constructor from that global,
   * the fourth argument the promise expected to reject, and the fifth,
   * optional, argument the assertion description.
   *
   * @param {Test} test - the `Test` to use for the assertion.
   * @param {number|string} type - See documentation for
   * `assert_throws_dom <#assert_throws_dom>`_.
   * @param {Function} promiseOrConstructor - Either the constructor
   * for the expected exception (if the exception comes from another
   * global), or the promise that's expected to reject (if the
   * exception comes from the current global).
   * @param {Function|string} descriptionOrPromise - Either the
   * promise that's expected to reject (if the exception comes from
   * another global), or the optional description of the condition
   * being tested (if the exception comes from the current global).
   * @param {string} [description] - Description of the condition
   * being tested (if the exception comes from another global).
   *
   */
  function promise_rejects_dom(test, type, promiseOrConstructor, descriptionOrPromise, maybeDescription) {
    var constructor, promise, description;
    if (typeof promiseOrConstructor === "function" && promiseOrConstructor.name === "DOMException") {
      constructor = promiseOrConstructor;
      promise = descriptionOrPromise;
      description = maybeDescription;
    } else {
      constructor = self.DOMException;
      promise = promiseOrConstructor;
      description = descriptionOrPromise;
      assert(maybeDescription === undefined, "Too many args pased to no-constructor version of promise_rejects_dom");
    }
    return bring_promise_to_current_realm(promise).then(test.unreached_func("Should have rejected: " + description)).catch(function (e) {
      assert_throws_dom_impl(type, function () {
        throw e;
      }, description, "promise_rejects_dom", constructor);
    });
  }

  /**
   * Assert that a Promise is rejected with the provided value.
   *
   * @param {Test} test - the `Test` to use for the assertion.
   * @param {Any} exception - The expected value of the rejected promise.
   * @param {Promise} promise - The promise that's expected to
   * reject.
   * @param {string} [description] Error message to add to assert in case of
   *                               failure.
   */
  function promise_rejects_exactly(test, exception, promise, description) {
    return bring_promise_to_current_realm(promise).then(test.unreached_func("Should have rejected: " + description)).catch(function (e) {
      assert_throws_exactly_impl(exception, function () {
        throw e;
      }, description, "promise_rejects_exactly");
    });
  }

  /**
   * Allow DOM events to be handled using Promises.
   *
   * This can make it a lot easier to test a very specific series of events,
   * including ensuring that unexpected events are not fired at any point.
   *
   * `EventWatcher` will assert if an event occurs while there is no `wait_for`
   * created Promise waiting to be fulfilled, or if the event is of a different type
   * to the type currently expected. This ensures that only the events that are
   * expected occur, in the correct order, and with the correct timing.
   *
   * @constructor
   * @param {Test} test - The `Test` to use for the assertion.
   * @param {EventTarget} watchedNode - The target expected to receive the events.
   * @param {string[]} eventTypes - List of events to watch for.
   * @param {Promise} timeoutPromise - Promise that will cause the
   * test to be set to `TIMEOUT` once fulfilled.
   *
   */
  function EventWatcher(test, watchedNode, eventTypes, timeoutPromise) {
    if (typeof eventTypes == 'string') {
      eventTypes = [eventTypes];
    }
    var waitingFor = null;

    // This is null unless we are recording all events, in which case it
    // will be an Array object.
    var recordedEvents = null;
    var eventHandler = test.step_func(function (evt) {
      assert_true(!!waitingFor, 'Not expecting event, but got ' + evt.type + ' event');
      assert_equals(evt.type, waitingFor.types[0], 'Expected ' + waitingFor.types[0] + ' event, but got ' + evt.type + ' event instead');
      if (Array.isArray(recordedEvents)) {
        recordedEvents.push(evt);
      }
      if (waitingFor.types.length > 1) {
        // Pop first event from array
        waitingFor.types.shift();
        return;
      }
      // We need to null out waitingFor before calling the resolve function
      // since the Promise's resolve handlers may call wait_for() which will
      // need to set waitingFor.
      var resolveFunc = waitingFor.resolve;
      waitingFor = null;
      // Likewise, we should reset the state of recordedEvents.
      var result = recordedEvents || evt;
      recordedEvents = null;
      resolveFunc(result);
    });
    for (var i = 0; i < eventTypes.length; i++) {
      watchedNode.addEventListener(eventTypes[i], eventHandler, false);
    }

    /**
     * Returns a Promise that will resolve after the specified event or
     * series of events has occurred.
     *
     * @param {Object} options An optional options object. If the 'record' property
     *                 on this object has the value 'all', when the Promise
     *                 returned by this function is resolved,  *all* Event
     *                 objects that were waited for will be returned as an
     *                 array.
     *
     * @example
     * const watcher = new EventWatcher(t, div, [ 'animationstart',
     *                                            'animationiteration',
     *                                            'animationend' ]);
     * return watcher.wait_for([ 'animationstart', 'animationend' ],
     *                         { record: 'all' }).then(evts => {
     *   assert_equals(evts[0].elapsedTime, 0.0);
     *   assert_equals(evts[1].elapsedTime, 2.0);
     * });
     */
    this.wait_for = function (types, options) {
      if (waitingFor) {
        return Promise.reject('Already waiting for an event or events');
      }
      if (typeof types == 'string') {
        types = [types];
      }
      if (options && options.record && options.record === 'all') {
        recordedEvents = [];
      }
      return new Promise(function (resolve, reject) {
        var timeout = test.step_func(function () {
          // If the timeout fires after the events have been received
          // or during a subsequent call to wait_for, ignore it.
          if (!waitingFor || waitingFor.resolve !== resolve) return;

          // This should always fail, otherwise we should have
          // resolved the promise.
          assert_true(waitingFor.types.length == 0, 'Timed out waiting for ' + waitingFor.types.join(', '));
          var result = recordedEvents;
          recordedEvents = null;
          var resolveFunc = waitingFor.resolve;
          waitingFor = null;
          resolveFunc(result);
        });
        if (timeoutPromise) {
          timeoutPromise().then(timeout);
        }
        waitingFor = {
          types: types,
          resolve: resolve,
          reject: reject
        };
      });
    };

    /**
     * Stop listening for events
     */
    function stop_watching() {
      for (var i = 0; i < eventTypes.length; i++) {
        watchedNode.removeEventListener(eventTypes[i], eventHandler, false);
      }
    }
    ;
    test._add_cleanup(stop_watching);
    return this;
  }
  expose(EventWatcher, 'EventWatcher');

  /**
   * @typedef {Object} SettingsObject
   * @property {bool} single_test - Use the single-page-test
   * mode. In this mode the Document represents a single
   * `async_test`. Asserts may be used directly without requiring
   * `Test.step` or similar wrappers, and any exceptions set the
   * status of the test rather than the status of the harness.
   * @property {bool} allow_uncaught_exception - don't treat an
   * uncaught exception as an error; needed when e.g. testing the
   * `window.onerror` handler.
   * @property {boolean} explicit_done - Wait for a call to `done()`
   * before declaring all tests complete (this is always true for
   * single-page tests).
   * @property hide_test_state - hide the test state output while
   * the test is running; This is helpful when the output of the test state
   * may interfere the test results.
   * @property {bool} explicit_timeout - disable file timeout; only
   * stop waiting for results when the `timeout()` function is
   * called This should typically only be set for manual tests, or
   * by a test runner that providees its own timeout mechanism.
   * @property {number} timeout_multiplier - Multiplier to apply to
   * per-test timeouts. This should only be set by a test runner.
   * @property {Document} output_document - The document to which
   * results should be logged. By default this is the current
   * document but could be an ancestor document in some cases e.g. a
   * SVG test loaded in an HTML wrapper
   *
   */

  /**
   * Configure the harness
   *
   * @param {Function|SettingsObject} funcOrProperties - Either a
   * setup function to run, or a set of properties. If this is a
   * function that function is run synchronously. Any exception in
   * the function will set the overall harness status to `ERROR`.
   * @param {SettingsObject} maybeProperties - An object containing
   * the settings to use, if the first argument is a function.
   *
   */
  function setup(func_or_properties, maybe_properties) {
    var func = null;
    var properties = {};
    if (arguments.length === 2) {
      func = func_or_properties;
      properties = maybe_properties;
    } else if (func_or_properties instanceof Function) {
      func = func_or_properties;
    } else {
      properties = func_or_properties;
    }
    tests.setup(func, properties);
    test_environment.on_new_harness_properties(properties);
  }

  /**
   * Configure the harness, waiting for a promise to resolve
   * before running any `promise_test` tests.
   *
   * @param {Function} func - Function returning a promise that's
   * run synchronously. Promise tests are not run until after this
   * function has resolved.
   * @param {SettingsObject} [properties] - An object containing
   * the harness settings to use.
   *
   */
  function promise_setup(func) {
    var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (typeof func !== "function") {
      tests.set_status(tests.status.ERROR, "promise_test invoked without a function");
      tests.complete();
      return;
    }
    tests.promise_setup_called = true;
    if (!tests.promise_tests) {
      tests.promise_tests = Promise.resolve();
    }
    tests.promise_tests = tests.promise_tests.then(function () {
      var result;
      tests.setup(null, properties);
      result = func();
      test_environment.on_new_harness_properties(properties);
      if (!result || typeof result.then !== "function") {
        throw "Non-thenable returned by function passed to `promise_setup`";
      }
      return result;
    }).catch(function (e) {
      tests.set_status(tests.status.ERROR, String(e), e && e.stack);
      tests.complete();
    });
  }

  /**
   * Mark test loading as complete.
   *
   * Typically this function is called implicitly on page load; it's
   * only necessary for users to call this when either the
   * ``explicit_done`` or ``single_page`` properties have been set
   * via the :js:func:`setup` function.
   *
   * For single page tests this marks the test as complete and sets its status.
   * For other tests, this marks test loading as complete, but doesn't affect ongoing tests.
   */
  function done() {
    if (tests.tests.length === 0) {
      // `done` is invoked after handling uncaught exceptions, so if the
      // harness status is already set, the corresponding message is more
      // descriptive than the generic message defined here.
      if (tests.status.status === null) {
        tests.status.status = tests.status.ERROR;
        tests.status.message = "done() was called without first defining any tests";
      }
      tests.complete();
      return;
    }
    if (tests.file_is_test) {
      // file is test files never have asynchronous cleanup logic,
      // meaning the fully-synchronous `done` function can be used here.
      tests.tests[0].done();
    }
    tests.end_wait();
  }

  /**
   * @deprecated generate a list of tests from a function and list of arguments
   *
   * This is deprecated because it runs all the tests outside of the test functions
   * and as a result any test throwing an exception will result in no tests being
   * run. In almost all cases, you should simply call test within the loop you would
   * use to generate the parameter list array.
   *
   * @param {Function} func - The function that will be called for each generated tests.
   * @param {Any[][]} args - An array of arrays. Each nested array
   * has the structure `[testName, ...testArgs]`. For each of these nested arrays
   * array, a test is generated with name `testName` and test function equivalent to
   * `func(..testArgs)`.
   */
  function generate_tests(func, args, properties) {
    forEach(args, function (x, i) {
      var name = x[0];
      test(function () {
        func.apply(this, x.slice(1));
      }, name, Array.isArray(properties) ? properties[i] : properties);
    });
  }

  /**
   * @deprecated
   *
   * Register a function as a DOM event listener to the
   * given object for the event bubbling phase.
   *
   * @param {EventTarget} object - Event target
   * @param {string} event - Event name
   * @param {Function} callback - Event handler.
   */
  function on_event(object, event, callback) {
    object.addEventListener(event, callback, false);
  }

  // Internal helper function to provide timeout-like functionality in
  // environments where there is no setTimeout(). (No timeout ID or
  // clearTimeout().)
  function fake_set_timeout(callback, delay) {
    var p = Promise.resolve();
    var start = Date.now();
    var end = start + delay;
    function check() {
      if (end - Date.now() > 0) {
        p.then(check);
      } else {
        callback();
      }
    }
    p.then(check);
  }

  /**
   * Global version of :js:func:`Test.step_timeout` for use in single page tests.
   *
   * @param {Function} func - Function to run after the timeout
   * @param {number} timeout - Time in ms to wait before running the
   * test step. The actual wait time is ``timeout`` x
   * ``timeout_multiplier``.
   */
  function step_timeout(func, timeout) {
    var outer_this = this;
    var args = Array.prototype.slice.call(arguments, 2);
    var local_set_timeout = typeof global_scope.setTimeout === "undefined" ? fake_set_timeout : setTimeout;
    return local_set_timeout(function () {
      func.apply(outer_this, args);
    }, timeout * tests.timeout_multiplier);
  }
  expose(test, 'test');
  expose(async_test, 'async_test');
  expose(promise_test, 'promise_test');
  expose(promise_rejects_js, 'promise_rejects_js');
  expose(promise_rejects_dom, 'promise_rejects_dom');
  expose(promise_rejects_exactly, 'promise_rejects_exactly');
  expose(generate_tests, 'generate_tests');
  expose(setup, 'setup');
  expose(promise_setup, 'promise_setup');
  expose(done, 'done');
  expose(on_event, 'on_event');
  expose(step_timeout, 'step_timeout');

  /*
   * Return a string truncated to the given length, with ... added at the end
   * if it was longer.
   */
  function truncate(s, len) {
    if (s.length > len) {
      return s.substring(0, len - 3) + "...";
    }
    return s;
  }

  /*
   * Return true if object is probably a Node object.
   */
  function is_node(object) {
    // I use duck-typing instead of instanceof, because
    // instanceof doesn't work if the node is from another window (like an
    // iframe's contentWindow):
    // http://www.w3.org/Bugs/Public/show_bug.cgi?id=12295
    try {
      var has_node_properties = "nodeType" in object && "nodeName" in object && "nodeValue" in object && "childNodes" in object;
    } catch (e) {
      // We're probably cross-origin, which means we aren't a node
      return false;
    }
    if (has_node_properties) {
      try {
        object.nodeType;
      } catch (e) {
        // The object is probably Node.prototype or another prototype
        // object that inherits from it, and not a Node instance.
        return false;
      }
      return true;
    }
    return false;
  }
  var replacements = {
    "0": "0",
    "1": "x01",
    "2": "x02",
    "3": "x03",
    "4": "x04",
    "5": "x05",
    "6": "x06",
    "7": "x07",
    "8": "b",
    "9": "t",
    "10": "n",
    "11": "v",
    "12": "f",
    "13": "r",
    "14": "x0e",
    "15": "x0f",
    "16": "x10",
    "17": "x11",
    "18": "x12",
    "19": "x13",
    "20": "x14",
    "21": "x15",
    "22": "x16",
    "23": "x17",
    "24": "x18",
    "25": "x19",
    "26": "x1a",
    "27": "x1b",
    "28": "x1c",
    "29": "x1d",
    "30": "x1e",
    "31": "x1f",
    "0xfffd": "ufffd",
    "0xfffe": "ufffe",
    "0xffff": "uffff"
  };

  /**
   * Convert a value to a nice, human-readable string
   *
   * When many JavaScript Object values are coerced to a String, the
   * resulting value will be ``"[object Object]"``. This obscures
   * helpful information, making the coerced value unsuitable for
   * use in assertion messages, test names, and debugging
   * statements. `format_value` produces more distinctive string
   * representations of many kinds of objects, including arrays and
   * the more important DOM Node types. It also translates String
   * values containing control characters to include human-readable
   * representations.
   *
   * @example
   * // "Document node with 2 children"
   * format_value(document);
   * @example
   * // "\"foo\\uffffbar\""
   * format_value("foo\uffffbar");
   * @example
   * // "[-0, Infinity]"
   * format_value([-0, Infinity]);
   * @param {Any} val - The value to convert to a string.
   * @returns {string} - A string representation of ``val``, optimised for human readability.
   */
  function format_value(val, seen) {
    if (!seen) {
      seen = [];
    }
    if (_typeof(val) === "object" && val !== null) {
      if (seen.indexOf(val) >= 0) {
        return "[...]";
      }
      seen.push(val);
    }
    if (Array.isArray(val)) {
      var output = "[";
      if (val.beginEllipsis !== undefined) {
        output += "…, ";
      }
      output += val.map(function (x) {
        return format_value(x, seen);
      }).join(", ");
      if (val.endEllipsis !== undefined) {
        output += ", …";
      }
      return output + "]";
    }
    switch (_typeof(val)) {
      case "string":
        val = val.replace(/\\/g, "\\\\");
        for (var p in replacements) {
          var replace = "\\" + replacements[p];
          val = val.replace(RegExp(String.fromCharCode(p), "g"), replace);
        }
        return '"' + val.replace(/"/g, '\\"') + '"';
      case "boolean":
      case "undefined":
        return String(val);
      case "number":
        // In JavaScript, -0 === 0 and String(-0) == "0", so we have to
        // special-case.
        if (val === -0 && 1 / val === -Infinity) {
          return "-0";
        }
        return String(val);
      case "object":
        if (val === null) {
          return "null";
        }

        // Special-case Node objects, since those come up a lot in my tests.  I
        // ignore namespaces.
        if (is_node(val)) {
          switch (val.nodeType) {
            case Node.ELEMENT_NODE:
              var ret = "<" + val.localName;
              for (var i = 0; i < val.attributes.length; i++) {
                ret += " " + val.attributes[i].name + '="' + val.attributes[i].value + '"';
              }
              ret += ">" + val.innerHTML + "</" + val.localName + ">";
              return "Element node " + truncate(ret, 60);
            case Node.TEXT_NODE:
              return 'Text node "' + truncate(val.data, 60) + '"';
            case Node.PROCESSING_INSTRUCTION_NODE:
              return "ProcessingInstruction node with target " + format_value(truncate(val.target, 60)) + " and data " + format_value(truncate(val.data, 60));
            case Node.COMMENT_NODE:
              return "Comment node <!--" + truncate(val.data, 60) + "-->";
            case Node.DOCUMENT_NODE:
              return "Document node with " + val.childNodes.length + (val.childNodes.length == 1 ? " child" : " children");
            case Node.DOCUMENT_TYPE_NODE:
              return "DocumentType node";
            case Node.DOCUMENT_FRAGMENT_NODE:
              return "DocumentFragment node with " + val.childNodes.length + (val.childNodes.length == 1 ? " child" : " children");
            default:
              return "Node object of unknown type";
          }
        }

      /* falls through */
      default:
        try {
          return _typeof(val) + ' "' + truncate(String(val), 1000) + '"';
        } catch (e) {
          return "[stringifying object threw " + String(e) + " with type " + String(_typeof(e)) + "]";
        }
    }
  }
  expose(format_value, "format_value");

  /*
   * Assertions
   */

  function expose_assert(f, name) {
    function assert_wrapper() {
      var status = Test.statuses.TIMEOUT;
      var stack = null;
      var new_assert_index = null;
      try {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (settings.debug) {
          console.debug("ASSERT", name, tests.current_test && tests.current_test.name, args);
        }
        if (tests.output) {
          tests.set_assert(name, args);
          // Remember the newly pushed assert's index, because `apply`
          // below might push new asserts.
          new_assert_index = tests.asserts_run.length - 1;
        }
        var _rv = f.apply(undefined, args);
        status = Test.statuses.PASS;
        return _rv;
      } catch (e) {
        status = Test.statuses.FAIL;
        stack = e.stack ? e.stack : null;
        throw e;
      } finally {
        if (tests.output && !stack) {
          stack = get_stack();
        }
        if (tests.output) {
          tests.set_assert_status(new_assert_index, status, stack);
        }
      }
    }
    expose(assert_wrapper, name);
  }

  /**
   * Assert that ``actual`` is strictly true
   *
   * @param {Any} actual - Value that is asserted to be true
   * @param {string} [description] - Description of the condition being tested
   */
  function assert_true(actual, description) {
    assert(actual === true, "assert_true", description, "expected true got ${actual}", {
      actual: actual
    });
  }
  expose_assert(assert_true, "assert_true");

  /**
   * Assert that ``actual`` is strictly false
   *
   * @param {Any} actual - Value that is asserted to be false
   * @param {string} [description] - Description of the condition being tested
   */
  function assert_false(actual, description) {
    assert(actual === false, "assert_false", description, "expected false got ${actual}", {
      actual: actual
    });
  }
  expose_assert(assert_false, "assert_false");
  function same_value(x, y) {
    if (y !== y) {
      //NaN case
      return x !== x;
    }
    if (x === 0 && y === 0) {
      //Distinguish +0 and -0
      return 1 / x === 1 / y;
    }
    return x === y;
  }

  /**
   * Assert that ``actual`` is the same value as ``expected``.
   *
   * For objects this compares by object identity; for primitives
   * this distinguishes between 0 and -0, and has correct handling
   * of NaN.
   *
   * @param {Any} actual - Test value.
   * @param {Any} expected - Expected value.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_equals(actual, expected, description) {
    /*
     * Test if two primitives are equal or two objects
     * are the same object
     */
    if (_typeof(actual) != _typeof(expected)) {
      assert(false, "assert_equals", description, "expected (" + _typeof(expected) + ") ${expected} but got (" + _typeof(actual) + ") ${actual}", {
        expected: expected,
        actual: actual
      });
      return;
    }
    assert(same_value(actual, expected), "assert_equals", description, "expected ${expected} but got ${actual}", {
      expected: expected,
      actual: actual
    });
  }
  expose_assert(assert_equals, "assert_equals");

  /**
   * Assert that ``actual`` is not the same value as ``expected``.
   *
   * Comparison is as for :js:func:`assert_equals`.
   *
   * @param {Any} actual - Test value.
   * @param {Any} expected - The value ``actual`` is expected to be different to.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_not_equals(actual, expected, description) {
    assert(!same_value(actual, expected), "assert_not_equals", description, "got disallowed value ${actual}", {
      actual: actual
    });
  }
  expose_assert(assert_not_equals, "assert_not_equals");

  /**
   * Assert that ``expected`` is an array and ``actual`` is one of the members.
   * This is implemented using ``indexOf``, so doesn't handle NaN or ±0 correctly.
   *
   * @param {Any} actual - Test value.
   * @param {Array} expected - An array that ``actual`` is expected to
   * be a member of.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_in_array(actual, expected, description) {
    assert(expected.indexOf(actual) != -1, "assert_in_array", description, "value ${actual} not in array ${expected}", {
      actual: actual,
      expected: expected
    });
  }
  expose_assert(assert_in_array, "assert_in_array");

  // This function was deprecated in July of 2015.
  // See https://github.com/web-platform-tests/wpt/issues/2033
  /**
   * @deprecated
   * Recursively compare two objects for equality.
   *
   * See `Issue 2033
   * <https://github.com/web-platform-tests/wpt/issues/2033>`_ for
   * more information.
   *
   * @param {Object} actual - Test value.
   * @param {Object} expected - Expected value.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_object_equals(actual, expected, description) {
    assert(_typeof(actual) === "object" && actual !== null, "assert_object_equals", description, "value is ${actual}, expected object", {
      actual: actual
    });
    //This needs to be improved a great deal
    function check_equal(actual, expected, stack) {
      stack.push(actual);
      var p;
      for (p in actual) {
        assert(expected.hasOwnProperty(p), "assert_object_equals", description, "unexpected property ${p}", {
          p: p
        });
        if (_typeof(actual[p]) === "object" && actual[p] !== null) {
          if (stack.indexOf(actual[p]) === -1) {
            check_equal(actual[p], expected[p], stack);
          }
        } else {
          assert(same_value(actual[p], expected[p]), "assert_object_equals", description, "property ${p} expected ${expected} got ${actual}", {
            p: p,
            expected: expected[p],
            actual: actual[p]
          });
        }
      }
      for (p in expected) {
        assert(actual.hasOwnProperty(p), "assert_object_equals", description, "expected property ${p} missing", {
          p: p
        });
      }
      stack.pop();
    }
    check_equal(actual, expected, []);
  }
  expose_assert(assert_object_equals, "assert_object_equals");

  /**
   * Assert that ``actual`` and ``expected`` are both arrays, and that the array properties of
   * ``actual`` and ``expected`` are all the same value (as for :js:func:`assert_equals`).
   *
   * @param {Array} actual - Test array.
   * @param {Array} expected - Array that is expected to contain the same values as ``actual``.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_array_equals(actual, expected, description) {
    var max_array_length = 20;
    function shorten_array(arr) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      // Make ", …" only show up when it would likely reduce the length, not accounting for
      // fonts.
      if (arr.length < max_array_length + 2) {
        return arr;
      }
      // By default we want half the elements after the offset and half before
      // But if that takes us past the end of the array, we have more before, and
      // if it takes us before the start we have more after.
      var length_after_offset = Math.floor(max_array_length / 2);
      var upper_bound = Math.min(length_after_offset + offset, arr.length);
      var lower_bound = Math.max(upper_bound - max_array_length, 0);
      if (lower_bound === 0) {
        upper_bound = max_array_length;
      }
      var output = arr.slice(lower_bound, upper_bound);
      if (lower_bound > 0) {
        output.beginEllipsis = true;
      }
      if (upper_bound < arr.length) {
        output.endEllipsis = true;
      }
      return output;
    }
    assert(_typeof(actual) === "object" && actual !== null && "length" in actual, "assert_array_equals", description, "value is ${actual}, expected array", {
      actual: actual
    });
    assert(actual.length === expected.length, "assert_array_equals", description, "lengths differ, expected array ${expected} length ${expectedLength}, got ${actual} length ${actualLength}", {
      expected: shorten_array(expected, expected.length - 1),
      expectedLength: expected.length,
      actual: shorten_array(actual, actual.length - 1),
      actualLength: actual.length
    });
    for (var i = 0; i < actual.length; i++) {
      assert(actual.hasOwnProperty(i) === expected.hasOwnProperty(i), "assert_array_equals", description, "expected property ${i} to be ${expected} but was ${actual} (expected array ${arrayExpected} got ${arrayActual})", {
        i: i,
        expected: expected.hasOwnProperty(i) ? "present" : "missing",
        actual: actual.hasOwnProperty(i) ? "present" : "missing",
        arrayExpected: shorten_array(expected, i),
        arrayActual: shorten_array(actual, i)
      });
      assert(same_value(expected[i], actual[i]), "assert_array_equals", description, "expected property ${i} to be ${expected} but got ${actual} (expected array ${arrayExpected} got ${arrayActual})", {
        i: i,
        expected: expected[i],
        actual: actual[i],
        arrayExpected: shorten_array(expected, i),
        arrayActual: shorten_array(actual, i)
      });
    }
  }
  expose_assert(assert_array_equals, "assert_array_equals");

  /**
   * Assert that each array property in ``actual`` is a number within
   * ± `epsilon` of the corresponding property in `expected`.
   *
   * @param {Array} actual - Array of test values.
   * @param {Array} expected - Array of values expected to be close to the values in ``actual``.
   * @param {number} epsilon - Magnitude of allowed difference
   * between each value in ``actual`` and ``expected``.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_array_approx_equals(actual, expected, epsilon, description) {
    /*
     * Test if two primitive arrays are equal within +/- epsilon
     */
    assert(actual.length === expected.length, "assert_array_approx_equals", description, "lengths differ, expected ${expected} got ${actual}", {
      expected: expected.length,
      actual: actual.length
    });
    for (var i = 0; i < actual.length; i++) {
      assert(actual.hasOwnProperty(i) === expected.hasOwnProperty(i), "assert_array_approx_equals", description, "property ${i}, property expected to be ${expected} but was ${actual}", {
        i: i,
        expected: expected.hasOwnProperty(i) ? "present" : "missing",
        actual: actual.hasOwnProperty(i) ? "present" : "missing"
      });
      assert(typeof actual[i] === "number", "assert_array_approx_equals", description, "property ${i}, expected a number but got a ${type_actual}", {
        i: i,
        type_actual: _typeof(actual[i])
      });
      assert(Math.abs(actual[i] - expected[i]) <= epsilon, "assert_array_approx_equals", description, "property ${i}, expected ${expected} +/- ${epsilon}, expected ${expected} but got ${actual}", {
        i: i,
        expected: expected[i],
        actual: actual[i],
        epsilon: epsilon
      });
    }
  }
  expose_assert(assert_array_approx_equals, "assert_array_approx_equals");

  /**
   * Assert that ``actual`` is within ± ``epsilon`` of ``expected``.
   *
   * @param {number} actual - Test value.
   * @param {number} expected - Value number is expected to be close to.
   * @param {number} epsilon - Magnitude of allowed difference between ``actual`` and ``expected``.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_approx_equals(actual, expected, epsilon, description) {
    /*
     * Test if two primitive numbers are equal within +/- epsilon
     */
    assert(typeof actual === "number", "assert_approx_equals", description, "expected a number but got a ${type_actual}", {
      type_actual: _typeof(actual)
    });

    // The epsilon math below does not place nice with NaN and Infinity
    // But in this case Infinity = Infinity and NaN = NaN
    if (isFinite(actual) || isFinite(expected)) {
      assert(Math.abs(actual - expected) <= epsilon, "assert_approx_equals", description, "expected ${expected} +/- ${epsilon} but got ${actual}", {
        expected: expected,
        actual: actual,
        epsilon: epsilon
      });
    } else {
      assert_equals(actual, expected);
    }
  }
  expose_assert(assert_approx_equals, "assert_approx_equals");

  /**
   * Assert that ``actual`` is a number less than ``expected``.
   *
   * @param {number} actual - Test value.
   * @param {number} expected - Number that ``actual`` must be less than.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_less_than(actual, expected, description) {
    /*
     * Test if a primitive number is less than another
     */
    assert(typeof actual === "number", "assert_less_than", description, "expected a number but got a ${type_actual}", {
      type_actual: _typeof(actual)
    });
    assert(actual < expected, "assert_less_than", description, "expected a number less than ${expected} but got ${actual}", {
      expected: expected,
      actual: actual
    });
  }
  expose_assert(assert_less_than, "assert_less_than");

  /**
   * Assert that ``actual`` is a number greater than ``expected``.
   *
   * @param {number} actual - Test value.
   * @param {number} expected - Number that ``actual`` must be greater than.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_greater_than(actual, expected, description) {
    /*
     * Test if a primitive number is greater than another
     */
    assert(typeof actual === "number", "assert_greater_than", description, "expected a number but got a ${type_actual}", {
      type_actual: _typeof(actual)
    });
    assert(actual > expected, "assert_greater_than", description, "expected a number greater than ${expected} but got ${actual}", {
      expected: expected,
      actual: actual
    });
  }
  expose_assert(assert_greater_than, "assert_greater_than");

  /**
   * Assert that ``actual`` is a number greater than ``lower`` and less
   * than ``upper`` but not equal to either.
   *
   * @param {number} actual - Test value.
   * @param {number} lower - Number that ``actual`` must be greater than.
   * @param {number} upper - Number that ``actual`` must be less than.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_between_exclusive(actual, lower, upper, description) {
    /*
     * Test if a primitive number is between two others
     */
    assert(typeof actual === "number", "assert_between_exclusive", description, "expected a number but got a ${type_actual}", {
      type_actual: _typeof(actual)
    });
    assert(actual > lower && actual < upper, "assert_between_exclusive", description, "expected a number greater than ${lower} " + "and less than ${upper} but got ${actual}", {
      lower: lower,
      upper: upper,
      actual: actual
    });
  }
  expose_assert(assert_between_exclusive, "assert_between_exclusive");

  /**
   * Assert that ``actual`` is a number less than or equal to ``expected``.
   *
   * @param {number} actual - Test value.
   * @param {number} expected - Number that ``actual`` must be less
   * than or equal to.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_less_than_equal(actual, expected, description) {
    /*
     * Test if a primitive number is less than or equal to another
     */
    assert(typeof actual === "number", "assert_less_than_equal", description, "expected a number but got a ${type_actual}", {
      type_actual: _typeof(actual)
    });
    assert(actual <= expected, "assert_less_than_equal", description, "expected a number less than or equal to ${expected} but got ${actual}", {
      expected: expected,
      actual: actual
    });
  }
  expose_assert(assert_less_than_equal, "assert_less_than_equal");

  /**
   * Assert that ``actual`` is a number greater than or equal to ``expected``.
   *
   * @param {number} actual - Test value.
   * @param {number} expected - Number that ``actual`` must be greater
   * than or equal to.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_greater_than_equal(actual, expected, description) {
    /*
     * Test if a primitive number is greater than or equal to another
     */
    assert(typeof actual === "number", "assert_greater_than_equal", description, "expected a number but got a ${type_actual}", {
      type_actual: _typeof(actual)
    });
    assert(actual >= expected, "assert_greater_than_equal", description, "expected a number greater than or equal to ${expected} but got ${actual}", {
      expected: expected,
      actual: actual
    });
  }
  expose_assert(assert_greater_than_equal, "assert_greater_than_equal");

  /**
   * Assert that ``actual`` is a number greater than or equal to ``lower`` and less
   * than or equal to ``upper``.
   *
   * @param {number} actual - Test value.
   * @param {number} lower - Number that ``actual`` must be greater than or equal to.
   * @param {number} upper - Number that ``actual`` must be less than or equal to.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_between_inclusive(actual, lower, upper, description) {
    /*
     * Test if a primitive number is between to two others or equal to either of them
     */
    assert(typeof actual === "number", "assert_between_inclusive", description, "expected a number but got a ${type_actual}", {
      type_actual: _typeof(actual)
    });
    assert(actual >= lower && actual <= upper, "assert_between_inclusive", description, "expected a number greater than or equal to ${lower} " + "and less than or equal to ${upper} but got ${actual}", {
      lower: lower,
      upper: upper,
      actual: actual
    });
  }
  expose_assert(assert_between_inclusive, "assert_between_inclusive");

  /**
   * Assert that ``actual`` matches the RegExp ``expected``.
   *
   * @param {String} actual - Test string.
   * @param {RegExp} expected - RegExp ``actual`` must match.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_regexp_match(actual, expected, description) {
    /*
     * Test if a string (actual) matches a regexp (expected)
     */
    assert(expected.test(actual), "assert_regexp_match", description, "expected ${expected} but got ${actual}", {
      expected: expected,
      actual: actual
    });
  }
  expose_assert(assert_regexp_match, "assert_regexp_match");

  /**
   * Assert that the class string of ``object`` as returned in
   * ``Object.prototype.toString`` is equal to ``class_name``.
   *
   * @param {Object} object - Object to stringify.
   * @param {string} class_string - Expected class string for ``object``.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_class_string(object, class_string, description) {
    var actual = {}.toString.call(object);
    var expected = "[object " + class_string + "]";
    assert(same_value(actual, expected), "assert_class_string", description, "expected ${expected} but got ${actual}", {
      expected: expected,
      actual: actual
    });
  }
  expose_assert(assert_class_string, "assert_class_string");

  /**
   * Assert that ``object`` has an own property with name ``property_name``.
   *
   * @param {Object} object - Object that should have the given property.
   * @param {string} property_name - Expected property name.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_own_property(object, property_name, description) {
    assert(object.hasOwnProperty(property_name), "assert_own_property", description, "expected property ${p} missing", {
      p: property_name
    });
  }
  expose_assert(assert_own_property, "assert_own_property");

  /**
   * Assert that ``object`` does not have an own property with name ``property_name``.
   *
   * @param {Object} object - Object that should not have the given property.
   * @param {string} property_name - Property name to test.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_not_own_property(object, property_name, description) {
    assert(!object.hasOwnProperty(property_name), "assert_not_own_property", description, "unexpected property ${p} is found on object", {
      p: property_name
    });
  }
  expose_assert(assert_not_own_property, "assert_not_own_property");
  function _assert_inherits(name) {
    return function (object, property_name, description) {
      assert(_typeof(object) === "object" && object !== null || typeof object === "function" ||
      // Or has [[IsHTMLDDA]] slot
      String(object) === "[object HTMLAllCollection]", name, description, "provided value is not an object");
      assert("hasOwnProperty" in object, name, description, "provided value is an object but has no hasOwnProperty method");
      assert(!object.hasOwnProperty(property_name), name, description, "property ${p} found on object expected in prototype chain", {
        p: property_name
      });
      assert(property_name in object, name, description, "property ${p} not found in prototype chain", {
        p: property_name
      });
    };
  }

  /**
   * Assert that ``object`` does not have an own property with name
   * ``property_name``, but inherits one through the prototype chain.
   *
   * @param {Object} object - Object that should have the given property in its prototype chain.
   * @param {string} property_name - Expected property name.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_inherits(object, property_name, description) {
    return _assert_inherits("assert_inherits")(object, property_name, description);
  }
  expose_assert(assert_inherits, "assert_inherits");

  /**
   * Alias for :js:func:`insert_inherits`.
   *
   * @param {Object} object - Object that should have the given property in its prototype chain.
   * @param {string} property_name - Expected property name.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_idl_attribute(object, property_name, description) {
    return _assert_inherits("assert_idl_attribute")(object, property_name, description);
  }
  expose_assert(assert_idl_attribute, "assert_idl_attribute");

  /**
   * Assert that ``object`` has a property named ``property_name`` and that the property is readonly.
   *
   * Note: The implementation tries to update the named property, so
   * any side effects of updating will be triggered. Users are
   * encouraged to instead inspect the property descriptor of ``property_name`` on ``object``.
   *
   * @param {Object} object - Object that should have the given property in its prototype chain.
   * @param {string} property_name - Expected property name.
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_readonly(object, property_name, description) {
    var initial_value = object[property_name];
    try {
      //Note that this can have side effects in the case where
      //the property has PutForwards
      object[property_name] = initial_value + "a"; //XXX use some other value here?
      assert(same_value(object[property_name], initial_value), "assert_readonly", description, "changing property ${p} succeeded", {
        p: property_name
      });
    } finally {
      object[property_name] = initial_value;
    }
  }
  expose_assert(assert_readonly, "assert_readonly");

  /**
   * Assert a JS Error with the expected constructor is thrown.
   *
   * @param {object} constructor The expected exception constructor.
   * @param {Function} func Function which should throw.
   * @param {string} [description] Error description for the case that the error is not thrown.
   */
  function assert_throws_js(constructor, func, description) {
    assert_throws_js_impl(constructor, func, description, "assert_throws_js");
  }
  expose_assert(assert_throws_js, "assert_throws_js");

  /**
   * Like assert_throws_js but allows specifying the assertion type
   * (assert_throws_js or promise_rejects_js, in practice).
   */
  function assert_throws_js_impl(constructor, func, description, assertion_type) {
    try {
      func.call(this);
      assert(false, assertion_type, description, "${func} did not throw", {
        func: func
      });
    } catch (e) {
      if (e instanceof AssertionError) {
        throw e;
      }

      // Basic sanity-checks on the thrown exception.
      assert(_typeof(e) === "object", assertion_type, description, "${func} threw ${e} with type ${type}, not an object", {
        func: func,
        e: e,
        type: _typeof(e)
      });
      assert(e !== null, assertion_type, description, "${func} threw null, not an object", {
        func: func
      });

      // Basic sanity-check on the passed-in constructor
      assert(typeof constructor == "function", assertion_type, description, "${constructor} is not a constructor", {
        constructor: constructor
      });
      var obj = constructor;
      while (obj) {
        if (typeof obj === "function" && obj.name === "Error") {
          break;
        }
        obj = Object.getPrototypeOf(obj);
      }
      assert(obj != null, assertion_type, description, "${constructor} is not an Error subtype", {
        constructor: constructor
      });

      // And checking that our exception is reasonable
      assert(e.constructor === constructor && e.name === constructor.name, assertion_type, description, "${func} threw ${actual} (${actual_name}) expected instance of ${expected} (${expected_name})", {
        func: func,
        actual: e,
        actual_name: e.name,
        expected: constructor,
        expected_name: constructor.name
      });
    }
  }

  // TODO: Figure out how to document the overloads better.
  // sphinx-js doesn't seem to handle @variation correctly,
  // and only expects a single JSDoc entry per function.
  /**
   * Assert a DOMException with the expected type is thrown.
   *
   * There are two ways of calling assert_throws_dom:
   *
   * 1) If the DOMException is expected to come from the current global, the
   * second argument should be the function expected to throw and a third,
   * optional, argument is the assertion description.
   *
   * 2) If the DOMException is expected to come from some other global, the
   * second argument should be the DOMException constructor from that global,
   * the third argument the function expected to throw, and the fourth, optional,
   * argument the assertion description.
   *
   * @param {number|string} type - The expected exception name or
   * code.  See the `table of names and codes
   * <https://webidl.spec.whatwg.org/#dfn-error-names-table>`_. If a
   * number is passed it should be one of the numeric code values in
   * that table (e.g. 3, 4, etc).  If a string is passed it can
   * either be an exception name (e.g. "HierarchyRequestError",
   * "WrongDocumentError") or the name of the corresponding error
   * code (e.g. "``HIERARCHY_REQUEST_ERR``", "``WRONG_DOCUMENT_ERR``").
   * @param {Function} descriptionOrFunc - The function expected to
   * throw (if the exception comes from another global), or the
   * optional description of the condition being tested (if the
   * exception comes from the current global).
   * @param {string} [description] - Description of the condition
   * being tested (if the exception comes from another global).
   *
   */
  function assert_throws_dom(type, funcOrConstructor, descriptionOrFunc, maybeDescription) {
    var constructor, func, description;
    if (funcOrConstructor.name === "DOMException") {
      constructor = funcOrConstructor;
      func = descriptionOrFunc;
      description = maybeDescription;
    } else {
      constructor = self.DOMException;
      func = funcOrConstructor;
      description = descriptionOrFunc;
      assert(maybeDescription === undefined, "Too many args pased to no-constructor version of assert_throws_dom");
    }
    assert_throws_dom_impl(type, func, description, "assert_throws_dom", constructor);
  }
  expose_assert(assert_throws_dom, "assert_throws_dom");

  /**
   * Similar to assert_throws_dom but allows specifying the assertion type
   * (assert_throws_dom or promise_rejects_dom, in practice).  The
   * "constructor" argument must be the DOMException constructor from the
   * global we expect the exception to come from.
   */
  function assert_throws_dom_impl(type, func, description, assertion_type, constructor) {
    try {
      func.call(this);
      assert(false, assertion_type, description, "${func} did not throw", {
        func: func
      });
    } catch (e) {
      if (e instanceof AssertionError) {
        throw e;
      }

      // Basic sanity-checks on the thrown exception.
      assert(_typeof(e) === "object", assertion_type, description, "${func} threw ${e} with type ${type}, not an object", {
        func: func,
        e: e,
        type: _typeof(e)
      });
      assert(e !== null, assertion_type, description, "${func} threw null, not an object", {
        func: func
      });

      // Sanity-check our type
      assert(typeof type == "number" || typeof type == "string", assertion_type, description, "${type} is not a number or string", {
        type: type
      });
      var codename_name_map = {
        INDEX_SIZE_ERR: 'IndexSizeError',
        HIERARCHY_REQUEST_ERR: 'HierarchyRequestError',
        WRONG_DOCUMENT_ERR: 'WrongDocumentError',
        INVALID_CHARACTER_ERR: 'InvalidCharacterError',
        NO_MODIFICATION_ALLOWED_ERR: 'NoModificationAllowedError',
        NOT_FOUND_ERR: 'NotFoundError',
        NOT_SUPPORTED_ERR: 'NotSupportedError',
        INUSE_ATTRIBUTE_ERR: 'InUseAttributeError',
        INVALID_STATE_ERR: 'InvalidStateError',
        SYNTAX_ERR: 'SyntaxError',
        INVALID_MODIFICATION_ERR: 'InvalidModificationError',
        NAMESPACE_ERR: 'NamespaceError',
        INVALID_ACCESS_ERR: 'InvalidAccessError',
        TYPE_MISMATCH_ERR: 'TypeMismatchError',
        SECURITY_ERR: 'SecurityError',
        NETWORK_ERR: 'NetworkError',
        ABORT_ERR: 'AbortError',
        URL_MISMATCH_ERR: 'URLMismatchError',
        QUOTA_EXCEEDED_ERR: 'QuotaExceededError',
        TIMEOUT_ERR: 'TimeoutError',
        INVALID_NODE_TYPE_ERR: 'InvalidNodeTypeError',
        DATA_CLONE_ERR: 'DataCloneError'
      };
      var name_code_map = {
        IndexSizeError: 1,
        HierarchyRequestError: 3,
        WrongDocumentError: 4,
        InvalidCharacterError: 5,
        NoModificationAllowedError: 7,
        NotFoundError: 8,
        NotSupportedError: 9,
        InUseAttributeError: 10,
        InvalidStateError: 11,
        SyntaxError: 12,
        InvalidModificationError: 13,
        NamespaceError: 14,
        InvalidAccessError: 15,
        TypeMismatchError: 17,
        SecurityError: 18,
        NetworkError: 19,
        AbortError: 20,
        URLMismatchError: 21,
        QuotaExceededError: 22,
        TimeoutError: 23,
        InvalidNodeTypeError: 24,
        DataCloneError: 25,
        EncodingError: 0,
        NotReadableError: 0,
        UnknownError: 0,
        ConstraintError: 0,
        DataError: 0,
        TransactionInactiveError: 0,
        ReadOnlyError: 0,
        VersionError: 0,
        OperationError: 0,
        NotAllowedError: 0,
        OptOutError: 0
      };
      var code_name_map = {};
      for (var key in name_code_map) {
        if (name_code_map[key] > 0) {
          code_name_map[name_code_map[key]] = key;
        }
      }
      var required_props = {};
      var name;
      if (typeof type === "number") {
        if (type === 0) {
          throw new AssertionError('Test bug: ambiguous DOMException code 0 passed to assert_throws_dom()');
        } else if (!(type in code_name_map)) {
          throw new AssertionError('Test bug: unrecognized DOMException code "' + type + '" passed to assert_throws_dom()');
        }
        name = code_name_map[type];
        required_props.code = type;
      } else if (typeof type === "string") {
        name = type in codename_name_map ? codename_name_map[type] : type;
        if (!(name in name_code_map)) {
          throw new AssertionError('Test bug: unrecognized DOMException code name or name "' + type + '" passed to assert_throws_dom()');
        }
        required_props.code = name_code_map[name];
      }
      if (required_props.code === 0 || "name" in e && e.name !== e.name.toUpperCase() && e.name !== "DOMException") {
        // New style exception: also test the name property.
        required_props.name = name;
      }
      for (var prop in required_props) {
        assert(prop in e && e[prop] == required_props[prop], assertion_type, description, "${func} threw ${e} that is not a DOMException " + type + ": property ${prop} is equal to ${actual}, expected ${expected}", {
          func: func,
          e: e,
          prop: prop,
          actual: e[prop],
          expected: required_props[prop]
        });
      }

      // Check that the exception is from the right global.  This check is last
      // so more specific, and more informative, checks on the properties can
      // happen in case a totally incorrect exception is thrown.
      assert(e.constructor === constructor, assertion_type, description, "${func} threw an exception from the wrong global", {
        func: func
      });
    }
  }

  /**
   * Assert the provided value is thrown.
   *
   * @param {value} exception The expected exception.
   * @param {Function} func Function which should throw.
   * @param {string} [description] Error description for the case that the error is not thrown.
   */
  function assert_throws_exactly(exception, func, description) {
    assert_throws_exactly_impl(exception, func, description, "assert_throws_exactly");
  }
  expose_assert(assert_throws_exactly, "assert_throws_exactly");

  /**
   * Like assert_throws_exactly but allows specifying the assertion type
   * (assert_throws_exactly or promise_rejects_exactly, in practice).
   */
  function assert_throws_exactly_impl(exception, func, description, assertion_type) {
    try {
      func.call(this);
      assert(false, assertion_type, description, "${func} did not throw", {
        func: func
      });
    } catch (e) {
      if (e instanceof AssertionError) {
        throw e;
      }
      assert(same_value(e, exception), assertion_type, description, "${func} threw ${e} but we expected it to throw ${exception}", {
        func: func,
        e: e,
        exception: exception
      });
    }
  }

  /**
   * Asserts if called. Used to ensure that a specific codepath is
   * not taken e.g. that an error event isn't fired.
   *
   * @param {string} [description] - Description of the condition being tested.
   */
  function assert_unreached(description) {
    assert(false, "assert_unreached", description, "Reached unreachable code");
  }
  expose_assert(assert_unreached, "assert_unreached");

  /**
   * @callback AssertFunc
   * @param {Any} actual
   * @param {Any} expected
   * @param {Any[]} args
   */

  /**
   * Asserts that ``actual`` matches at least one value of ``expected``
   * according to a comparison defined by ``assert_func``.
   *
   * Note that tests with multiple allowed pass conditions are bad
   * practice unless the spec specifically allows multiple
   * behaviours. Test authors should not use this method simply to
   * hide UA bugs.
   *
   * @param {AssertFunc} assert_func - Function to compare actual
   * and expected. It must throw when the comparison fails and
   * return when the comparison passes.
   * @param {Any} actual - Test value.
   * @param {Array} expected_array - Array of possible expected values.
   * @param {Any[]} args - Additional arguments to pass to ``assert_func``.
   */
  function assert_any(assert_func, actual, expected_array) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      args[_key2 - 3] = arguments[_key2];
    }
    var errors = [];
    var passed = false;
    forEach(expected_array, function (expected) {
      try {
        assert_func.apply(this, [actual, expected].concat(args));
        passed = true;
      } catch (e) {
        errors.push(e.message);
      }
    });
    if (!passed) {
      throw new AssertionError(errors.join("\n\n"));
    }
  }
  // FIXME: assert_any cannot use expose_assert, because assert_wrapper does
  // not support nested assert calls (e.g. to assert_func). We need to
  // support bypassing assert_wrapper for the inner asserts here.
  expose(assert_any, "assert_any");

  /**
   * Assert that a feature is implemented, based on a 'truthy' condition.
   *
   * This function should be used to early-exit from tests in which there is
   * no point continuing without support for a non-optional spec or spec
   * feature. For example:
   *
   *     assert_implements(window.Foo, 'Foo is not supported');
   *
   * @param {object} condition The truthy value to test
   * @param {string} [description] Error description for the case that the condition is not truthy.
   */
  function assert_implements(condition, description) {
    assert(!!condition, "assert_implements", description);
  }
  expose_assert(assert_implements, "assert_implements");

  /**
   * Assert that an optional feature is implemented, based on a 'truthy' condition.
   *
   * This function should be used to early-exit from tests in which there is
   * no point continuing without support for an explicitly optional spec or
   * spec feature. For example:
   *
   *     assert_implements_optional(video.canPlayType("video/webm"),
   *                                "webm video playback not supported");
   *
   * @param {object} condition The truthy value to test
   * @param {string} [description] Error description for the case that the condition is not truthy.
   */
  function assert_implements_optional(condition, description) {
    if (!condition) {
      throw new OptionalFeatureUnsupportedError(description);
    }
  }
  expose_assert(assert_implements_optional, "assert_implements_optional");

  /**
   * @class
   *
   * A single subtest. A Test is not constructed directly but via the
   * :js:func:`test`, :js:func:`async_test` or :js:func:`promise_test` functions.
   *
   * @param {string} name - This must be unique in a given file and must be
   * invariant between runs.
   *
   */
  function Test(name, properties) {
    if (tests.file_is_test && tests.tests.length) {
      throw new Error("Tried to create a test with file_is_test");
    }
    /** The test name. */
    this.name = name;
    this.phase = tests.is_aborted || tests.phase === tests.phases.COMPLETE ? this.phases.COMPLETE : this.phases.INITIAL;

    /** The test status code.*/
    this.status = this.NOTRUN;
    this.timeout_id = null;
    this.index = null;
    this.properties = properties || {};
    this.timeout_length = settings.test_timeout;
    if (this.timeout_length !== null) {
      this.timeout_length *= tests.timeout_multiplier;
    }

    /** A message indicating the reason for test failure. */
    this.message = null;
    /** Stack trace in case of failure. */
    this.stack = null;
    this.steps = [];
    this._is_promise_test = false;
    this.cleanup_callbacks = [];
    this._user_defined_cleanup_count = 0;
    this._done_callbacks = [];
    if (typeof AbortController === "function") {
      this._abortController = new AbortController();
    }

    // Tests declared following harness completion are likely an indication
    // of a programming error, but they cannot be reported
    // deterministically.
    if (tests.phase === tests.phases.COMPLETE) {
      return;
    }
    tests.push(this);
  }

  /**
   * Enum of possible test statuses.
   *
   * :values:
   *   - ``PASS``
   *   - ``FAIL``
   *   - ``TIMEOUT``
   *   - ``NOTRUN``
   *   - ``PRECONDITION_FAILED``
   */
  Test.statuses = {
    PASS: 0,
    FAIL: 1,
    TIMEOUT: 2,
    NOTRUN: 3,
    PRECONDITION_FAILED: 4
  };
  Test.prototype = merge({}, Test.statuses);
  Test.prototype.phases = {
    INITIAL: 0,
    STARTED: 1,
    HAS_RESULT: 2,
    CLEANING: 3,
    COMPLETE: 4
  };
  Test.prototype.status_formats = {
    0: "Pass",
    1: "Fail",
    2: "Timeout",
    3: "Not Run",
    4: "Optional Feature Unsupported"
  };
  Test.prototype.format_status = function () {
    return this.status_formats[this.status];
  };
  Test.prototype.structured_clone = function () {
    if (!this._structured_clone) {
      var msg = this.message;
      msg = msg ? String(msg) : msg;
      this._structured_clone = merge({
        name: String(this.name),
        properties: merge({}, this.properties),
        phases: merge({}, this.phases)
      }, Test.statuses);
    }
    this._structured_clone.status = this.status;
    this._structured_clone.message = this.message;
    this._structured_clone.stack = this.stack;
    this._structured_clone.index = this.index;
    this._structured_clone.phase = this.phase;
    return this._structured_clone;
  };

  /**
   * Run a single step of an ongoing test.
   *
   * @param {string} func - Callback function to run as a step. If
   * this throws an :js:func:`AssertionError`, or any other
   * exception, the :js:class:`Test` status is set to ``FAIL``.
   * @param {Object} [this_obj] - The object to use as the this
   * value when calling ``func``. Defaults to the  :js:class:`Test` object.
   */
  Test.prototype.step = function (func, this_obj) {
    if (this.phase > this.phases.STARTED) {
      return;
    }
    if (settings.debug && this.phase !== this.phases.STARTED) {
      console.log("TEST START", this.name);
    }
    this.phase = this.phases.STARTED;
    //If we don't get a result before the harness times out that will be a test timeout
    this.set_status(this.TIMEOUT, "Test timed out");
    tests.started = true;
    tests.current_test = this;
    tests.notify_test_state(this);
    if (this.timeout_id === null) {
      this.set_timeout();
    }
    this.steps.push(func);
    if (arguments.length === 1) {
      this_obj = this;
    }
    if (settings.debug) {
      console.debug("TEST STEP", this.name);
    }
    try {
      return func.apply(this_obj, Array.prototype.slice.call(arguments, 2));
    } catch (e) {
      if (this.phase >= this.phases.HAS_RESULT) {
        return;
      }
      var status = e instanceof OptionalFeatureUnsupportedError ? this.PRECONDITION_FAILED : this.FAIL;
      var message = String(_typeof(e) === "object" && e !== null ? e.message : e);
      var stack = e.stack ? e.stack : null;
      this.set_status(status, message, stack);
      this.phase = this.phases.HAS_RESULT;
      this.done();
    } finally {
      this.current_test = null;
    }
  };

  /**
   * Wrap a function so that it runs as a step of the current test.
   *
   * This allows creating a callback function that will run as a
   * test step.
   *
   * @example
   * let t = async_test("Example");
   * onload = t.step_func(e => {
   *   assert_equals(e.name, "load");
   *   // Mark the test as complete.
   *   t.done();
   * })
   *
   * @param {string} func - Function to run as a step. If this
   * throws an :js:func:`AssertionError`, or any other exception,
   * the :js:class:`Test` status is set to ``FAIL``.
   * @param {Object} [this_obj] - The object to use as the this
   * value when calling ``func``. Defaults to the :js:class:`Test` object.
   */
  Test.prototype.step_func = function (func, this_obj) {
    var test_this = this;
    if (arguments.length === 1) {
      this_obj = test_this;
    }
    return function () {
      return test_this.step.apply(test_this, [func, this_obj].concat(Array.prototype.slice.call(arguments)));
    };
  };

  /**
   * Wrap a function so that it runs as a step of the current test,
   * and automatically marks the test as complete if the function
   * returns without error.
   *
   * @param {string} func - Function to run as a step. If this
   * throws an :js:func:`AssertionError`, or any other exception,
   * the :js:class:`Test` status is set to ``FAIL``. If it returns
   * without error the status is set to ``PASS``.
   * @param {Object} [this_obj] - The object to use as the this
   * value when calling `func`. Defaults to the :js:class:`Test` object.
   */
  Test.prototype.step_func_done = function (func, this_obj) {
    var test_this = this;
    if (arguments.length === 1) {
      this_obj = test_this;
    }
    return function () {
      if (func) {
        test_this.step.apply(test_this, [func, this_obj].concat(Array.prototype.slice.call(arguments)));
      }
      test_this.done();
    };
  };

  /**
   * Return a function that automatically sets the current test to
   * ``FAIL`` if it's called.
   *
   * @param {string} [description] - Error message to add to assert
   * in case of failure.
   *
   */
  Test.prototype.unreached_func = function (description) {
    return this.step_func(function () {
      assert_unreached(description);
    });
  };

  /**
   * Run a function as a step of the test after a given timeout.
   *
   * This multiplies the timeout by the global timeout multiplier to
   * account for the expected execution speed of the current test
   * environment. For example ``test.step_timeout(f, 2000)`` with a
   * timeout multiplier of 2 will wait for 4000ms before calling ``f``.
   *
   * In general it's encouraged to use :js:func:`Test.step_wait` or
   * :js:func:`step_wait_func` in preference to this function where possible,
   * as they provide better test performance.
   *
   * @param {Function} func - Function to run as a test
   * step.
   * @param {number} timeout - Time in ms to wait before running the
   * test step. The actual wait time is ``timeout`` x
   * ``timeout_multiplier``.
   *
   */
  Test.prototype.step_timeout = function (func, timeout) {
    var test_this = this;
    var args = Array.prototype.slice.call(arguments, 2);
    var local_set_timeout = typeof global_scope.setTimeout === "undefined" ? fake_set_timeout : setTimeout;
    return local_set_timeout(this.step_func(function () {
      return func.apply(test_this, args);
    }), timeout * tests.timeout_multiplier);
  };

  /**
   * Poll for a function to return true, and call a callback
   * function once it does, or assert if a timeout is
   * reached. This is preferred over a simple step_timeout
   * whenever possible since it allows the timeout to be longer
   * to reduce intermittents without compromising test execution
   * speed when the condition is quickly met.
   *
   * @param {Function} cond A function taking no arguments and
   *                        returning a boolean or a Promise. The callback is
   *                        called when this function returns true, or the
   *                        returned Promise is resolved with true.
   * @param {Function} func A function taking no arguments to call once
   *                        the condition is met.
   * @param {string} [description] Error message to add to assert in case of
   *                               failure.
   * @param {number} timeout Timeout in ms. This is multiplied by the global
   *                         timeout_multiplier
   * @param {number} interval Polling interval in ms
   *
   */
  Test.prototype.step_wait_func = function (cond, func, description) {
    var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3000;
    var interval = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
    var timeout_full = timeout * tests.timeout_multiplier;
    var remaining = Math.ceil(timeout_full / interval);
    var test_this = this;
    var local_set_timeout = typeof global_scope.setTimeout === 'undefined' ? fake_set_timeout : setTimeout;
    var step = test_this.step_func(function (result) {
      if (result) {
        func();
      } else {
        if (remaining === 0) {
          assert(false, "step_wait_func", description, "Timed out waiting on condition");
        }
        remaining--;
        local_set_timeout(wait_for_inner, interval);
      }
    });
    var wait_for_inner = test_this.step_func(function () {
      Promise.resolve(cond()).then(step, test_this.unreached_func("step_wait_func"));
    });
    wait_for_inner();
  };

  /**
   * Poll for a function to return true, and invoke a callback
   * followed by this.done() once it does, or assert if a timeout
   * is reached. This is preferred over a simple step_timeout
   * whenever possible since it allows the timeout to be longer
   * to reduce intermittents without compromising test execution speed
   * when the condition is quickly met.
   *
   * @example
   * async_test(t => {
   *  const popup = window.open("resources/coop-coep.py?coop=same-origin&coep=&navigate=about:blank");
   *  t.add_cleanup(() => popup.close());
   *  assert_equals(window, popup.opener);
   *
   *  popup.onload = t.step_func(() => {
   *    assert_true(popup.location.href.endsWith("&navigate=about:blank"));
   *    // Use step_wait_func_done as about:blank cannot message back.
   *    t.step_wait_func_done(() => popup.location.href === "about:blank");
   *  });
   * }, "Navigating a popup to about:blank");
   *
   * @param {Function} cond A function taking no arguments and
   *                        returning a boolean or a Promise. The callback is
   *                        called when this function returns true, or the
   *                        returned Promise is resolved with true.
   * @param {Function} func A function taking no arguments to call once
   *                        the condition is met.
   * @param {string} [description] Error message to add to assert in case of
   *                               failure.
   * @param {number} timeout Timeout in ms. This is multiplied by the global
   *                         timeout_multiplier
   * @param {number} interval Polling interval in ms
   *
   */
  Test.prototype.step_wait_func_done = function (cond, func, description) {
    var _this = this;
    var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3000;
    var interval = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
    this.step_wait_func(cond, function () {
      if (func) {
        func();
      }
      _this.done();
    }, description, timeout, interval);
  };

  /**
   * Poll for a function to return true, and resolve a promise
   * once it does, or assert if a timeout is reached. This is
   * preferred over a simple step_timeout whenever possible
   * since it allows the timeout to be longer to reduce
   * intermittents without compromising test execution speed
   * when the condition is quickly met.
   *
   * @example
   * promise_test(async t => {
   *  // …
   * await t.step_wait(() => frame.contentDocument === null, "Frame navigated to a cross-origin document");
   * // …
   * }, "");
   *
   * @param {Function} cond A function taking no arguments and
   *                        returning a boolean or a Promise.
   * @param {string} [description] Error message to add to assert in case of
   *                              failure.
   * @param {number} timeout Timeout in ms. This is multiplied by the global
   *                         timeout_multiplier
   * @param {number} interval Polling interval in ms
   * @returns {Promise} Promise resolved once cond is met.
   *
   */
  Test.prototype.step_wait = function (cond, description) {
    var _this2 = this;
    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
    var interval = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
    return new Promise(function (resolve) {
      _this2.step_wait_func(cond, resolve, description, timeout, interval);
    });
  };

  /*
   * Private method for registering cleanup functions. `testharness.js`
   * internals should use this method instead of the public `add_cleanup`
   * method in order to hide implementation details from the harness status
   * message in the case errors.
   */
  Test.prototype._add_cleanup = function (callback) {
    this.cleanup_callbacks.push(callback);
  };

  /**
   * Schedule a function to be run after the test result is known, regardless
   * of passing or failing state.
   *
   * The behavior of this function will not
   * influence the result of the test, but if an exception is thrown, the
   * test harness will report an error.
   *
   * @param {Function} callback - The cleanup function to run. This
   * is called with no arguments.
   */
  Test.prototype.add_cleanup = function (callback) {
    this._user_defined_cleanup_count += 1;
    this._add_cleanup(callback);
  };
  Test.prototype.set_timeout = function () {
    if (this.timeout_length !== null) {
      var this_obj = this;
      this.timeout_id = setTimeout(function () {
        this_obj.timeout();
      }, this.timeout_length);
    }
  };
  Test.prototype.set_status = function (status, message, stack) {
    this.status = status;
    this.message = message;
    this.stack = stack ? stack : null;
  };

  /**
   * Manually set the test status to ``TIMEOUT``.
   */
  Test.prototype.timeout = function () {
    this.timeout_id = null;
    this.set_status(this.TIMEOUT, "Test timed out");
    this.phase = this.phases.HAS_RESULT;
    this.done();
  };

  /**
   * Manually set the test status to ``TIMEOUT``.
   *
   * Alias for `Test.timeout <#Test.timeout>`_.
   */
  Test.prototype.force_timeout = function () {
    return this.timeout();
  };

  /**
   * Mark the test as complete.
   *
   * This sets the test status to ``PASS`` if no other status was
   * already recorded. Any subsequent attempts to run additional
   * test steps will be ignored.
   *
   * After setting the test status any test cleanup functions will
   * be run.
   */
  Test.prototype.done = function () {
    if (this.phase >= this.phases.CLEANING) {
      return;
    }
    if (this.phase <= this.phases.STARTED) {
      this.set_status(this.PASS, null);
    }
    if (global_scope.clearTimeout) {
      clearTimeout(this.timeout_id);
    }
    if (settings.debug) {
      console.log("TEST DONE", this.status, this.name);
    }
    this.cleanup();
  };
  function add_test_done_callback(test, callback) {
    if (test.phase === test.phases.COMPLETE) {
      callback();
      return;
    }
    test._done_callbacks.push(callback);
  }

  /*
   * Invoke all specified cleanup functions. If one or more produce an error,
   * the context is in an unpredictable state, so all further testing should
   * be cancelled.
   */
  Test.prototype.cleanup = function () {
    var errors = [];
    var bad_value_count = 0;
    function on_error(e) {
      errors.push(e);
      // Abort tests immediately so that tests declared within subsequent
      // cleanup functions are not run.
      tests.abort();
    }
    var this_obj = this;
    var results = [];
    this.phase = this.phases.CLEANING;
    if (this._abortController) {
      this._abortController.abort("Test cleanup");
    }
    forEach(this.cleanup_callbacks, function (cleanup_callback) {
      var result;
      try {
        result = cleanup_callback();
      } catch (e) {
        on_error(e);
        return;
      }
      if (!is_valid_cleanup_result(this_obj, result)) {
        bad_value_count += 1;
        // Abort tests immediately so that tests declared
        // within subsequent cleanup functions are not run.
        tests.abort();
      }
      results.push(result);
    });
    if (!this._is_promise_test) {
      cleanup_done(this_obj, errors, bad_value_count);
    } else {
      all_async(results, function (result, done) {
        if (result && typeof result.then === "function") {
          result.then(null, on_error).then(done);
        } else {
          done();
        }
      }, function () {
        cleanup_done(this_obj, errors, bad_value_count);
      });
    }
  };

  /*
   * Determine if the return value of a cleanup function is valid for a given
   * test. Any test may return the value `undefined`. Tests created with
   * `promise_test` may alternatively return "thenable" object values.
   */
  function is_valid_cleanup_result(test, result) {
    if (result === undefined) {
      return true;
    }
    if (test._is_promise_test) {
      return result && typeof result.then === "function";
    }
    return false;
  }
  function cleanup_done(test, errors, bad_value_count) {
    if (errors.length || bad_value_count) {
      var total = test._user_defined_cleanup_count;
      tests.status.status = tests.status.ERROR;
      tests.status.stack = null;
      tests.status.message = "Test named '" + test.name + "' specified " + total + " 'cleanup' function" + (total > 1 ? "s" : "");
      if (errors.length) {
        tests.status.message += ", and " + errors.length + " failed";
        tests.status.stack = _typeof(errors[0]) === "object" && errors[0].hasOwnProperty("stack") ? errors[0].stack : null;
      }
      if (bad_value_count) {
        var type = test._is_promise_test ? "non-thenable" : "non-undefined";
        tests.status.message += ", and " + bad_value_count + " returned a " + type + " value";
      }
      tests.status.message += ".";
    }
    test.phase = test.phases.COMPLETE;
    tests.result(test);
    forEach(test._done_callbacks, function (callback) {
      callback();
    });
    test._done_callbacks.length = 0;
  }

  /**
   * Gives an AbortSignal that will be aborted when the test finishes.
   */
  Test.prototype.get_signal = function () {
    if (!this._abortController) {
      throw new Error("AbortController is not supported in this browser");
    }
    return this._abortController.signal;
  };

  /**
   * A RemoteTest object mirrors a Test object on a remote worker. The
   * associated RemoteWorker updates the RemoteTest object in response to
   * received events. In turn, the RemoteTest object replicates these events
   * on the local document. This allows listeners (test result reporting
   * etc..) to transparently handle local and remote events.
   */
  function RemoteTest(clone) {
    var this_obj = this;
    Object.keys(clone).forEach(function (key) {
      this_obj[key] = clone[key];
    });
    this.index = null;
    this.phase = this.phases.INITIAL;
    this.update_state_from(clone);
    this._done_callbacks = [];
    tests.push(this);
  }
  RemoteTest.prototype.structured_clone = function () {
    var clone = {};
    Object.keys(this).forEach(function (key) {
      var value = this[key];
      // `RemoteTest` instances are responsible for managing
      // their own "done" callback functions, so those functions
      // are not relevant in other execution contexts. Because of
      // this (and because Function values cannot be serialized
      // for cross-realm transmittance), the property should not
      // be considered when cloning instances.
      if (key === '_done_callbacks') {
        return;
      }
      if (_typeof(value) === "object" && value !== null) {
        clone[key] = merge({}, value);
      } else {
        clone[key] = value;
      }
    }.bind(this));
    clone.phases = merge({}, this.phases);
    return clone;
  };

  /**
   * `RemoteTest` instances are objects which represent tests running in
   * another realm. They do not define "cleanup" functions (if necessary,
   * such functions are defined on the associated `Test` instance within the
   * external realm). However, `RemoteTests` may have "done" callbacks (e.g.
   * as attached by the `Tests` instance responsible for tracking the overall
   * test status in the parent realm). The `cleanup` method delegates to
   * `done` in order to ensure that such callbacks are invoked following the
   * completion of the `RemoteTest`.
   */
  RemoteTest.prototype.cleanup = function () {
    this.done();
  };
  RemoteTest.prototype.phases = Test.prototype.phases;
  RemoteTest.prototype.update_state_from = function (clone) {
    this.status = clone.status;
    this.message = clone.message;
    this.stack = clone.stack;
    if (this.phase === this.phases.INITIAL) {
      this.phase = this.phases.STARTED;
    }
  };
  RemoteTest.prototype.done = function () {
    this.phase = this.phases.COMPLETE;
    forEach(this._done_callbacks, function (callback) {
      callback();
    });
  };
  RemoteTest.prototype.format_status = function () {
    return Test.prototype.status_formats[this.status];
  };

  /*
   * A RemoteContext listens for test events from a remote test context, such
   * as another window or a worker. These events are then used to construct
   * and maintain RemoteTest objects that mirror the tests running in the
   * remote context.
   *
   * An optional third parameter can be used as a predicate to filter incoming
   * MessageEvents.
   */
  function RemoteContext(remote, message_target, message_filter) {
    this.running = true;
    this.started = false;
    this.tests = new Array();
    this.early_exception = null;
    var this_obj = this;
    // If remote context is cross origin assigning to onerror is not
    // possible, so silently catch those errors.
    try {
      remote.onerror = function (error) {
        this_obj.remote_error(error);
      };
    } catch (e) {
      // Ignore.
    }

    // Keeping a reference to the remote object and the message handler until
    // remote_done() is seen prevents the remote object and its message channel
    // from going away before all the messages are dispatched.
    this.remote = remote;
    this.message_target = message_target;
    this.message_handler = function (message) {
      var passesFilter = !message_filter || message_filter(message);
      // The reference to the `running` property in the following
      // condition is unnecessary because that value is only set to
      // `false` after the `message_handler` function has been
      // unsubscribed.
      // TODO: Simplify the condition by removing the reference.
      if (this_obj.running && message.data && passesFilter && message.data.type in this_obj.message_handlers) {
        this_obj.message_handlers[message.data.type].call(this_obj, message.data);
      }
    };
    if (self.Promise) {
      this.done = new Promise(function (resolve) {
        this_obj.doneResolve = resolve;
      });
    }
    this.message_target.addEventListener("message", this.message_handler);
  }
  RemoteContext.prototype.remote_error = function (error) {
    if (error.preventDefault) {
      error.preventDefault();
    }

    // Defer interpretation of errors until the testing protocol has
    // started and the remote test's `allow_uncaught_exception` property
    // is available.
    if (!this.started) {
      this.early_exception = error;
    } else if (!this.allow_uncaught_exception) {
      this.report_uncaught(error);
    }
  };
  RemoteContext.prototype.report_uncaught = function (error) {
    var message = error.message || String(error);
    var filename = error.filename ? " " + error.filename : "";
    // FIXME: Display remote error states separately from main document
    // error state.
    tests.set_status(tests.status.ERROR, "Error in remote" + filename + ": " + message, error.stack);
  };
  RemoteContext.prototype.start = function (data) {
    this.started = true;
    this.allow_uncaught_exception = data.properties.allow_uncaught_exception;
    if (this.early_exception && !this.allow_uncaught_exception) {
      this.report_uncaught(this.early_exception);
    }
  };
  RemoteContext.prototype.test_state = function (data) {
    var remote_test = this.tests[data.test.index];
    if (!remote_test) {
      remote_test = new RemoteTest(data.test);
      this.tests[data.test.index] = remote_test;
    }
    remote_test.update_state_from(data.test);
    tests.notify_test_state(remote_test);
  };
  RemoteContext.prototype.test_done = function (data) {
    var remote_test = this.tests[data.test.index];
    remote_test.update_state_from(data.test);
    remote_test.done();
    tests.result(remote_test);
  };
  RemoteContext.prototype.remote_done = function (data) {
    if (tests.status.status === null && data.status.status !== data.status.OK) {
      tests.set_status(data.status.status, data.status.message, data.status.stack);
    }
    var _iterator = _createForOfIteratorHelper(data.asserts),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _assert = _step.value;
        var record = new AssertRecord();
        record.assert_name = _assert.assert_name;
        record.args = _assert.args;
        record.test = _assert.test != null ? this.tests[_assert.test.index] : null;
        record.status = _assert.status;
        record.stack = _assert.stack;
        tests.asserts_run.push(record);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    this.message_target.removeEventListener("message", this.message_handler);
    this.running = false;

    // If remote context is cross origin assigning to onerror is not
    // possible, so silently catch those errors.
    try {
      this.remote.onerror = null;
    } catch (e) {
      // Ignore.
    }
    this.remote = null;
    this.message_target = null;
    if (this.doneResolve) {
      this.doneResolve();
    }
    if (tests.all_done()) {
      tests.complete();
    }
  };
  RemoteContext.prototype.message_handlers = {
    start: RemoteContext.prototype.start,
    test_state: RemoteContext.prototype.test_state,
    result: RemoteContext.prototype.test_done,
    complete: RemoteContext.prototype.remote_done
  };

  /**
   * @class
   * Status of the overall harness
   */
  function TestsStatus() {
    /** The status code */
    this.status = null;
    /** Message in case of failure */
    this.message = null;
    /** Stack trace in case of an exception. */
    this.stack = null;
  }

  /**
   * Enum of possible harness statuses.
   *
   * :values:
   *   - ``OK``
   *   - ``ERROR``
   *   - ``TIMEOUT``
   *   - ``PRECONDITION_FAILED``
   */
  TestsStatus.statuses = {
    OK: 0,
    ERROR: 1,
    TIMEOUT: 2,
    PRECONDITION_FAILED: 3
  };
  TestsStatus.prototype = merge({}, TestsStatus.statuses);
  TestsStatus.prototype.formats = {
    0: "OK",
    1: "Error",
    2: "Timeout",
    3: "Optional Feature Unsupported"
  };
  TestsStatus.prototype.structured_clone = function () {
    if (!this._structured_clone) {
      var msg = this.message;
      msg = msg ? String(msg) : msg;
      this._structured_clone = merge({
        status: this.status,
        message: msg,
        stack: this.stack
      }, TestsStatus.statuses);
    }
    return this._structured_clone;
  };
  TestsStatus.prototype.format_status = function () {
    return this.formats[this.status];
  };

  /**
   * @class
   * Record of an assert that ran.
   *
   * @param {Test} test - The test which ran the assert.
   * @param {string} assert_name - The function name of the assert.
   * @param {Any} args - The arguments passed to the assert function.
   */
  function AssertRecord(test, assert_name) {
    var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    /** Name of the assert that ran */
    this.assert_name = assert_name;
    /** Test that ran the assert */
    this.test = test;
    // Avoid keeping complex objects alive
    /** Stringification of the arguments that were passed to the assert function */
    this.args = args.map(function (x) {
      return format_value(x).replace(/\n/g, " ");
    });
    /** Status of the assert */
    this.status = null;
  }
  AssertRecord.prototype.structured_clone = function () {
    return {
      assert_name: this.assert_name,
      test: this.test ? this.test.structured_clone() : null,
      args: this.args,
      status: this.status
    };
  };
  function Tests() {
    this.tests = [];
    this.num_pending = 0;
    this.phases = {
      INITIAL: 0,
      SETUP: 1,
      HAVE_TESTS: 2,
      HAVE_RESULTS: 3,
      COMPLETE: 4
    };
    this.phase = this.phases.INITIAL;
    this.properties = {};
    this.wait_for_finish = false;
    this.processing_callbacks = false;
    this.allow_uncaught_exception = false;
    this.file_is_test = false;
    // This value is lazily initialized in order to avoid introducing a
    // dependency on ECMAScript 2015 Promises to all tests.
    this.promise_tests = null;
    this.promise_setup_called = false;
    this.timeout_multiplier = 1;
    this.timeout_length = test_environment.test_timeout();
    this.timeout_id = null;
    this.start_callbacks = [];
    this.test_state_callbacks = [];
    this.test_done_callbacks = [];
    this.all_done_callbacks = [];
    this.hide_test_state = false;
    this.pending_remotes = [];
    this.current_test = null;
    this.asserts_run = [];

    // Track whether output is enabled, and thus whether or not we should
    // track asserts.
    //
    // On workers we don't get properties set from testharnessreport.js, so
    // we don't know whether or not to track asserts. To avoid the
    // resulting performance hit, we assume we are not meant to. This means
    // that assert tracking does not function on workers.
    this.output = settings.output && 'document' in global_scope;
    this.status = new TestsStatus();
    var this_obj = this;
    test_environment.add_on_loaded_callback(function () {
      if (this_obj.all_done()) {
        this_obj.complete();
      }
    });
    this.set_timeout();
  }
  Tests.prototype.setup = function (func, properties) {
    if (this.phase >= this.phases.HAVE_RESULTS) {
      return;
    }
    if (this.phase < this.phases.SETUP) {
      this.phase = this.phases.SETUP;
    }
    this.properties = properties;
    for (var p in properties) {
      if (properties.hasOwnProperty(p)) {
        var value = properties[p];
        if (p == "allow_uncaught_exception") {
          this.allow_uncaught_exception = value;
        } else if (p == "explicit_done" && value) {
          this.wait_for_finish = true;
        } else if (p == "explicit_timeout" && value) {
          this.timeout_length = null;
          if (this.timeout_id) {
            clearTimeout(this.timeout_id);
          }
        } else if (p == "single_test" && value) {
          this.set_file_is_test();
        } else if (p == "timeout_multiplier") {
          this.timeout_multiplier = value;
          if (this.timeout_length) {
            this.timeout_length *= this.timeout_multiplier;
          }
        } else if (p == "hide_test_state") {
          this.hide_test_state = value;
        } else if (p == "output") {
          this.output = value;
        } else if (p === "debug") {
          settings.debug = value;
        }
      }
    }
    if (func) {
      try {
        func();
      } catch (e) {
        this.status.status = e instanceof OptionalFeatureUnsupportedError ? this.status.PRECONDITION_FAILED : this.status.ERROR;
        this.status.message = String(e);
        this.status.stack = e.stack ? e.stack : null;
        this.complete();
      }
    }
    this.set_timeout();
  };
  Tests.prototype.set_file_is_test = function () {
    if (this.tests.length > 0) {
      throw new Error("Tried to set file as test after creating a test");
    }
    this.wait_for_finish = true;
    this.file_is_test = true;
    // Create the test, which will add it to the list of tests
    tests.current_test = async_test();
  };
  Tests.prototype.set_status = function (status, message, stack) {
    this.status.status = status;
    this.status.message = message;
    this.status.stack = stack ? stack : null;
  };
  Tests.prototype.set_timeout = function () {
    if (global_scope.clearTimeout) {
      var this_obj = this;
      clearTimeout(this.timeout_id);
      if (this.timeout_length !== null) {
        this.timeout_id = setTimeout(function () {
          this_obj.timeout();
        }, this.timeout_length);
      }
    }
  };
  Tests.prototype.timeout = function () {
    var test_in_cleanup = null;
    if (this.status.status === null) {
      forEach(this.tests, function (test) {
        // No more than one test is expected to be in the
        // "CLEANUP" phase at any time
        if (test.phase === test.phases.CLEANING) {
          test_in_cleanup = test;
        }
        test.phase = test.phases.COMPLETE;
      });

      // Timeouts that occur while a test is in the "cleanup" phase
      // indicate that some global state was not properly reverted. This
      // invalidates the overall test execution, so the timeout should be
      // reported as an error and cancel the execution of any remaining
      // tests.
      if (test_in_cleanup) {
        this.status.status = this.status.ERROR;
        this.status.message = "Timeout while running cleanup for " + "test named \"" + test_in_cleanup.name + "\".";
        tests.status.stack = null;
      } else {
        this.status.status = this.status.TIMEOUT;
      }
    }
    this.complete();
  };
  Tests.prototype.end_wait = function () {
    this.wait_for_finish = false;
    if (this.all_done()) {
      this.complete();
    }
  };
  Tests.prototype.push = function (test) {
    if (this.phase < this.phases.HAVE_TESTS) {
      this.start();
    }
    this.num_pending++;
    test.index = this.tests.push(test);
    this.notify_test_state(test);
  };
  Tests.prototype.notify_test_state = function (test) {
    var this_obj = this;
    forEach(this.test_state_callbacks, function (callback) {
      callback(test, this_obj);
    });
  };
  Tests.prototype.all_done = function () {
    return (this.tests.length > 0 || this.pending_remotes.length > 0) && test_environment.all_loaded && (this.num_pending === 0 || this.is_aborted) && !this.wait_for_finish && !this.processing_callbacks && !this.pending_remotes.some(function (w) {
      return w.running;
    });
  };
  Tests.prototype.start = function () {
    this.phase = this.phases.HAVE_TESTS;
    this.notify_start();
  };
  Tests.prototype.notify_start = function () {
    var this_obj = this;
    forEach(this.start_callbacks, function (callback) {
      callback(this_obj.properties);
    });
  };
  Tests.prototype.result = function (test) {
    // If the harness has already transitioned beyond the `HAVE_RESULTS`
    // phase, subsequent tests should not cause it to revert.
    if (this.phase <= this.phases.HAVE_RESULTS) {
      this.phase = this.phases.HAVE_RESULTS;
    }
    this.num_pending--;
    this.notify_result(test);
  };
  Tests.prototype.notify_result = function (test) {
    var this_obj = this;
    this.processing_callbacks = true;
    forEach(this.test_done_callbacks, function (callback) {
      callback(test, this_obj);
    });
    this.processing_callbacks = false;
    if (this_obj.all_done()) {
      this_obj.complete();
    }
  };
  Tests.prototype.complete = function () {
    if (this.phase === this.phases.COMPLETE) {
      return;
    }
    var this_obj = this;
    var all_complete = function all_complete() {
      this_obj.phase = this_obj.phases.COMPLETE;
      this_obj.notify_complete();
    };
    var incomplete = filter(this.tests, function (test) {
      return test.phase < test.phases.COMPLETE;
    });

    /**
     * To preserve legacy behavior, overall test completion must be
     * signaled synchronously.
     */
    if (incomplete.length === 0) {
      all_complete();
      return;
    }
    all_async(incomplete, function (test, testDone) {
      if (test.phase === test.phases.INITIAL) {
        test.phase = test.phases.COMPLETE;
        testDone();
      } else {
        add_test_done_callback(test, testDone);
        test.cleanup();
      }
    }, all_complete);
  };
  Tests.prototype.set_assert = function (assert_name, args) {
    this.asserts_run.push(new AssertRecord(this.current_test, assert_name, args));
  };
  Tests.prototype.set_assert_status = function (index, status, stack) {
    var assert_record = this.asserts_run[index];
    assert_record.status = status;
    assert_record.stack = stack;
  };

  /**
   * Update the harness status to reflect an unrecoverable harness error that
   * should cancel all further testing. Update all previously-defined tests
   * which have not yet started to indicate that they will not be executed.
   */
  Tests.prototype.abort = function () {
    this.status.status = this.status.ERROR;
    this.is_aborted = true;
    forEach(this.tests, function (test) {
      if (test.phase === test.phases.INITIAL) {
        test.phase = test.phases.COMPLETE;
      }
    });
  };

  /*
   * Determine if any tests share the same `name` property. Return an array
   * containing the names of any such duplicates.
   */
  Tests.prototype.find_duplicates = function () {
    var names = Object.create(null);
    var duplicates = [];
    forEach(this.tests, function (test) {
      if (test.name in names && duplicates.indexOf(test.name) === -1) {
        duplicates.push(test.name);
      }
      names[test.name] = true;
    });
    return duplicates;
  };
  function code_unit_str(char) {
    return 'U+' + char.charCodeAt(0).toString(16);
  }
  function sanitize_unpaired_surrogates(str) {
    return str.replace(/([\ud800-\udbff]+)(?![\udc00-\udfff])|(^|[^\ud800-\udbff])([\udc00-\udfff]+)/g, function (_, low, prefix, high) {
      var output = prefix || ""; // prefix may be undefined
      var string = low || high; // only one of these alternates can match
      for (var i = 0; i < string.length; i++) {
        output += code_unit_str(string[i]);
      }
      return output;
    });
  }
  function sanitize_all_unpaired_surrogates(tests) {
    forEach(tests, function (test) {
      var sanitized = sanitize_unpaired_surrogates(test.name);
      if (test.name !== sanitized) {
        test.name = sanitized;
        delete test._structured_clone;
      }
    });
  }
  Tests.prototype.notify_complete = function () {
    var this_obj = this;
    var duplicates;
    if (this.status.status === null) {
      duplicates = this.find_duplicates();

      // Some transports adhere to UTF-8's restriction on unpaired
      // surrogates. Sanitize the titles so that the results can be
      // consistently sent via all transports.
      sanitize_all_unpaired_surrogates(this.tests);

      // Test names are presumed to be unique within test files--this
      // allows consumers to use them for identification purposes.
      // Duplicated names violate this expectation and should therefore
      // be reported as an error.
      if (duplicates.length) {
        this.status.status = this.status.ERROR;
        this.status.message = duplicates.length + ' duplicate test name' + (duplicates.length > 1 ? 's' : '') + ': "' + duplicates.join('", "') + '"';
      } else {
        this.status.status = this.status.OK;
      }
    }
    forEach(this.all_done_callbacks, function (callback) {
      callback(this_obj.tests, this_obj.status, this_obj.asserts_run);
    });
  };

  /*
   * Constructs a RemoteContext that tracks tests from a specific worker.
   */
  Tests.prototype.create_remote_worker = function (worker) {
    var message_port;
    if (is_service_worker(worker)) {
      message_port = navigator.serviceWorker;
      worker.postMessage({
        type: "connect"
      });
    } else if (is_shared_worker(worker)) {
      message_port = worker.port;
      message_port.start();
    } else {
      message_port = worker;
    }
    return new RemoteContext(worker, message_port);
  };

  /*
   * Constructs a RemoteContext that tracks tests from a specific window.
   */
  Tests.prototype.create_remote_window = function (remote) {
    remote.postMessage({
      type: "getmessages"
    }, "*");
    return new RemoteContext(remote, window, function (msg) {
      return msg.source === remote;
    });
  };
  Tests.prototype.fetch_tests_from_worker = function (worker) {
    if (this.phase >= this.phases.COMPLETE) {
      return;
    }
    var remoteContext = this.create_remote_worker(worker);
    this.pending_remotes.push(remoteContext);
    return remoteContext.done;
  };

  /**
   * Get test results from a worker and include them in the current test.
   *
   * @param {Worker|SharedWorker|ServiceWorker|MessagePort} port -
   * Either a worker object or a port connected to a worker which is
   * running tests..
   * @returns {Promise} - A promise that's resolved once all the remote tests are complete.
   */
  function fetch_tests_from_worker(port) {
    return tests.fetch_tests_from_worker(port);
  }
  expose(fetch_tests_from_worker, 'fetch_tests_from_worker');
  Tests.prototype.fetch_tests_from_window = function (remote) {
    if (this.phase >= this.phases.COMPLETE) {
      return;
    }
    var remoteContext = this.create_remote_window(remote);
    this.pending_remotes.push(remoteContext);
    return remoteContext.done;
  };

  /**
   * Aggregate tests from separate windows or iframes
   * into the current document as if they were all part of the same test file.
   *
   * The document of the second window (or iframe) should include
   * ``testharness.js``, but not ``testharnessreport.js``, and use
   * :js:func:`test`, :js:func:`async_test`, and :js:func:`promise_test` in
   * the usual manner.
   *
   * @param {Window} window - The window to fetch tests from.
   */
  function fetch_tests_from_window(window) {
    return tests.fetch_tests_from_window(window);
  }
  expose(fetch_tests_from_window, 'fetch_tests_from_window');

  /**
   * Get test results from a shadow realm and include them in the current test.
   *
   * @param {ShadowRealm} realm - A shadow realm also running the test harness
   * @returns {Promise} - A promise that's resolved once all the remote tests are complete.
   */
  function fetch_tests_from_shadow_realm(realm) {
    var chan = new MessageChannel();
    function receiveMessage(msg_json) {
      chan.port1.postMessage(JSON.parse(msg_json));
    }
    var done = tests.fetch_tests_from_worker(chan.port2);
    realm.evaluate("begin_shadow_realm_tests")(receiveMessage);
    chan.port2.start();
    return done;
  }
  expose(fetch_tests_from_shadow_realm, 'fetch_tests_from_shadow_realm');

  /**
   * Begin running tests in this shadow realm test harness.
   *
   * To be called after all tests have been loaded; it is an error to call
   * this more than once or in a non-Shadow Realm environment
   *
   * @param {Function} postMessage - A function to send test updates to the
   * incubating realm-- accepts JSON-encoded messages in the format used by
   * RemoteContext
   */
  function begin_shadow_realm_tests(postMessage) {
    if (!(test_environment instanceof ShadowRealmTestEnvironment)) {
      throw new Error("begin_shadow_realm_tests called in non-Shadow Realm environment");
    }
    test_environment.begin(function (msg) {
      postMessage(JSON.stringify(msg));
    });
  }
  expose(begin_shadow_realm_tests, 'begin_shadow_realm_tests');

  /**
   * Timeout the tests.
   *
   * This only has an effect when ``explicit_timeout`` has been set
   * in :js:func:`setup`. In other cases any call is a no-op.
   *
   */
  function timeout() {
    if (tests.timeout_length === null) {
      tests.timeout();
    }
  }
  expose(timeout, 'timeout');

  /**
   * Add a callback that's triggered when the first :js:class:`Test` is created.
   *
   * @param {Function} callback - Callback function. This is called
   * without arguments.
   */
  function add_start_callback(callback) {
    tests.start_callbacks.push(callback);
  }

  /**
   * Add a callback that's triggered when a test state changes.
   *
   * @param {Function} callback - Callback function, called with the
   * :js:class:`Test` as the only argument.
   */
  function add_test_state_callback(callback) {
    tests.test_state_callbacks.push(callback);
  }

  /**
   * Add a callback that's triggered when a test result is received.
   *
   * @param {Function} callback - Callback function, called with the
   * :js:class:`Test` as the only argument.
   */
  function add_result_callback(callback) {
    tests.test_done_callbacks.push(callback);
  }

  /**
   * Add a callback that's triggered when all tests are complete.
   *
   * @param {Function} callback - Callback function, called with an
   * array of :js:class:`Test` objects, a :js:class:`TestsStatus`
   * object and an array of :js:class:`AssertRecord` objects. If the
   * debug setting is ``false`` the final argument will be an empty
   * array.
   *
   * For performance reasons asserts are only tracked when the debug
   * setting is ``true``. In other cases the array of asserts will be
   * empty.
   */
  function add_completion_callback(callback) {
    tests.all_done_callbacks.push(callback);
  }
  expose(add_start_callback, 'add_start_callback');
  expose(add_test_state_callback, 'add_test_state_callback');
  expose(add_result_callback, 'add_result_callback');
  expose(add_completion_callback, 'add_completion_callback');
  function remove(array, item) {
    var index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
  function remove_start_callback(callback) {
    remove(tests.start_callbacks, callback);
  }
  function remove_test_state_callback(callback) {
    remove(tests.test_state_callbacks, callback);
  }
  function remove_result_callback(callback) {
    remove(tests.test_done_callbacks, callback);
  }
  function remove_completion_callback(callback) {
    remove(tests.all_done_callbacks, callback);
  }

  /*
   * Output listener
  */

  function Output() {
    this.output_document = document;
    this.output_node = null;
    this.enabled = settings.output;
    this.phase = this.INITIAL;
  }
  Output.prototype.INITIAL = 0;
  Output.prototype.STARTED = 1;
  Output.prototype.HAVE_RESULTS = 2;
  Output.prototype.COMPLETE = 3;
  Output.prototype.setup = function (properties) {
    if (this.phase > this.INITIAL) {
      return;
    }

    //If output is disabled in testharnessreport.js the test shouldn't be
    //able to override that
    this.enabled = this.enabled && (properties.hasOwnProperty("output") ? properties.output : settings.output);
  };
  Output.prototype.init = function (properties) {
    if (this.phase >= this.STARTED) {
      return;
    }
    if (properties.output_document) {
      this.output_document = properties.output_document;
    } else {
      this.output_document = document;
    }
    this.phase = this.STARTED;
  };
  Output.prototype.resolve_log = function () {
    var output_document;
    if (this.output_node) {
      return;
    }
    if (typeof this.output_document === "function") {
      output_document = this.output_document.apply(undefined);
    } else {
      output_document = this.output_document;
    }
    if (!output_document) {
      return;
    }
    var node = output_document.getElementById("log");
    if (!node) {
      if (output_document.readyState === "loading") {
        return;
      }
      node = output_document.createElementNS("http://www.w3.org/1999/xhtml", "div");
      node.id = "log";
      if (output_document.body) {
        output_document.body.appendChild(node);
      } else {
        var root = output_document.documentElement;
        var is_html = root && root.namespaceURI == "http://www.w3.org/1999/xhtml" && root.localName == "html";
        var is_svg = output_document.defaultView && "SVGSVGElement" in output_document.defaultView && root instanceof output_document.defaultView.SVGSVGElement;
        if (is_svg) {
          var foreignObject = output_document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
          foreignObject.setAttribute("width", "100%");
          foreignObject.setAttribute("height", "100%");
          root.appendChild(foreignObject);
          foreignObject.appendChild(node);
        } else if (is_html) {
          root.appendChild(output_document.createElementNS("http://www.w3.org/1999/xhtml", "body")).appendChild(node);
        } else {
          root.appendChild(node);
        }
      }
    }
    this.output_document = output_document;
    this.output_node = node;
  };
  Output.prototype.show_status = function () {
    if (this.phase < this.STARTED) {
      this.init({});
    }
    if (!this.enabled || this.phase === this.COMPLETE) {
      return;
    }
    this.resolve_log();
    if (this.phase < this.HAVE_RESULTS) {
      this.phase = this.HAVE_RESULTS;
    }
    var done_count = tests.tests.length - tests.num_pending;
    if (this.output_node && !tests.hide_test_state) {
      if (done_count < 100 || done_count < 1000 && done_count % 100 === 0 || done_count % 1000 === 0) {
        this.output_node.textContent = "Running, " + done_count + " complete, " + tests.num_pending + " remain";
      }
    }
  };
  Output.prototype.show_results = function (tests, harness_status, asserts_run) {
    if (this.phase >= this.COMPLETE) {
      return;
    }
    if (!this.enabled) {
      return;
    }
    if (!this.output_node) {
      this.resolve_log();
    }
    this.phase = this.COMPLETE;
    var log = this.output_node;
    if (!log) {
      return;
    }
    var output_document = this.output_document;
    while (log.lastChild) {
      log.removeChild(log.lastChild);
    }
    var stylesheet = output_document.createElementNS(xhtml_ns, "style");
    stylesheet.textContent = stylesheetContent;
    var heads = output_document.getElementsByTagName("head");
    if (heads.length) {
      heads[0].appendChild(stylesheet);
    }
    var status_number = {};
    forEach(tests, function (test) {
      var status = test.format_status();
      if (status_number.hasOwnProperty(status)) {
        status_number[status] += 1;
      } else {
        status_number[status] = 1;
      }
    });
    function status_class(status) {
      return status.replace(/\s/g, '').toLowerCase();
    }
    var summary_template = ["section", {
      "id": "summary"
    }, ["h2", {}, "Summary"], function () {
      var status = harness_status.format_status();
      var rv = [["section", {}, ["p", {}, "Harness status: ", ["span", {
        "class": status_class(status)
      }, status]], ["button", {
        "onclick": "let evt = new Event('__test_restart'); " + "let canceled = !window.dispatchEvent(evt);" + "if (!canceled) { location.reload() }"
      }, "Rerun"]]];
      if (harness_status.status === harness_status.ERROR) {
        rv[0].push(["pre", {}, harness_status.message]);
        if (harness_status.stack) {
          rv[0].push(["pre", {}, harness_status.stack]);
        }
      }
      return rv;
    }, ["p", {}, "Found ${num_tests} tests"], function () {
      var rv = [["div", {}]];
      var i = 0;
      while (Test.prototype.status_formats.hasOwnProperty(i)) {
        if (status_number.hasOwnProperty(Test.prototype.status_formats[i])) {
          var status = Test.prototype.status_formats[i];
          rv[0].push(["div", {}, ["label", {}, ["input", {
            type: "checkbox",
            checked: "checked"
          }], status_number[status] + " ", ["span", {
            "class": status_class(status)
          }, status]]]);
        }
        i++;
      }
      return rv;
    }];
    log.appendChild(render(summary_template, {
      num_tests: tests.length
    }, output_document));
    forEach(output_document.querySelectorAll("section#summary label"), function (element) {
      on_event(element, "click", function (e) {
        if (output_document.getElementById("results") === null) {
          e.preventDefault();
          return;
        }
        var result_class = element.querySelector("span[class]").getAttribute("class");
        var style_element = output_document.querySelector("style#hide-" + result_class);
        var input_element = element.querySelector("input");
        if (!style_element && !input_element.checked) {
          style_element = output_document.createElementNS(xhtml_ns, "style");
          style_element.id = "hide-" + result_class;
          style_element.textContent = "table#results > tbody > tr.overall-" + result_class + "{display:none}";
          output_document.body.appendChild(style_element);
        } else if (style_element && input_element.checked) {
          style_element.parentNode.removeChild(style_element);
        }
      });
    });

    // This use of innerHTML plus manual escaping is not recommended in
    // general, but is necessary here for performance.  Using textContent
    // on each individual <td> adds tens of seconds of execution time for
    // large test suites (tens of thousands of tests).
    function escape_html(s) {
      return s.replace(/\&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }
    function has_assertions() {
      for (var i = 0; i < tests.length; i++) {
        if (tests[i].properties.hasOwnProperty("assert")) {
          return true;
        }
      }
      return false;
    }
    function get_assertion(test) {
      if (test.properties.hasOwnProperty("assert")) {
        if (Array.isArray(test.properties.assert)) {
          return test.properties.assert.join(' ');
        }
        return test.properties.assert;
      }
      return '';
    }
    var asserts_run_by_test = new Map();
    asserts_run.forEach(function (assert) {
      if (!asserts_run_by_test.has(assert.test)) {
        asserts_run_by_test.set(assert.test, []);
      }
      asserts_run_by_test.get(assert.test).push(assert);
    });
    function get_asserts_output(test) {
      var asserts = asserts_run_by_test.get(test);
      if (!asserts) {
        return "No asserts ran";
      }
      var rv = "<table>";
      rv += asserts.map(function (assert) {
        var output_fn = "<strong>" + escape_html(assert.assert_name) + "</strong>(";
        var prefix_len = output_fn.length;
        var output_args = assert.args;
        var output_len = output_args.reduce(function (prev, current) {
          return prev + current;
        }, prefix_len);
        if (output_len[output_len.length - 1] > 50) {
          output_args = output_args.map(function (x, i) {
            return (i > 0 ? "  ".repeat(prefix_len) : "") + x + (i < output_args.length - 1 ? ",\n" : "");
          });
        } else {
          output_args = output_args.map(function (x, i) {
            return x + (i < output_args.length - 1 ? ", " : "");
          });
        }
        output_fn += escape_html(output_args.join(""));
        output_fn += ')';
        var output_location;
        if (assert.stack) {
          output_location = assert.stack.split("\n", 1)[0].replace(/@?\w+:\/\/[^ "\/]+(?::\d+)?/g, " ");
        }
        return "<tr class='overall-" + status_class(Test.prototype.status_formats[assert.status]) + "'>" + "<td class='" + status_class(Test.prototype.status_formats[assert.status]) + "'>" + Test.prototype.status_formats[assert.status] + "</td>" + "<td><pre>" + output_fn + (output_location ? "\n" + escape_html(output_location) : "") + "</pre></td></tr>";
      }).join("\n");
      rv += "</table>";
      return rv;
    }
    log.appendChild(document.createElementNS(xhtml_ns, "section"));
    var assertions = has_assertions();
    var html = "<h2>Details</h2><table id='results' " + (assertions ? "class='assertions'" : "") + ">" + "<thead><tr><th>Result</th><th>Test Name</th>" + (assertions ? "<th>Assertion</th>" : "") + "<th>Message</th></tr></thead>" + "<tbody>";
    for (var i = 0; i < tests.length; i++) {
      var test = tests[i];
      html += '<tr class="overall-' + status_class(test.format_status()) + '">' + '<td class="' + status_class(test.format_status()) + '">' + test.format_status() + "</td><td>" + escape_html(test.name) + "</td><td>" + (assertions ? escape_html(get_assertion(test)) + "</td><td>" : "") + escape_html(test.message ? tests[i].message : " ") + (tests[i].stack ? "<pre>" + escape_html(tests[i].stack) + "</pre>" : "");
      if (!(test instanceof RemoteTest)) {
        html += "<details><summary>Asserts run</summary>" + get_asserts_output(test) + "</details>";
      }
      html += "</td></tr>";
    }
    html += "</tbody></table>";
    try {
      log.lastChild.innerHTML = html;
    } catch (e) {
      log.appendChild(document.createElementNS(xhtml_ns, "p")).textContent = "Setting innerHTML for the log threw an exception.";
      log.appendChild(document.createElementNS(xhtml_ns, "pre")).textContent = html;
    }
  };

  /*
   * Template code
   *
   * A template is just a JavaScript structure. An element is represented as:
   *
   * [tag_name, {attr_name:attr_value}, child1, child2]
   *
   * the children can either be strings (which act like text nodes), other templates or
   * functions (see below)
   *
   * A text node is represented as
   *
   * ["{text}", value]
   *
   * String values have a simple substitution syntax; ${foo} represents a variable foo.
   *
   * It is possible to embed logic in templates by using a function in a place where a
   * node would usually go. The function must either return part of a template or null.
   *
   * In cases where a set of nodes are required as output rather than a single node
   * with children it is possible to just use a list
   * [node1, node2, node3]
   *
   * Usage:
   *
   * render(template, substitutions) - take a template and an object mapping
   * variable names to parameters and return either a DOM node or a list of DOM nodes
   *
   * substitute(template, substitutions) - take a template and variable mapping object,
   * make the variable substitutions and return the substituted template
   *
   */

  function is_single_node(template) {
    return typeof template[0] === "string";
  }
  function substitute(template, substitutions) {
    if (typeof template === "function") {
      var replacement = template(substitutions);
      if (!replacement) {
        return null;
      }
      return substitute(replacement, substitutions);
    }
    if (is_single_node(template)) {
      return substitute_single(template, substitutions);
    }
    return filter(map(template, function (x) {
      return substitute(x, substitutions);
    }), function (x) {
      return x !== null;
    });
  }
  function substitute_single(template, substitutions) {
    var substitution_re = /\$\{([^ }]*)\}/g;
    function do_substitution(input) {
      var components = input.split(substitution_re);
      var rv = [];
      for (var i = 0; i < components.length; i += 2) {
        rv.push(components[i]);
        if (components[i + 1]) {
          rv.push(String(substitutions[components[i + 1]]));
        }
      }
      return rv;
    }
    function substitute_attrs(attrs, rv) {
      rv[1] = {};
      for (var name in template[1]) {
        if (attrs.hasOwnProperty(name)) {
          var new_name = do_substitution(name).join("");
          var new_value = do_substitution(attrs[name]).join("");
          rv[1][new_name] = new_value;
        }
      }
    }
    function substitute_children(children, rv) {
      for (var i = 0; i < children.length; i++) {
        if (children[i] instanceof Object) {
          var replacement = substitute(children[i], substitutions);
          if (replacement !== null) {
            if (is_single_node(replacement)) {
              rv.push(replacement);
            } else {
              extend(rv, replacement);
            }
          }
        } else {
          extend(rv, do_substitution(String(children[i])));
        }
      }
      return rv;
    }
    var rv = [];
    rv.push(do_substitution(String(template[0])).join(""));
    if (template[0] === "{text}") {
      substitute_children(template.slice(1), rv);
    } else {
      substitute_attrs(template[1], rv);
      substitute_children(template.slice(2), rv);
    }
    return rv;
  }
  function make_dom_single(template, doc) {
    var output_document = doc || document;
    var element;
    if (template[0] === "{text}") {
      element = output_document.createTextNode("");
      for (var i = 1; i < template.length; i++) {
        element.data += template[i];
      }
    } else {
      element = output_document.createElementNS(xhtml_ns, template[0]);
      for (var name in template[1]) {
        if (template[1].hasOwnProperty(name)) {
          element.setAttribute(name, template[1][name]);
        }
      }
      for (var i = 2; i < template.length; i++) {
        if (template[i] instanceof Object) {
          var sub_element = make_dom(template[i]);
          element.appendChild(sub_element);
        } else {
          var text_node = output_document.createTextNode(template[i]);
          element.appendChild(text_node);
        }
      }
    }
    return element;
  }
  function make_dom(template, substitutions, output_document) {
    if (is_single_node(template)) {
      return make_dom_single(template, output_document);
    }
    return map(template, function (x) {
      return make_dom_single(x, output_document);
    });
  }
  function render(template, substitutions, output_document) {
    return make_dom(substitute(template, substitutions), output_document);
  }

  /*
   * Utility functions
   */
  function assert(expected_true, function_name, description, error, substitutions) {
    if (expected_true !== true) {
      var msg = make_message(function_name, description, error, substitutions);
      throw new AssertionError(msg);
    }
  }

  /**
   * @class
   * Exception type that represents a failing assert.
   *
   * @param {string} message - Error message.
   */
  function AssertionError(message) {
    if (typeof message == "string") {
      message = sanitize_unpaired_surrogates(message);
    }
    this.message = message;
    this.stack = get_stack();
  }
  expose(AssertionError, "AssertionError");
  AssertionError.prototype = Object.create(Error.prototype);
  var get_stack = function get_stack() {
    var stack = new Error().stack;

    // 'Error.stack' is not supported in all browsers/versions
    if (!stack) {
      return "(Stack trace unavailable)";
    }
    var lines = stack.split("\n");

    // Create a pattern to match stack frames originating within testharness.js.  These include the
    // script URL, followed by the line/col (e.g., '/resources/testharness.js:120:21').
    // Escape the URL per http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    // in case it contains RegExp characters.
    var script_url = get_script_url();
    var re_text = script_url ? script_url.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') : "\\btestharness.js";
    var re = new RegExp(re_text + ":\\d+:\\d+");

    // Some browsers include a preamble that specifies the type of the error object.  Skip this by
    // advancing until we find the first stack frame originating from testharness.js.
    var i = 0;
    while (!re.test(lines[i]) && i < lines.length) {
      i++;
    }

    // Then skip the top frames originating from testharness.js to begin the stack at the test code.
    while (re.test(lines[i]) && i < lines.length) {
      i++;
    }

    // Paranoid check that we didn't skip all frames.  If so, return the original stack unmodified.
    if (i >= lines.length) {
      return stack;
    }
    return lines.slice(i).join("\n");
  };
  function OptionalFeatureUnsupportedError(message) {
    AssertionError.call(this, message);
  }
  OptionalFeatureUnsupportedError.prototype = Object.create(AssertionError.prototype);
  expose(OptionalFeatureUnsupportedError, "OptionalFeatureUnsupportedError");
  function make_message(function_name, description, error, substitutions) {
    for (var p in substitutions) {
      if (substitutions.hasOwnProperty(p)) {
        substitutions[p] = format_value(substitutions[p]);
      }
    }
    var node_form = substitute(["{text}", "${function_name}: ${description}" + error], merge({
      function_name: function_name,
      description: description ? description + " " : ""
    }, substitutions));
    return node_form.slice(1).join("");
  }
  function filter(array, callable, thisObj) {
    var rv = [];
    for (var i = 0; i < array.length; i++) {
      if (array.hasOwnProperty(i)) {
        var pass = callable.call(thisObj, array[i], i, array);
        if (pass) {
          rv.push(array[i]);
        }
      }
    }
    return rv;
  }
  function map(array, callable, thisObj) {
    var rv = [];
    rv.length = array.length;
    for (var i = 0; i < array.length; i++) {
      if (array.hasOwnProperty(i)) {
        rv[i] = callable.call(thisObj, array[i], i, array);
      }
    }
    return rv;
  }
  function extend(array, items) {
    Array.prototype.push.apply(array, items);
  }
  function forEach(array, callback, thisObj) {
    for (var i = 0; i < array.length; i++) {
      if (array.hasOwnProperty(i)) {
        callback.call(thisObj, array[i], i, array);
      }
    }
  }

  /**
   * Immediately invoke a "iteratee" function with a series of values in
   * parallel and invoke a final "done" function when all of the "iteratee"
   * invocations have signaled completion.
   *
   * If all callbacks complete synchronously (or if no callbacks are
   * specified), the ``done_callback`` will be invoked synchronously. It is the
   * responsibility of the caller to ensure asynchronicity in cases where
   * that is desired.
   *
   * @param {array} value Zero or more values to use in the invocation of
   *                      ``iter_callback``
   * @param {function} iter_callback A function that will be invoked
   *                                 once for each of the values min
   *                                 ``value``. Two arguments will
   *                                 be available in each
   *                                 invocation: the value from
   *                                 ``value`` and a function that
   *                                 must be invoked to signal
   *                                 completion
   * @param {function} done_callback A function that will be invoked after
   *                                 all operations initiated by the
   *                                 ``iter_callback`` function have signaled
   *                                 completion
   */
  function all_async(values, iter_callback, done_callback) {
    var remaining = values.length;
    if (remaining === 0) {
      done_callback();
    }
    forEach(values, function (element) {
      var invoked = false;
      var elDone = function elDone() {
        if (invoked) {
          return;
        }
        invoked = true;
        remaining -= 1;
        if (remaining === 0) {
          done_callback();
        }
      };
      iter_callback(element, elDone);
    });
  }
  function merge(a, b) {
    var rv = {};
    var p;
    for (p in a) {
      rv[p] = a[p];
    }
    for (p in b) {
      rv[p] = b[p];
    }
    return rv;
  }
  function expose(object, name) {
    var components = name.split(".");
    var target = global_scope;
    for (var i = 0; i < components.length - 1; i++) {
      if (!(components[i] in target)) {
        target[components[i]] = {};
      }
      target = target[components[i]];
    }
    target[components[components.length - 1]] = object;
  }
  function is_same_origin(w) {
    try {
      'random_prop' in w;
      return true;
    } catch (e) {
      return false;
    }
  }

  /** Returns the 'src' URL of the first <script> tag in the page to include the file 'testharness.js'. */
  function get_script_url() {
    if (!('document' in global_scope)) {
      return undefined;
    }
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var src;
      if (scripts[i].src) {
        src = scripts[i].src;
      } else if (scripts[i].href) {
        //SVG case
        src = scripts[i].href.baseVal;
      }
      var matches = src && src.match(/^(.*\/|)testharness\.js$/);
      if (matches) {
        return src;
      }
    }
    return undefined;
  }

  /** Returns the <title> or filename or "Untitled" */
  function get_title() {
    if ('document' in global_scope) {
      //Don't use document.title to work around an Opera/Presto bug in XHTML documents
      var title = document.getElementsByTagName("title")[0];
      if (title && title.firstChild && title.firstChild.data) {
        return title.firstChild.data;
      }
    }
    if ('META_TITLE' in global_scope && META_TITLE) {
      return META_TITLE;
    }
    if ('location' in global_scope && 'pathname' in location) {
      return location.pathname.substring(location.pathname.lastIndexOf('/') + 1, location.pathname.indexOf('.'));
    }
    return "Untitled";
  }

  /** Fetches a JSON resource and parses it */
  function fetch_json(_x) {
    return _fetch_json.apply(this, arguments);
  }
  function _fetch_json() {
    _fetch_json = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resource) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(resource);
          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();
          case 5:
            return _context.abrupt("return", _context.sent);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _fetch_json.apply(this, arguments);
  }
  if (!global_scope.GLOBAL || !global_scope.GLOBAL.isShadowRealm()) {
    expose(fetch_json, 'fetch_json');
  }

  /**
   * Setup globals
   */

  var tests = new Tests();
  if (global_scope.addEventListener) {
    var error_handler = function error_handler(error, message, stack) {
      var optional_unsupported = error instanceof OptionalFeatureUnsupportedError;
      if (tests.file_is_test) {
        var test = tests.tests[0];
        if (test.phase >= test.phases.HAS_RESULT) {
          return;
        }
        var status = optional_unsupported ? test.PRECONDITION_FAILED : test.FAIL;
        test.set_status(status, message, stack);
        test.phase = test.phases.HAS_RESULT;
      } else if (!tests.allow_uncaught_exception) {
        var status = optional_unsupported ? tests.status.PRECONDITION_FAILED : tests.status.ERROR;
        tests.status.status = status;
        tests.status.message = message;
        tests.status.stack = stack;
      }

      // Do not transition to the "complete" phase if the test has been
      // configured to allow uncaught exceptions. This gives the test an
      // opportunity to define subtests based on the exception reporting
      // behavior.
      if (!tests.allow_uncaught_exception) {
        done();
      }
    };
    addEventListener("error", function (e) {
      var message = e.message;
      var stack;
      if (e.error && e.error.stack) {
        stack = e.error.stack;
      } else {
        stack = e.filename + ":" + e.lineno + ":" + e.colno;
      }
      error_handler(e.error, message, stack);
    }, false);
    addEventListener("unhandledrejection", function (e) {
      var message;
      if (e.reason && e.reason.message) {
        message = "Unhandled rejection: " + e.reason.message;
      } else {
        message = "Unhandled rejection";
      }
      var stack;
      if (e.reason && e.reason.stack) {
        stack = e.reason.stack;
      }
      error_handler(e.reason, message, stack);
    }, false);
  }
  test_environment.on_tests_ready();

  /**
   * Stylesheet
   */
  var stylesheetContent = "\
html {\
    font-family:DejaVu Sans, Bitstream Vera Sans, Arial, Sans;\
}\
\
#log .warning,\
#log .warning a {\
  color: black;\
  background: yellow;\
}\
\
#log .error,\
#log .error a {\
  color: white;\
  background: red;\
}\
\
section#summary {\
    margin-bottom:1em;\
}\
\
table#results {\
    border-collapse:collapse;\
    table-layout:fixed;\
    width:100%;\
}\
\
table#results > thead > tr > th:first-child,\
table#results > tbody > tr > td:first-child {\
    width:8em;\
}\
\
table#results > thead > tr > th:last-child,\
table#results > thead > tr > td:last-child {\
    width:50%;\
}\
\
table#results.assertions > thead > tr > th:last-child,\
table#results.assertions > tbody > tr > td:last-child {\
    width:35%;\
}\
\
table#results > thead > > tr > th {\
    padding:0;\
    padding-bottom:0.5em;\
    border-bottom:medium solid black;\
}\
\
table#results > tbody > tr> td {\
    padding:1em;\
    padding-bottom:0.5em;\
    border-bottom:thin solid black;\
}\
\
.pass {\
    color:green;\
}\
\
.fail {\
    color:red;\
}\
\
tr.timeout {\
    color:red;\
}\
\
tr.notrun {\
    color:blue;\
}\
\
tr.optionalunsupported {\
    color:blue;\
}\
\
.ok {\
    color:green;\
}\
\
.error {\
    color:red;\
}\
\
.pass, .fail, .timeout, .notrun, .optionalunsupported .ok, .timeout, .error {\
    font-variant:small-caps;\
}\
\
table#results span {\
    display:block;\
}\
\
table#results span.expected {\
    font-family:DejaVu Sans Mono, Bitstream Vera Sans Mono, Monospace;\
    white-space:pre;\
}\
\
table#results span.actual {\
    font-family:DejaVu Sans Mono, Bitstream Vera Sans Mono, Monospace;\
    white-space:pre;\
}\
";
})(self);
// vim: set expandtab shiftwidth=4 tabstop=4:

},{"core-js/modules/es.array.concat.js":176,"core-js/modules/es.array.for-each.js":177,"core-js/modules/es.array.from.js":178,"core-js/modules/es.array.index-of.js":179,"core-js/modules/es.array.iterator.js":180,"core-js/modules/es.array.join.js":181,"core-js/modules/es.array.last-index-of.js":182,"core-js/modules/es.array.map.js":183,"core-js/modules/es.array.reduce.js":184,"core-js/modules/es.array.slice.js":185,"core-js/modules/es.array.some.js":186,"core-js/modules/es.array.splice.js":187,"core-js/modules/es.json.to-string-tag.js":189,"core-js/modules/es.map.js":191,"core-js/modules/es.math.to-string-tag.js":192,"core-js/modules/es.object.define-property.js":193,"core-js/modules/es.object.get-prototype-of.js":195,"core-js/modules/es.object.keys.js":196,"core-js/modules/es.object.set-prototype-of.js":197,"core-js/modules/es.object.to-string.js":198,"core-js/modules/es.promise.js":202,"core-js/modules/es.regexp.constructor.js":206,"core-js/modules/es.regexp.exec.js":207,"core-js/modules/es.regexp.to-string.js":208,"core-js/modules/es.string.iterator.js":209,"core-js/modules/es.string.match.js":210,"core-js/modules/es.string.repeat.js":211,"core-js/modules/es.string.replace.js":212,"core-js/modules/es.string.split.js":213,"core-js/modules/es.string.trim.js":214,"core-js/modules/es.symbol.async-iterator.js":215,"core-js/modules/es.symbol.description.js":217,"core-js/modules/es.symbol.iterator.js":219,"core-js/modules/es.symbol.js":220,"core-js/modules/es.symbol.to-string-tag.js":222,"core-js/modules/esnext.map.delete-all.js":223,"core-js/modules/esnext.map.every.js":224,"core-js/modules/esnext.map.filter.js":225,"core-js/modules/esnext.map.find-key.js":226,"core-js/modules/esnext.map.find.js":227,"core-js/modules/esnext.map.includes.js":228,"core-js/modules/esnext.map.key-of.js":229,"core-js/modules/esnext.map.map-keys.js":230,"core-js/modules/esnext.map.map-values.js":231,"core-js/modules/esnext.map.merge.js":232,"core-js/modules/esnext.map.reduce.js":233,"core-js/modules/esnext.map.some.js":234,"core-js/modules/esnext.map.update.js":235,"core-js/modules/web.dom-collections.for-each.js":236,"core-js/modules/web.dom-collections.iterator.js":237}],2:[function(require,module,exports){
'use strict';
var isCallable = require('../internals/is-callable');
var tryToString = require('../internals/try-to-string');

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};

},{"../internals/is-callable":85,"../internals/try-to-string":166}],3:[function(require,module,exports){
'use strict';
var isConstructor = require('../internals/is-constructor');
var tryToString = require('../internals/try-to-string');

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a constructor');
};

},{"../internals/is-constructor":86,"../internals/try-to-string":166}],4:[function(require,module,exports){
'use strict';
var has = require('../internals/map-helpers').has;

// Perform ? RequireInternalSlot(M, [[MapData]])
module.exports = function (it) {
  has(it);
  return it;
};

},{"../internals/map-helpers":103}],5:[function(require,module,exports){
'use strict';
var isPossiblePrototype = require('../internals/is-possible-prototype');

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};

},{"../internals/is-possible-prototype":90}],6:[function(require,module,exports){
'use strict';
var wellKnownSymbol = require('../internals/well-known-symbol');
var create = require('../internals/object-create');
var defineProperty = require('../internals/object-define-property').f;

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

},{"../internals/object-create":108,"../internals/object-define-property":110,"../internals/well-known-symbol":174}],7:[function(require,module,exports){
'use strict';
var charAt = require('../internals/string-multibyte').charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

},{"../internals/string-multibyte":149}],8:[function(require,module,exports){
'use strict';
var isPrototypeOf = require('../internals/object-is-prototype-of');

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};

},{"../internals/object-is-prototype-of":117}],9:[function(require,module,exports){
'use strict';
var isObject = require('../internals/is-object');

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};

},{"../internals/is-object":89}],10:[function(require,module,exports){
'use strict';
// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = require('../internals/fails');

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});

},{"../internals/fails":55}],11:[function(require,module,exports){
'use strict';
var $forEach = require('../internals/array-iteration').forEach;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

},{"../internals/array-iteration":14,"../internals/array-method-is-strict":17}],12:[function(require,module,exports){
'use strict';
var bind = require('../internals/function-bind-context');
var call = require('../internals/function-call');
var toObject = require('../internals/to-object');
var callWithSafeIterationClosing = require('../internals/call-with-safe-iteration-closing');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var isConstructor = require('../internals/is-constructor');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var createProperty = require('../internals/create-property');
var getIterator = require('../internals/get-iterator');
var getIteratorMethod = require('../internals/get-iterator-method');

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};

},{"../internals/call-with-safe-iteration-closing":23,"../internals/create-property":34,"../internals/function-bind-context":59,"../internals/function-call":61,"../internals/get-iterator":68,"../internals/get-iterator-method":67,"../internals/is-array-iterator-method":83,"../internals/is-constructor":86,"../internals/length-of-array-like":101,"../internals/to-object":161}],13:[function(require,module,exports){
'use strict';
var toIndexedObject = require('../internals/to-indexed-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var lengthOfArrayLike = require('../internals/length-of-array-like');

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

},{"../internals/length-of-array-like":101,"../internals/to-absolute-index":157,"../internals/to-indexed-object":158}],14:[function(require,module,exports){
'use strict';
var bind = require('../internals/function-bind-context');
var uncurryThis = require('../internals/function-uncurry-this');
var IndexedObject = require('../internals/indexed-object');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var arraySpeciesCreate = require('../internals/array-species-create');

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};

},{"../internals/array-species-create":22,"../internals/function-bind-context":59,"../internals/function-uncurry-this":65,"../internals/indexed-object":78,"../internals/length-of-array-like":101,"../internals/to-object":161}],15:[function(require,module,exports){
'use strict';
/* eslint-disable es/no-array-prototype-lastindexof -- safe */
var apply = require('../internals/function-apply');
var toIndexedObject = require('../internals/to-indexed-object');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var arrayMethodIsStrict = require('../internals/array-method-is-strict');

var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = lengthOfArrayLike(O);
  if (length === 0) return -1;
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : $lastIndexOf;

},{"../internals/array-method-is-strict":17,"../internals/function-apply":58,"../internals/length-of-array-like":101,"../internals/to-indexed-object":158,"../internals/to-integer-or-infinity":159}],16:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/engine-v8-version');

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

},{"../internals/engine-v8-version":52,"../internals/fails":55,"../internals/well-known-symbol":174}],17:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

},{"../internals/fails":55}],18:[function(require,module,exports){
'use strict';
var aCallable = require('../internals/a-callable');
var toObject = require('../internals/to-object');
var IndexedObject = require('../internals/indexed-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');

var $TypeError = TypeError;

var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    aCallable(callbackfn);
    if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError(REDUCE_EMPTY);
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

},{"../internals/a-callable":2,"../internals/indexed-object":78,"../internals/length-of-array-like":101,"../internals/to-object":161}],19:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var isArray = require('../internals/is-array');

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};

},{"../internals/descriptors":40,"../internals/is-array":84}],20:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');

module.exports = uncurryThis([].slice);

},{"../internals/function-uncurry-this":65}],21:[function(require,module,exports){
'use strict';
var isArray = require('../internals/is-array');
var isConstructor = require('../internals/is-constructor');
var isObject = require('../internals/is-object');
var wellKnownSymbol = require('../internals/well-known-symbol');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};

},{"../internals/is-array":84,"../internals/is-constructor":86,"../internals/is-object":89,"../internals/well-known-symbol":174}],22:[function(require,module,exports){
'use strict';
var arraySpeciesConstructor = require('../internals/array-species-constructor');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

},{"../internals/array-species-constructor":21}],23:[function(require,module,exports){
'use strict';
var anObject = require('../internals/an-object');
var iteratorClose = require('../internals/iterator-close');

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};

},{"../internals/an-object":9,"../internals/iterator-close":96}],24:[function(require,module,exports){
'use strict';
var wellKnownSymbol = require('../internals/well-known-symbol');

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

},{"../internals/well-known-symbol":174}],25:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};

},{"../internals/function-uncurry-this":65}],26:[function(require,module,exports){
'use strict';
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var isCallable = require('../internals/is-callable');
var classofRaw = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

},{"../internals/classof-raw":25,"../internals/is-callable":85,"../internals/to-string-tag-support":164,"../internals/well-known-symbol":174}],27:[function(require,module,exports){
'use strict';
var create = require('../internals/object-create');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var defineBuiltIns = require('../internals/define-built-ins');
var bind = require('../internals/function-bind-context');
var anInstance = require('../internals/an-instance');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var iterate = require('../internals/iterate');
var defineIterator = require('../internals/iterator-define');
var createIterResultObject = require('../internals/create-iter-result-object');
var setSpecies = require('../internals/set-species');
var DESCRIPTORS = require('../internals/descriptors');
var fastKey = require('../internals/internal-metadata').fastKey;
var InternalStateModule = require('../internals/internal-state');

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key === key) return entry;
      }
    };

    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          entry = entry.next;
        }
        state.first = state.last = undefined;
        state.index = create(null);
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first === entry) state.first = next;
          if (state.last === entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineBuiltInAccessor(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return createIterResultObject(undefined, true);
      }
      // return step by kind
      if (kind === 'keys') return createIterResultObject(entry.key, false);
      if (kind === 'values') return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};

},{"../internals/an-instance":8,"../internals/create-iter-result-object":31,"../internals/define-built-in-accessor":35,"../internals/define-built-ins":37,"../internals/descriptors":40,"../internals/function-bind-context":59,"../internals/internal-metadata":81,"../internals/internal-state":82,"../internals/is-null-or-undefined":88,"../internals/iterate":95,"../internals/iterator-define":98,"../internals/object-create":108,"../internals/set-species":143}],28:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var uncurryThis = require('../internals/function-uncurry-this');
var isForced = require('../internals/is-forced');
var defineBuiltIn = require('../internals/define-built-in');
var InternalMetadataModule = require('../internals/internal-metadata');
var iterate = require('../internals/iterate');
var anInstance = require('../internals/an-instance');
var isCallable = require('../internals/is-callable');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var isObject = require('../internals/is-object');
var fails = require('../internals/fails');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var setToStringTag = require('../internals/set-to-string-tag');
var inheritIfRequired = require('../internals/inherit-if-required');

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    defineBuiltIn(NativePrototype, KEY,
      KEY === 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY === 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};

},{"../internals/an-instance":8,"../internals/check-correctness-of-iteration":24,"../internals/define-built-in":36,"../internals/export":54,"../internals/fails":55,"../internals/function-uncurry-this":65,"../internals/global":72,"../internals/inherit-if-required":79,"../internals/internal-metadata":81,"../internals/is-callable":85,"../internals/is-forced":87,"../internals/is-null-or-undefined":88,"../internals/is-object":89,"../internals/iterate":95,"../internals/set-to-string-tag":144}],29:[function(require,module,exports){
'use strict';
var hasOwn = require('../internals/has-own-property');
var ownKeys = require('../internals/own-keys');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var definePropertyModule = require('../internals/object-define-property');

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

},{"../internals/has-own-property":73,"../internals/object-define-property":110,"../internals/object-get-own-property-descriptor":111,"../internals/own-keys":124}],30:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"../internals/fails":55}],31:[function(require,module,exports){
'use strict';
// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};

},{}],32:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"../internals/create-property-descriptor":33,"../internals/descriptors":40,"../internals/object-define-property":110}],33:[function(require,module,exports){
'use strict';
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],34:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};

},{"../internals/create-property-descriptor":33,"../internals/descriptors":40,"../internals/object-define-property":110}],35:[function(require,module,exports){
'use strict';
var makeBuiltIn = require('../internals/make-built-in');
var defineProperty = require('../internals/object-define-property');

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};

},{"../internals/make-built-in":102,"../internals/object-define-property":110}],36:[function(require,module,exports){
'use strict';
var isCallable = require('../internals/is-callable');
var definePropertyModule = require('../internals/object-define-property');
var makeBuiltIn = require('../internals/make-built-in');
var defineGlobalProperty = require('../internals/define-global-property');

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

},{"../internals/define-global-property":38,"../internals/is-callable":85,"../internals/make-built-in":102,"../internals/object-define-property":110}],37:[function(require,module,exports){
'use strict';
var defineBuiltIn = require('../internals/define-built-in');

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};

},{"../internals/define-built-in":36}],38:[function(require,module,exports){
'use strict';
var global = require('../internals/global');

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};

},{"../internals/global":72}],39:[function(require,module,exports){
'use strict';
var tryToString = require('../internals/try-to-string');

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};

},{"../internals/try-to-string":166}],40:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});

},{"../internals/fails":55}],41:[function(require,module,exports){
'use strict';
var global = require('../internals/global');
var isObject = require('../internals/is-object');

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

},{"../internals/global":72,"../internals/is-object":89}],42:[function(require,module,exports){
'use strict';
var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};

},{}],43:[function(require,module,exports){
'use strict';
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

},{}],44:[function(require,module,exports){
'use strict';
// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = require('../internals/document-create-element');

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;

},{"../internals/document-create-element":41}],45:[function(require,module,exports){
'use strict';
var IS_DENO = require('../internals/engine-is-deno');
var IS_NODE = require('../internals/engine-is-node');

module.exports = !IS_DENO && !IS_NODE
  && typeof window == 'object'
  && typeof document == 'object';

},{"../internals/engine-is-deno":46,"../internals/engine-is-node":49}],46:[function(require,module,exports){
'use strict';
/* global Deno -- Deno case */
module.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

},{}],47:[function(require,module,exports){
'use strict';
var userAgent = require('../internals/engine-user-agent');

module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';

},{"../internals/engine-user-agent":51}],48:[function(require,module,exports){
'use strict';
var userAgent = require('../internals/engine-user-agent');

// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"../internals/engine-user-agent":51}],49:[function(require,module,exports){
'use strict';
var global = require('../internals/global');
var classof = require('../internals/classof-raw');

module.exports = classof(global.process) === 'process';

},{"../internals/classof-raw":25,"../internals/global":72}],50:[function(require,module,exports){
'use strict';
var userAgent = require('../internals/engine-user-agent');

module.exports = /web0s(?!.*chrome)/i.test(userAgent);

},{"../internals/engine-user-agent":51}],51:[function(require,module,exports){
'use strict';
module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

},{}],52:[function(require,module,exports){
'use strict';
var global = require('../internals/global');
var userAgent = require('../internals/engine-user-agent');

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;

},{"../internals/engine-user-agent":51,"../internals/global":72}],53:[function(require,module,exports){
'use strict';
// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

},{}],54:[function(require,module,exports){
'use strict';
var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var defineBuiltIn = require('../internals/define-built-in');
var defineGlobalProperty = require('../internals/define-global-property');
var copyConstructorProperties = require('../internals/copy-constructor-properties');
var isForced = require('../internals/is-forced');

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global[TARGET] && global[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};

},{"../internals/copy-constructor-properties":29,"../internals/create-non-enumerable-property":32,"../internals/define-built-in":36,"../internals/define-global-property":38,"../internals/global":72,"../internals/is-forced":87,"../internals/object-get-own-property-descriptor":111}],55:[function(require,module,exports){
'use strict';
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

},{}],56:[function(require,module,exports){
'use strict';
// TODO: Remove from `core-js@4` since it's moved to entry points
require('../modules/es.regexp.exec');
var call = require('../internals/function-call');
var defineBuiltIn = require('../internals/define-built-in');
var regexpExec = require('../internals/regexp-exec');
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegExp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: call(nativeRegExpMethod, regexp, str, arg2) };
        }
        return { done: true, value: call(nativeMethod, str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

},{"../internals/create-non-enumerable-property":32,"../internals/define-built-in":36,"../internals/fails":55,"../internals/function-call":61,"../internals/regexp-exec":134,"../internals/well-known-symbol":174,"../modules/es.regexp.exec":207}],57:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});

},{"../internals/fails":55}],58:[function(require,module,exports){
'use strict';
var NATIVE_BIND = require('../internals/function-bind-native');

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});

},{"../internals/function-bind-native":60}],59:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this-clause');
var aCallable = require('../internals/a-callable');
var NATIVE_BIND = require('../internals/function-bind-native');

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"../internals/a-callable":2,"../internals/function-bind-native":60,"../internals/function-uncurry-this-clause":64}],60:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

},{"../internals/fails":55}],61:[function(require,module,exports){
'use strict';
var NATIVE_BIND = require('../internals/function-bind-native');

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};

},{"../internals/function-bind-native":60}],62:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var hasOwn = require('../internals/has-own-property');

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

},{"../internals/descriptors":40,"../internals/has-own-property":73}],63:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var aCallable = require('../internals/a-callable');

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

},{"../internals/a-callable":2,"../internals/function-uncurry-this":65}],64:[function(require,module,exports){
'use strict';
var classofRaw = require('../internals/classof-raw');
var uncurryThis = require('../internals/function-uncurry-this');

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};

},{"../internals/classof-raw":25,"../internals/function-uncurry-this":65}],65:[function(require,module,exports){
'use strict';
var NATIVE_BIND = require('../internals/function-bind-native');

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};

},{"../internals/function-bind-native":60}],66:[function(require,module,exports){
'use strict';
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"../internals/global":72,"../internals/is-callable":85}],67:[function(require,module,exports){
'use strict';
var classof = require('../internals/classof');
var getMethod = require('../internals/get-method');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var Iterators = require('../internals/iterators');
var wellKnownSymbol = require('../internals/well-known-symbol');

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};

},{"../internals/classof":26,"../internals/get-method":70,"../internals/is-null-or-undefined":88,"../internals/iterators":100,"../internals/well-known-symbol":174}],68:[function(require,module,exports){
'use strict';
var call = require('../internals/function-call');
var aCallable = require('../internals/a-callable');
var anObject = require('../internals/an-object');
var tryToString = require('../internals/try-to-string');
var getIteratorMethod = require('../internals/get-iterator-method');

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};

},{"../internals/a-callable":2,"../internals/an-object":9,"../internals/function-call":61,"../internals/get-iterator-method":67,"../internals/try-to-string":166}],69:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var isArray = require('../internals/is-array');
var isCallable = require('../internals/is-callable');
var classof = require('../internals/classof-raw');
var toString = require('../internals/to-string');

var push = uncurryThis([].push);

module.exports = function (replacer) {
  if (isCallable(replacer)) return replacer;
  if (!isArray(replacer)) return;
  var rawLength = replacer.length;
  var keys = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == 'string') push(keys, element);
    else if (typeof element == 'number' || classof(element) === 'Number' || classof(element) === 'String') push(keys, toString(element));
  }
  var keysLength = keys.length;
  var root = true;
  return function (key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
  };
};

},{"../internals/classof-raw":25,"../internals/function-uncurry-this":65,"../internals/is-array":84,"../internals/is-callable":85,"../internals/to-string":165}],70:[function(require,module,exports){
'use strict';
var aCallable = require('../internals/a-callable');
var isNullOrUndefined = require('../internals/is-null-or-undefined');

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"../internals/a-callable":2,"../internals/is-null-or-undefined":88}],71:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var toObject = require('../internals/to-object');

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

},{"../internals/function-uncurry-this":65,"../internals/to-object":161}],72:[function(require,module,exports){
(function (global){(function (){
'use strict';
var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],73:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var toObject = require('../internals/to-object');

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

},{"../internals/function-uncurry-this":65,"../internals/to-object":161}],74:[function(require,module,exports){
'use strict';
module.exports = {};

},{}],75:[function(require,module,exports){
'use strict';
module.exports = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};

},{}],76:[function(require,module,exports){
'use strict';
var getBuiltIn = require('../internals/get-built-in');

module.exports = getBuiltIn('document', 'documentElement');

},{"../internals/get-built-in":66}],77:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var createElement = require('../internals/document-create-element');

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});

},{"../internals/descriptors":40,"../internals/document-create-element":41,"../internals/fails":55}],78:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var classof = require('../internals/classof-raw');

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;

},{"../internals/classof-raw":25,"../internals/fails":55,"../internals/function-uncurry-this":65}],79:[function(require,module,exports){
'use strict';
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var setPrototypeOf = require('../internals/object-set-prototype-of');

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

},{"../internals/is-callable":85,"../internals/is-object":89,"../internals/object-set-prototype-of":121}],80:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var isCallable = require('../internals/is-callable');
var store = require('../internals/shared-store');

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;

},{"../internals/function-uncurry-this":65,"../internals/is-callable":85,"../internals/shared-store":146}],81:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var hiddenKeys = require('../internals/hidden-keys');
var isObject = require('../internals/is-object');
var hasOwn = require('../internals/has-own-property');
var defineProperty = require('../internals/object-define-property').f;
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertyNamesExternalModule = require('../internals/object-get-own-property-names-external');
var isExtensible = require('../internals/object-is-extensible');
var uid = require('../internals/uid');
var FREEZING = require('../internals/freezing');

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;

},{"../internals/export":54,"../internals/freezing":57,"../internals/function-uncurry-this":65,"../internals/has-own-property":73,"../internals/hidden-keys":74,"../internals/is-object":89,"../internals/object-define-property":110,"../internals/object-get-own-property-names":113,"../internals/object-get-own-property-names-external":112,"../internals/object-is-extensible":116,"../internals/uid":167}],82:[function(require,module,exports){
'use strict';
var NATIVE_WEAK_MAP = require('../internals/weak-map-basic-detection');
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var hasOwn = require('../internals/has-own-property');
var shared = require('../internals/shared-store');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

},{"../internals/create-non-enumerable-property":32,"../internals/global":72,"../internals/has-own-property":73,"../internals/hidden-keys":74,"../internals/is-object":89,"../internals/shared-key":145,"../internals/shared-store":146,"../internals/weak-map-basic-detection":171}],83:[function(require,module,exports){
'use strict';
var wellKnownSymbol = require('../internals/well-known-symbol');
var Iterators = require('../internals/iterators');

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

},{"../internals/iterators":100,"../internals/well-known-symbol":174}],84:[function(require,module,exports){
'use strict';
var classof = require('../internals/classof-raw');

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};

},{"../internals/classof-raw":25}],85:[function(require,module,exports){
'use strict';
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};

},{}],86:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var classof = require('../internals/classof');
var getBuiltIn = require('../internals/get-built-in');
var inspectSource = require('../internals/inspect-source');

var noop = function () { /* empty */ };
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

},{"../internals/classof":26,"../internals/fails":55,"../internals/function-uncurry-this":65,"../internals/get-built-in":66,"../internals/inspect-source":80,"../internals/is-callable":85}],87:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;

},{"../internals/fails":55,"../internals/is-callable":85}],88:[function(require,module,exports){
'use strict';
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};

},{}],89:[function(require,module,exports){
'use strict';
var isCallable = require('../internals/is-callable');

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};

},{"../internals/is-callable":85}],90:[function(require,module,exports){
'use strict';
var isObject = require('../internals/is-object');

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};

},{"../internals/is-object":89}],91:[function(require,module,exports){
'use strict';
module.exports = false;

},{}],92:[function(require,module,exports){
'use strict';
var isObject = require('../internals/is-object');
var classof = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};

},{"../internals/classof-raw":25,"../internals/is-object":89,"../internals/well-known-symbol":174}],93:[function(require,module,exports){
'use strict';
var getBuiltIn = require('../internals/get-built-in');
var isCallable = require('../internals/is-callable');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"../internals/get-built-in":66,"../internals/is-callable":85,"../internals/object-is-prototype-of":117,"../internals/use-symbol-as-uid":168}],94:[function(require,module,exports){
'use strict';
var call = require('../internals/function-call');

module.exports = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};

},{"../internals/function-call":61}],95:[function(require,module,exports){
'use strict';
var bind = require('../internals/function-bind-context');
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var tryToString = require('../internals/try-to-string');
var isArrayIteratorMethod = require('../internals/is-array-iterator-method');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var getIterator = require('../internals/get-iterator');
var getIteratorMethod = require('../internals/get-iterator-method');
var iteratorClose = require('../internals/iterator-close');

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};

},{"../internals/an-object":9,"../internals/function-bind-context":59,"../internals/function-call":61,"../internals/get-iterator":68,"../internals/get-iterator-method":67,"../internals/is-array-iterator-method":83,"../internals/iterator-close":96,"../internals/length-of-array-like":101,"../internals/object-is-prototype-of":117,"../internals/try-to-string":166}],96:[function(require,module,exports){
'use strict';
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var getMethod = require('../internals/get-method');

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};

},{"../internals/an-object":9,"../internals/function-call":61,"../internals/get-method":70}],97:[function(require,module,exports){
'use strict';
var IteratorPrototype = require('../internals/iterators-core').IteratorPrototype;
var create = require('../internals/object-create');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var setToStringTag = require('../internals/set-to-string-tag');
var Iterators = require('../internals/iterators');

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

},{"../internals/create-property-descriptor":33,"../internals/iterators":100,"../internals/iterators-core":99,"../internals/object-create":108,"../internals/set-to-string-tag":144}],98:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var IS_PURE = require('../internals/is-pure');
var FunctionName = require('../internals/function-name');
var isCallable = require('../internals/is-callable');
var createIteratorConstructor = require('../internals/iterator-create-constructor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var defineBuiltIn = require('../internals/define-built-in');
var wellKnownSymbol = require('../internals/well-known-symbol');
var Iterators = require('../internals/iterators');
var IteratorsCore = require('../internals/iterators-core');

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};

},{"../internals/create-non-enumerable-property":32,"../internals/define-built-in":36,"../internals/export":54,"../internals/function-call":61,"../internals/function-name":62,"../internals/is-callable":85,"../internals/is-pure":91,"../internals/iterator-create-constructor":97,"../internals/iterators":100,"../internals/iterators-core":99,"../internals/object-get-prototype-of":115,"../internals/object-set-prototype-of":121,"../internals/set-to-string-tag":144,"../internals/well-known-symbol":174}],99:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var create = require('../internals/object-create');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var defineBuiltIn = require('../internals/define-built-in');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

},{"../internals/define-built-in":36,"../internals/fails":55,"../internals/is-callable":85,"../internals/is-object":89,"../internals/is-pure":91,"../internals/object-create":108,"../internals/object-get-prototype-of":115,"../internals/well-known-symbol":174}],100:[function(require,module,exports){
arguments[4][74][0].apply(exports,arguments)
},{"dup":74}],101:[function(require,module,exports){
'use strict';
var toLength = require('../internals/to-length');

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};

},{"../internals/to-length":160}],102:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var hasOwn = require('../internals/has-own-property');
var DESCRIPTORS = require('../internals/descriptors');
var CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE;
var inspectSource = require('../internals/inspect-source');
var InternalStateModule = require('../internals/internal-state');

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');

},{"../internals/descriptors":40,"../internals/fails":55,"../internals/function-name":62,"../internals/function-uncurry-this":65,"../internals/has-own-property":73,"../internals/inspect-source":80,"../internals/internal-state":82,"../internals/is-callable":85}],103:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');

// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;

module.exports = {
  // eslint-disable-next-line es/no-map -- safe
  Map: Map,
  set: uncurryThis(MapPrototype.set),
  get: uncurryThis(MapPrototype.get),
  has: uncurryThis(MapPrototype.has),
  remove: uncurryThis(MapPrototype['delete']),
  proto: MapPrototype
};

},{"../internals/function-uncurry-this":65}],104:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var iterateSimple = require('../internals/iterate-simple');
var MapHelpers = require('../internals/map-helpers');

var Map = MapHelpers.Map;
var MapPrototype = MapHelpers.proto;
var forEach = uncurryThis(MapPrototype.forEach);
var entries = uncurryThis(MapPrototype.entries);
var next = entries(new Map()).next;

module.exports = function (map, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: entries(map), next: next }, function (entry) {
    return fn(entry[1], entry[0]);
  }) : forEach(map, fn);
};

},{"../internals/function-uncurry-this":65,"../internals/iterate-simple":94,"../internals/map-helpers":103}],105:[function(require,module,exports){
'use strict';
var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

},{}],106:[function(require,module,exports){
'use strict';
var global = require('../internals/global');
var safeGetBuiltIn = require('../internals/safe-get-built-in');
var bind = require('../internals/function-bind-context');
var macrotask = require('../internals/task').set;
var Queue = require('../internals/queue');
var IS_IOS = require('../internals/engine-is-ios');
var IS_IOS_PEBBLE = require('../internals/engine-is-ios-pebble');
var IS_WEBOS_WEBKIT = require('../internals/engine-is-webos-webkit');
var IS_NODE = require('../internals/engine-is-node');

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
var microtask = safeGetBuiltIn('queueMicrotask');
var notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask) {
  var queue = new Queue();

  var flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }

  microtask = function (fn) {
    if (!queue.head) notify();
    queue.add(fn);
  };
}

module.exports = microtask;

},{"../internals/engine-is-ios":48,"../internals/engine-is-ios-pebble":47,"../internals/engine-is-node":49,"../internals/engine-is-webos-webkit":50,"../internals/function-bind-context":59,"../internals/global":72,"../internals/queue":132,"../internals/safe-get-built-in":141,"../internals/task":156}],107:[function(require,module,exports){
'use strict';
var aCallable = require('../internals/a-callable');

var $TypeError = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"../internals/a-callable":2}],108:[function(require,module,exports){
'use strict';
/* global ActiveXObject -- old IE, WSH */
var anObject = require('../internals/an-object');
var definePropertiesModule = require('../internals/object-define-properties');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = require('../internals/hidden-keys');
var html = require('../internals/html');
var documentCreateElement = require('../internals/document-create-element');
var sharedKey = require('../internals/shared-key');

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

},{"../internals/an-object":9,"../internals/document-create-element":41,"../internals/enum-bug-keys":53,"../internals/hidden-keys":74,"../internals/html":76,"../internals/object-define-properties":109,"../internals/shared-key":145}],109:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug');
var definePropertyModule = require('../internals/object-define-property');
var anObject = require('../internals/an-object');
var toIndexedObject = require('../internals/to-indexed-object');
var objectKeys = require('../internals/object-keys');

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};

},{"../internals/an-object":9,"../internals/descriptors":40,"../internals/object-define-property":110,"../internals/object-keys":119,"../internals/to-indexed-object":158,"../internals/v8-prototype-define-bug":169}],110:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
var V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug');
var anObject = require('../internals/an-object');
var toPropertyKey = require('../internals/to-property-key');

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"../internals/an-object":9,"../internals/descriptors":40,"../internals/ie8-dom-define":77,"../internals/to-property-key":163,"../internals/v8-prototype-define-bug":169}],111:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var call = require('../internals/function-call');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var toIndexedObject = require('../internals/to-indexed-object');
var toPropertyKey = require('../internals/to-property-key');
var hasOwn = require('../internals/has-own-property');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"../internals/create-property-descriptor":33,"../internals/descriptors":40,"../internals/function-call":61,"../internals/has-own-property":73,"../internals/ie8-dom-define":77,"../internals/object-property-is-enumerable":120,"../internals/to-indexed-object":158,"../internals/to-property-key":163}],112:[function(require,module,exports){
'use strict';
/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = require('../internals/classof-raw');
var toIndexedObject = require('../internals/to-indexed-object');
var $getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var arraySlice = require('../internals/array-slice');

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) === 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};

},{"../internals/array-slice":20,"../internals/classof-raw":25,"../internals/object-get-own-property-names":113,"../internals/to-indexed-object":158}],113:[function(require,module,exports){
'use strict';
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/enum-bug-keys":53,"../internals/object-keys-internal":118}],114:[function(require,module,exports){
'use strict';
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],115:[function(require,module,exports){
'use strict';
var hasOwn = require('../internals/has-own-property');
var isCallable = require('../internals/is-callable');
var toObject = require('../internals/to-object');
var sharedKey = require('../internals/shared-key');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};

},{"../internals/correct-prototype-getter":30,"../internals/has-own-property":73,"../internals/is-callable":85,"../internals/shared-key":145,"../internals/to-object":161}],116:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');
var isObject = require('../internals/is-object');
var classof = require('../internals/classof-raw');
var ARRAY_BUFFER_NON_EXTENSIBLE = require('../internals/array-buffer-non-extensible');

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;

},{"../internals/array-buffer-non-extensible":10,"../internals/classof-raw":25,"../internals/fails":55,"../internals/is-object":89}],117:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');

module.exports = uncurryThis({}.isPrototypeOf);

},{"../internals/function-uncurry-this":65}],118:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var hasOwn = require('../internals/has-own-property');
var toIndexedObject = require('../internals/to-indexed-object');
var indexOf = require('../internals/array-includes').indexOf;
var hiddenKeys = require('../internals/hidden-keys');

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};

},{"../internals/array-includes":13,"../internals/function-uncurry-this":65,"../internals/has-own-property":73,"../internals/hidden-keys":74,"../internals/to-indexed-object":158}],119:[function(require,module,exports){
'use strict';
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

},{"../internals/enum-bug-keys":53,"../internals/object-keys-internal":118}],120:[function(require,module,exports){
'use strict';
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],121:[function(require,module,exports){
'use strict';
/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = require('../internals/function-uncurry-this-accessor');
var anObject = require('../internals/an-object');
var aPossiblePrototype = require('../internals/a-possible-prototype');

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

},{"../internals/a-possible-prototype":5,"../internals/an-object":9,"../internals/function-uncurry-this-accessor":63}],122:[function(require,module,exports){
'use strict';
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classof = require('../internals/classof');

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

},{"../internals/classof":26,"../internals/to-string-tag-support":164}],123:[function(require,module,exports){
'use strict';
var call = require('../internals/function-call');
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};

},{"../internals/function-call":61,"../internals/is-callable":85,"../internals/is-object":89}],124:[function(require,module,exports){
'use strict';
var getBuiltIn = require('../internals/get-built-in');
var uncurryThis = require('../internals/function-uncurry-this');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var anObject = require('../internals/an-object');

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"../internals/an-object":9,"../internals/function-uncurry-this":65,"../internals/get-built-in":66,"../internals/object-get-own-property-names":113,"../internals/object-get-own-property-symbols":114}],125:[function(require,module,exports){
'use strict';
var global = require('../internals/global');

module.exports = global;

},{"../internals/global":72}],126:[function(require,module,exports){
'use strict';
module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

},{}],127:[function(require,module,exports){
'use strict';
var global = require('../internals/global');
var NativePromiseConstructor = require('../internals/promise-native-constructor');
var isCallable = require('../internals/is-callable');
var isForced = require('../internals/is-forced');
var inspectSource = require('../internals/inspect-source');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_BROWSER = require('../internals/engine-is-browser');
var IS_DENO = require('../internals/engine-is-deno');
var IS_PURE = require('../internals/is-pure');
var V8_VERSION = require('../internals/engine-v8-version');

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};

},{"../internals/engine-is-browser":45,"../internals/engine-is-deno":46,"../internals/engine-v8-version":52,"../internals/global":72,"../internals/inspect-source":80,"../internals/is-callable":85,"../internals/is-forced":87,"../internals/is-pure":91,"../internals/promise-native-constructor":128,"../internals/well-known-symbol":174}],128:[function(require,module,exports){
'use strict';
var global = require('../internals/global');

module.exports = global.Promise;

},{"../internals/global":72}],129:[function(require,module,exports){
'use strict';
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var newPromiseCapability = require('../internals/new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"../internals/an-object":9,"../internals/is-object":89,"../internals/new-promise-capability":107}],130:[function(require,module,exports){
'use strict';
var NativePromiseConstructor = require('../internals/promise-native-constructor');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');
var FORCED_PROMISE_CONSTRUCTOR = require('../internals/promise-constructor-detection').CONSTRUCTOR;

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});

},{"../internals/check-correctness-of-iteration":24,"../internals/promise-constructor-detection":127,"../internals/promise-native-constructor":128}],131:[function(require,module,exports){
'use strict';
var defineProperty = require('../internals/object-define-property').f;

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};

},{"../internals/object-define-property":110}],132:[function(require,module,exports){
'use strict';
var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;

},{}],133:[function(require,module,exports){
'use strict';
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var isCallable = require('../internals/is-callable');
var classof = require('../internals/classof-raw');
var regexpExec = require('../internals/regexp-exec');

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw new $TypeError('RegExp#exec called on incompatible receiver');
};

},{"../internals/an-object":9,"../internals/classof-raw":25,"../internals/function-call":61,"../internals/is-callable":85,"../internals/regexp-exec":134}],134:[function(require,module,exports){
'use strict';
/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var toString = require('../internals/to-string');
var regexpFlags = require('../internals/regexp-flags');
var stickyHelpers = require('../internals/regexp-sticky-helpers');
var shared = require('../internals/shared');
var create = require('../internals/object-create');
var getInternalState = require('../internals/internal-state').get;
var UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all');
var UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg');

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;

},{"../internals/function-call":61,"../internals/function-uncurry-this":65,"../internals/internal-state":82,"../internals/object-create":108,"../internals/regexp-flags":135,"../internals/regexp-sticky-helpers":137,"../internals/regexp-unsupported-dot-all":138,"../internals/regexp-unsupported-ncg":139,"../internals/shared":147,"../internals/to-string":165}],135:[function(require,module,exports){
'use strict';
var anObject = require('../internals/an-object');

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

},{"../internals/an-object":9}],136:[function(require,module,exports){
'use strict';
var call = require('../internals/function-call');
var hasOwn = require('../internals/has-own-property');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var regExpFlags = require('../internals/regexp-flags');

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};

},{"../internals/function-call":61,"../internals/has-own-property":73,"../internals/object-is-prototype-of":117,"../internals/regexp-flags":135}],137:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');
var global = require('../internals/global');

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') !== null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') !== null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};

},{"../internals/fails":55,"../internals/global":72}],138:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');
var global = require('../internals/global');

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.test('\n') && re.flags === 's');
});

},{"../internals/fails":55,"../internals/global":72}],139:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');
var global = require('../internals/global');

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

},{"../internals/fails":55,"../internals/global":72}],140:[function(require,module,exports){
'use strict';
var isNullOrUndefined = require('../internals/is-null-or-undefined');

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};

},{"../internals/is-null-or-undefined":88}],141:[function(require,module,exports){
'use strict';
var global = require('../internals/global');
var DESCRIPTORS = require('../internals/descriptors');

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
module.exports = function (name) {
  if (!DESCRIPTORS) return global[name];
  var descriptor = getOwnPropertyDescriptor(global, name);
  return descriptor && descriptor.value;
};

},{"../internals/descriptors":40,"../internals/global":72}],142:[function(require,module,exports){
'use strict';
// `SameValueZero` abstract operation
// https://tc39.es/ecma262/#sec-samevaluezero
module.exports = function (x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y || x !== x && y !== y;
};

},{}],143:[function(require,module,exports){
'use strict';
var getBuiltIn = require('../internals/get-built-in');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var wellKnownSymbol = require('../internals/well-known-symbol');
var DESCRIPTORS = require('../internals/descriptors');

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

},{"../internals/define-built-in-accessor":35,"../internals/descriptors":40,"../internals/get-built-in":66,"../internals/well-known-symbol":174}],144:[function(require,module,exports){
'use strict';
var defineProperty = require('../internals/object-define-property').f;
var hasOwn = require('../internals/has-own-property');
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};

},{"../internals/has-own-property":73,"../internals/object-define-property":110,"../internals/well-known-symbol":174}],145:[function(require,module,exports){
'use strict';
var shared = require('../internals/shared');
var uid = require('../internals/uid');

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":147,"../internals/uid":167}],146:[function(require,module,exports){
'use strict';
var IS_PURE = require('../internals/is-pure');
var globalThis = require('../internals/global');
var defineGlobalProperty = require('../internals/define-global-property');

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.36.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

},{"../internals/define-global-property":38,"../internals/global":72,"../internals/is-pure":91}],147:[function(require,module,exports){
'use strict';
var store = require('../internals/shared-store');

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};

},{"../internals/shared-store":146}],148:[function(require,module,exports){
'use strict';
var anObject = require('../internals/an-object');
var aConstructor = require('../internals/a-constructor');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var wellKnownSymbol = require('../internals/well-known-symbol');

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};

},{"../internals/a-constructor":3,"../internals/an-object":9,"../internals/is-null-or-undefined":88,"../internals/well-known-symbol":174}],149:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var toString = require('../internals/to-string');
var requireObjectCoercible = require('../internals/require-object-coercible');

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

},{"../internals/function-uncurry-this":65,"../internals/require-object-coercible":140,"../internals/to-integer-or-infinity":159,"../internals/to-string":165}],150:[function(require,module,exports){
'use strict';
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var toString = require('../internals/to-string');
var requireObjectCoercible = require('../internals/require-object-coercible');

var $RangeError = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n === Infinity) throw new $RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};

},{"../internals/require-object-coercible":140,"../internals/to-integer-or-infinity":159,"../internals/to-string":165}],151:[function(require,module,exports){
'use strict';
var PROPER_FUNCTION_NAME = require('../internals/function-name').PROPER;
var fails = require('../internals/fails');
var whitespaces = require('../internals/whitespaces');

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};

},{"../internals/fails":55,"../internals/function-name":62,"../internals/whitespaces":175}],152:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var requireObjectCoercible = require('../internals/require-object-coercible');
var toString = require('../internals/to-string');
var whitespaces = require('../internals/whitespaces');

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

},{"../internals/function-uncurry-this":65,"../internals/require-object-coercible":140,"../internals/to-string":165,"../internals/whitespaces":175}],153:[function(require,module,exports){
'use strict';
/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = require('../internals/engine-v8-version');
var fails = require('../internals/fails');
var global = require('../internals/global');

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"../internals/engine-v8-version":52,"../internals/fails":55,"../internals/global":72}],154:[function(require,module,exports){
'use strict';
var call = require('../internals/function-call');
var getBuiltIn = require('../internals/get-built-in');
var wellKnownSymbol = require('../internals/well-known-symbol');
var defineBuiltIn = require('../internals/define-built-in');

module.exports = function () {
  var Symbol = getBuiltIn('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call(valueOf, this);
    }, { arity: 1 });
  }
};

},{"../internals/define-built-in":36,"../internals/function-call":61,"../internals/get-built-in":66,"../internals/well-known-symbol":174}],155:[function(require,module,exports){
'use strict';
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');

/* eslint-disable es/no-symbol -- safe */
module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;

},{"../internals/symbol-constructor-detection":153}],156:[function(require,module,exports){
'use strict';
var global = require('../internals/global');
var apply = require('../internals/function-apply');
var bind = require('../internals/function-bind-context');
var isCallable = require('../internals/is-callable');
var hasOwn = require('../internals/has-own-property');
var fails = require('../internals/fails');
var html = require('../internals/html');
var arraySlice = require('../internals/array-slice');
var createElement = require('../internals/document-create-element');
var validateArgumentsLength = require('../internals/validate-arguments-length');
var IS_IOS = require('../internals/engine-is-ios');
var IS_NODE = require('../internals/engine-is-node');

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global.location;
});

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    global.addEventListener('message', eventListener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};

},{"../internals/array-slice":20,"../internals/document-create-element":41,"../internals/engine-is-ios":48,"../internals/engine-is-node":49,"../internals/fails":55,"../internals/function-apply":58,"../internals/function-bind-context":59,"../internals/global":72,"../internals/has-own-property":73,"../internals/html":76,"../internals/is-callable":85,"../internals/validate-arguments-length":170}],157:[function(require,module,exports){
'use strict';
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer-or-infinity":159}],158:[function(require,module,exports){
'use strict';
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require('../internals/indexed-object');
var requireObjectCoercible = require('../internals/require-object-coercible');

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":78,"../internals/require-object-coercible":140}],159:[function(require,module,exports){
'use strict';
var trunc = require('../internals/math-trunc');

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

},{"../internals/math-trunc":105}],160:[function(require,module,exports){
'use strict';
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer-or-infinity":159}],161:[function(require,module,exports){
'use strict';
var requireObjectCoercible = require('../internals/require-object-coercible');

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":140}],162:[function(require,module,exports){
'use strict';
var call = require('../internals/function-call');
var isObject = require('../internals/is-object');
var isSymbol = require('../internals/is-symbol');
var getMethod = require('../internals/get-method');
var ordinaryToPrimitive = require('../internals/ordinary-to-primitive');
var wellKnownSymbol = require('../internals/well-known-symbol');

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

},{"../internals/function-call":61,"../internals/get-method":70,"../internals/is-object":89,"../internals/is-symbol":93,"../internals/ordinary-to-primitive":123,"../internals/well-known-symbol":174}],163:[function(require,module,exports){
'use strict';
var toPrimitive = require('../internals/to-primitive');
var isSymbol = require('../internals/is-symbol');

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

},{"../internals/is-symbol":93,"../internals/to-primitive":162}],164:[function(require,module,exports){
'use strict';
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';

},{"../internals/well-known-symbol":174}],165:[function(require,module,exports){
'use strict';
var classof = require('../internals/classof');

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

},{"../internals/classof":26}],166:[function(require,module,exports){
'use strict';
var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};

},{}],167:[function(require,module,exports){
'use strict';
var uncurryThis = require('../internals/function-uncurry-this');

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

},{"../internals/function-uncurry-this":65}],168:[function(require,module,exports){
'use strict';
/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

},{"../internals/symbol-constructor-detection":153}],169:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

},{"../internals/descriptors":40,"../internals/fails":55}],170:[function(require,module,exports){
'use strict';
var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};

},{}],171:[function(require,module,exports){
'use strict';
var global = require('../internals/global');
var isCallable = require('../internals/is-callable');

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"../internals/global":72,"../internals/is-callable":85}],172:[function(require,module,exports){
'use strict';
var path = require('../internals/path');
var hasOwn = require('../internals/has-own-property');
var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
var defineProperty = require('../internals/object-define-property').f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};

},{"../internals/has-own-property":73,"../internals/object-define-property":110,"../internals/path":125,"../internals/well-known-symbol-wrapped":173}],173:[function(require,module,exports){
'use strict';
var wellKnownSymbol = require('../internals/well-known-symbol');

exports.f = wellKnownSymbol;

},{"../internals/well-known-symbol":174}],174:[function(require,module,exports){
'use strict';
var global = require('../internals/global');
var shared = require('../internals/shared');
var hasOwn = require('../internals/has-own-property');
var uid = require('../internals/uid');
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

},{"../internals/global":72,"../internals/has-own-property":73,"../internals/shared":147,"../internals/symbol-constructor-detection":153,"../internals/uid":167,"../internals/use-symbol-as-uid":168}],175:[function(require,module,exports){
'use strict';
// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],176:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var isArray = require('../internals/is-array');
var isObject = require('../internals/is-object');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var doesNotExceedSafeInteger = require('../internals/does-not-exceed-safe-integer');
var createProperty = require('../internals/create-property');
var arraySpeciesCreate = require('../internals/array-species-create');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/engine-v8-version');

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

},{"../internals/array-method-has-species-support":16,"../internals/array-species-create":22,"../internals/create-property":34,"../internals/does-not-exceed-safe-integer":42,"../internals/engine-v8-version":52,"../internals/export":54,"../internals/fails":55,"../internals/is-array":84,"../internals/is-object":89,"../internals/length-of-array-like":101,"../internals/to-object":161,"../internals/well-known-symbol":174}],177:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var forEach = require('../internals/array-for-each');

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach !== forEach }, {
  forEach: forEach
});

},{"../internals/array-for-each":11,"../internals/export":54}],178:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var from = require('../internals/array-from');
var checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration');

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});

},{"../internals/array-from":12,"../internals/check-correctness-of-iteration":24,"../internals/export":54}],179:[function(require,module,exports){
'use strict';
/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this-clause');
var $indexOf = require('../internals/array-includes').indexOf;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');

var nativeIndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: FORCED }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0
      : $indexOf(this, searchElement, fromIndex);
  }
});

},{"../internals/array-includes":13,"../internals/array-method-is-strict":17,"../internals/export":54,"../internals/function-uncurry-this-clause":64}],180:[function(require,module,exports){
'use strict';
var toIndexedObject = require('../internals/to-indexed-object');
var addToUnscopables = require('../internals/add-to-unscopables');
var Iterators = require('../internals/iterators');
var InternalStateModule = require('../internals/internal-state');
var defineProperty = require('../internals/object-define-property').f;
var defineIterator = require('../internals/iterator-define');
var createIterResultObject = require('../internals/create-iter-result-object');
var IS_PURE = require('../internals/is-pure');
var DESCRIPTORS = require('../internals/descriptors');

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  switch (state.kind) {
    case 'keys': return createIterResultObject(index, false);
    case 'values': return createIterResultObject(target[index], false);
  } return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

},{"../internals/add-to-unscopables":6,"../internals/create-iter-result-object":31,"../internals/descriptors":40,"../internals/internal-state":82,"../internals/is-pure":91,"../internals/iterator-define":98,"../internals/iterators":100,"../internals/object-define-property":110,"../internals/to-indexed-object":158}],181:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var IndexedObject = require('../internals/indexed-object');
var toIndexedObject = require('../internals/to-indexed-object');
var arrayMethodIsStrict = require('../internals/array-method-is-strict');

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject !== Object;
var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: FORCED }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});

},{"../internals/array-method-is-strict":17,"../internals/export":54,"../internals/function-uncurry-this":65,"../internals/indexed-object":78,"../internals/to-indexed-object":158}],182:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var lastIndexOf = require('../internals/array-last-index-of');

// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});

},{"../internals/array-last-index-of":15,"../internals/export":54}],183:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var $map = require('../internals/array-iteration').map;
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/array-iteration":14,"../internals/array-method-has-species-support":16,"../internals/export":54}],184:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var $reduce = require('../internals/array-reduce').left;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var CHROME_VERSION = require('../internals/engine-v8-version');
var IS_NODE = require('../internals/engine-is-node');

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/array-method-is-strict":17,"../internals/array-reduce":18,"../internals/engine-is-node":49,"../internals/engine-v8-version":52,"../internals/export":54}],185:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var isArray = require('../internals/is-array');
var isConstructor = require('../internals/is-constructor');
var isObject = require('../internals/is-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var toIndexedObject = require('../internals/to-indexed-object');
var createProperty = require('../internals/create-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var nativeSlice = require('../internals/array-slice');

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});

},{"../internals/array-method-has-species-support":16,"../internals/array-slice":20,"../internals/create-property":34,"../internals/export":54,"../internals/is-array":84,"../internals/is-constructor":86,"../internals/is-object":89,"../internals/length-of-array-like":101,"../internals/to-absolute-index":157,"../internals/to-indexed-object":158,"../internals/well-known-symbol":174}],186:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var $some = require('../internals/array-iteration').some;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');

var STRICT_METHOD = arrayMethodIsStrict('some');

// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/array-iteration":14,"../internals/array-method-is-strict":17,"../internals/export":54}],187:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var toObject = require('../internals/to-object');
var toAbsoluteIndex = require('../internals/to-absolute-index');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var setArrayLength = require('../internals/array-set-length');
var doesNotExceedSafeInteger = require('../internals/does-not-exceed-safe-integer');
var arraySpeciesCreate = require('../internals/array-species-create');
var createProperty = require('../internals/create-property');
var deletePropertyOrThrow = require('../internals/delete-property-or-throw');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    setArrayLength(O, len - actualDeleteCount + insertCount);
    return A;
  }
});

},{"../internals/array-method-has-species-support":16,"../internals/array-set-length":19,"../internals/array-species-create":22,"../internals/create-property":34,"../internals/delete-property-or-throw":39,"../internals/does-not-exceed-safe-integer":42,"../internals/export":54,"../internals/length-of-array-like":101,"../internals/to-absolute-index":157,"../internals/to-integer-or-infinity":159,"../internals/to-object":161}],188:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var apply = require('../internals/function-apply');
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var fails = require('../internals/fails');
var isCallable = require('../internals/is-callable');
var isSymbol = require('../internals/is-symbol');
var arraySlice = require('../internals/array-slice');
var getReplacerFunction = require('../internals/get-json-replacer-function');
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');

var $String = String;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')('stringify detection');
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) !== '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) !== '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) !== '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
  args[1] = function (key, value) {
    // some old implementations (like WebKit) could pass numbers as keys
    if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
    if (!isSymbol(value)) return value;
  };
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}

},{"../internals/array-slice":20,"../internals/export":54,"../internals/fails":55,"../internals/function-apply":58,"../internals/function-call":61,"../internals/function-uncurry-this":65,"../internals/get-built-in":66,"../internals/get-json-replacer-function":69,"../internals/is-callable":85,"../internals/is-symbol":93,"../internals/symbol-constructor-detection":153}],189:[function(require,module,exports){
'use strict';
var global = require('../internals/global');
var setToStringTag = require('../internals/set-to-string-tag');

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);

},{"../internals/global":72,"../internals/set-to-string-tag":144}],190:[function(require,module,exports){
'use strict';
var collection = require('../internals/collection');
var collectionStrong = require('../internals/collection-strong');

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);

},{"../internals/collection":28,"../internals/collection-strong":27}],191:[function(require,module,exports){
'use strict';
// TODO: Remove this module from `core-js@4` since it's replaced to module below
require('../modules/es.map.constructor');

},{"../modules/es.map.constructor":190}],192:[function(require,module,exports){
'use strict';
var setToStringTag = require('../internals/set-to-string-tag');

// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);

},{"../internals/set-to-string-tag":144}],193:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var defineProperty = require('../internals/object-define-property').f;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});

},{"../internals/descriptors":40,"../internals/export":54,"../internals/object-define-property":110}],194:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');
var fails = require('../internals/fails');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var toObject = require('../internals/to-object');

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
  }
});

},{"../internals/export":54,"../internals/fails":55,"../internals/object-get-own-property-symbols":114,"../internals/symbol-constructor-detection":153,"../internals/to-object":161}],195:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var toObject = require('../internals/to-object');
var nativeGetPrototypeOf = require('../internals/object-get-prototype-of');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});


},{"../internals/correct-prototype-getter":30,"../internals/export":54,"../internals/fails":55,"../internals/object-get-prototype-of":115,"../internals/to-object":161}],196:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var toObject = require('../internals/to-object');
var nativeKeys = require('../internals/object-keys');
var fails = require('../internals/fails');

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});

},{"../internals/export":54,"../internals/fails":55,"../internals/object-keys":119,"../internals/to-object":161}],197:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var setPrototypeOf = require('../internals/object-set-prototype-of');

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});

},{"../internals/export":54,"../internals/object-set-prototype-of":121}],198:[function(require,module,exports){
'use strict';
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var defineBuiltIn = require('../internals/define-built-in');
var toString = require('../internals/object-to-string');

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}

},{"../internals/define-built-in":36,"../internals/object-to-string":122,"../internals/to-string-tag-support":164}],199:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var aCallable = require('../internals/a-callable');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
var iterate = require('../internals/iterate');
var PROMISE_STATICS_INCORRECT_ITERATION = require('../internals/promise-statics-incorrect-iteration');

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

},{"../internals/a-callable":2,"../internals/export":54,"../internals/function-call":61,"../internals/iterate":95,"../internals/new-promise-capability":107,"../internals/perform":126,"../internals/promise-statics-incorrect-iteration":130}],200:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var FORCED_PROMISE_CONSTRUCTOR = require('../internals/promise-constructor-detection').CONSTRUCTOR;
var NativePromiseConstructor = require('../internals/promise-native-constructor');
var getBuiltIn = require('../internals/get-built-in');
var isCallable = require('../internals/is-callable');
var defineBuiltIn = require('../internals/define-built-in');

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}

},{"../internals/define-built-in":36,"../internals/export":54,"../internals/get-built-in":66,"../internals/is-callable":85,"../internals/is-pure":91,"../internals/promise-constructor-detection":127,"../internals/promise-native-constructor":128}],201:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var IS_PURE = require('../internals/is-pure');
var IS_NODE = require('../internals/engine-is-node');
var global = require('../internals/global');
var call = require('../internals/function-call');
var defineBuiltIn = require('../internals/define-built-in');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var setSpecies = require('../internals/set-species');
var aCallable = require('../internals/a-callable');
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var anInstance = require('../internals/an-instance');
var speciesConstructor = require('../internals/species-constructor');
var task = require('../internals/task').set;
var microtask = require('../internals/microtask');
var hostReportErrors = require('../internals/host-report-errors');
var perform = require('../internals/perform');
var Queue = require('../internals/queue');
var InternalStateModule = require('../internals/internal-state');
var NativePromiseConstructor = require('../internals/promise-native-constructor');
var PromiseConstructorDetection = require('../internals/promise-constructor-detection');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(new TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw new TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state === PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

},{"../internals/a-callable":2,"../internals/an-instance":8,"../internals/define-built-in":36,"../internals/engine-is-node":49,"../internals/export":54,"../internals/function-call":61,"../internals/global":72,"../internals/host-report-errors":75,"../internals/internal-state":82,"../internals/is-callable":85,"../internals/is-object":89,"../internals/is-pure":91,"../internals/microtask":106,"../internals/new-promise-capability":107,"../internals/object-set-prototype-of":121,"../internals/perform":126,"../internals/promise-constructor-detection":127,"../internals/promise-native-constructor":128,"../internals/queue":132,"../internals/set-species":143,"../internals/set-to-string-tag":144,"../internals/species-constructor":148,"../internals/task":156}],202:[function(require,module,exports){
'use strict';
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require('../modules/es.promise.constructor');
require('../modules/es.promise.all');
require('../modules/es.promise.catch');
require('../modules/es.promise.race');
require('../modules/es.promise.reject');
require('../modules/es.promise.resolve');

},{"../modules/es.promise.all":199,"../modules/es.promise.catch":200,"../modules/es.promise.constructor":201,"../modules/es.promise.race":203,"../modules/es.promise.reject":204,"../modules/es.promise.resolve":205}],203:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var aCallable = require('../internals/a-callable');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var perform = require('../internals/perform');
var iterate = require('../internals/iterate');
var PROMISE_STATICS_INCORRECT_ITERATION = require('../internals/promise-statics-incorrect-iteration');

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

},{"../internals/a-callable":2,"../internals/export":54,"../internals/function-call":61,"../internals/iterate":95,"../internals/new-promise-capability":107,"../internals/perform":126,"../internals/promise-statics-incorrect-iteration":130}],204:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var newPromiseCapabilityModule = require('../internals/new-promise-capability');
var FORCED_PROMISE_CONSTRUCTOR = require('../internals/promise-constructor-detection').CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    var capabilityReject = capability.reject;
    capabilityReject(r);
    return capability.promise;
  }
});

},{"../internals/export":54,"../internals/new-promise-capability":107,"../internals/promise-constructor-detection":127}],205:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var IS_PURE = require('../internals/is-pure');
var NativePromiseConstructor = require('../internals/promise-native-constructor');
var FORCED_PROMISE_CONSTRUCTOR = require('../internals/promise-constructor-detection').CONSTRUCTOR;
var promiseResolve = require('../internals/promise-resolve');

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});

},{"../internals/export":54,"../internals/get-built-in":66,"../internals/is-pure":91,"../internals/promise-constructor-detection":127,"../internals/promise-native-constructor":128,"../internals/promise-resolve":129}],206:[function(require,module,exports){
'use strict';
var DESCRIPTORS = require('../internals/descriptors');
var global = require('../internals/global');
var uncurryThis = require('../internals/function-uncurry-this');
var isForced = require('../internals/is-forced');
var inheritIfRequired = require('../internals/inherit-if-required');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var create = require('../internals/object-create');
var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;
var isPrototypeOf = require('../internals/object-is-prototype-of');
var isRegExp = require('../internals/is-regexp');
var toString = require('../internals/to-string');
var getRegExpFlags = require('../internals/regexp-get-flags');
var stickyHelpers = require('../internals/regexp-sticky-helpers');
var proxyAccessor = require('../internals/proxy-accessor');
var defineBuiltIn = require('../internals/define-built-in');
var fails = require('../internals/fails');
var hasOwn = require('../internals/has-own-property');
var enforceInternalState = require('../internals/internal-state').enforce;
var setSpecies = require('../internals/set-species');
var wellKnownSymbol = require('../internals/well-known-symbol');
var UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all');
var UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg');

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global.SyntaxError;
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = create(null);
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr += charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  defineBuiltIn(global, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');

},{"../internals/create-non-enumerable-property":32,"../internals/define-built-in":36,"../internals/descriptors":40,"../internals/fails":55,"../internals/function-uncurry-this":65,"../internals/global":72,"../internals/has-own-property":73,"../internals/inherit-if-required":79,"../internals/internal-state":82,"../internals/is-forced":87,"../internals/is-regexp":92,"../internals/object-create":108,"../internals/object-get-own-property-names":113,"../internals/object-is-prototype-of":117,"../internals/proxy-accessor":131,"../internals/regexp-get-flags":136,"../internals/regexp-sticky-helpers":137,"../internals/regexp-unsupported-dot-all":138,"../internals/regexp-unsupported-ncg":139,"../internals/set-species":143,"../internals/to-string":165,"../internals/well-known-symbol":174}],207:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var exec = require('../internals/regexp-exec');

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

},{"../internals/export":54,"../internals/regexp-exec":134}],208:[function(require,module,exports){
'use strict';
var PROPER_FUNCTION_NAME = require('../internals/function-name').PROPER;
var defineBuiltIn = require('../internals/define-built-in');
var anObject = require('../internals/an-object');
var $toString = require('../internals/to-string');
var fails = require('../internals/fails');
var getRegExpFlags = require('../internals/regexp-get-flags');

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExpPrototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}

},{"../internals/an-object":9,"../internals/define-built-in":36,"../internals/fails":55,"../internals/function-name":62,"../internals/regexp-get-flags":136,"../internals/to-string":165}],209:[function(require,module,exports){
'use strict';
var charAt = require('../internals/string-multibyte').charAt;
var toString = require('../internals/to-string');
var InternalStateModule = require('../internals/internal-state');
var defineIterator = require('../internals/iterator-define');
var createIterResultObject = require('../internals/create-iter-result-object');

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});

},{"../internals/create-iter-result-object":31,"../internals/internal-state":82,"../internals/iterator-define":98,"../internals/string-multibyte":149,"../internals/to-string":165}],210:[function(require,module,exports){
'use strict';
var call = require('../internals/function-call');
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var anObject = require('../internals/an-object');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var toLength = require('../internals/to-length');
var toString = require('../internals/to-string');
var requireObjectCoercible = require('../internals/require-object-coercible');
var getMethod = require('../internals/get-method');
var advanceStringIndex = require('../internals/advance-string-index');
var regExpExec = require('../internals/regexp-exec-abstract');

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

},{"../internals/advance-string-index":7,"../internals/an-object":9,"../internals/fix-regexp-well-known-symbol-logic":56,"../internals/function-call":61,"../internals/get-method":70,"../internals/is-null-or-undefined":88,"../internals/regexp-exec-abstract":133,"../internals/require-object-coercible":140,"../internals/to-length":160,"../internals/to-string":165}],211:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var repeat = require('../internals/string-repeat');

// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
$({ target: 'String', proto: true }, {
  repeat: repeat
});

},{"../internals/export":54,"../internals/string-repeat":150}],212:[function(require,module,exports){
'use strict';
var apply = require('../internals/function-apply');
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var fails = require('../internals/fails');
var anObject = require('../internals/an-object');
var isCallable = require('../internals/is-callable');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var toLength = require('../internals/to-length');
var toString = require('../internals/to-string');
var requireObjectCoercible = require('../internals/require-object-coercible');
var advanceStringIndex = require('../internals/advance-string-index');
var getMethod = require('../internals/get-method');
var getSubstitution = require('../internals/get-substitution');
var regExpExec = require('../internals/regexp-exec-abstract');
var wellKnownSymbol = require('../internals/well-known-symbol');

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      var fullUnicode;
      if (global) {
        fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];
      var result;
      while (true) {
        result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        var replacement;
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

},{"../internals/advance-string-index":7,"../internals/an-object":9,"../internals/fails":55,"../internals/fix-regexp-well-known-symbol-logic":56,"../internals/function-apply":58,"../internals/function-call":61,"../internals/function-uncurry-this":65,"../internals/get-method":70,"../internals/get-substitution":71,"../internals/is-callable":85,"../internals/is-null-or-undefined":88,"../internals/regexp-exec-abstract":133,"../internals/require-object-coercible":140,"../internals/to-integer-or-infinity":159,"../internals/to-length":160,"../internals/to-string":165,"../internals/well-known-symbol":174}],213:[function(require,module,exports){
'use strict';
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');
var anObject = require('../internals/an-object');
var isNullOrUndefined = require('../internals/is-null-or-undefined');
var requireObjectCoercible = require('../internals/require-object-coercible');
var speciesConstructor = require('../internals/species-constructor');
var advanceStringIndex = require('../internals/advance-string-index');
var toLength = require('../internals/to-length');
var toString = require('../internals/to-string');
var getMethod = require('../internals/get-method');
var regExpExec = require('../internals/regexp-exec-abstract');
var stickyHelpers = require('../internals/regexp-sticky-helpers');
var fails = require('../internals/fails');

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var push = uncurryThis([].push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

var BUGGY = 'abbc'.split(/(b)*/)[1] === 'c' ||
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length !== 4 ||
  'ab'.split(/(?:ab)*/).length !== 2 ||
  '.'.split(/(.?)(.?)/).length !== 4 ||
  // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 ||
  ''.split(/.?/).length;

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
    return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
  } : nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);

      if (!BUGGY) {
        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;
      }

      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');
      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

},{"../internals/advance-string-index":7,"../internals/an-object":9,"../internals/fails":55,"../internals/fix-regexp-well-known-symbol-logic":56,"../internals/function-call":61,"../internals/function-uncurry-this":65,"../internals/get-method":70,"../internals/is-null-or-undefined":88,"../internals/regexp-exec-abstract":133,"../internals/regexp-sticky-helpers":137,"../internals/require-object-coercible":140,"../internals/species-constructor":148,"../internals/to-length":160,"../internals/to-string":165}],214:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var $trim = require('../internals/string-trim').trim;
var forcedStringTrimMethod = require('../internals/string-trim-forced');

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

},{"../internals/export":54,"../internals/string-trim":152,"../internals/string-trim-forced":151}],215:[function(require,module,exports){
'use strict';
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');

},{"../internals/well-known-symbol-define":172}],216:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var global = require('../internals/global');
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var IS_PURE = require('../internals/is-pure');
var DESCRIPTORS = require('../internals/descriptors');
var NATIVE_SYMBOL = require('../internals/symbol-constructor-detection');
var fails = require('../internals/fails');
var hasOwn = require('../internals/has-own-property');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var anObject = require('../internals/an-object');
var toIndexedObject = require('../internals/to-indexed-object');
var toPropertyKey = require('../internals/to-property-key');
var $toString = require('../internals/to-string');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var nativeObjectCreate = require('../internals/object-create');
var objectKeys = require('../internals/object-keys');
var getOwnPropertyNamesModule = require('../internals/object-get-own-property-names');
var getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external');
var getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols');
var getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor');
var definePropertyModule = require('../internals/object-define-property');
var definePropertiesModule = require('../internals/object-define-properties');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var defineBuiltIn = require('../internals/define-built-in');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var shared = require('../internals/shared');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');
var uid = require('../internals/uid');
var wellKnownSymbol = require('../internals/well-known-symbol');
var wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped');
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
var defineSymbolToPrimitive = require('../internals/symbol-define-to-primitive');
var setToStringTag = require('../internals/set-to-string-tag');
var InternalStateModule = require('../internals/internal-state');
var $forEach = require('../internals/array-iteration').forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var RangeError = global.RangeError;
var TypeError = global.TypeError;
var QObject = global.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var fallbackDefineProperty = function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
};

var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a !== 7;
}) ? fallbackDefineProperty : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, nativeObjectCreate(null)));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw new TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      var $this = this === undefined ? global : this;
      if ($this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn($this, HIDDEN) && hasOwn($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
      var descriptor = createPropertyDescriptor(1, value);
      try {
        setSymbolDescriptor($this, tag, descriptor);
      } catch (error) {
        if (!(error instanceof RangeError)) throw error;
        fallbackDefineProperty($this, tag, descriptor);
      }
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    defineBuiltInAccessor(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;

},{"../internals/an-object":9,"../internals/array-iteration":14,"../internals/create-property-descriptor":33,"../internals/define-built-in":36,"../internals/define-built-in-accessor":35,"../internals/descriptors":40,"../internals/export":54,"../internals/fails":55,"../internals/function-call":61,"../internals/function-uncurry-this":65,"../internals/global":72,"../internals/has-own-property":73,"../internals/hidden-keys":74,"../internals/internal-state":82,"../internals/is-pure":91,"../internals/object-create":108,"../internals/object-define-properties":109,"../internals/object-define-property":110,"../internals/object-get-own-property-descriptor":111,"../internals/object-get-own-property-names":113,"../internals/object-get-own-property-names-external":112,"../internals/object-get-own-property-symbols":114,"../internals/object-is-prototype-of":117,"../internals/object-keys":119,"../internals/object-property-is-enumerable":120,"../internals/set-to-string-tag":144,"../internals/shared":147,"../internals/shared-key":145,"../internals/symbol-constructor-detection":153,"../internals/symbol-define-to-primitive":154,"../internals/to-indexed-object":158,"../internals/to-property-key":163,"../internals/to-string":165,"../internals/uid":167,"../internals/well-known-symbol":174,"../internals/well-known-symbol-define":172,"../internals/well-known-symbol-wrapped":173}],217:[function(require,module,exports){
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description
'use strict';
var $ = require('../internals/export');
var DESCRIPTORS = require('../internals/descriptors');
var global = require('../internals/global');
var uncurryThis = require('../internals/function-uncurry-this');
var hasOwn = require('../internals/has-own-property');
var isCallable = require('../internals/is-callable');
var isPrototypeOf = require('../internals/object-is-prototype-of');
var toString = require('../internals/to-string');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');
var copyConstructorProperties = require('../internals/copy-constructor-properties');

var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
  var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineBuiltInAccessor(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

},{"../internals/copy-constructor-properties":29,"../internals/define-built-in-accessor":35,"../internals/descriptors":40,"../internals/export":54,"../internals/function-uncurry-this":65,"../internals/global":72,"../internals/has-own-property":73,"../internals/is-callable":85,"../internals/object-is-prototype-of":117,"../internals/to-string":165}],218:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var getBuiltIn = require('../internals/get-built-in');
var hasOwn = require('../internals/has-own-property');
var toString = require('../internals/to-string');
var shared = require('../internals/shared');
var NATIVE_SYMBOL_REGISTRY = require('../internals/symbol-registry-detection');

var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  'for': function (key) {
    var string = toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  }
});

},{"../internals/export":54,"../internals/get-built-in":66,"../internals/has-own-property":73,"../internals/shared":147,"../internals/symbol-registry-detection":155,"../internals/to-string":165}],219:[function(require,module,exports){
'use strict';
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');

},{"../internals/well-known-symbol-define":172}],220:[function(require,module,exports){
'use strict';
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require('../modules/es.symbol.constructor');
require('../modules/es.symbol.for');
require('../modules/es.symbol.key-for');
require('../modules/es.json.stringify');
require('../modules/es.object.get-own-property-symbols');

},{"../modules/es.json.stringify":188,"../modules/es.object.get-own-property-symbols":194,"../modules/es.symbol.constructor":216,"../modules/es.symbol.for":218,"../modules/es.symbol.key-for":221}],221:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var hasOwn = require('../internals/has-own-property');
var isSymbol = require('../internals/is-symbol');
var tryToString = require('../internals/try-to-string');
var shared = require('../internals/shared');
var NATIVE_SYMBOL_REGISTRY = require('../internals/symbol-registry-detection');

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw new TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});

},{"../internals/export":54,"../internals/has-own-property":73,"../internals/is-symbol":93,"../internals/shared":147,"../internals/symbol-registry-detection":155,"../internals/try-to-string":166}],222:[function(require,module,exports){
'use strict';
var getBuiltIn = require('../internals/get-built-in');
var defineWellKnownSymbol = require('../internals/well-known-symbol-define');
var setToStringTag = require('../internals/set-to-string-tag');

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag(getBuiltIn('Symbol'), 'Symbol');

},{"../internals/get-built-in":66,"../internals/set-to-string-tag":144,"../internals/well-known-symbol-define":172}],223:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var aMap = require('../internals/a-map');
var remove = require('../internals/map-helpers').remove;

// `Map.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  deleteAll: function deleteAll(/* ...elements */) {
    var collection = aMap(this);
    var allDeleted = true;
    var wasDeleted;
    for (var k = 0, len = arguments.length; k < len; k++) {
      wasDeleted = remove(collection, arguments[k]);
      allDeleted = allDeleted && wasDeleted;
    } return !!allDeleted;
  }
});

},{"../internals/a-map":4,"../internals/export":54,"../internals/map-helpers":103}],224:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var bind = require('../internals/function-bind-context');
var aMap = require('../internals/a-map');
var iterate = require('../internals/map-iterate');

// `Map.prototype.every` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  every: function every(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(map, function (value, key) {
      if (!boundFunction(value, key, map)) return false;
    }, true) !== false;
  }
});

},{"../internals/a-map":4,"../internals/export":54,"../internals/function-bind-context":59,"../internals/map-iterate":104}],225:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var bind = require('../internals/function-bind-context');
var aMap = require('../internals/a-map');
var MapHelpers = require('../internals/map-helpers');
var iterate = require('../internals/map-iterate');

var Map = MapHelpers.Map;
var set = MapHelpers.set;

// `Map.prototype.filter` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  filter: function filter(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newMap = new Map();
    iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) set(newMap, key, value);
    });
    return newMap;
  }
});

},{"../internals/a-map":4,"../internals/export":54,"../internals/function-bind-context":59,"../internals/map-helpers":103,"../internals/map-iterate":104}],226:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var bind = require('../internals/function-bind-context');
var aMap = require('../internals/a-map');
var iterate = require('../internals/map-iterate');

// `Map.prototype.findKey` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  findKey: function findKey(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var result = iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) return { key: key };
    }, true);
    return result && result.key;
  }
});

},{"../internals/a-map":4,"../internals/export":54,"../internals/function-bind-context":59,"../internals/map-iterate":104}],227:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var bind = require('../internals/function-bind-context');
var aMap = require('../internals/a-map');
var iterate = require('../internals/map-iterate');

// `Map.prototype.find` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  find: function find(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var result = iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) return { value: value };
    }, true);
    return result && result.value;
  }
});

},{"../internals/a-map":4,"../internals/export":54,"../internals/function-bind-context":59,"../internals/map-iterate":104}],228:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var sameValueZero = require('../internals/same-value-zero');
var aMap = require('../internals/a-map');
var iterate = require('../internals/map-iterate');

// `Map.prototype.includes` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  includes: function includes(searchElement) {
    return iterate(aMap(this), function (value) {
      if (sameValueZero(value, searchElement)) return true;
    }, true) === true;
  }
});

},{"../internals/a-map":4,"../internals/export":54,"../internals/map-iterate":104,"../internals/same-value-zero":142}],229:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var aMap = require('../internals/a-map');
var iterate = require('../internals/map-iterate');

// `Map.prototype.keyOf` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  keyOf: function keyOf(searchElement) {
    var result = iterate(aMap(this), function (value, key) {
      if (value === searchElement) return { key: key };
    }, true);
    return result && result.key;
  }
});

},{"../internals/a-map":4,"../internals/export":54,"../internals/map-iterate":104}],230:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var bind = require('../internals/function-bind-context');
var aMap = require('../internals/a-map');
var MapHelpers = require('../internals/map-helpers');
var iterate = require('../internals/map-iterate');

var Map = MapHelpers.Map;
var set = MapHelpers.set;

// `Map.prototype.mapKeys` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  mapKeys: function mapKeys(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newMap = new Map();
    iterate(map, function (value, key) {
      set(newMap, boundFunction(value, key, map), value);
    });
    return newMap;
  }
});

},{"../internals/a-map":4,"../internals/export":54,"../internals/function-bind-context":59,"../internals/map-helpers":103,"../internals/map-iterate":104}],231:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var bind = require('../internals/function-bind-context');
var aMap = require('../internals/a-map');
var MapHelpers = require('../internals/map-helpers');
var iterate = require('../internals/map-iterate');

var Map = MapHelpers.Map;
var set = MapHelpers.set;

// `Map.prototype.mapValues` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  mapValues: function mapValues(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    var newMap = new Map();
    iterate(map, function (value, key) {
      set(newMap, key, boundFunction(value, key, map));
    });
    return newMap;
  }
});

},{"../internals/a-map":4,"../internals/export":54,"../internals/function-bind-context":59,"../internals/map-helpers":103,"../internals/map-iterate":104}],232:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var aMap = require('../internals/a-map');
var iterate = require('../internals/iterate');
var set = require('../internals/map-helpers').set;

// `Map.prototype.merge` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, arity: 1, forced: true }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  merge: function merge(iterable /* ...iterables */) {
    var map = aMap(this);
    var argumentsLength = arguments.length;
    var i = 0;
    while (i < argumentsLength) {
      iterate(arguments[i++], function (key, value) {
        set(map, key, value);
      }, { AS_ENTRIES: true });
    }
    return map;
  }
});

},{"../internals/a-map":4,"../internals/export":54,"../internals/iterate":95,"../internals/map-helpers":103}],233:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var aCallable = require('../internals/a-callable');
var aMap = require('../internals/a-map');
var iterate = require('../internals/map-iterate');

var $TypeError = TypeError;

// `Map.prototype.reduce` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var map = aMap(this);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    aCallable(callbackfn);
    iterate(map, function (value, key) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = callbackfn(accumulator, value, key, map);
      }
    });
    if (noInitial) throw new $TypeError('Reduce of empty map with no initial value');
    return accumulator;
  }
});

},{"../internals/a-callable":2,"../internals/a-map":4,"../internals/export":54,"../internals/map-iterate":104}],234:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var bind = require('../internals/function-bind-context');
var aMap = require('../internals/a-map');
var iterate = require('../internals/map-iterate');

// `Map.prototype.some` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  some: function some(callbackfn /* , thisArg */) {
    var map = aMap(this);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return iterate(map, function (value, key) {
      if (boundFunction(value, key, map)) return true;
    }, true) === true;
  }
});

},{"../internals/a-map":4,"../internals/export":54,"../internals/function-bind-context":59,"../internals/map-iterate":104}],235:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var aCallable = require('../internals/a-callable');
var aMap = require('../internals/a-map');
var MapHelpers = require('../internals/map-helpers');

var $TypeError = TypeError;
var get = MapHelpers.get;
var has = MapHelpers.has;
var set = MapHelpers.set;

// `Map.prototype.update` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: true }, {
  update: function update(key, callback /* , thunk */) {
    var map = aMap(this);
    var length = arguments.length;
    aCallable(callback);
    var isPresentInMap = has(map, key);
    if (!isPresentInMap && length < 3) {
      throw new $TypeError('Updating absent value');
    }
    var value = isPresentInMap ? get(map, key) : aCallable(length > 2 ? arguments[2] : undefined)(key, map);
    set(map, key, callback(value, key, map));
    return map;
  }
});

},{"../internals/a-callable":2,"../internals/a-map":4,"../internals/export":54,"../internals/map-helpers":103}],236:[function(require,module,exports){
'use strict';
var global = require('../internals/global');
var DOMIterables = require('../internals/dom-iterables');
var DOMTokenListPrototype = require('../internals/dom-token-list-prototype');
var forEach = require('../internals/array-for-each');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);

},{"../internals/array-for-each":11,"../internals/create-non-enumerable-property":32,"../internals/dom-iterables":43,"../internals/dom-token-list-prototype":44,"../internals/global":72}],237:[function(require,module,exports){
'use strict';
var global = require('../internals/global');
var DOMIterables = require('../internals/dom-iterables');
var DOMTokenListPrototype = require('../internals/dom-token-list-prototype');
var ArrayIteratorMethods = require('../modules/es.array.iterator');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var setToStringTag = require('../internals/set-to-string-tag');
var wellKnownSymbol = require('../internals/well-known-symbol');

var ITERATOR = wellKnownSymbol('iterator');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    setToStringTag(CollectionPrototype, COLLECTION_NAME, true);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

},{"../internals/create-non-enumerable-property":32,"../internals/dom-iterables":43,"../internals/dom-token-list-prototype":44,"../internals/global":72,"../internals/set-to-string-tag":144,"../internals/well-known-symbol":174,"../modules/es.array.iterator":180}]},{},[1]);
