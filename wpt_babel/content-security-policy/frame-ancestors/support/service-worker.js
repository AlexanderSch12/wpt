"use strict";

self.onfetch = function (e) {
  e.respondWith(function () {
    return new Promise(function (resolve) {
      var headers = new Headers();
      headers.append("Content-Security-Policy", "frame-ancestors 'none'");
      var response = new Response("", {
        "headers": headers,
        "status": 200,
        "statusText": "OK"
      });
      resolve(response);
    });
  }());
};
