// https://gist.github.com/d3noob/82f4db23d47971c74699abb5f4bf8204
var width = 960,
    height = 500;

var projection = d3.geoMercator();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var path = d3.geoPath()
    .projection(projection);

var g = svg.append("g");

// load and display the World
d3.json("world-110m2.json").then(function(topology) {

    g.selectAll("path")
       .data(topojson.feature(topology, topology.objects.countries).features)
       .enter().append("path")
       .attr("d", path);

});