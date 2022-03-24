var radius = 75;

var svg = d3.select('svg');
var chart = svg.append("g")
    .attr("transform", "translate(" + 200 + "," + 200 + ")");

var data = [ 5, 10, 20, 45, 6, 25 ];
var color = d3.scaleOrdinal().domain(data).range(['red','blue','green','orange','pink']);
var pie = d3.pie();
var arcs = chart.selectAll("g.arc")
  .data(pie(data))
  .join('path')
  .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    )
  .attr('fill', function(d){ return(color(d.data)) })