var svg = d3.select('svg');

var height = 200;
var x_pos_gap = 150;

var i = 1;

svg.append('rect')
    .attr('x', i*x_pos_gap)
    .attr('y', height)
    .attr('width', 50)
    .attr('height', 200)
    .style('fill', '#111');

i = i + 1;

svg.append('circle')
    .attr('cx', i*x_pos_gap)
    .attr('cy', height)
    .attr('r', 50)
    .style('fill', '#111');

i = i + 1;

length = 100;
svg.append('line')
    .attr('x1', i*x_pos_gap)
    .attr('y1', height)
    .attr('x2', i*x_pos_gap)
    .attr('y2', height+length)
    .attr('stroke-width', 3)
    .style('stroke', '#111');

i = i + 1;

var star = d3.symbol().type(d3.symbolStar).size(5000);
svg.append('path')
    .attr('d', star)
    .attr('transform', 'translate(' + i*x_pos_gap + ',' + height + ')');

i = i + 1;

svg.append('ellipse')
    .attr('cx', i*x_pos_gap)
    .attr('cy', height)
    .attr('rx', 25)
    .attr('ry', 50)
    .style('fill', '#111');
