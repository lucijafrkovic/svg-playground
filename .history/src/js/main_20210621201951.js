import { SVG } from "@svgdotjs/svg.js";
// var draw = SVG().addTo("body").size(300, 300);
// var rect = draw.rect(100, 100).attr({ fill: "#f06" });

var svg = SVG().addTo("body");

var ajax = new XMLHttpRequest();
ajax.open("GET", "floorPlanExample2.svg", true);
ajax.send();
ajax.onload = function (e) {
  svg.svg(ajax.responseText);
};
