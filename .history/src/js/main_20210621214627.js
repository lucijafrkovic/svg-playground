import { SVG } from "@svgdotjs/svg.js";
import "@svgdotjs/svg.panzoom.js";

// var draw = SVG().addTo("#svg-container").size(1000, 1000).panZoom();
// var rect = draw.rect(500, 500).attr({ fill: "#f06" });

var svg = SVG()
  .addTo("#svg-container")
  .viewbox(0, 0, 900, 300)
  .size(800, 800)
  .panZoom();

var ajax = new XMLHttpRequest();
ajax.open("GET", "homer-simpson.svg", true);
ajax.send();
ajax.onload = function (e) {
  svg.svg(ajax.responseText);
};
