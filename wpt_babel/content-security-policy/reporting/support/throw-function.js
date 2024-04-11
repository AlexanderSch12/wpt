"use strict";

function throw_function() {
  throw new Error("an error");
}
function load_image() {
  var img = document.createElement('img');
  document.body.append(img);
  img.src = "/xhr/resources/img.jpg";
}
