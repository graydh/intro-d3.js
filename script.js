// https://www.d3indepth.com/scales/#scales-with-continuous-input-and-discrete-output
var cs_black = function(d){return 'black'};
var draw = function(myScale, myColorScale=cs_black){
  d3.select('svg')
  	.selectAll('circle')
  	.data(data)
  	.join('circle')
  	.attr('r', 10)
    .attr('cy', 50)
  	.attr('cx', function(d) {
  		return 20 + myScale(d);
  	})
    .attr('fill', function(d){
      return myColorScale(d);
    });

  d3.select('svg')
  	.selectAll('text')
  	.data(data)
  	.join('text')
  	.attr('x', function(d) {
  		return 20 + myScale(d);
  	})
  	.attr('y', 50-15)
  	.text(function(d) {
  		return d;
  	});
}


var s_linear = d3.scaleLinear()
    .domain([0, 10]) // Domain of your data that want to scale
    .range([0, 600]); // Range of the output that will map inputs to this scale
var s_pow = d3.scalePow()
    .exponent(2)
    .domain([0, 10])
    .range([0, 600]);
var s_quantize = d3.scaleQuantize()
    .domain([0, 10])
    .range([0, 300, 600]);


let cs_sequential = d3.scaleSequential()
  .domain([0, 10])
  .interpolator(d3.interpolateRainbow);
let cs_threshold = d3.scaleThreshold()
  .domain([1, 5, 7.5, 10])
  .range(['black', 'blue', 'red', 'blue', 'black']);


var data = [ 0, 1, 2, 3, 4, 5, 7.5, 10];

draw(s_linear);
// draw(s_pow, cs_sequential)
