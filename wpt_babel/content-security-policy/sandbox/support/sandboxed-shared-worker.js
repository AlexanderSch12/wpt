"use strict";

self.onconnect = function (e) {
  e.ports[0].postMessage(self.origin);
};
