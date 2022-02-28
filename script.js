var data = [3, 5, 15, 25, 50]

var wh = 400;
var padding = 10;


var svg = d3.select('svg');
var chart = svg.append('g')
    .attr('class', 'chart')
    .attr('transform', 'translate(' + padding + ',' + (wh - padding) + ')');

var xScale = d3.scaleLinear()
    .domain([0,60])
    .range([0,wh]);

var xAxis = d3.axisBottom()
  .scale(xScale)
  .tickValues([0,5,10,60]);

var axis = chart.append('g')
    .attr('class', 'axis')
    .call(xAxis);

var rectangles = chart.append('g')
    .attr('class', 'symbols');

rectangles.selectAll('rect')
  .data(data)
  .join('rect')
  .attr('x', 0)
  .attr('y', function(d,i){return -(wh/data.length)*(i+1)})
  .attr('width', function(d){return xScale(d)})
  .attr('height', 10)
