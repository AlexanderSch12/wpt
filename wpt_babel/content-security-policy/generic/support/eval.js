"use strict";

postMessage('unsafe-inline allowed');
eval("postMessage('unsafe-eval allowed')");
